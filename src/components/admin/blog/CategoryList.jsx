import dynamic from 'next/dynamic';
const FontAwesomeIcon = dynamic(async () => (await import('@fortawesome/react-fontawesome')).FontAwesomeIcon);
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '@/context/auth';
import { CategoryContext } from '@/context/category';
import CategoryModifyer from './CategoryModifyer';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import {tw} from 'twind'

const CategoryList = () => {
  const [categories, setCategories, getCategories] = useContext(CategoryContext);




  



  if (!categories) return <div>Loading...</div>;
  return (
    <>
      {categories.map((category) => {
        return (
          <div >
            <CategoryModifyer key={category._id} category={category} />
          </div>
        );
      })}
    </>
  );
};

export default CategoryList;
