import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';
import { homepage } from '../../js/content';

// '../components/CTA'
// Importuri dinamice pentru FCP

const DcNoi = dynamic(() => import('@/components/DcNoi/index'), {
 
  suspense: true,
});

const Page = dynamic(() => import('../components/page'), {
 
  suspense: true,
});
const CalendlySection = dynamic(() => import('../components/CTA').then((c) => c.CalendlySection), {
  suspense: true,
});
const Header = dynamic(() => import('../components/header'), {
  suspense: true,
});
const ListWithPic = dynamic(() => import('../components/list-pictures-section'), {
  suspense: true,
});

// import { CalendlySection } from '../components/CTA';
import SecondSection from '@/components/s2Section';

export default function Home() {
  return (
    <Suspense fallback={`Loading...`}>
      <Page>
        <NextSeo
          title="Agentie Marketing Online cu rezultate • IwebAgency.ro"
          description="Agentie Marketing Online care genereaza rezultate exceptionale •  aducem trafic organic si crestem profitul ✔️ Solicita acum o oferta  ⭐ IwebAgency.ro."
          canonical="https://iwebagency.ro/"
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
