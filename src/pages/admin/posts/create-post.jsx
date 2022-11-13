import React from 'react';
import { CreateBlog } from '@/components/admin/index';
import AdminLayout from '@/layout/AdminLayout';
import styles from './create-post.module.css';
import { tw } from 'twind';

function CreatePost() {
  return (
    <AdminLayout>
      <CreateBlog />
    </AdminLayout>
  );
}

export default CreatePost













