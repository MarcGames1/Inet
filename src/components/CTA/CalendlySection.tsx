import { type } from 'os'
import React, {useState, useEffect} from 'react'
import CalendlyNoPic from './CalendlyNoPic'
import CalendlyPic from './CalendlyPicSection'

import  useWindowDimensions  from '@/hooks/useWindowDimension'


const CalendlySection = (props: JSX.IntrinsicAttributes & { titlu: string; text: string; btntxt?: string | undefined }) => {
const { width, height } = useWindowDimensions();

    console.log(width, height)
  return (
      
        (typeof width !=='undefined' && width <= 1024) ? <CalendlyNoPic {...props} /> : <CalendlyPic {...props} />
        
          
  )
}

export default CalendlySection