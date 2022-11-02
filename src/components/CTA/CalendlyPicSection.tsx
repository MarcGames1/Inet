import React from 'react'
import { tw } from 'twind';
import Image from 'next/image'
import { CalendlyButton } from '../calendly';

const meImg = '/images/alexandru-marcu-specialist-seo.png'

const CalendlyPicSection = ({titlu, text, btntxt}:{titlu:string, text:string, btntxt?:string | undefined}) => {
  return (
    <section id="cta" className={tw(`lg:py-28 h-screen min-h-screen  relative pt-28  h-screen overflow-hidden`)}>
      <div className={tw(`h-full grid row w-full mx-auto p-4 sm:p-6 lg:p-8`)}>
        <div className={tw('h-full  grid grid-cols-3 w bg-gradient-to-r from-indigo-100 to-indigo-300 ')}>
          <div
            className={tw(
              'lg:h-auto justify-around items-center  text-xl col-span-3 lg:col-span-2 flex flex-col text-gray-900',
            )}
          >
            <span className={tw(' flex mt-2 text-3xl  lg:text-4xl text-center font-bold tracking-tight ')}>
              {titlu}
            </span>
            <p className={tw('mx-16 flex flex-row')}>{text}</p>
            <CalendlyButton text={btntxt} primary={undefined} modifier={undefined} />
          </div>
          <div className={tw('relative flex h-96  ')}>
            <Image
              src={meImg}
              alt="Alexandru Marcu Specialist Seo"
              width={3000}
              height={1000}
              layout="fill"
              objectFit="cover"
              //   objectPosition={'top'}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CalendlyPicSection