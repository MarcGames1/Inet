import React, { ReactElement } from 'react';
import styles from './style.module.css';
import { tw } from 'twind';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { typography } from '@/../js/utils';
const SecondSection = ({
  titlu,
  subtitlu,
  paragrafe,
  children,
}) => {
  return (
    <section className={ + ' ' + tw('w-full items-center py-8 min-h-screen flex flex-col')}>
      <SectionHeader titlu={titlu} style={'text-gray-700'} subtitlu={subtitlu} />

      <div className={tw(`flex flex-col items-center gap-16`)}>
      {paragrafe?.map((p, idx) => {
        return (
          <div key={idx} className={`${tw('container w-11/12 lg:w-6/12')}`}>
            <p className={typography.p.default}>{p}</p>
          </div>
        );
      })}
      </div>
      {children ? <>{children}</> : null}
    </section>
  );
};

export default SecondSection;
