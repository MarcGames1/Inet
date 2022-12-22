import { tw, css } from 'twind/css';
import { CalendlyButton } from '../calendly';
import Image from 'next/image';
import WhatsappCta from '../../ux/buttons/whatsappCta';
import { ReactElement } from 'react';
const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(100vh - 6rem);
`;

const picContainer = css`
  background: rgba(155, 155, 200, 0.7);
  box-shadow: 0 8px 10px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(100px);
  -webkit-backdrop-filter: blur(100px);
  border-radius: 10px;
`;
const meImg = {
  url: '/images/alexandru-marcu-specialist-seo.png',
  alt: 'Alexandru Marcu Specialist SEO',
};

const variants = {
  default: () => {
    return (
      <>
        <div className={tw(` mt-5 grid gap-5 md:grid-cols-2 content-around`)}>
          <div>
            <CalendlyButton pulse primary modifier={' w-full'} text={undefined} color={undefined} />
          </div>

          {/* <span className={tw(`mx-2`)}></span> */}
          <div>
            <WhatsappCta modifier={'w-full justify-center'} />
          </div>
        </div>
      </>
    );
  },
  waOnly: () => {
    return (
      <div className={tw(`mt-10 flex justify-center  items-center w-full`)}>
        <WhatsappCta primary />
      </div>
    );
  },

  calendlyBtn: () => {
    return (
      <div className={tw(`mt-10 flex justify-center  items-center w-full`)}>
        <CalendlyButton primary pulse text={undefined} modifier={undefined} color={undefined} />
      </div>
    );
  },
};

let Cta = (param: string) => {
  switch (param) {
    default:
      return <variants.default />;
      break;
    case 'whatsapp':
      return <variants.waOnly />;
      break;
    case 'calendlyButton':
      return <variants.calendlyBtn />;
      break;
  }
};

const Header = ({
  h1,
  subtitlu,
  indemn,
  variant,
}: {
  h1: string | ReactElement;
  subtitlu: string | ReactElement;
  variant: string;
  indemn: string | ReactElement | undefined;
}) => (
  <header className={tw(headerStyle, `w-full h-auto`)}>
    <div className={tw(`lg:max-w-4xl mx-auto py-16 px-8 sm:px-6`)}>
      <div className={tw('flex lg:gap-8 flex-col lg:flex-row items-center')}>
        <div className={tw('flex-1 flex flex-col')}>
          <h1 className={tw(` text-center text-indigo-600 font-semibold tracking-wide uppercase`)}>{h1}</h1>
          <p className={tw(`font-sans font-italic text-2xl text-center leading-relaxed mt-10 text-gray-600 leading-8`)}>
            {subtitlu}
          </p>
{indemn ? 
          <div className={tw(`max-w-xl mx-auto`)}>
            <p className={tw(`mt-10 text-center  text-xl text-black leading-relaxed`)}>{indemn}</p>
          </div> : null}
          <div className={tw('m-4')}>

          {Cta(variant)}
          </div>
        </div>
        <div id="heroimg" className={tw(picContainer, ' h-80 w-80 relative md:mt-0 mt-10  md:h-72 md:w-4/12')}>
          <Image
            loading="eager"
            src={meImg.url}
            alt={meImg.alt}
            width={30}
            height={10}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
