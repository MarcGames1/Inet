import React from 'react'
import AdminLayout from '@/layout/AdminLayout';
import styles from './create-post.module.css';
import Page from '@/components/page';
import { tw } from 'twind';
import dynamic from 'next/dynamic'
import toast from 'react-hot-toast'
const Editor = dynamic(() => import('@/components/Editor'), {
  ssr: false,
  
})
// const ConfiguredQuill = dynamic(() => import('@/components/quill/ConfiguredQuill'), {
//   ssr: false,

// })
import { useEffect, useState


} from 'react';


function CreatePost() {
  
  const [editorLoaded, setEditorLoaded] = useState(false);
useEffect(() => {
  if(typeof window !== 'undefined'){
    setEditorLoaded(true)
  }
},[typeof window])




 const [data, setData] = useState('');


  return (
    <AdminLayout>
      <Page>
        <div className={tw('text-center uppercase')}>Articol Nou</div>

        <div className={tw('m-7')}>
          {/* <ConfiguredQuill /> */}
        <Editor className={styles.textBox}
          name="description"
          onChange={(data) => {
            setData(data);
            
          }}
          editorLoaded={editorLoaded}
          />
          </div>

        <div dangerouslySetInnerHTML={{__html: data}}></div>
      </Page>
    </AdminLayout>
  );
}

export default CreatePost