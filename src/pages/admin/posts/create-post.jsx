import React, { useEffect, useState, useContext} from 'react';


import AdminLayout from '@/layout/AdminLayout';
import styles from './create-post.module.css';
import { tw } from 'twind';
import dynamic from 'next/dynamic'
import toast from 'react-hot-toast'



function CreatePost() {
  


  const [title, setTitle] = useState(undefined)
  const [content, setContent] = useState(undefined)
  const [categories, setCategories] = useState(undefined)
  
 




 const [data, setData] = useState('');


  return (
    <AdminLayout>
      
        <div className={tw('text-center uppercase')}>Articol Nou</div>

        <div className={tw('m-7')}>
       
    
          </div>

       
      
    </AdminLayout>
  );
}

export default CreatePost