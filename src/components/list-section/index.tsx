import { tw } from 'twind';
import FeatureSvg from '@/constants/svg/features.svg';

const listItems = [
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
];

const ListSection = () => (
  <section id='list' className={tw(`lg:py-28 pt-28 overflow-hidden`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
      <div className={tw(`mb-16 text-center`)}>
        <h2 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>Creste-ti Veniturile!</h2>
        <p className={tw(`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
          Te ajutam sa iti transformi site-ul in cel mai bun agent de vanzari 24 / 7
        </p>
      </div>
      <div className={tw(`flex flex-wrap -mx-8 items-center`)}>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <ul className={tw(`space-y-12`)}>
            {listItems.map((item, index) => (
              <li className={tw(`flex -mx-4`)} key={item.title}>
                <div className={tw(`px-4`)}>
                  <span
                    className={tw(`flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-blue-50 text-blue-500`)}
                  >
                    {index + 1}
                  </span>
                </div>
                <div className={tw(`px-4`)}>
                  <h3 className={tw(`my-4 text-xl font-semibold`)}>{item.title}</h3>
                  <p className={tw(`text-gray-500 leading-loose`)}>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <div className={tw(`lg:mb-12 lg:mb-0 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0`)}>
            <FeatureSvg width="100%" height="100%" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ListSection;
