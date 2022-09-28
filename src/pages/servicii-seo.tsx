import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import ListSection from '@/components/list-section';
import ListWithPic from '@/components/list-pictures-section';
import CasesSection from '@/components/cases-section';
import FeatureSection from '@/components/feature-section';
import Head from 'next/head';
import Script from 'next/script';
// Importuri dinamice pentru FCP

const Calendly = dynamic(() => import('../components/calendly/'), {
  loading: () => <div>Loading...</div>,
});
import { homepage } from '../data/content';
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Parteneri  from '@/components/parteneri';
import { serviciiSeo } from '@/data/homepage';




const ServiciiSeo = () => {
  return (
    <Page>
      <NextSeo
        title="Servicii SEO •
          Marketing Online cu rezultate ⭐ IwebAgency.ro"
        description="Servicii Seo care genereaza rezultate exceptionale •  aducem trafic organic si crestem profitul ✔️ Solicita acum o oferta  ⭐ IwebAgency.ro."
        canonical="https://iwebagency.ro/"
      />

      <Header h1={serviciiSeo.s1.h1} subtitlu={serviciiSeo.s1.subtitlu} variant={serviciiSeo.s1.cta} />
      <Calendly />
      <FeatureSection h2={serviciiSeo.s2.h2} indemn={serviciiSeo.s2.indemn} list={serviciiSeo.s2.listaServicii} />
    </Page>
  );
};

export default ServiciiSeo;
