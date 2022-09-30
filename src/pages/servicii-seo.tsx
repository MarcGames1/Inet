import { NextSeo } from 'next-seo';
import { serviciiSeo } from '../../js/content';
import { homepage } from '../../js/content';
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Parteneri from '@/components/parteneri';
import Head from 'next/head';
// import Page from '@/components/page';
// import Header from '@/components/header';
// import ListSection from '@/components/list-section';
// import ListWithPic from '@/components/list-pictures-section';
// import CasesSection from '@/components/cases-section';
// import FeatureSection from '@/components/feature-section';


// Importuri dinamice pentru FCP

const Calendly = dynamic(() => import('../components/calendly/'), {
  loading: () => <div>Loading...</div>,
});

const Page = dynamic(() => import('../components/page/'), {
  loading: () => <div>Loading...</div>,
});

const Header = dynamic(() => import('../components/header/'), {
  loading: () => <div>Loading...</div>,
});
const ListSection = dynamic(() => import('../components/list-section'), {
  loading: () => <div>Loading...</div>,
});
const ListWithPic = dynamic(() => import('../components/list-pictures-section/'), {
  loading: () => <div>Loading...</div>,
});
const FeatureSection = dynamic(() => import('../components/feature-section/'), {
  loading: () => <div>Loading...</div>,
});




const ServiciiSeo = () => {
  return (
    <Suspense fallback={`Loading...`}>
      <Page>
        <NextSeo
          title="Servicii SEO •
          Marketing Online cu rezultate ⭐ IwebAgency.ro"
          description="Servicii Seo care genereaza rezultate exceptionale •  aducem trafic organic si crestem profitul ✔️ Solicita acum o oferta  ⭐ IwebAgency.ro."
          canonical="https://iwebagency.ro/"
        />

        <Header h1={serviciiSeo.s1.h1} subtitlu={serviciiSeo.s1.subtitlu} variant={serviciiSeo.s1.cta} />
        <main>
          <Calendly />
          <FeatureSection h2={serviciiSeo.s2.h2} indemn={serviciiSeo.s2.indemn} list={serviciiSeo.s2.listaServicii} />
          <ListWithPic listItems={serviciiSeo.s3.lista} titlu={serviciiSeo.s3.titlu} indemn={serviciiSeo.s3.indemn} />
        </main>
      </Page>
    </Suspense>
  );
};

export default ServiciiSeo;
