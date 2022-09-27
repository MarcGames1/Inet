import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import ListSection from '@/components/list-section';
import ListWithPic from '@/components/list-pictures-section';
import Head from 'next/head';

// Importuri dinamice pentru FCP

const Calendly = dynamic(() => import('../components/calendly/'), {
  loading: () => <div>Loading...</div>,
});


import {homepage} from '../data/homepage'
import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Parteneri } from '@/components/parteneri';



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
          <Parteneri indemn={homepage.s4.indemn} titlu={homepage.s4.titlu} logoParteneri={homepage.s4.logoParteneri} />

          {/* <FeatureSection />
        <CasesSection />
        <SocialProof />
      <PricingTable /> */}
        </main>
      </Page>
    </Suspense>
  );
}
