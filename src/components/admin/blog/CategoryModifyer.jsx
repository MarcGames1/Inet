
import axios from 'axios';
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '@/context/auth';
import { CategoryContext } from '@/context/category';
import toast from 'react-hot-toast';
import styles from './CreateCategoryForm.module.css'
import { tw } from 'twind';

const CategoryModifyer = ({category}) => {

    const [categories, setCategories, getCategories] = useContext(CategoryContext);
    const [auth, setAuth] = useContext(AuthContext);
    //STATE
    const [inputData, setInputData] = useState(null)
    const [numeCategorie, setNumeCategorie]=useState('')
    const [idCategorie, setIdCategorie]=useState('')




    const handler = {
        delete: async () => {
            let url = `/category/${idCategorie}/${auth.user._id}`;

            // error handling + mesaj feedback cu TOAST
            await axios.delete(url);
            toast.success("Categorie Stearsa")
            getCategories()
           
        },
        update: async (e) => {
            e.preventDefault()
            let url = `/category/${idCategorie}/${auth.user._id}`;
            console.log('URL +> ', url, 'InputData =>> ', inputData);
            console.log(inputData)
            try{
               const {data} =  await axios.put(url, { name: inputData });
                toast.success('Categorie modificata cu succes')
            }
            catch(err){
                toast.error(err?.message || 'Categoria nu s-a modificat')
                console.log(err)
            }
            
            getCategories();
        },
        

        change: (e) => {
            e.preventDefault()
            setInputData(e.target.value);
            console.log(inputData)
        }
    };

useEffect(() => {
    if(category){
        setNumeCategorie(category.label)
        setIdCategorie(category.value)
    }

}, [category])

if(category == null){
    return null
}

    return (
        <>
            {/* <h1 className={tw('font-sans font-bold text-4xl md:text-3xl lg:text-5xl text-center leading-snug text-gray-800')}>{props.name}</h1> */}
            <div className={styles.container}>
                
                <form onSubmit={e => { handler.update(e) }} className={styles.form}>

                    <div className={styles.group}>
                        <label htmlFor="Categorie">{numeCategorie}</label>
                        <input defaultValue={numeCategorie} onChange={handler.change} type="text" name="Categorie" required={true} />
                    </div>
                    <button className={styles.button} type="submit" >  Modifica Categoria {numeCategorie}</button>
                    <button onClick={handler.delete} className={styles.button2} type="button" > sterge Categoria {numeCategorie}</button>
                </form>
               
            </div>
        </>
    );
};

export default CategoryModifyer;
