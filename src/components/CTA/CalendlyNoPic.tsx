import React from 'react';
import { tw } from 'twind';
import Image from 'next/image';
import { CalendlyButton } from '../calendly';
import WhatsappCta from '../../ux/buttons/whatsappCta';
const meImg = '/images/alexandru-marcu-specialist-seo.png';

const CalendlyNoPic = ({ titlu, text, btntxt, wa, pulse }: {pulse?:boolean | undefined, wa ?: undefined| boolean; titlu: string; text: string; btntxt?: string | undefined }) => {
  return (
    <section id="cta" className={tw('')}>
      <div className={tw(`h-full w-full mx-auto p-4 sm:p-6 lg:p-8`)}>
        <div
          className={tw(
            'items-center flex flex-col gap-4 h-full w bg-gradient-to-r from-pink-100 via-indigo-300 to-pink-100 ',
          )}
        >
          <span className={tw(' flex mt-2 text-3xl  lg:text-4xl text-center font-bold tracking-tight ')}>{titlu}</span>
          <p className={tw('mx-16 flex flex-row')}>{text}</p>
          {wa ? (
            <Wa btntxt={btntxt} />
          ) : (
            <CalendlyButton pulse={pulse ? pulse : undefined} text={btntxt} primary={undefined} modifier={undefined} />
          )}{' '}
        </div>
      </div>
    </section>
  );
};

export default CalendlyNoPic;



const Wa = ({ btntxt, pulse }: { pulse ?: boolean|undefined, btntxt: string | undefined }) => {
  return (
    <>
      <p className={tw(`mt-10 text-gray-800 text-center text-lg lg:text-2xl`)}> Hai să ne cunoaștem!</p>
      <div className={tw(` mt-5 grid gap-5 md:grid-cols-2 content-around`)}>
        <div>
          <CalendlyButton pulse={pulse ? pulse : undefined} text={btntxt} primary modifier={'w-full'} />
        </div>

        {/* <span className={tw(`mx-2`)}></span> */}
        <div>
          <WhatsappCta modifier={'w-full justify-center'} />
        </div>
      </div>
    </>
  );
};