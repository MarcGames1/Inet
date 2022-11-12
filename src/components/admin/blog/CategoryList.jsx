
import dynamic from 'next/dynamic';
const FontAwesomeIcon = dynamic(
    async () => (await import('@fortawesome/react-fontawesome')).FontAwesomeIcon
);
import { useContext, useState } from 'react';
import { AuthContext } from '@/context/auth';
import { CategoryContext } from '@/context/category';
import CategoryModifyer from './CategoryModifyer';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';



const CategoryList = () => {
    const [categories, setCategories] = useContext(CategoryContext);
    const [selectedOption, setSelectedOption] = useState(null)
    const options = []



    const [auth, setAuth] = useContext(AuthContext)

    const animatedComponents = makeAnimated();

    categories.map(category =>{
        options.push({label: category.name, value: category._id})
    })


    const handler = {
        select: (e)=> {
            setSelectedOption(e)
        }

    }


    console.log(categories, 'Categories')
    if (!categories) return <div>Loading...</div>;
    return (
        <>
            <Select
                closeMenuOnSelect={true}
                isClearable={true}
                isSearchable={true}
                options={options}
                onChange={handler.select}
                isMulti={false}
                name="category-select"
                />
            
                <CategoryModifyer category={selectedOption}   />
                

                
            
        </>
    );
};

export default CategoryList;
