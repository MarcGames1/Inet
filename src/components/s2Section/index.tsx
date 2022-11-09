import React, { ReactElement } from 'react';
import styles from './style.module.css';
import { tw } from 'twind';
import { SectionHeader } from '../SectionHeader/SectionHeader';

const SecondSection = ({
  titlu,
  subtitlu,
  paragrafe,
  children,
}: {
  titlu?: ReactElement | string | undefined;
  subtitlu?: any;
  paragrafe: string[] | ReactElement[];
  children?: JSX.Element | null;
}) => {
  return (
    <section className={styles.bg + ' ' + tw('w-full items-center py-8 min-h-screen flex flex-col')}>
      <SectionHeader titlu={titlu} style={'text-gray-50'} subtitlu={subtitlu} />
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
