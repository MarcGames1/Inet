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


import QuillEditor from '../QuillEditor';
// import{ ConfiguredQuill as Editor }from '@/components/ConfiguredQuill/ConfiguredQuil'
import Select from 'react-select';


const AddUsers = () => {

    const [auth, setAuth] = useContext(AuthContext);
    const [loading, setLoading] = useState(true)

    //inputdata
    const [nume, setNume] = useState(undefined)
    const [prenume, setPrenume] = useState(undefined)
    const [email, setEmail] = useState(undefined)
    const [functie, setFunctie] = useState(undefined)
    const [bio, setBio] = useState(undefined)
    const [socialMedia, setSocialMedia] = useState(undefined)
    const [image, setImage] = useState(undefined)
    
    const [createObjectURL, setCreateObjectURL] = useState(null);
   const [isImageLoaded, setIsImageLoaded] = useState(false)
  
    
    
      

    const onFinish = async () => {
        
        const formData = new FormData();
        
        formData.append("nume", nume);
        formData.append('prenume', prenume)
        formData.append("email", email)
        formData.append("functie", functie)
        formData.append("bio", bio)
        formData.append("socialMedia", socialMedia)
        formData.append("image", image)
        
     
        


        
        const headers = { headers: { 
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*'
            
    } }
        

        

        try {
            setLoading(true);
           

            const { data } = await axios.post(
                `/author/create/${auth.user._id}`,formData, headers
            );
            
            
            if (data?.error) {
                setLoading(false);
                toast.error("Ceva nu a functionat");
                console.log(data);
            } else {
                toast.success("Autor Salvat");
                setLoading(false);
                
            }


        } catch (err) {
            toast.error('error => ');
            console.log(err);
            setLoading(false);
            //   console.log(data);
        }
    };



    const handler = {

        nume: (e) =>{
            e.preventDefault();
            setNume(e.target.value)
            
        },
        prenume: (e) =>{
            e.preventDefault();
            setPrenume(e.target.value)
            
        },
        functie: (e) =>{
            e.preventDefault();
            setFunctie(e.target.value)
            
        },
        email: (evt) => {
            evt.preventDefault();
            setEmail(evt.target.value)
        },
        socialMedia: (e) => { 
            
            let rawurls = e.target.value.split('\n').map(url =>{
               try{
                   return new URL(url)
                
               } catch(e){
               
               }
            })
             const urls = rawurls.filter(url => url !== undefined)
               const socialMedia = []
             urls.map(url =>{
                 socialMedia.push({
                     platform: URL(url).hostname,
                     url

                 })
             })
               
            setSocialMedia( socialMedia)
           
        },
                     
           
                

           



         submit_form: (e) => {
            e.preventDefault();
            //  console.log(e.target.bio.value)
            
            onFinish();

        },
    }

  




    const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];
            setImage(i)
            setCreateObjectURL(URL.createObjectURL(i));

        }
            
            
            
    };


useEffect(()=>{
    createObjectURL ? setIsImageLoaded(true) : setIsImageLoaded(false)
}, [createObjectURL])

    return (
        <>
            <h3 className={tw('font-sans font-bold text-4xl md:text-3xl lg:text-5xl text-center leading-snug text-gray-800')}>Adauga Utilizator</h3>
            <div className={styles.container}>
                <form enctype='multipart/form-data' onSubmit={handler.submit_form} className={styles.form}>
                    <FormGroup name={'nume'} required={true} type='text' handleChange={handler.nume} />
                    <FormGroup name={'prenume'} required={true} type='text' handleChange={handler.prenume} />
                    <FormGroup name={'email'}  type='email' handleChange={handler.email} />
                    <FormGroup name={'functie'}  type='text' handleChange={handler.functie} />
                    <TextArea field={"socialMedia"} handler={handler.socialMedia} />
                    <ImageInput handler={uploadToClient} />
                    {isImageLoaded ? <img src={`${createObjectURL}`} /> : null}
                    <div className={tw('bg-white h-3/4')}>
                    <QuillEditor setContent={setBio}/>
                    </div>
                   
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











            export default AddUsers