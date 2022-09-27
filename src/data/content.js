import FeatureSvg from '@/constants/svg/features.svg';
import TeamworkSvg from '@/constants/svg/teamwork.svg';
import SuccessfulTaskCompletionSvg from '@/constants/svg/successfulTaskCompletion.svg';
import StatisticsSvg from '@/constants/svg/statistics.svg';




export const homepage = {
  s1: {
    h1: 'Agentie SEO si Marketing Online',
    subtitlu: 'Iti aducem site-ul pe prima pagina Google prin serviciile noastre.',
    cta:'default'
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
        url: '/logoClienti/casamoise.webp',
        width: 160,
        height: 160,
      },
      {
        url: '/logoClienti/celmic.webp',
        width: 400,
        height: 100,
      },
      {
        url: '/logoClienti/drool.webp',
        width: 384,
        height: 144,
      },
      {
        url: '/logoClienti/jadflamande.jpg',
        width: 300,
        height: 192,
      },
      {
        url: '/logoClienti/logo-vrom.png',
        width: 184,
        height: 87,
      },
      {
        url: '/logoClienti/patulmeu.webp',
        width: 229,
        height: 160,
      },
      {
        url: '/logoClienti/supermercato.webp',
        width: 300,
        height: 39,
      },
    ],
  },
};
    




export const parteneri={
} 