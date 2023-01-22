import React from 'react';
import { tw } from 'twind';
import styles from './style.module.css';
import Check from '@/constants/svg/check.svg';

const ListaCuBife = ({ title, paragrafe }) => {
  return (
    <section
      className={`${styles.bg} ${tw(`w-full items-center min-h-screen flex flex-col lg:py-28 pt-28 overflow-hidden`)}`}
    >
      <span className={tw('text-center  text-white font-semibold tracking-wide uppercase')}>{title}</span>
      {paragrafe.map((item, index) => (
        <li
          key={index}
          className={`${styles.glass} ${tw(
            'flex items-center lg:flex-row md:flex-col container h-full text-white w-10/12 m-8 p-8',
          )}`}
        >
          <div className={tw(`px-4`)}>
            <span
              className={tw(`hidden md:flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-blue-50 text-blue-500`)}
            >
              {<Check fill="currentColor" />}
            </span>
          </div>
          <div className={tw(`px-4`)}>
            <h3 className={tw(`my-4 text-xl font-semibold`)}>{item}</h3>
            {/* <p className={tw(`text-white leading-loose`)}>{item}</p> */}
          </div>
        </li>
      ))}
    </section>
  );
};

export default ListaCuBife;
