
import axios from 'axios';
import { useState, useContext, useEffect, useRef } from 'react';
import { AuthContext } from '@/context/auth';
import { CategoryContext } from '@/context/category';
import toast from 'react-hot-toast';
import {form} from '../../../../js/utils'
import styles from './CreateCategoryForm.module.css'
import { tw } from 'twind';

const CategoryModifyer = ({category}) => {
    

   
    const [auth, setAuth] = useContext(AuthContext);
    const [categories, setCategories, getCategories] = useContext(CategoryContext);
    //STATE
    const [inputData, setInputData] = useState(category.name)
    const [isEditable, setIsEditable] = useState(false)
    const [numeCategorie, SetNumeCategorie]= useState(category.name)
    const [previousValue, setPreviousValue] = useState(category.name);
    

    
    const idCategorie = category._id
    const categoryName = useRef()
    




    const handler = {
        edit: (e)=>{
            e.preventDefault()
            setIsEditable(!isEditable)
            categoryName.current.value = category.name
            getCategories();
        },
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


    return (
      <>
        {/* <h1 className={tw('font-sans font-bold text-4xl md:text-3xl lg:text-5xl text-center leading-snug text-gray-800')}>{props.name}</h1> */}
        <div className={tw('w-full')}>
          <form
            className={form.form}
            onSubmit={(e) => {
              handler.update(e);
            }}
          >
            <div className={form.group}>
              <label className={form.label} htmlFor="Categorie">
                {category.name}
              </label>
              <input
                ref={categoryName}
                disabled={!isEditable}
                className={form.textInput}
                defaultValue={category.name}
                onChange={handler.change}
                type="text"
                name="Categorie"
                required={true}
              />
              <button onClick={handler.edit} className={isEditable ? form.buttonRed : form.button}>
                {isEditable ? 'Renunta' : `Modifica`}
              </button>
            </div>
            {isEditable ? (
              <div className={tw('flex flex-col p-5 justify-center gap-4')}>
                {' '}
                <button className={form.button} type="submit">
                  {' '}
                  Modifica Categoria {numeCategorie}
                </button>
                <button onClick={handler.delete} className={form.buttonRed} type="button">
                  {' '}
                  sterge Categoria {numeCategorie}
                </button>
              </div>
            ) : null}
          </form>
        </div>
      </>
    );
};

export default CategoryModifyer;
