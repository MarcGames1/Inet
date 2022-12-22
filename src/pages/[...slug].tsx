import Page from '@/components/page';
import Head from 'next/head';
import React, { Suspense } from 'react';
import Image from 'next/image';
import { tw } from 'twind';
export default function Home() {
  return (
    <Suspense fallback={`Loading...`}>
      <Head>
        <meta name="description" content="" />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <Page>
        <div className="flex container items-center">
          <span className={tw('hidden lg:flex text-red-500 font-bold text-9xl')}>404</span>

          <div className={tw('p-5 h-2/6 flex flex-col m-2 m-auto h-2/6')}>
            <h1 className={tw('text-center m-3 font-semibol text-3xl')}>Aceasta Pagina va fi disponibila incurand</h1>
            <Image objectFit="contain" layout="intrinsic" width={700} height={400} src="/loading.gif" />
          </div>
        </div>
      </Page>
    </Suspense>
  );
}
