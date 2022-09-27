import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import ListSection from '@/components/list-section';
import ListWithPic from '@/components/list-pictures-section';
import Head from 'next/head';

// Importuri dinamice pentru FCP

const Calendly = dynamic(() => import('../components/calendly/'), {
  suspense: true,
});
import { homepage } from '../data/content';
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Parteneri } from '@/components/parteneri';
import { serviciiSeo } from '@/data/homepage';




const ServiciiSeo = () => {
  return (
    <Page>
      <NextSeo
        title="Servicii SEO •
          Marketing Online cu rezultate ⭐ IwebAgency.ro"
        description="Servicii Seo care genereaza rezultate exceptionale •  aducem trafic organic si crestem profitul ✔️ Solicita acum o oferta  ⭐ IwebAgency.ro."
      />
      <Suspense fallback={`Loading...`}>
        <Head>
          <script
            type="text/javascript"
            src="https://assets.calendly.com/assets/external/widget.js"
            defer
            async
          ></script>
        </Head>
        <Header h1={serviciiSeo.s1.h1} subtitlu={serviciiSeo.s1.subtitlu} variant={serviciiSeo.s1.cta} />
        <Calendly />
      </Suspense>
    </Page>
  );
};

export default ServiciiSeo;
