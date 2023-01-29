import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { serviciiSeo } from '../../js/content';
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Page from '../components/page'
import { tw } from 'twind';
import { Whatsapp, Phone, Mail } from '../components/svg';


const Contact = () => {


  const router = useRouter()
  return (
    <Suspense fallback={`Loading...`}>
      <Page>
        <NextSeo
          title="Contact ⭐ MarWeb.ro"
          description="Servicii Seo care genereaza rezultate exceptionale •  aducem trafic organic si crestem profitul ✔️ Solicita acum o oferta  ⭐ MarWeb.ro."
          canonical={`${process.env.DOMAIN}${router.pathname}`}
        />
        <section className={tw('flex flex-col items-center m-auto justify-center')}>
          <h1
            className={tw(
              'text-center font-sans font-bold text-2xl text-center leading-relaxed mt-10 text-gray-600 leading-8 ',
            )}
          >
            Contact Marweb Marketing Agency
          </h1>
          <div className={tw(' m-4 md:justify-center container flex flex-col lg:flex-row md:flex-row gap-4')}>
            <ContactItem href={'mailto:alexandru@marweb.ro'} SVG={Mail} text={'alexandru@marweb.ro'} />
            <ContactItem href={'tel:0750472447'} SVG={Phone} text={'0750472447'} />
            <ContactItem href={'https://wa.me/+40750472447'} SVG={Whatsapp} text={'0750472447'} />
          </div>
          
            
        </section>
      </Page>
    </Suspense>
  );
};

export default Contact;




const ContactItem = ({href, SVG, text}) =>{

  return (
    <>
      <div className={tw('flex justify-center text-center bg-purple-300')}>
        <a href={href} className={tw('flex items-center')}>
          <span className={tw('m-3')}>
            <SVG width={50} height={50} />
          </span>{' '}
          <span className={tw('m-3')}>{text}</span>
        </a>
      </div>
    </>
  );
}