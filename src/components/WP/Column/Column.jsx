import { tw } from 'twind'
import React from 'react'

export const Column = ({children, width}) => {
    const widthStyle = width ? {minWidth: width, flexGrow: 1 } : {flexGrow: 1, flexBasis: 0 }  
  return (
    <div className={tw('px-2 py-5')} style={widthStyle}>{children}</div>
  )
}

