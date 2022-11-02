import React, { ReactNode } from 'react'
import Button from '@/components/button';
import { Whatsapp } from '../../components/svg'
import { tw } from 'twind';

interface IButton {
  primary?: boolean;
  children?: ReactNode;
  modifier?: string;
}

const WhatsappCta = ({children, primary, modifier }: IButton) => {
  return (
    <a className={tw('d-block w-full')} href="https://wa.me/+40750472447">
      <Button modifier={modifier + ' ' + 'm-auto flex items-center'} primary={primary}>
        <span className={tw('flex')}>
          <Whatsapp width={16} height={16} />
        </span>
        <span className={tw('flex pl-2 ')}>{children ? children : 'Whatsapp'}</span>
      </Button>
    </a>
  );
};

export default WhatsappCta