import React from 'react'
import AdminLayout from '@/layout/AdminLayout';
import { CreateCategoryForm, CategoryList, BlogList, CreateBlog } from '@/components/admin/index';


const Posts = () => {
  
  
  
  return (
    <AdminLayout>

    <div>All Posts</div>
   
    <div>Vezi / Modifica / Sterge  Postare</div>
    <BlogList  />
    <CategoryList />
    <CreateCategoryForm />
    
    </AdminLayout>
    
  )
}



export default Posts