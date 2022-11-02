import React from 'react'
import { tw } from 'twind';
import styles from './style.module.css'
import Check from '@/constants/svg/check.svg';

const DcNoi = ({title, items}) => {
  return (
    <section className={`${styles.bg} ${tw(`w-full items-center min-h-screen flex flex-col lg:py-28 pt-28 overflow-hidden`) }`}>
      <span className={tw('text-center  text-white font-semibold tracking-wide uppercase')}>{title}</span>
      {items.map((item, index) => (
        <li key={index} className={`${styles.glass} ${tw('flex items-center lg:flex-row md:flex-col container h-full text-white w-5/6 lg:w-6/12 my-4 lg:my-8 py-4')}`}>
          
          <div className={tw(`px-4`)}>
              <h3 className={tw(`my-4 text-xl text-center font-semibold`)}>{item.titlu}</h3>
            <div className={tw('grid lg:grid-flow-col justify-items-center items-center')}>
              <span
                className={tw(`lg:mr-3 w-16 h-16 block my-auto mx-auto text-center
              justify-center text-2xl font-bold rounded-full
              bg-green-100 text-green-500`)}
              >
                {<Check fill='currentColor' />}
              </span>
            <p className={tw(`text-white leading-loose`)}>{item.p}</p>
           </div>
          </div>
        </li>
      ))}
    </section>
  );
};

export default DcNoi