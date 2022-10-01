import FeatureSvg from '@/constants/svg/features.svg';
import TeamworkSvg from '@/constants/svg/teamwork.svg';
import SuccessfulTaskCompletionSvg from '@/constants/svg/successfulTaskCompletion.svg';
import StatisticsSvg from '@/constants/svg/statistics.svg';

const pic1 = '/studiiDeCaz/StudiuCaz1-1006x392.jpg';
const pic2 = '/studiiDeCaz/StudiuCaz1.2-1068x407.jpg';
const pic3 = '/studiiDeCaz/StudiuCaz1.3-927x385.png';
const pic4 = '/studiiDeCaz/seo tehnic-1600x1183.jpeg';
export const homepage = {
  s1: {
    h1: 'Agentie SEO si Marketing Online',
    subtitlu: 'Iti aducem site-ul pe prima pagina Google prin serviciile noastre.',
    cta: 'default',
  },

  s2: {
    indemn: 'creste-ti veniturile!',
    titlu: 'Te ajutam sa iti transformi site-ul in cel mai bun agent de vanzari 24 / 7',
    lista: [
      {
        title: `Optimizare SEO`,
        description: `Crestere Vanzari & Lead-uri - Iti recuperezi Investita in 6 - 8 Luni. Strategii SEO care raspund direct nevoilor tale de business. Rezultate Dovedite.
    Echipa noastră livrează campanii SEO inovatoare, setând trenduri noi în Online Marketing.`,
      },
      {
        title: `Promovare Online`,
        description: `Setam campanii de publicitate prin Google Ads, Optimizam costurile si crestem performantele campaniilor in functie de obiectivele dvs.`,
      },
      {
        title: `Strategie de continut`,
        description: `Identificam acele subiecte informationale de blog care aduc cele mai mari conversii si aducem trafic relevant prin continut informational care ulterior va cumpara produsele sau serviciile dvs.`,
      },
      {
        title: `Creare Site Web`,
        description: `Colaboram cu cei mai buni programatori si ne folosim de cele mai performante tehnologii pentru dezvoltarea unui website performant si pregatit sa iti aduca clientii mult visati.`,
      },
    ],
    featureSvg: FeatureSvg,
  },

  s3: {
    indemn: 'Noi suntem partenerii afacerii tale',
    titlu: 'Cum va decurge colaborarea cu noi',
    lista: [
      {
        title: `Vom seta impreuna obiectivele si strategia`,
        description: `Pentru ca afacerea ta sa creasca in Google vom trasa impreuna strategia si obiectivele pe termen mediu si lung.`,
        Icon: TeamworkSvg,
      },
      {
        title: `Vei putea vedea in orice moment stadiul in care ne aflam in lucrul la proiectul tau`,
        description: `Vei putea vodea in orice moment care este stadiul proiectului tau dar si 
        evolutia acestuia pe cuvintele cheie de interes.`,
        Icon: StatisticsSvg,
      },
      {
        title: `Call si prezentare raport lunar`,
        description: `Vom face un call pe zoom lunar in care vom discuta despre evolutia proiectului, 
        ce s-a lucrat in luna precedenta si ce urmeaza sa facem.`,
        Icon: SuccessfulTaskCompletionSvg,
      },
    ],
  },
  s4: {
    titlu: 'O parte din afacerile pe care le-am ajutat',
    indemn: '',
    logoParteneri: [
      {
        url: '/logoClienti/avocatdorubotea.webp',
        width: 161,
        height: 128,
      },

    
      {
        url: '/logoClienti/celmic.webp',
        width: 400,
        height: 100,
      },
   
      // {
      //   url: '/logoClienti/jadflamande.jpg',
      //   width: 300,
      //   height: 192,
      // },
  
      {
        url: '/logoClienti/afrodytestyle.webp',
        width: 100,
        height: 100,
      },
    ],
  },
};
    
    

export const serviciiSeo = {
  s1: {
    h1: 'Servicii Seo ',
    subtitlu: 'Te aducem mai aproape de clientii care iti cauta produsele sau serviciile in Google',
    cta: 'whatsapp',
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

