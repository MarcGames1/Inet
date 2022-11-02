import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
const InlineWidget = dynamic(() => import('react-calendly').then((c) => c.InlineWidget), {
  loading: () => <div>Loading...</div>,
})
import CustomButton from './CalendlyButton'
const InlineCalendly = () => {
  
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
         rootElement={document.getElementById("__next")}
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
       /> : <CustomButton text={"Programeaza o Intalnire Gratuita!"} />

      }
     
  </>
    

    
    
    )
  }
export default InlineCalendly


      




