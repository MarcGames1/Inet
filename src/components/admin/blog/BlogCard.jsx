import React from 'react'
import axios from 'axios';
import Image from 'next/image'
import { tw } from 'twind';
import Link from 'next/link'



const server = 'http://89.37.212.226:8000';
const cardStyles = {
  container: tw('text-center grid gap-2'),
  title: tw('text-center text-indigo-600 font-semibold tracking-wide uppercase'),
};

import {form} from '../../../../js/utils'

const BlogCard = ({title, categories, author, image, excerpt, _id}) => {
const handler ={
    stergePostarea: (e)=>{
        e.preventDefault()
        stergePostarea(_id)
    },
    editeazaPostarea: (e)=>{
        editeazaPostarea(_id)
    }
}


const stergePostarea = async (_id) =>{

}
const editeazaPostarea = async (_id) => {};

    console.log(categories);
    
    return (
      <>
        <td>
          <h3 className={cardStyles.title}>{title}</h3>
        </td>
        <td>
          <ul>
            {categories.map((cat) => (
              <li>{cat.name}</li>
            ))}
          </ul>
        </td>
        <td>{`${author.nume} ${author.prenume}`}</td>

        <td>
          <Image width={100} objectFit="contain" src={`${server}/${image.join('/')}`} height={100} />
        </td>
        <td>
          <p>{excerpt}</p>
        </td>
        <td className={cardStyles.container}>
          <Link href={`/admin/posts/${_id}?edit`}>
            <a className={form.button}>Editeaza Postarea</a>
          </Link>

          <button onClick={handler.stergePostarea} className={form.buttonRed}>
            Sterge Postarea
          </button>
        </td>
      </>
    );
}

export default BlogCard




