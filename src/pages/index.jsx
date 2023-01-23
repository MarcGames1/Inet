import React, { ComponentType, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';

// '../components/CTA'
// Importuri dinamice pentru FCP

const Page = dynamic(() => import('../components/page'));
const DcNoi = dynamic(() => import('../components/DcNoi/index'));
const Header = dynamic(() => import('../components/header'));
const ListWithPic = dynamic(() => import('../components/list-pictures-section'));
const SecondSection = dynamic(() => import('../components/s2Section'));

const CalendlySection = dynamic(() => import('../components/CTA').then((c) => c.CalendlySection));

import { homepage } from '../../js/content';


export default function Home() {
  return (
    <Suspense fallback={`Loading...`}>
      <Page>
        <NextSeo
          title="Agentie Marketing Online cu rezultate • MarWeb.ro"
          description="Agentie Marketing Online care genereaza rezultate exceptionale •  aducem trafic organic si crestem profitul ✔️ Solicita acum o oferta  ⭐ MarWeb.ro."
          canonical={`${process.env.DOMAIN}/`}
        />
        <Header
          h1={homepage.s1.h1}
          subtitlu={homepage.s1.subtitlu}
          variant={homepage.s1.cta}
          indemn={homepage.s1.indemn}
        />

        <main>
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
            wa
          />
        </main>
      </Page>
    </Suspense>
  );
}
