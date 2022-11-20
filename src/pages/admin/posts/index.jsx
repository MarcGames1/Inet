import React from 'react'
import AdminLayout from '@/layout/AdminLayout';
import { CreateCategoryForm, CategoryList, CreateBlog } from '@/components/admin/index';


const Posts = () => {
  
  
  
  return (
    <AdminLayout>

    <div>All Posts</div>
   
    <div>Vezi / Modifica / Sterge  Postare</div>
    <CategoryList />
    <CreateCategoryForm />
    
    </AdminLayout>
    
  )
}

export default Posts