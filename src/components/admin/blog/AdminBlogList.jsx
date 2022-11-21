import React, {useState, useEffect} from 'react'
import axios from 'axios'
import toast from 'react-hot-toast';
import BlogCard from './BlogCard'
import PropTypes from 'prop-types'
import { tw } from 'twind';

const AdminBlogList = () => {

    const [blogList, setBlogList] = useState(undefined)

   const getBlogList = async () =>{
     const { data } = await axios
       .get('/posts')
       .then((data) => {
         console.log('succes');
         console.log(data);
         return data
       })
       .catch((exception) => {
         console.log('exception');
         console.log(exception);
         return exception
       });
    if(!data){
        toast.error('Nu sunt Postari de afisat')
    }
      if (data?.error) {
        toast.error(data?.error);
         toast.error(error.response?.data);
        
      }
      
      setBlogList(data)
   }
   
    useEffect(() => {
      getBlogList();
    }, []);

    if(blogList === undefined){
        return <>NO BLOG DATA</>;
    } else{
        console.log(blogList)
        return (
          <table>
            <th>Titlu</th>
            <th>Categorie</th>
            <th>Autor</th>
            <th>Imagine</th>
            <th>Rezumat</th>
            <th>sterge / modifica</th>

            {blogList.map((blog) => (
              <tr>
               
                <BlogCard key={blog._id} {...blog} />
              </tr>
            ))}
          </table>
        );
    }
}

AdminBlogList.propTypes = {};

export default AdminBlogList;