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
import { getAuthorOptions } from "../../../../js/helper"

const CreateBlog = () => {

    const [auth, setAuth] = useContext(AuthContext);

    const [categories, setCategories, getCategories] = useContext(CategoryContext);
    const [title, setTitle] = useState(undefined)
    const [image, setImage] = useState(undefined)
    const [content, setContent] = useState(undefined)
    const [excerpt, setExcerpt] = useState(undefined)
    // const [categories, setCategories] = useState(undefined)
    const [selectedOptions, setSelectedOptions] = useState([])
    const [selectedAuthors, setSelectedAuthors] = useState([])
    const options = []
    const authorOptions = []

    
  getAuthorOptions().then(res => {
    console.log("L here => ",res)
    authorOptions.push(...res)
})


    
    categories.map(category => {
        options.push({ label: category.name, value: category._id })
    })
    
    
    
    const authors = []
   
    


    const handler = {
        select: (e) => {
            const categories = []
            e.map(cat =>{categories.push(cat.value)})
            setSelectedOptions(categories)
            // console.log(categories)
        },
        author: (e) => {
            const authors = []
            e.map(a =>{authors.push(a.value)})
            setSelectedAuthors(authors)
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
        excerpt: (e) => {
            e.preventDefault()
            setExcerpt(e.target.value)
            console.log(excerpt)
        },
        submitForm: async () => {
            console.log('submit form called')
            const formData = new FormData()
            formData.append('thumbnail', image)
            formData.append('title', title)
            formData.append('categories', selectedOptions)
            formData.append('author', selectedAuthors)
            formData.append('content', content)
            formData.append('excerpt', excerpt)
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

                <textarea onChange={handler.excerpt} maxlength="160">
                    Rezumat max 160 caractere
                </textarea>
                <span>chars: 10</span>
                <QuillEditor setContent={setContent}/>
     

    <span>Autor:</span>
            <Select
                closeMenuOnSelect={true}
                isClearable={true}
                isSearchable={true}
                options={authorOptions}
                onChange={handler.author}
                isMulti={true}
                name="category-select"
                />
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