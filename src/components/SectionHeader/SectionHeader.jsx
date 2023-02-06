import { ReactElement } from 'react';
import { tw } from 'twind';

export const SectionHeader = ({
  titlu,
  subtitlu,
  style,
}) => {
  return titlu || subtitlu ? (
    <div className={tw(`mb-16 text-center`)}>
      {titlu ? <p className={tw(`mt-2 pb-2 text-2xl lg:text-5xl font-bold tracking-tight ${style}`)}>{titlu}</p> : null}
      {subtitlu ? (
        <p className={ tw(`text-base text-indigo-50 font-semibold tracking-wide uppercase`)}>{subtitlu}</p>
      ) : null}
    </div>
  ) : (
    <></>
  );
};
