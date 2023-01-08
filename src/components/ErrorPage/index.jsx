import React from 'react';
import Image from 'next/image';
import { tw } from 'twind';

const ErrorPage = () => {
  return (
    <div className="flex container items-center">
      <span className={tw('hidden lg:flex text-red-500 font-bold text-9xl')}>404</span>

      <div className={tw('p-5 h-2/6 flex flex-col m-2 m-auto h-2/6')}>
        <h1 className={tw('text-center m-3 font-semibol text-3xl')}>Ooops ... avem o mica problema tehnica</h1>
        <Image objectFit="contain" layout="intrinsic" width={700} height={400} src="/loading.gif" />
      </div>
    </div>
  );
};

export default ErrorPage;
