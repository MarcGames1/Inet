import { tw } from 'twind';
import css from './style.module.css';
import {colors} from '../../../js/utils'


interface IButton {
  primary?: boolean;
  pulse?: boolean | undefined;
  color?: color | undefined;
  children: React.ReactNode;
  modifier?: string;
  click?: any;
}

export interface color{
  default: string;
  hover: string;
}

const Button = ({ primary, click, modifier, children, color, pulse, ...rest }: IButton) => {
  const baseStyle = `font-sans font-medium py-2 px-3 border rounded`;
  const styles = primary
    ? `${pulse ? css.pulse : null} bg-${color?.default || colors.primary.default} hover:bg-${
      color?.hover ||  colors.primary.hover
      } text-white font-extrabold`
    : `bg-white text-${color?.default || colors.primary.default} border-${
        color?.default || colors.primary.default
      } hover:bg-${color?.hover || colors.primary.hover} hover:text-white hover:font-extrabold`;

  return (
    <button onClick={click} type="button" className={tw(`${baseStyle} ${styles} ${modifier ?? ``}`)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
