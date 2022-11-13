
import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from "@/context/auth";
import { CategoryProvider } from '@/context/category'
import Head from 'next/head';
import { tw } from 'twind';

import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { AdminSidebar, Admintopnav } from '@/components/admin';
import { NextSeo } from 'next-seo';


//
const AdminLayout = ({ children }) => {
    const router = useRouter()
    const [auth, setAuth] = useContext(AuthContext);



    const getUserData = async () => {


        try {
            const { data } = await axios.get('/current-admin');
            if (data?.ok) {
                setLoading(false)
            } else {
                localStorage.removeItem('auth')
                setAuth({
                    user: null,
                    token: '',
                });
                router.push('/admin/signin');
                axios.get('/signout')
            }

        } catch (err) {
            setAuth({
                user: null,
                token: '',
            });
            localStorage.removeItem('auth')

            toast.error("Unauhorized catch block ")
            setAuth(null)
            axios.get('/signout')
            router.push('/admin/signin')
            console.error(err)
        }

    }





    const [hidden, setHidden] = useState(false)
    const [loading, setLoading] = useState(true) // set it to true





    useEffect(() => {

        if (typeof window !== 'undefined') {
            getUserData()
        }



    }, [])

    if (loading) {
        return <>
            <Head>
                <meta name="robots" content="noindex" />
            </Head>
            <p>Loading...</p> ;
        </>
    }

    return (
        <>
        <NextSeo robotsProps={'noindex, follow'} />
            <CategoryProvider>

                <Head>
                    <meta name="robots" content="noindex" />
                </Head>

                <Admintopnav />
                <div className={tw('flex flex-row ')}>
                    <div className={tw(' grid flex-col items-start justify-center  w-3/12')}>
                        <AdminSidebar />
                    </div>

                    <main className={tw('grid flex-col p-4 w-full')}>
                        {children}
                    </main>

                </div>


            </CategoryProvider>
        </>
    );
}

export default AdminLayout