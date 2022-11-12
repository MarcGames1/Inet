import React from 'react'
import AdminLayout from '@/layout/AdminLayout';
import { CreateCategoryForm, CategoryList } from '@/components/admin/index';


const Posts = () => {
  
  
  
  return (
    <AdminLayout>

    <div>All Posts</div>
    <div>Creeaza  Blog</div>
    <div>Vezi / Modifica / Sterge  Blog</div>
    <CategoryList />
    <CreateCategoryForm />
    
    </AdminLayout>
    
  )
}

export default Posts