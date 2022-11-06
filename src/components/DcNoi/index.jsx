import React from 'react'
import { tw } from 'twind';
import styles from './style.module.css'
import Check from '@/constants/svg/check.svg';

const DcNoi = ({title, items}) => {
  return (
    <section className={`${styles.bg} ${tw(`w-full items-center min-h-screen flex flex-col lg:py-28 pt-28 overflow-hidden`) }`}>
      <span className={tw('text-center  text-white font-semibold tracking-wide uppercase')}>{title}</span>
      {items.map((item, index) => (
        <li key={index} className={`${styles.glass} ${tw('flex items-center lg:flex-row md:flex-col container w-11/12 lg:w-9/12 h-full text-white m-4 p-4 lg:m-8 lg:p-8')}`}>
          <div className={tw(`px-4`)}>
            <span
              className={tw(`hidden md:flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-blue-50 text-blue-500`)}
            >
              {<Check fill='green' />}
            </span>
          </div>
          <div className={tw(`px-4`)}>
            <h3 className={tw(`my-4 text-xl font-semibold`)}>{item.titlu}</h3>
            <p className={tw(`text-white leading-loose`)}>{item.p}</p>
          </div>
        </li>
      ))}
    </section>
  );
};

export default DcNoi