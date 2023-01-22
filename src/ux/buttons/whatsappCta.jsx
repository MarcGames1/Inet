import React, { ReactNode } from 'react';
import Button, {color} from '@/components/button';
import { Whatsapp } from '../../components/svg';
import { tw } from 'twind';



const WhatsappCta = ({ children, primary, color, modifier }) => {
  return (
    <a className={tw('block w-full')} href="https://wa.me/+40750472447">
      <Button color={color} modifier={modifier + ' ' + 'm-auto flex items-center'} primary={primary}>
        <span className={tw('flex')}>
          <Whatsapp width={16} height={16} />
        </span>
        <span className={tw('flex pl-2 ')}>{children ? children : 'Whatsapp'}</span>
      </Button>
    </a>
  );
};

export default WhatsappCta;
