import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { tw } from 'twind'
import Script from 'next/script'
const InlineWidget  = dynamic(() => import('react-calendly').then((c)=>c.InlineWidget), {
  loading: () => <div>Loading...</div>,
})

const Calendly = (h2) => {
  
  
const [ishidden, setIsHidden] = useState(true)

useEffect(() =>{

  if (typeof window !== 'undefined'){
    window.onload = (e) => {
      setIsHidden(false)
    };
  }
}, [typeof window])



 return (
  <>

     {ishidden ? <InlineWidget
       url="https://calendly.com/alexandru-marcu/consultanta-gratuita-seo?primary_color=4f46e5"
       pageSettings={{
         backgroundColor: 'ffffff',
         hideEventTypeDetails: false,
         hideLandingPageDetails: false,
         primaryColor: '4f46e5',
         textColor: '1f2927',
         hideGdprBanner: true,
       }}
     /> : null}
     
  </>
    

    
    
    )
  }
  export default Calendly


      




