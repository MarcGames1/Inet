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
 import SocialProof from '@/components/pricing-table';
// Importuri dinamice pentru FCP

const Calendly = dynamic(() => import('../components/calendly/'), {
  loading: () => <div>Loading...</div>,
});


const Page = dynamic(() => import('../components/page'),{
  loading: () => <div>Loading...</div>
});
const Header = dynamic(() => import('../components/header'), {
  loading: () => <div>Loading...</div>,
});
const ListSection = dynamic(() => import('../components/list-section'), {
  loading: () => <div>Loading...</div>,
});
const ListWithPic = dynamic(() => import('../components/list-pictures-section'), {
  loading: () => <div>Loading...</div>,
});
const Parteneri = dynamic(() => import('../components/parteneri'), {
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
        <Header h1={homepage.s1.h1} subtitlu={homepage.s1.subtitlu} variant={homepage.s1.cta} />
        <main>
          <Calendly />
          {/* <VideoSection /> */}
          <ListSection
            reverse={false}
            indemn={homepage.s2.indemn}
            titlu={homepage.s2.titlu}
            listItems={homepage.s2.lista}
            FeatureSvg={homepage.s2.featureSvg}
          />

          <ListWithPic indemn={homepage.s3.indemn} titlu={homepage.s3.titlu} listItems={homepage.s3.lista} />
          <Parteneri col={3} indemn={homepage.s4.indemn} titlu={homepage.s4.titlu} logoParteneri={homepage.s4.logoParteneri} />

          {/* <FeatureSection />
          <SocialProof />
        <CasesSection />
       
      <PricingTable /> */}
        </main>
      </Page>
    </Suspense>
  );
}
