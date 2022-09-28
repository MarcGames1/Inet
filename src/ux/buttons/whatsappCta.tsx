import React, { ReactNode } from 'react'
import Button from '@/components/button';
import { Whatsapp } from '../../components/svg'
import { tw } from 'twind';

interface IButton {
  primary?: boolean;
  children?: ReactNode;
}

const WhatsappCta = ({children, primary }: IButton) => {
  return (
    <Button primary={primary}>
      <a className={tw('flex items-center ')} href="https://wa.me/+40750472447">
        <span>
          <Whatsapp width={16} height={16} />
        </span>
        <span className={tw('pl-2 ')}>{children ? children  :'Whatsapp' }</span>
      </a>
    </Button>
  );
};

export default WhatsappCta