import { useState, useContext, useRef } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { AuthContext } from '@/context/auth';
import styles from './CreateCategoryForm.module.css'
import { tw } from 'twind';
import { CategoryContext } from '@/context/category';



const CreateCategoryForm = () => {

    const [auth, setAuth] = useContext(AuthContext);
    const [categories, setCategories, getCategories] = useContext(CategoryContext);

    //state
    const [loading, setLoading] = useState(false);
    const [inputCategory, setInputCategory] = useState('');

    

    // const quillRef = useRef();
    //BodyFrom Data to append formdata later
   
    // FUNCTIONS
    const handleChange = {
        name: (e) => {
           
            setInputCategory( e.target.value );
        },
       
        submit_form: (e) => {
            e.preventDefault();
            
         
            onFinish();
            // catName.current.value = '';
           
            
        },
    };

    const onFinish = async () => {

        try {
            setLoading(true);
           

            const { data } = await axios.post(
                `/category/create/${auth.user._id}`,
                {name:inputCategory}
            );
            
            if (data?.error) {
                setLoading(false);
                toast.error(data.error);
               
            } else {
                toast.success('Categorie Creata cu Succes');
                setLoading(false);
                getCategories()
            }
                

        } catch (err) {
            toast.error('error => ', err);
            console.log(err);
            setLoading(false);
            
        }
    };

    //FUNCTIONS END
    return (
        <>
            <h1 className={tw('font-sans font-bold text-4xl md:text-3xl lg:text-5xl text-center leading-snug text-gray-800')}>Creeaza Categorie</h1>
            <div className={styles.container}>
                <form onSubmit={handleChange.submit_form} className={styles.form}>

                    <div className={styles.group}>
                        <label htmlFor="Categorie">Nume Categorie</label>
                        <input onChange={handleChange.name} type="text" name="Categorie" required={true} />
                    </div>
                    <button className={styles.button} type="submit" > Creaza Categorie Noua</button>
                </form>
            </div>
        </>
    );
};

export default CreateCategoryForm;