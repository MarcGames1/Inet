import React, {  } from 'react'
import Head from 'next/head'

const Calendly = () => {

  return (<>
    <Head>
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        defer
        async
      />
    </Head>
    <div className="calendly-inline-widget" data-url="https://calendly.com/alexandru-marcu/consultanta-gratuita-seo?primary_color=4f46e5" />
  </>
    )
  }
  export default Calendly


      




