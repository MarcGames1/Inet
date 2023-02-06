import React from 'react'
import { tw } from 'twind';
import styles from './style.module.css'
import Check from '../../constants/svg/check.svg';
import { SectionHeader } from '../SectionHeader/SectionHeader';

import { section, typography } from '../../../js/utils';

const DcNoi = ({title, items}) => {
  return (
    <section
      className={`${styles.bg} ${tw(`w-full items-center min-h-screen flex flex-col lg:py-28 pt-28 overflow-hidden
     `)}`}
    >
      <SectionHeader titlu={title} style={'text-gray-800'} />
      {items.map((item, index) => (
        <li
          key={index}
          className={`${styles.glass} ${tw(
            'flex items-center lg:flex-row md:flex-col container 	 w-12/12 lg:w-9/12 h-full text-white m-4 py-4 lg:m-8 lg:p-8',
          )}`}
        >
          <div className={tw(`px-4`)}>
            <span
              className={tw(`hidden md:flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-blue-50 text-blue-500`)}
            >
              {<Check fill="green" />}
            </span>
          </div>
          <div className={tw(`px-4 `)}>
            <h3 className={`${typography.heading.default} ${tw('text-center')}`}>{item.titlu}</h3>
            <p className={`${typography.p.default} ${tw('leading-10 tracking-wider')}`}>{item.p}</p>
          </div>
        </li>
      ))}
    </section>
  );
};

export default DcNoi