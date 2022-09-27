import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { tw } from 'twind'
import Script from 'next/script'

const Calendly = (h2) => {
  
  const [isLoading, setIsLoading] = useState(true)


  const CalendlyDiv = (loading) =>{
  return (  isLoading ?  'Loanding...' : < div className = "calendly-inline-widget" data-url="https://calendly.com/alexandru-marcu/consultanta-gratuita-seo?primary_color=4f46e5" ></div>
    
  )
}


 useEffect(() =>{

  
 }, [isLoading])

  return (<>
    <Script
      id="calendlyScript"
      src="https://assets.calendly.com/assets/external/widget.js"
      onReady={() => { setIsLoading(false);}}
      onError={(e) => {
        console.error('Script failed to load', e)
      }}
      strategy='afterInteractive'
    ></Script>
     <CalendlyDiv /> 
     
  </>
    

    
    
    )
  }
  export default Calendly


      




