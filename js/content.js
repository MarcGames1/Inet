import FeatureSvg from '@/constants/svg/features.svg';
import TeamworkSvg from '@/constants/svg/teamwork.svg';
import SuccessfulTaskCompletionSvg from '@/constants/svg/successfulTaskCompletion.svg';
import StatisticsSvg from '@/constants/svg/statistics.svg';
import HelloSvg from '@/constants/svg/hello.svg';

import WebDevSvg from '@/constants/svg/webdev.svg';
import SeoSvg from '@/constants/svg/seo.svg';
import AdsSvg from '@/constants/svg/ads.svg';
import ContentSvg from '@/constants/svg/content.svg';

const pic1 = '/studiiDeCaz/StudiuCaz1-1006x392.jpg';
const pic2 = '/studiiDeCaz/StudiuCaz1.2-1068x407.jpg';
const pic3 = '/studiiDeCaz/StudiuCaz1.3-927x385.png';
const pic4 = '/studiiDeCaz/seo tehnic-1600x1183.jpeg';
export const homepage = {
  s1: {
    h1: 'Agentie SEO si Marketing Online',
    subtitlu:
      'Te ajutăm să-ți crești veniturile și să obții notorietate în mediul online prin optimizarea site-ului pentru motoarele de căutare.',
    indemn: 'Vrei să-ți crești numărul vizitelor pe site fără să investești bugete enorme în reclame?',
    cta: 'default',
  },
  S2: {
    titlu: 'FII RELEVANT ÎN ONLINE',
    p1:
      'Când potențiatul tău client intră pe Google, a decis deja că are nevoie de serviciile pe care tu le oferi. Nu mai trebuie să-l convingi de nimic. Întrebarea este, cine va apărea în rezultatele căutărilor? Tu sau concurența ta?',
    p2:
      'Dacă nu ești vizibil în online, vei pierde în continuare timp și bani, în timp ce concurența ta va continua să aibă rezultate. Prin agenția noastră de marketing online te putem ajuta să te diferențiezi de concurență și să devii destinația preferată a celor care au nevoie de produsul sau serviciul tău!',
    p3: 'Nu este suficient să fii doar listat în online atâta timp cât nimeni nu știe că exiști!',
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
        description: `Îți aducem site-ul pe prima pagină prin strategii complete și personalizate adaptate business-ului tău. Nu te ajutăm doar să-ți crești numărul de vizitatori. Ne asigurăm că site-ul tău este optimizat și pregătit pentru ca o simpla vizită să se transforme într-o conversie.`,
        href: '/servicii-seo',
        Icon: SeoSvg,
      },
      {
        title: `GOOGLE ADS`,
        description: `Îți promovăm și creștem afacerea prin campanii Google ADS optimizate, la costuri minime și în concordanță cu strategia ta de business. Setăm publicul țintă, concepem mesaje de impact și gestionăm bugetele eficient, astfel încât să ne asigurăm că vei avea rezultate măsurabile.`,
        Icon: AdsSvg,
      },
      {
        title: `STRATEGIE DE CONȚINUT`,
        description: `Realizăm articole de blog optimizate Seo pentru a atrage către site-ul tău trafic relevant ce crește rata de conversie și poziționarea brandului tău în piață. Colaborăm cu creatori de conținut pasionați care au experiență notabilă în domeniu și au capacitatea de a traduce în cuvinte esența business-ului tău.`,
        Icon: ContentSvg,
      },
      {
        title: `CREARE SITE WEB`,
        description: `Asigurăm servicii complete de creare site-uri web performante, ușor de administrat, complet funcționale, pregătite să vândă și să te poziționeze drept autoritate în piață. Integrăm misiunea și viziunea afacerii tale într-un design responsive cu ajutorul celor mai noi tehnologii.`,
        Icon: WebDevSvg,
      },
    ],
    featureSvg: FeatureSvg,
  },

  s4: {
    indemn: 'Noi suntem partenerii afacerii tale',
    titlu: 'Cum va decurge colaborarea cu noi',
    lista: [
      {
        title: `FACEM CUNOȘTINȚĂ`,
        description: `Programezi o ședință 1 la 1 - complet gratuită, în care îți vom solicita câteva informații relevante pentru a reuși să identificăm nevoile tale de business. `,
        Icon: HelloSvg,
      },
      {
        title: `STABILIM OBIECTIVELE ȘI PLANUL DE ACȚIUNE`,
        description: `Stabilim obiective strategice și măsurabile pe termen scurt, mediu și lung. Identificăm cuvintele cheie pe care putem crește și acțiunile necesare atât din partea noastră cât și a ta.`,
        Icon: TeamworkSvg,
      },
      {
        title: `VEZI REZULTATELE ÎN TIMP REAL`,
        description: `Vei fi în permanență în control și vei putea verifica rezultatele tuturor strategiilor implementate, precum și evoluția poziției site-ului tău în căutările Google, pe cuvintele cheie stabilite.`,
        Icon: StatisticsSvg,
      },
      {
        title: `CALL ȘI PREZENTARE RAPORT LUNAR`,
        description: `La finalul fiecărei luni, îți prezentăm un raport complet de activitate: ce acțiuni am întreprins, care sunt rezultatele și ce urmează să realizăm în luna următoare pentru a atinge obiectivele stabilite.`,
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
    subtitlu:
      'Îți aducem site-ul pe prima pagină în Google prin servicii de optimizare SEO și garantăm recupererea investiției în maxim 8 luni.',
    cta: 'calendlyButton',
  },

  s2: {
    h2: 'Serviciile SEO care te vor propusa pe prima pagina din Google',
    indemn: 'Iti aducem site-ul pe prima pagina in Google',
    listaServicii: [
      {
        h3: 'Keyword Research',
        p: 'Vom face cercetare de cuvinte cheie atat pentru paginile existente si vom indentifica noi oportunitati',
      },
      {
        h3: 'SEO ON PAGE',
        p:
          'Ne vom folosi de cuvintele cheie gasite pentru a le insera in pagina, vom imbunatati continutul pe baza cuvintelor cheie gasite si vom da si alte recomandari ce tin de optimizare SEO on Page',
      },

      {
        h3: 'SEO TEHNIC',
        p:
          'Vom identifica eventualele probleme pe care le are site-ul: pagini 404, canibalizare, continutul duplicat, erori de redirectionare, erori de server sau de client etc.',
      },
      {
        h3: 'SEO Off Page',
        p:
          'Vom face o strategie de link building, Vom alege site-urile de publicare si vom elimina backlinkurile toxice',
      },
      {
        h3: 'SEO Local',
        p: 'Google My business si SEO local la nivel de site.',
      },
      {
        h3: 'UX',
        p: 'Design / Redesign Website, recomandari pentru cresterea ratei de conversie',
      },
    ],
  },
  s3: {
    indemn: 'Am ajutat afaceri din diferite nise sa isi atinga obiectivele',
    titlu: 'Servicii SEO care dau rezultate concrete',
    lista: [
      {
        title: `Rezultatele noastre se vad in Google Search Console`,
        description: ``,
        Image: {
          location: pic1,
          width: 1006,
          height: 392,
        },
      },
      {
        title: `in Google Analytics`,
        description: ``,
        Image: {
          location: pic2,
          width: 1068,
          height: 407,
        },
      },
      {
        title: `Dar si in cresterea numarului de sesiuni`,
        description: ``,
        Image: {
          location: pic3,
          width: 987,
          height: 385,
        },
      },
      {
        title: `Recomandarile noastre ce privesc
        
        
        
        
        
           partea de SEO tehnic va vor aduce peste nivelul oricarui competitor`,
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

