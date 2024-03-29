import React from 'react';
import { tw } from 'twind';
import { CalendlyButton } from '../calendly';
import WhatsappCta from '../../ux/buttons/whatsappCta';

import {colors} from '../../../js/utils'



const CalendlyNoPic = ({
  titlu,
  text,
  btntxt,
  wa,
  pulse,
}) => {
  return (
    <section id="cta" className={tw('')}>
      <div className={tw(`h-full w-full mx-auto p-4 sm:p-6 lg:p-8`)}>
        <div
          className={tw(
            `items-center flex flex-col gap-4 h-full bg-${colors.primary}`,
          )}
        >
          <span className={tw(' flex mt-2 text-3xl  lg:text-4xl text-center font-bold tracking-tight ')}>{titlu}</span>
          <p className={tw('mx-16 flex flex-row')}>{text}</p>
          {wa ? (
            <Wa btntxt={btntxt} />
          ) : (
            <CalendlyButton pulse={pulse ? pulse : undefined} text={btntxt} primary={undefined} modifier={undefined} color={undefined} />
          )}{' '}
        </div>
      </div>
    </section>
  );
};

export default CalendlyNoPic;

const Wa = ({ btntxt, pulse }) => {
  return (
    <>
      <p className={tw(`mt-10 text-gray-800 text-center text-lg lg:text-2xl`)}>Hai să vorbim despre afacerea ta!</p>
      <div className={tw(` mt-5 mb-10 grid gap-5 md:grid-cols-2 content-around`)}>
        <div>
          <CalendlyButton pulse={pulse ? pulse : undefined} text={btntxt} primary modifier={'w-full'} color={undefined} />
        </div>

        {/* <span className={tw(`mx-2`)}></span> */}
        <div>
          <WhatsappCta modifier={'w-full justify-center'} />
        </div>
      </div>
    </>
  );
};
