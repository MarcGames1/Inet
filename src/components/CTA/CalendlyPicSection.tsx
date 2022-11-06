import React from 'react'
import { tw } from 'twind';
import Image from 'next/image'
import { CalendlyButton } from '../calendly';
import WhatsappCta from '../../ux/buttons/whatsappCta';

const meImg = '/images/alexandru-marcu-specialist-seo.png'

const CalendlyPicSection = ({
  titlu,
  text,
  btntxt,
  wa,
  pulse,
}: {
  pulse?: boolean | undefined;
  titlu: string;
  text: string;
  btntxt?: string | undefined;
  wa?: undefined | boolean;
}) => {
  return (
    <section id="cta" className={tw(`py-28 h-screen min-h-screen  relative pt-28 overflow-hidden`)}>
      <div className={tw(`h-full grid row w-full mx-auto p-4 sm:p-6 lg:p-8`)}>
        <div className={tw('h-full  grid grid-cols-3 w bg-gradient-to-r from-indigo-100 to-indigo-300 ')}>
          <div
            className={tw(
              'lg:h-auto justify-around items-center pb-10 text-xl col-span-3 lg:col-span-2 flex flex-col text-gray-900',
            )}
          >
            <span className={tw(' flex mt-2 text-3xl  lg:text-4xl text-center font-bold tracking-tight ')}>
              {titlu}
            </span>
            <p className={tw('mx-16 flex flex-row')}>{text}</p>
            {wa ? (
              <Wa btntxt={btntxt} />
            ) : (
              <CalendlyButton
                text={btntxt}
                primary={undefined}
                modifier={undefined}
                pulse={pulse ? pulse : undefined}
              />
            )}
          </div>
          <div className={tw('relative flex h-96  ')}>
            <Image
              src={meImg}
              alt="Alexandru Marcu Specialist Seo"
              width={3000}
              height={1000}
              layout="fill"
              objectFit="contain"
              //   objectPosition={'top'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendlyPicSection




const Wa = ({btntxt, pulse}: {btntxt: string | undefined, pulse?: boolean | undefined}) =>{
  return (
    <>
      <p className={tw(`mt-10 text-gray-800 text-center text-lg lg:text-2xl`)}> Hai să ne cunoaștem!</p>
      <div className={tw(` mt-5 grid gap-5 grid-cols-2 content-around`)}>
        <div>
          <CalendlyButton pulse={pulse ? pulse : undefined}  text={btntxt} primary modifier={'w-full'} />
        </div>

        {/* <span className={tw(`mx-2`)}></span> */}
        <div>
          <WhatsappCta modifier={'w-full justify-center'} />
        </div>
      </div>
    </>
  );
}