import { useState, useContext, useRef } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { AuthContext } from '@/context/auth';
import styles from './CreateCategoryForm.module.css'
import { tw } from 'twind';
import { CategoryContext } from '@/context/category';
import {form} from '../../../../js/utils'


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
        <form onSubmit={handleChange.submit_form} className={form.form}>
              <div className={tw('bg-indigo-50 w-4/6')}>
        <h1 className={form.title}>Creeaza Categorie</h1>
        <div className={form.group}>
            <div className={form.group}>
              <label className={form.label} htmlFor="Categorie">
                Nume Categorie
              </label>
              <input className={form.textInput} onChange={handleChange.name} type="text" name="Categorie" required={true} />
            </div>
            <button className={form.button} type="submit">
              {' '}
              Creaza Categorie Noua
            </button>
        </div>
      </div>
          </form>
    );
};

export default CreateCategoryForm;