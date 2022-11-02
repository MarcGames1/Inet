import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import {homepage} from '../../js/content'



// import Parteneri  from '@/components/parteneri';
// import Page from '@/components/page';
// import Header from '@/components/header';
// import ListSection from '@/components/list-section';
// import ListWithPic from '@/components/list-pictures-section';
 
// Importuri dinamice pentru FCP

const Calendly = dynamic(() => import('../components/calendly/InlineCalendly'), {
  loading: () => <div>Loading...</div>,
});


const Page = dynamic(() => import('../components/page'),{
  loading: () => <div>Loading...</div>
});


const CalendlySection = dynamic(() => import('../components/CTA').then(c => c.CalendlySection), {
    loading: () => <div>Loading...</div>,
})


const Header = dynamic(() => import('../components/header'), {
  loading: () => <div>Loading...</div>,
});
const SecondSection = dynamic(() => import('@/components/s2Section'), {
  loading: () => <div>Loading...</div>,
});
const ListWithPic = dynamic(() => import('../components/list-pictures-section'), {
  loading: () => <div>Loading...</div>,
});
const DcNoi = dynamic(() => import('@/components/DcNoi/index'), {
  loading: () => <div>Loading...</div>,
});




export default function Home() {
  return (
    <Suspense fallback={`Loading...`}>
      <Page>
        <NextSeo
          title="Agentie SEO •
          Marketing Online cu rezultate • IwebAgency.ro"
          description=" "
          canonical="https://iwebagency.ro/"
        />
        <Header
          h1={homepage.s1.h1}
          subtitlu={homepage.s1.subtitlu}
          variant={homepage.s1.cta}
          indemn={homepage.s1.indemn}
        />

        <main>
          {/* <VideoSection /> */}
          {/* <FeatureSection
            // reverse={false}
            indemn={homepage.s2.indemn}
            h2={homepage.s2.titlu}
            list={homepage.s2.lista}
            // FeatureSvg={homepage.s2.featureSvg}
          /> */}
          <SecondSection titlu={homepage.S2.titlu} paragrafe={homepage.S2.paragrafe} />
          <ListWithPic indemn={homepage.s3.indemn} titlu={homepage.s3.titlu} listItems={homepage.s3.lista} />
          <DcNoi title={homepage.dcNoi.titlu} items={homepage.dcNoi.items} />
          <ListWithPic indemn={homepage.s4.indemn} titlu={homepage.s4.titlu} listItems={homepage.s4.lista} />
          <CalendlySection
            titlu={'Hai sa ne cunoastem!'}
            text={
              'Vom stabili impreuna  strategia optima de marketing online de urmat pentru ca business-ul tau sa obtina performantele pe care doresti sa le atingi.'
            }
            btntxt={undefined}
          />
          
          {/* <Parteneri col={2} indemn={homepage.s4.indemn} titlu={homepage.s4.titlu} logoParteneri={homepage.s4.logoParteneri} /> */}

          {/* <SocialProof />
          <CasesSection /> */}
        </main>
      </Page>
    </Suspense>
  );
}
