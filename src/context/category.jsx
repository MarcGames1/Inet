import { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';



const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {




    const [categories, setCategories] = useState([]);




    const getCategories = async () => {
        const { data } = await axios.get('/categories')
        if (data?.error) {
            toast.error(data.error)
        }
        setCategories(data);
    }

    useEffect(() => {
        getCategories()
    }, []);

    return (
        <CategoryContext.Provider value={[categories, setCategories, getCategories]}>
            {children}
        </CategoryContext.Provider>
    );
};

export { CategoryContext, CategoryProvider };