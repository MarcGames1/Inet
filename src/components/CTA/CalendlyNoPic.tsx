import React from 'react';
import { tw } from 'twind';
import Image from 'next/image';
import { CalendlyButton } from '../calendly';

const meImg = '/images/alexandru-marcu-specialist-seo.png';

const CalendlyNoPic = ({ titlu, text, btntxt }: { titlu: string; text: string; btntxt?: string | undefined }) => {
  return (
    <section id="cta" className={tw('')}>
      <div className={tw(`h-full w-full mx-auto p-4 sm:p-6 lg:p-8`)}>
        <div className={tw('items-center flex flex-col gap-4 h-full w bg-gradient-to-r from-indigo-100 to-indigo-300 ')}>
         
            <span className={tw(' flex mt-2 text-3xl  lg:text-4xl text-center font-bold tracking-tight ')}>
              {titlu}
            </span>
            <p className={tw('mx-16 flex flex-row')}>{text}</p>
            <CalendlyButton text={btntxt} primary={undefined} modifier={undefined} />
          </div>
        
      </div>
    </section>
  );
};

export default CalendlyNoPic;
