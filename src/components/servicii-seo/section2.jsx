import React from 'react';
import { tw, css } from 'twind/css';
import { typography } from '../../../js/utils';
import SEOsvg from '../../constants/svg/SEOsvg2.svg';

const larrowBg = css`
  max-height: 90vh;
  clip-path: polygon(100% 0%, 75% 50%, 100% 100%, 0% 50%);
  margin:5ch;
`;

const rarrowBg = css`
  clip-path: polygon(0% 0%, 100% 50%, 0% 100%, 25% 50%);
  max-height:90vh;
  margin:5ch;
`;

const order = idx  =>{
  const first = tw(larrowBg, `order-last bg-indigo-50`);
  const second = tw(rarrowBg, `bg-indigo-50`);
  return idx % 2 ? first : second

}

const Section2 = (props) => {
  return (
    <>
      <section className={tw(``)}>
        <div className={tw('flex flex-col m-14')}>
          <div className={tw('bg-indigo-50 grid lg:grid-cols-2 gap-5 items-center')}>
            <div className={tw(' flex flex-col p-5 gap-10')}>
              {props.lead.map( p => {
                return <p className={typography.p.default}>{p}</p>;
              })}
            </div>
            <div className={tw('')}>
              <SEOsvg />
            </div>
          </div>
          <span className={typography.heading.default}>{props.heading}</span>

          <div>
            {props.paragrafe.map((p, idx) => {
              return (
                <div className={tw('grid lg:grid-cols-2')}>
                  <div className={order(idx)}></div>
                  <div className={tw('	')}>
                    <div className={tw('lg:border-8 p-5 border-indigo-50')}>
                      <p className={typography.p.default}>{p}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <p className={tw('my-3 text-center text-lg block m-auto md:text-xl tracking-wide ext-xl font-semibold')}>
              Nu asta îți dorești, nu-i așa?
            </p>
            <div>{props.children}</div>
            <div className="grid lg:grid-cols-2">
              <div className={tw(rarrowBg, `bg-indigo-50`)}></div>
              <p className={typography.p.default}>
                Hai să spunem lucrurilor pe nume! Se poate și altfel! Doar că implică mai multă muncă. Da, este mult de
                muncă, investiții pentru câteva luni…{' '}
                <span>
                  La final, însă, vorbim de <b>rezultate concrete și stabile</b>, traduse prin:{' '}
                  <b>creșterea exponențială a vizitelor pe site și vânzări mai mari.</b>
                </span>
                Și totul organic. Adică nu trebuie să investești niciun ban în reclame și chiar dacă vrei să o faci,
                costul reclamelor se va diminua considerabil.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2;
