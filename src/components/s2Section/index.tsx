import React, { ReactElement } from 'react';
import styles from './style.module.css';
import { tw } from 'twind';

const FirstSection = ({ titlu, subtitlu }: { titlu?: string; subtitlu?: string }) => {
  return titlu || subtitlu ? (
    <div className={tw(`mb-16 text-center`)}>
      {titlu ? (
        <p className={tw(`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-50`)}>{titlu}</p>
      ) : null}
      {subtitlu ? (
        <p className={tw(`text-base text-indigo-50 font-semibold tracking-wide uppercase`)}>{subtitlu}</p>
      ) : null}
    </div>
  ) : (
    <></>
  );
};

const SecondSection = ({
  titlu,
  subtitlu,
  paragrafe,
  children,
}: {
  titlu?: string | undefined;
  subtitlu?: any;
  paragrafe: string[] | ReactElement[];
  children?: JSX.Element | null;
}) => {
  return (
    <section className={styles.bg + ' ' + tw('w-full items-center py-8 min-h-screen flex flex-col')}>
      <FirstSection titlu={titlu} subtitlu={subtitlu} />
      {paragrafe?.map((p, idx) => {
        return (
          <div key={idx} className={`${styles.glass} ${tw('container h-full block w-11/12 lg:w-9/12 m-8 p-8')}`}>
            <p className={tw('font-extrabold text-justify indent-1.5 text-white')}>{p}</p>
          </div>
        );
      })}
      {children ? <>{children}</> : null}
    </section>
  );
};

export default SecondSection;
