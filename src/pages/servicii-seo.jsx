import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { serviciiSeo } from '../../js/content';
import { homepage } from '../../js/content';
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Parteneri from '@/components/parteneri';
import Head from 'next/head';

// Importuri dinamice pentru FCP

const CalendlySection = dynamic(() => import('../components/CTA').then((c) => c.CalendlySection), {
  loading: () => <div>Loading...</div>,
});

const Page = dynamic(() => import('../components/page'), {
  loading: () => <div>Loading...</div>,
});

const Header = dynamic(() => import('../components/header/index.jsx'), {
  loading: () => <div>Loading...</div>,
});
const ListSection = dynamic(() => import('../components/list-section'), {
  loading: () => <div>Loading...</div>,
});
const ListWithPic = dynamic(() => import('../components/list-pictures-section'), {
  loading: () => <div>Loading...</div>,
});
const FeatureSection = dynamic(() => import('../components/feature-section'), {
  loading: () => <div>Loading...</div>,
});
import SecondSection from '@/components/s2Section';
import { CalendlyNoPic } from '@/components/CTA';
import DcNoi from '@/components/DcNoi';
import Section2 from '@/components/servicii-seo/section2';
import ListaCuBife from '@/components/servicii-seo/listaCuBife';

const ServiciiSeo = () => {
 const router = useRouter();
  return (
    <Suspense fallback={`Loading...`}>
      <Page>
        <NextSeo
          title="Servicii SEO •
          Care aduc rezultate ⭐ MarWeb.ro"
          description="Servicii Seo care genereaza rezultate exceptionale •  aducem trafic organic si crestem profitul ✔️ Solicita acum o oferta  ⭐ MarWeb.ro."
          canonical={`${process.env.DOMAIN}${router.pathname}`}
        />

        <main>
          <Header
            h1={serviciiSeo.s1.h1}
            subtitlu={serviciiSeo.s1.subtitlu}
            variant={serviciiSeo.s1.cta}
            indemn={undefined}
          />

          <Section2
            lead={serviciiSeo.s2.primaParte}
            heading={serviciiSeo.s2.a2aParte.title}
            paragrafe={serviciiSeo.s2.a2aParte.paragrafe}
            children={<CalendlySection titlu={'Dacă ți-aș spune că se poate și altfel?'} text={''} />}
          ></Section2>

          <ListaCuBife {...serviciiSeo.listaCuBife} />

          <CalendlySection
            text="SEO nu este doar despre aici și acum ci este mai degrabă despre viitor! Tu unde vrei să fii? Acolo unde sunt clienții tăi sau nicăieri?!"
            titlu={'Investeste in vizibilitatea afacerii tale!'}
          />
          <FeatureSection
            h2={serviciiSeo.servicii.h2}
            indemn={serviciiSeo.servicii.indemn}
            list={serviciiSeo.servicii.listaServicii}
          />
          <ListWithPic listItems={serviciiSeo.s3.lista} titlu={serviciiSeo.s3.titlu} indemn={serviciiSeo.s3.indemn} />
          <CalendlySection
            wa
            titlu="Vrei un business performant?"
            text={'Hai sa stabilim impreuna o strategie SEO optima prin care sa iti atingi obiectivele.'}
          />
        </main>
      </Page>
    </Suspense>
  );
};

export default ServiciiSeo;
