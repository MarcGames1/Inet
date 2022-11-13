import React, { useEffect, useState, useContext } from 'react'
import Select from 'react-select';
import { tw } from 'twind';
import dynamic from 'next/dynamic'
import toast from 'react-hot-toast'
import axios from 'axios';

import { CategoryContext } from '@/context/category';
import { AuthContext } from '@/context/auth';

import Button from '@/components/button';
import QuillEditor from '../QuillEditor';


const CreateBlog = () => {

    const [auth, setAuth] = useContext(AuthContext);

    const [categories, setCategories, getCategories] = useContext(CategoryContext);
    const [title, setTitle] = useState(undefined)
    const [image, setImage] = useState(undefined)
    const [content, setContent] = useState(undefined)
    // const [categories, setCategories] = useState(undefined)
    const [selectedOptions, setSelectedOptions] = useState([])
    const options = []


    categories.map(category => {
        options.push({ label: category.name, value: category._id })
    })
    

    const handler = {
        select: (e) => {
            const categories = []
            e.map(cat =>{categories.push(cat.value)})
            setSelectedOptions(categories)
            // console.log(categories)
        },

        titlu: (e) => {
            e.preventDefault()
            setTitle(e.target.value)
            
        },

        image: (e) => {
           setImage(e.target.files[0])
           console.log(image)
        },

        submit: (e) =>{
            e.preventDefault()
            console.log(e)
            handler.submitForm()
        },
        submitForm: async () => {
            console.log('submit form called')
            const formData = new FormData()
            formData.append('thumbnail', image)
            formData.append('title', title)
            formData.append('categories', selectedOptions)
            formData.append('content', content)
            try{
              const {data} = await axios.post(`/post/create/${auth.user._id}`, formData, {headers: {'Content-Type': 'multipart/form-data'}})
                if(data?.error){
                    console.error(data.error, "ERRORR")
                } else{
                    console.log(data)
                    // toast.success(data)
                    console.log(data)
                }
            }
            catch(err){
                toast.error(err.message)
            }

        }
    }


    return (
    <>CreateBlog
    <h2>Titlu Blog</h2>
            <form onSubmit={handler.submit} method='post' encType='multipart/form-data'>
                <input onChange={handler.titlu} className={tw('w-full text-large text-color-gray-500 text-center color-white')} required name='titlu' type="text" placeholder='Titlu Blog' />
                <input type="file" onChange={handler.image}
                    id="thumbnail" name="thumbnail"
                    accept="image/png, image/*"/>
                <QuillEditor setContent={setContent}/>
     

    <span>Categorii:</span>
            <Select
                closeMenuOnSelect={true}
                isClearable={true}
                isSearchable={true}
                options={options}
                onChange={handler.select}
                isMulti={true}
                name="category-select"
                />
                <Button type='submit' onClick={handler.submit}>Creaza Postare</Button>
                </form>
    </>
  )
}

export default CreateBlog