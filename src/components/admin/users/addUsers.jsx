import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios';
import FormData from 'form-data'
import toast from 'react-hot-toast';
import { AuthContext } from '@/context/auth';
import styles from './users.module.css'
import { tw } from 'twind';
import { CategoryContext } from '@/context/category';
import dynamic from 'next/dynamic'
import { faPray } from '@fortawesome/free-solid-svg-icons';
// const Editor = dynamic(() => import('../components/ConfiguredQuill/ConfiguredQuill/jsx'), {
//     ssr: false,

// })

// import{ ConfiguredQuill as Editor }from '@/components/ConfiguredQuill/ConfiguredQuil'

globalThis.formData = new FormData()

const AddUsers = () => {

    const [auth, setAuth] = useContext(AuthContext);
    const [loading, setLoading] = useState(true)
    
    const [createObjectURL, setCreateObjectURL] = useState(null);
    const [inputData, setInputData] = useState({
        nume: '',
        prenume: '',
        email: '',
        functie: '',
        bio: '',
        socialMedia: [],
        image: ''
    });

const [edditorData, setEditorData] = useState(null)
  
    
  

  
        
        
      

    const onFinish = async () => {
        
      

        try {
            console.log(formdata)
        }
        catch (e) { console.log(e) }


        
        const headers = { headers: { 
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*'
            
    } }
        

        

        try {
            setLoading(true);
            console.log('USER => ', auth.user._id);
            console.log('DATA => ', formData);

            const { data } = await axios.post(
                `/author/create/${auth.user._id}`,formData, headers
            );
            globalThis.formData = new FormData()
            console.log('DATA => ', data);
            if (data?.error) {
                setLoading(false);
                toast.error(data.error);
                console.log(data);
            } else {
                toast.success(data);
                setLoading(false);
                
            }


        } catch (err) {
            toast.error('error => ', err);
            console.log(err);
            setLoading(false);
            //   console.log(data);
        }
    };



    const handler = {

        nume: (e) =>{
            e.preventDefault();
            setInputData({ ...inputData, nume: e.target.value })
            
        },
        email: (evt) => {
            evt.preventDefault();
            const value = evt.target.value;
            setInputData({ ...inputData, email: value })
            
            console.log(inputData)
        },
        socialMedia: (e) => { 
            
            let rawurls = e.target.value.split('\n').map(url =>{
               try{
                   return new URL(url)
                
               } catch(e){
               
               }
            })
             const urls = rawurls.filter(url => url !== undefined)
               
               
            setInputData({ ...inputData, socialMedia: urls })
            console.log('URLS => ', urls)
        },
            
        editor: (event, editor) => {
     setEditorData(editor.getData())
     setInputData({ ...inputData, bio: edditorData})
     
            
        },

        image: (file) => {
            appendFormData('image', file)

        },
            
           
                

           



         submit_form: (e) => {
            e.preventDefault();
            //  console.log(e.target.bio.value)
             console.log(e.target.nume.value)
             console.log(e)
            preSubmitForm(inputData)
            onFinish(inputData);

        },
    }

  
function preSubmitForm(inputData){
    console.log('Presubmit Form => ', inputData)
    
    appendFormData('bio', edditorData)
    appendFormData('email', inputData.email)
    appendFormData('socialMedia', inputData.socialMedia)
    appendFormData('nume', inputData.nume)
    appendFormData('prenume', inputData.prenume)
    appendFormData('functie', inputData.functie)

    console.log('Data appended in object =>', {...formData})
}

function appendFormData(key, value){
    formData.append(`${key}`, `${value}`)
}


    const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];

            
            formData.append('image', event.target.files[0])
            console.log(i)
            setCreateObjectURL(URL.createObjectURL(i));
        }
    };




    return (
        <>
            <h3 className={tw('font-sans font-bold text-4xl md:text-3xl lg:text-5xl text-center leading-snug text-gray-800')}>Adauga Utilizator</h3>
            <div className={styles.container}>
                <form enctype='multipart/form-data' onSubmit={handler.submit_form} className={styles.form}>
                    <FormGroup name={'nume'} required={true} type='text' handleChange={handler.default} />
                    <FormGroup name={'prenume'} required={true} type='text' handleChange={handler.default} />
                    <FormGroup name={'email'}  type='email' handleChange={handler.email} />
                    <FormGroup name={'functie'}  type='text' handleChange={handler.default} />
                    <TextArea field={"social media"} handler={handler.socialMedia} />
                 
                    <ImageInput handler={uploadToClient} />

                    <img src={createObjectURL} />
                    <button className={styles.button} type="submit" > Adauga Utilizator</button>
                    <button className={styles.button} type="reset" > Reset</button>
                </form>
            </div>
        </>
    )
        }    
               
        
      const ImageInput = ({handler}) =>{

        return(<>
            <div className={styles.group}>
                <label className={tw('flex-none w-14 h-14 ')} htmlFor="image">Poza De Profil:</label>
                <input className={tw('grow h-14')} onChange={handler} type="file"
                id="image" name="image"
                accept="image/png, image/jpeg" />
                </div>
        </>)
      }  
    const TextArea =({field, handler}) =>{
        return(

            <div className={styles.group}>
            <label htmlFor={field}>{field}</label>
            <textarea placeholder="Adauga adresele url catre paginile tale de social media (fiecare pe o linie separata)" className={tw('form-control w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none')} onChange={handler} name={field} ></textarea>
        </div>
            )
    }        
            
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

    
const FormGroup = ({ name, required, type, handleChange }) => {
    
    return (<div className={styles.group}>
        <label htmlFor={name}>{capitalizeFirstLetter(name)}</label>
        <input onChange={handleChange} type={type} name={name} required={required} />
    </div>)
}




// const Bio = ({name, handler, data, setData}) =>{

//     return <>
//     <h4 className={tw('text-center text-2xl text-white')}>Descriere</h4>
//                  <Editor
//                     data={data}
//                     setData= {setData}
//                      name={name}
//                     onChange={handler}


//                 />             
//             </>
// }










            export default AddUsers