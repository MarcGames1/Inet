import Page from '@/components/page';
import Head from 'next/head';
import React, { Suspense } from 'react';


export default function Home() {
  return (
    <Suspense fallback={`Loading...`}>
      <Head >
        <meta name="description" content="" />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <Page>
       
       <h1>Aceasta Pagina va fi disponibila incurand</h1>
       
      </Page>
    </Suspense>
  );
}
