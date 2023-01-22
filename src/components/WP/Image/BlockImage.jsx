import React from 'react'
import Image from "next/legacy/image";
import { tw } from 'twind';

const DefaultImage =({Imageurl, width, height, alt, caption, border}) =>{
    if (border == undefined){
      border = {
        width:0,
        radius:0,
      }
    }
    return (
      <>
        <div className={tw(`border-[${border.border?.width}] rounded-[${border?.border?.radius}]`)}>
          <img src={Imageurl} width={width} height={height} alt={alt} layout="intrinsic" />
        </div>
        {caption ? <span className={tw('block text-center text-gray-300	')}>{caption}</span> : null}
      </>
    );
}
export const BlockImage = props => {
    return (
      props.anchor ? <a href={props.anchor}><DefaultImage {...props} /></a>:<DefaultImage {...props} /> 
    
  );
};



