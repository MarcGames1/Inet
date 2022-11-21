import { tw } from 'twind';
import { useRouter } from 'next/router';
import { AuthContext } from '@/context/auth';
import Page from '@/components/page'



import { useState, useContext } from 'react';

import styles from './signin.module.css'

//dynamic import fontawesome

import toast from 'react-hot-toast';
import axios from 'axios';

const Signin = () => {
    const router = useRouter()
    // context
    const [auth, setAuth] = useContext(AuthContext);

    //state
    const [password, setPassword] = useState('password');
    const [loading, setLoading] = useState(false);


    const [inputData, setInputData] = useState({
        email: '',
        password: '',
    });

    const handleChange = {
        email: (e) => {
            setInputData(inputData, (inputData.email = e.target.value));
        },

        password: (e) => {
            setInputData(inputData, (inputData.password = e.target.value));
        },

        submit_form: (e) => {
            e.preventDefault();
            onFinish(inputData);
            

        },
    };

    const onFinish = async (values) => {
        try {
            setLoading(true);
            const { data } = await axios.post('/signin', values);

            if (data?.error) {
                setLoading(false);
                toast.error(data.error);

            } else {
                // save user and token to context
                setAuth(data);
                // save user and token to local storage
                localStorage.setItem('auth', JSON.stringify(data));
                
                toast.success('Successfully signed in');
                router.push('/admin');
                setLoading(false);

            }
        } catch (err) {
            toast.error('error => ', err.message);
            setLoading(false);

        }
    };
    return (

        <Page>
            <h1 className={tw('font-sans font-bold text-4xl md:text-3xl lg:text-5xl text-center leading-snug text-gray-800')}>Sign In Form</h1>
            <div className={styles.container}>
                <form onSubmit={handleChange.submit_form} className={styles.form}>

                    <div className={styles.group}>
                        <label htmlFor="email">Email</label>
                        <input onChange={handleChange.email} type="email" autoComplete="email" name="email" required={true} />
                    </div>

                    <div className={styles.group}>
                        <label htmlFor="password">Password</label>
                        <input onChange={handleChange.password} type="password" autoComplete="password" name="password" required={true} />
                    </div>
                    <button className={styles.button} type="submit" > Sign In</button>
                </form>
            </div>
        </Page>

    );
}

export default Signin