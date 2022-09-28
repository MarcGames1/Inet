import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { tw } from 'twind'
import Script from 'next/script'
const InlineWidget = dynamic(() => import('react-calendly').then((c) => c.InlineWidget), {
  loading: () => <div>Loading...</div>,
})

const Calendly = () => {
  
  const [mobile, setMobile] = useState(true)
  
useEffect(() =>{

  if (typeof window !== undefined) {
    setMobile(() => window.innerWidth < 576 ? true : false)
  }
}, [typeof window])



 return (
  <>

      {

       !mobile ? <InlineWidget
         url="https://calendly.com/alexandru-marcu/consultanta-gratuita-seo?primary_color=4f46e5"
         rootElement={null}
         text="Click here to schedule!"
         textColor="#ffffff"
         color="#4f46e5"
        pageSettings={{
          backgroundColor: 'ffffff',
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: '4f46e5',
          textColor: '1f2927',
          hideGdprBanner: true,
        }}
       />  : null

      }
     
  </>
    

    
    
    )
  }
  export default Calendly


      




