import React, {useEffect} from 'react'
import { InlineWidget } from "react-calendly";
import { tw } from 'twind';  

const Calendly = () => {

  return (
    <div id="calendly-container" className={tw('overflow-hidden	')}>
      < InlineWidget styles={{
        height: '700px'
      }} url="https://calendly.com/alexandru-marcu/consultanta-gratuita-seo" />
    </div>
  )
}

export default Calendly


