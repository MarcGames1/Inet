import React from 'react';
import { tw } from 'twind';
import Image from 'next/image';

const Parteneri = ({
  titlu,
  indemn,
  logoParteneri,
  col,
}: {
  titlu: string;
  indemn: string;
  logoParteneri: any;
  col?: number;
}) => {
  let colsnum = NaN;

  col ? (colsnum = col) : (colsnum = 4);

  return (
    <section id="list" className={tw(`lg:py-28 pt-28 overflow-hidden`)}>
      <div className={tw(`mb-16 text-center`)}>
        <span className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>{indemn}</span>
        <h2 className={tw(`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>{titlu}</h2>
      </div>
      <div className={tw(`grid grid-cols-${colsnum} place-content-center place-items-center gap-4`)}>
        {/* <div className={tw('w-2/6 h-4/6')}><Image height={128} width={161} layout='responsive' src={'/logoClienti/avocatdorubotea.webp'} /></div> */}
        {logoParteneri.map((logo: any) => (
          <div
            style={{ display: 'flex', justifyContent: 'center' }}
            key={logo.url}
            className={tw('self-center place-items-center place-self-center w-3/6 h-4/6')}
          >
            <Image height={logo.height} width={logo.width} layout="intrinsic" src={logo.url} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Parteneri;
