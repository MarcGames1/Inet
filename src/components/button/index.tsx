import { tw } from 'twind';
import css from './style.module.css';

interface IButton {
  primary?: boolean;
  pulse?: boolean | undefined;
  children: React.ReactNode;
  modifier?: string;
  click?: any;
}

const Button = ({ primary, click, modifier, children, pulse, ...rest }: IButton) => {
  const baseStyle = `font-sans font-medium py-2 px-3 border rounded`;
  const styles = primary
    ? `${
        pulse ? css.pulse : null
      } bg-gradient-to-r hover:from-indigo-100 from-pink-100 hover:via-indigo-50 via-indigo-300 to-pink-100`
    : `bg-white text-gray-600 border-gray-300 hover:bg-gray-100`;

  return (
    <button onClick={click} type="button" className={tw(`${baseStyle} ${styles} ${modifier ?? ``}`)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
