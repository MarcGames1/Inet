import { type } from 'os'
import React, {useState, useEffect} from 'react'
import CalendlyNoPic from './CalendlyNoPic'
import CalendlyPic from './CalendlyPicSection'

import  useWindowDimensions  from '@/hooks/useWindowDimension'


const CalendlySection = (props: JSX.IntrinsicAttributes & { titlu: string; text: string; btntxt?: string | undefined }) => {
const { width, height } = useWindowDimensions();
const [ismobile, setIsmobile] = useState(true)
    console.log(typeof width)
useEffect(() => {
  if (typeof width == 'undefined'  ) {
    return 
  } else if (typeof width == 'number'){
    
    if(width > 1024){
      setIsmobile(false);
    }
    
  } else return

  
}, [width]);
  return (
      
        (ismobile) ? <CalendlyNoPic {...props} /> : <CalendlyPic {...props} />
        
          
  )
}

export default CalendlySection