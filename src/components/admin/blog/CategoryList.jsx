import { useContext } from 'react';
import { CategoryContext } from '@/context/category';
import CategoryModifyer from './CategoryModifyer';

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
