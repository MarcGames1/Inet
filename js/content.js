import { tw } from 'twind';
import FeatureSvg from '../src/constants/svg/features.svg';
import TeamworkSvg from '../src/constants/svg/teamwork.svg';
import SuccessfulTaskCompletionSvg from '../src/constants/svg/successfulTaskCompletion.svg';
import StatisticsSvg from '../src/constants/svg/statistics.svg';
import HelloSvg from '../src/constants/svg/hello.svg';

import WebDevSvg from '../src/constants/svg/webdev.svg';
import SeoSvg from '../src/constants/svg/seo.svg';
import AdsSvg from '../src/constants/svg/ads.svg';
import ContentSvg from '../src/constants/svg/content.svg';

const pic1 = '/studiiDeCaz/StudiuCaz1-1006x392.jpg';
const pic2 = '/studiiDeCaz/StudiuCaz1.2-1068x407.jpg';
const pic3 = '/studiiDeCaz/StudiuCaz1.3-927x385.png';
const pic4 = '/studiiDeCaz/seo tehnic-1600x1183.jpeg';

 const important = tw('font-semibold');

 

export const homepage = {
  s1: {
    h1: 'Agentie Marketing Online ',
    subtitlu: (
      <>
        Te ajutăm să-ți <span className={important}>crești veniturile</span> și să obții notorietate în mediul online
        prin optimizarea site-ului pentru motoarele de căutare.
      </>
    ),
    indemn: (
      <>
        Vrei să-ți <span className={important}>crești numărul vizitelor pe site </span>fără să investești bugete enorme
        în reclame?
      </>
    ),
    cta: 'default',
  },
  S2: {
    titlu: <>FII RELEVANT ÎN ONLINE</>,
    paragrafe: [
      <>
        Când potențiatul tău client intră pe Google, a decis deja că are nevoie de{' '}
        <span className={important}>serviciile pe care tu le oferi</span> . Nu mai trebuie să-l convingi de nimic.
        Întrebarea este, <span className={important}>cine va apărea în rezultatele căutărilor</span>? Tu sau concurența
        ta?
      </>,
      <>
        <span className={important}>Dacă nu ești vizibil în online, vei pierde în continuare timp și bani</span>, în
        timp ce concurența ta va continua să aibă rezultate . Prin agenția noastră de marketing online te putem ajuta să
        te diferențiezi de concurență și să devii destinația preferată a celor care au nevoie de produsul sau serviciul
        tău!
      </>,
      <>Nu este suficient să fii doar listat în online atâta timp cât nimeni nu știe că exiști!</>,
    ],
  },
  dcNoi: {
    titlu: 'DE CE SĂ COLABOREZI CU NOI?',
    items: [
      {
        titlu: 'Dezvoltăm parteneriate durabile',
        p:
          'Clienții noștri nu sunt simpli clienți ci devin partenerii noștri. Ne implicăm activ în fiecare proiect și dezvoltăm parteneriate bazate pe încredere și rezultate concrete.',
      },
      {
        titlu: 'Suntem transparenți',
        p:
          'Nu promitem imposibilul. Analizăm atent oportunitățile de dezvoltare specifice domeniului tău și adaptăm strategiile de marketing în funcție de obiectivele tale de business și de bugete.',
      },
      {
        titlu: 'Comunicare și proactivitate',
        p:
          'O relație de business solidă se construiește prin comunicare. Comunicăm cu partenerii noștri ori de câte ori este nevoie pentru a ne asigura că nu pierdem nicio oportunitate de creștere dar și pentru a ține sub control provocările care apar pe parcursul colaborării.',
      },
      {
        titlu: 'Analiză și raportare',
        p:
          'Analizăm rezultatele constant și adaptăm obiectivele strategice în funcție de performanțele realizate. Te ținem la curent cu metricii importanți rezultați în urma campaniilor implementate, astfel încât să știi în orice moment unde te afli și care sunt perspectivele de viitor.',
      },
    ],
  },
  s3: {
    indemn: 'Vrei să-ți crești vizitele pe site și vânzările? ',
    titlu: 'Uite cum te putem ajuta să-ți atingi obiectivele:',
    lista: [
      {
        title: `Optimizare SEO`,
        description: (
          <>
            Îți aducem site-ul pe <span className={important}> prima pagină</span> prin strategii complete și
            personalizate adaptate business-ului tău. Nu te ajutăm doar să-ți crești numărul de vizitatori. Ne asigurăm
            că site-ul tău este optimizat și pregătit pentru ca o simpla vizită să se transforme într-o conversie.
          </>
        ),
        href: '/servicii-seo',
        Icon: SeoSvg,
      },
      {
        title: `GOOGLE ADS`,
        description: (
          <>
            Îți promovăm și creștem afacerea prin{' '}
            <span className={important}>campanii Google ADS optimizate, la costuri minime</span> și în concordanță cu
            strategia ta de business. Setăm publicul țintă, concepem mesaje de impact și gestionăm bugetele eficient,
            astfel încât să ne asigurăm că vei avea rezultate măsurabile.
          </>
        ),
        Icon: AdsSvg,
      },
      {
        title: `STRATEGIE DE CONȚINUT`,
        description: (
          <>
            <span className={important}>Realizăm articole de blog optimizate Seo</span> pentru a atrage către site-ul
            tău trafic relevant ce crește rata de conversie și poziționarea brandului tău în piață. Colaborăm cu
            creatori de conținut pasionați care au experiență notabilă în domeniu și au capacitatea de a traduce în
            cuvinte esența business-ului tău.
          </>
        ),
        Icon: ContentSvg,
      },
      {
        title: `CREARE SITE WEB`,
        description: (
          <>
            Asigurăm servicii complete de <span className={important}>creare site-uri web performante</span>, ușor de
            administrat, complet funcționale, <span className={important}>pregătite să vândă</span> și să te poziționeze
            drept autoritate în piață. Integrăm misiunea și viziunea afacerii tale într-un design responsive cu ajutorul
            celor mai noi tehnologii.
          </>
        ),
        Icon: WebDevSvg,
      },
    ],
    featureSvg: FeatureSvg,
  },

  s4: {
    indemn: 'Noi suntem partenerii afacerii tale',
    titlu: 'Cum va decurge colaborarea cu agentia de marketing online MarWeb',
    lista: [
      {
        title: `FACEM CUNOȘTINȚĂ`,
        description: (
          <>
            `Programezi o ședință 1 la 1 - <span className={important}>complet gratuită</span>, în care îți vom solicita
            câteva informații relevante pentru a reuși să identificăm nevoile tale de business.
          </>
        ),
        Icon: HelloSvg,
      },
      {
        title: `STABILIM OBIECTIVELE ȘI PLANUL DE ACȚIUNE`,
        description: (
          <>
            <span className={important}>
              Stabilim obiective strategice și măsurabile pe termen scurt, mediu și lung
            </span>
            . Identificăm cuvintele cheie pe care putem crește și acțiunile necesare atât din partea noastră cât și a
            ta.
          </>
        ),
        Icon: TeamworkSvg,
      },
      {
        title: `VEZI REZULTATELE ÎN TIMP REAL`,
        description: (
          <>
            Vei fi în permanență în control și vei putea verifica rezultatele tuturor strategiilor implementate, precum
            și evoluția poziției site-ului tău în căutările Google, pe cuvintele cheie stabilite.
          </>
        ),
        Icon: StatisticsSvg,
      },
      {
        title: `CALL ȘI PREZENTARE RAPORT LUNAR`,
        description: (
          <>
            La finalul fiecărei luni, îți prezentăm un raport complet de activitate: ce acțiuni am întreprins, care sunt
            rezultatele și ce urmează să realizăm în luna următoare pentru a atinge obiectivele stabilite.
          </>
        ),
        Icon: SuccessfulTaskCompletionSvg,
      },
    ],
  },
  //   s4: {
  //     titlu: 'O parte din afacerile pe care le-am ajutat',
  //     indemn: '',
  //     logoParteneri: [
  //       {
  //         url: '/logoClienti/avocatdorubotea.webp',
  //         width: 161,
  //         height: 128,
  //       },

  //       // {
  //       //   url: '/logoClienti/celmic.webp',
  //       //   width: 400,
  //       //   height: 100,
  //       // },

  //       // {
  //       //   url: '/logoClienti/jadflamande.jpg',
  //       //   width: 300,
  //       //   height: 192,
  //       // },

  //       // {
  //       //   url: '/logoClienti/afrodytestyle.webp',
  //       //   width: 100,
  //       //   height: 100,
  //       // },
  //     ],
  //   },
  //
};
    
   

export const serviciiSeo = {
  s1: {
    h1: 'SERVICII OPTIMIZARE SEO ',
    subtitlu: (
      <>
        Îți aducem site-ul pe <span className={important}>prima pagină în Google</span> prin servicii de optimizare SEO
        și garantăm recupererea investiției în maxim 8 luni.
      </>
    ),
    cta: 'calendlyButton',
  },
  s2: {
    primaParte: [
      <>
        <span className={important}>SEO</span> - Optimizarea pentru motoarele de căutare este esențială dacă vrei ca{' '}
        <span className={important}>publicul tău țintă să afle despre tine</span> și să{' '}
        <span className={important}>generezi vânzări</span> mai mari, fără să investești bugete considerabile în
        reclame.
      </>,
      <>
        Dacă ai un business la început de drum, cu siguranță nu ai bugete impresionante pentru reclame. Știu că e
        frustrant… investești timp și bani în afacerea ta, nici nu mai știi când ai petrecut un weekend întreg alături
        de cei dragi și cu toate acestea… nu ai rezultate.{' '}
      </>,
    ],
    a2aParte: {
      title: 'De ce se întâmplă asta? ',
      paragrafe: [
        'Potențialii tăi clienți nu știu cine ești. Și să fim serioși. Concurența este acerbă. În 2021 erau 1,88 miliarde de site-uri web online și numărul lor a tot crescut de atunci. Imaginează-ți că sunt milioane de competitori pe nișa ta, care oferă fix aceleași servicii și se adresează unui public țintă similar cu al tău. Probabil știi deja că pe Google, doar cei care apar pe prima pagină sunt relevanți. De câte ori ai accesat și pagina 2 atunci când ai fost interesat de un serviciu sau produs anume? De mult prea puține ori sau poate chiar niciodată.',
        'Da, știu… majoritatea agențiilor de marketing digital te aduc pe prima pagină doar pentru simplul fapt că îți cer bugete impresionante de marketing. Și de cele mai multe ori, nici nu ai banii ăștia. Când ajungi la fundul sacului și reclamele tale nu mai funcționează… prima pagina va deveni doar o amintire frumoasă. Clienții tăi nu vor mai afla niciodată despre tine.',
      ],
    },
  },

  listaCuBife: {
    title: 'Serviciile SEO ar trebui să fie o prioritate în strategia ta de marketing!',
    paragrafe: [
      'Ajungi pe prima pagina în căutările google, exiști. Nu ești acolo, nu exiști!',
      'Dacă site-ul tău este optimizat SEO, vei primi trafic relevant din căutările organice fără să investești vreun ban în reclame deoarece Google este cel mai mare motor de căutare din întreaga lume;',
      'Vei construi mult mai ușor încrederea și autoritatea în fața clienților tăi, deoarece o parte importantă din strategia SEO presupune ca site-ul tău să aibă conținut relevant și util pentru publicul țintă;',
      'Clienții tăi potențiali vor veni natural către tine deoarece vei vorbi pe “limba” lor dacă vei înțelege care este comportamentul lor de cumpărare și la ce stimuli reacționează sau nu;',
      'Un serviciu SEO realizat de o echipă profesionistă, presupune și să îi oferi potențialului tău client o experiență de utilizare (UX) bună pe site-ul tău; acest lucru te va ajuta să-ți crești și vânzările dar și autoritatea brandului tău;',
      'Site-ul tău va fi optimizat pentru căutările locale (anumite cartiere, orașe, regiuni, state – în funcție de locația/locațiile fizice), ceea ce înseamnă că potențialii tăi clienți te vor găsi mult mai ușor și astfel îți vei creste vânzările;',
      'Serviciile SEO nu trebuie privite ca un cost ci mai degrabă ca o investiție pe termen lung; investești în SEO pentru câteva luni și rezultatele se păstrează ani de zile;',
      'Deși ți se poate părea scump la început, te asigur că pe termen lung este mult mai ieftin decât să arunci la nesfârșit bugete în campanii plătite care (uneori) nu aduc nici rezultate.',
    ],
  },

  servicii: {
    h2: 'Serviciile SEO care te vor propusa pe prima pagina din Google',
    indemn: 'CUM TE PUTEM AJUTA CONCRET?',
    listaServicii: [
      {
        title: 'Keyword Research',
        description:
          'Studiem cuvintele cheie relevante pentru afacerea ta și identificăm oportunități neexplorate de către concurență, astfel încât să urci rapid în clasament.',
      },
      {
        title: 'SEO ON PAGE',
        description:
          'Optimizăm conținutul de pe site-ul tău pe baza cuvintelor cheie identificate și sugerăm îmbunătățiri, astfel încât să fii relevant și să crești rata de conversie. ',
      },

      {
        title: 'SEO TEHNIC',
        description:
          'Identificăm eventualele probleme pe care le are site-ul: pagini 404, canibalizare, conținutul duplicat, erori de redirecționare, erori de server sau de client, etc.',
      },
      {
        title: 'SEO Off Page',
        description:
          'Punem la punct o strategie de link building, alegem site-urile pe care le vom publica și eliminăm backlinkurile toxice. ',
      },
      {
        title: 'SEO Local',
        description:
          'Realizam SEO local la nivel de site și optimizăm contul de Google My Business pentru a ne asigura că potențialii tăi clienți te vor găsi ușor.',
      },
      {
        title: 'UX',
        description:
          'Îmbunătățim design-ul site-ului sau optăm pentru redesign complet și identificăm alte oportunități prin care putem crește rata de conversie.',
      },
    ],
  },
  s3: {
    indemn: 'OBIECTIVELE TALE – MISIUNEA NOASTRĂ',
    titlu: 'Uite ce rezultate au cei care au colaborat cu noi:',
    lista: [
      {
        title: `Google Search Console`,
        description: ``,
        Image: {
          location: pic1,
          width: 1006,
          height: 392,
        },
      },
      {
        title: `Google Analytics`,
        description: ``,
        Image: {
          location: pic2,
          width: 1068,
          height: 407,
        },
      },
      {
        title: `SESIUNI`,
        description: ``,
        Image: {
          location: pic3,
          width: 987,
          height: 385,
        },
      },
      {
        title: `SEO TEHNIC`,
        description: ``,
        Image: {
          location: pic4,
          width: 1600,
          height: 1183,
        },
      },
    ],
  },
};

