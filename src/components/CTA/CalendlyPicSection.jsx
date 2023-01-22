import React from 'react';
import { tw } from 'twind';
import Image from "next/image";
import { CalendlyButton } from '../calendly';
import WhatsappCta from '../../ux/buttons/whatsappCta';
import { color } from '../button';
import { colors } from '../../../js/utils';
const meImg = '/images/alexandru-marcu-specialist-seo.png';

const CalendlyPicSection = ({
  titlu,
  text,
  btntxt,
  wa,
  pulse,
  
}) => {
  return (
    <section id="cta" className={`${tw(`py-10 relative  overflow-hidden`)}`}>
      <div className={tw(`h-full grid row w-full mx-auto p-4 sm:p-6 lg:p-8`)}>
        <div className={tw(`h-full  grid grid-cols-3 bg-${colors.primary.default}`)}>
          <div
            className={tw(
              `text-center my-4 lg:h-auto justify-between items-center pb-10 text-xl col-span-3 lg:col-span-2 flex flex-col text-${colors.secondary}`,
            )}
          >
            <span className={tw(' flex mt-2 text-3xl  lg:text-4xl text-center font-bold tracking-tight ')}>
              {titlu}
            </span>
            <p className={tw(' mx-10 mb-10 mt-4 flex flex-row')}>{text}</p>
            {wa ? (
              <Wa btntxt={btntxt} color={colors.accent} />
            ) : (
              <CalendlyButton
                color={colors.accent}
                text={btntxt}
                primary={undefined}
                modifier={undefined}
                pulse={pulse ? pulse : undefined}
              />
            )}
          </div>
          <div className={tw(' relative flex  ')}>
            <Image
              src={meImg}
              alt="Alexandru Marcu Specialist Seo"
              width={3000}
              height={1000}
              //   objectPosition={'top'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendlyPicSection;

const Wa = ({ btntxt, pulse, color }) => {
  return (
    <>
      <p className={tw(`mt-10 text-${colors.secondary} text-center text-lg lg:text-2xl`)}> Hai să vorbim despre afacerea ta!</p>
      <div className={tw(` mt-5 grid gap-5 md:grid-cols-2 content- `)}>
        <div>
          <CalendlyButton color={color} pulse={pulse ? pulse : undefined} text={btntxt} primary modifier={'w-full'} />
        </div>

        {/* <span className={tw(`mx-2`)}></span> */}
        <div>
          <WhatsappCta color={color} modifier={'w-full justify-center'} />
        </div>
      </div>
    </>
  );
};
