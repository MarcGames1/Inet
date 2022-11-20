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

import {form} from '../../../../js/utils'


const CreateBlog = (props) => {
    const [auth, setAuth] = useContext(AuthContext);
    
    const [categories, setCategories, getCategories] = useContext(CategoryContext);
    const [title, setTitle] = useState(props.title || undefined)
    const [image, setImage] = useState(props.image || undefined)
    const [content, setContent] = useState(props.content || undefined)
    const [excerpt, setExcerpt] = useState(props.excerpt || undefined)
    const [excerptLength, setExcerptLength] = useState(0)
    const [selectedOptions, setSelectedOptions] = useState(props.selectedCategories || [])
    const [selectedAuthors, setSelectedAuthors] = useState(props.selectedAuthors || [])
    
    const maxexcerptLength = 160
    const [isTextAreaValid, setIsTextAreaValid] = useState(true)


  
    
    
    const options = []
    const authorOptions = []

    
  getAuthorOptions().then(res => {
    console.log("L here => ",res)
    authorOptions.push(...res)
})


    
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
            setExcerptLength(e.target.value.length)
            console.log(typeof excerpt)
            console.log( 'length = ',excerpt.length)

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

    useEffect (() =>{
        if(maxexcerptLength <= excerptLength){
            setIsTextAreaValid(false)
        }
    }, [excerptLength])

    return (
      <>
        <h2 className={form.title}>Adauga o postare noua in Blog</h2>
        <form
          className={`${tw('flex-col m-5')} ${form.form}`}
          onSubmit={handler.submit}
          method="post"
          encType="multipart/form-data"
        >
          <input
            value={title}
            onChange={handler.titlu}
            className={form.textInput}
            required
            name="titlu"
            type="text"
            placeholder="Titlu Postare"
          />
          <label className={form.label} htmlFor="thumbnail">
            Adauga Poza
          </label>
          <input
            className={form.customFileUpload}
            type="file"
            onChange={handler.image}
            id="thumbnail"
            name="thumbnail"
            accept="image/png, image/*"
          />
          <label className={form.label} Htmlfor="message">
            Rezumat articol de blog max {maxexcerptLength} caractere
          </label>
          <textarea
            className={`${form.textarea} ${isTextAreaValid ? form.defaultBorder : form.borderinValid} `}
            value={excerpt}
            onChange={handler.excerpt}
            maxlength={maxexcerptLength}
          />
          <span className={form.title}>
            caractere: {excerptLength} / {maxexcerptLength}
          </span>
          <QuillEditor content={content} setContent={setContent} />

          <span className={form.title}>Autor:</span>
          <Select
            closeMenuOnSelect={true}
            isClearable={true}
            isSearchable={true}
            options={authorOptions}
            onChange={handler.author}
            isMulti={true}
            value={selectedAuthors}
            name="category-select"
          />
          <span className={form.title}>Categorii:</span>
          <Select
            closeMenuOnSelect={true}
            isClearable={true}
            isSearchable={true}
            options={options}
            onChange={handler.select}
            isMulti={true}
            value={selectedOptions}
            name="category-select"
          />
          <button className={form.button} type="submit" onClick={handler.submit}>
            Creaza Postare
          </button>
        </form>
      </>
    );
}

export default CreateBlog