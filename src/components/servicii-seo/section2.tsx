import React, { ReactNode } from 'react'
import { tw } from 'twind'
import Check from '@/constants/svg/check.svg';


const Section2 = (props: {
  children: ReactNode;
  lead: string[] | ReactNode[];
  heading: string;
  paragrafe: string[];
}) => {
  return (
    <>
      <section className={tw(`overflow-hidden`)}>
        <div className={tw('flex flex-col m-14')}>
          <div className={tw('flex flex-row')}>
            <div className={tw('flex flex-col')}>
              {props.lead.map((p: string | ReactNode) => {
                return <p className={tw('my-3 text-lg  md:text-xl tracking-wide ext-xl font-semibold')}>{p}</p>;
              })}
            </div>
            {/* <div>col</div> */}
          </div>
          <span className={tw('  m-auto center mt-2 pb-4 text-2xl lg:text-3xl font-bold tracking-tight text-gray-900')}>
            {props.heading}
          </span>

          {props.paragrafe.map((p: string, idx: number) => {
            return (
              <div className={tw('flex items-center	 w-full h-full')}>
                <span
                  className={tw(`hidden m-2 md:flex w-16 h-16 
                  text-2xl font-bold rounded-full
                  bg-red-200  text-red-500`)}
                >
                  {<Check fill="currentColor" />}
                </span>
                <p className={tw('my-3 text-lg flex grow  md:text-xl tracking-wide')}>{p}</p>
              </div>
            );
          })}

          <p className={tw('my-3 text-lg block m-auto md:text-xl tracking-wide ext-xl font-semibold')}>
            Nu asta îți dorești, nu-i așa?
          </p>

          {props.children}

          <p className={tw('my-3 text-lg  md:text-xl tracking-wide')}>
            Hai să spunem lucrurilor pe nume! Se poate și altfel! Doar că implică mai multă muncă. Da, este mult de
            muncă, investiții pentru câteva luni…{' '}
            <span>
              La final, însă, vorbim de <b>rezultate concrete și stabile</b>, traduse prin:{' '}
              <b>creșterea exponențială a vizitelor pe site și vânzări mai mari.</b>
            </span>
            Și totul organic. Adică nu trebuie să investești niciun ban în reclame și chiar dacă vrei să o faci, costul
            reclamelor se va diminua considerabil.
          </p>
        </div>
      </section>
    </>
  );
};

export default Section2