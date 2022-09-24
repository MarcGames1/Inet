import React, {useEffect} from 'react'
import Head from 'next/head';
const Calendly = () => {

      useEffect(() => {
   if(typeof window !== 'undefined'){
     window.Calendly.initInlineWidget({
       url: 'https://calendly.com/my-calendar/30min?month=2022-05',
       parentElement: document.getElementById('calendly-inline-widget')
     });
   }
      }, [typeof window == Object])

  return (
    <>
    <Head>
        <script src="https://assets.calendly.com/assets/external/widget.js"></script>
      </Head>
    {/* <!-- Calendly inline widget begin --> */}
<div className="calendly-inline-widget" data-url="https://calendly.com/alexandru-marcu/consultanta-gratuita-seo" style={{minWidth:'320px', height:'720px'}}></div>
{/* <!-- Calendly inline widget end --> */}
    </>
  )
}

export default Calendly