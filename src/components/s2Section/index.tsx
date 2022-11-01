import React from 'react'
import styles from './style.module.css'
import { tw } from 'twind';
const SecondSection = ({
  titlu,
  p1,
  p2,
  p3,
}: {
  titlu?: string | undefined;
  p1?: string | undefined;
  p2?: string | undefined;
  p3?: string | undefined;
}) => {
  return (
    <section className={styles.bg + ' ' + tw('w-full items-center min-h-screen flex flex-col')}>
      <div className={`${styles.glass} ${tw('container h-full block w-6/12 m-8 p-8')}`}>
        <p className={tw('font-extrabold text-justify indent-1.5 text-white')}>{p1}</p>
      </div>
      <div className={`${styles.glass} ${tw('container h-full block w-6/12 m-8 p-8')}`}>
        <p className={tw('font-extrabold text-justify indent-1.5 text-white')}>{p2}</p>
      </div>
      <div className={`${styles.glass} ${tw('container h-full block w-6/12 m-8 p-8')}`}>
        <p className={tw('font-extrabold text-justify indent-1.5 text-white uppercase')}>{p3}</p>
      </div>
    </section>
  );
};

export default SecondSection