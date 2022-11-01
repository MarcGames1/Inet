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

const Calendly = dynamic(() => import('../components/calendly/InlineCalendly'), {
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

import { CalendlyNoPic } from '@/components/CTA';


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
          <CalendlyNoPic
            text="Da, știu… majoritatea agențiilor de marketing digital te aduc pe prima pagină doar pentru simplul fapt că îți cer bugete impresionante de marketing. Și de cele mai multe ori, nici nu ai banii ăștia. Când ajungi la fundul sacului și reclamele tale nu mai funcționează… prima pagina va deveni doar o amintire frumoasă. Clienții tăi nu vor mai afla niciodată despre tine. 
"
            titlu="Nu asta îți dorești, nu-i așa?"
          />
          <FeatureSection h2={serviciiSeo.s2.h2} indemn={serviciiSeo.s2.indemn} list={serviciiSeo.s2.listaServicii} />
          <ListWithPic listItems={serviciiSeo.s3.lista} titlu={serviciiSeo.s3.titlu} indemn={serviciiSeo.s3.indemn} />
        </main>
      </Page>
    </Suspense>
  );
};

export default ServiciiSeo;
