import { tw } from 'twind';
import css from './style.module.css';
import {colors} from '../../../js/utils'
import { useEffect, useState } from 'react';




const Button = ({ primary, click, modifier, children, color, pulse, ...rest }) => {
  
  const [btnColor, setBtnColor] =useState({
    default: '',
    hover: '',
  })

  
  
  const set_Colors = () =>{
    return{
      default: color?.default || colors.primary.default,
      hover: color?.hover || colors.primary.hover
    }
    
  } 
  
useEffect(() => {
  setBtnColor(set_Colors());
}, [])
  const primaryStyles =`${pulse ? css.pulse : null }" " ${tw(`bg-${btnColor.default} hover:bg-${btnColor.hover} text-white font-bold`)}` 
  
  const baseStyle =tw( `font-sans font-medium py-2 px-3 border rounded`);
  const styles = primary
    ? primaryStyles
    : tw(
        `bg-orange-500 text-${colors.accent.default}  hover:bg-orange-700 text-white hover:font-bold`,
      );

  return (
    <button
      onClick={click}
      type="button"
      className={`${baseStyle}  ${styles} ${tw(`${modifier ?? ``}`)}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
