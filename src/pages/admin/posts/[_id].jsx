import React from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';
import { CreateBlog } from '@/components/admin/index';
import AdminLayout from '@/layout/AdminLayout';
const EditPost = (props) => {

    const router = useRouter();



  return (<AdminLayout>
    <CreateBlog {...props}/>
  </AdminLayout>

  )
}

export default EditPost



export async function getStaticProps({ params }) {
  const { _id } = params;

  try {
    const { data } = await axios.get(`/post/${_id}`);
    return data ? { props: { ...data } } : { notFound: true };
  } catch (e) {
    console.log(e);
    return { notFound: true };
  }
}


export async function getStaticPaths() {
  return {
    paths: [
    ],
    fallback: 'blocking',
  };
}