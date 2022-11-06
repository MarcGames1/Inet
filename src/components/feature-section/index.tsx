import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';
import FeaturesElement from './featureElement';

interface checklist {
  h2: string;
  indemn: string;
  list: any[];
}

const FeatureSection = ({ h2, indemn, list }: checklist) => (
  <section className={tw(` pb-6 bg-gray-50`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`container mx-auto px-6 p-6`)}>
        <div className={tw(`mb-16 text-center`)}>
          <span className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>{indemn}</span>
          <h2 className={tw(`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>{h2}</h2>
        </div>
        <div className={tw(`flex flex-wrap my-12`)}>
          {list.map((el, idx) => {
            return <FeaturesElement key={idx} h3={el.title} p={el.description} href={el.href} />;
          })}
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;
