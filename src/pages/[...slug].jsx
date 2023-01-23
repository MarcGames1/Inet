import Page from '../components/page';
import Head from 'next/head';
import React, { Suspense } from 'react';
import ErrorPage from '../components/ErrorPage'
export default function Home() {
  return (
    <Suspense fallback={`Loading...`}>
      <Head>
        <meta name="description" content="" />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <Page><ErrorPage /></Page>
    </Suspense>
  );
}
