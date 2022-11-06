import { type } from 'os'
import React, {useState, useEffect} from 'react'
import CalendlyNoPic from './CalendlyNoPic'
import CalendlyPic from './CalendlyPicSection'

import  useWindowDimensions  from '@/hooks/useWindowDimension'


const CalendlySection = (props: JSX.IntrinsicAttributes & {wa ?:boolean | undefined; titlu: string; text: string; btntxt?: string | undefined }) => {
const { width, height } = useWindowDimensions();
const [ismobile, setIsmobile] = useState(true)
    console.log(typeof width)
useEffect(() => {

  if (typeof width !== 'number' && Number.isNaN(width)) {
    console.log(ismobile, 'If Block');
  } else if (Number(width) > 1024) {
    setIsmobile(false);
  }
    
  
}, [width]);
  return (
      
        (ismobile) ? <CalendlyNoPic {...props} /> : <CalendlyPic {...props} />
        
          
  )
}

export default CalendlySection