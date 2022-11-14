import { NextSeo } from 'next-seo'
import React from 'react'
import { tw } from 'twind'


const nume_site = 'https://iwebagency.ro/'
const Legal = () => {
  return (<>
    <NextSeo
      title="Termeni Si Conditii • IwebAgency.ro"
      description="termeni si conditii"
      canonical="https://iwebagency.ro/termeni-conditii/"
      robotsProps={'noindex, follow'}
    />




    <div>
      <h1>Conditii Generale pentru utilizarea site-ului {nume_site}

</h1>

      <h2 className={tw(`py-5 text-gray-900 text-base font-bold mb-1`)} >ACCEPTAREA CONDITIILOR</h2>

      <p >Prin accesarea acestui site web si/sau a oricarei pagini a acestuia sunteti de acord cu aceste conditii de utilizare. Daca nu sunteti de acord cu acesti termeni si conditii de utilizare, nu accesati acest site.</p>
    
      <h2 className={tw(`py-5 text-gray-900 text-base font-bold mb-1`) }>DESCRIEREA SERVICIILOR</h2>

      <p>Siteul nostru va pune la dispozitie informatiile din acest site web in scop informativ general si nu garanteaza de exactitatea lor la un moment dat, desi se va incerca pe cat posibil ca la publicarea lor pe site toate informatiile sa fie exacte.</p>

      <h2 className={tw(`py-5 text-gray-900 text-base font-bold mb-1`)} >INTRODUCERE</h2>
    
      Prezentele Conditii Generale definesc conditiile de utilizare a site-ului {nume_site} de catre potentialii vizitatori sau clienti. Accesând si navigând pe acest site, acceptati termenii de utilizare descrisi în continuare.
    </div>
  </>
  )
}

export default Legal