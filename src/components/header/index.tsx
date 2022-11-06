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
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='750' height='560' preserveAspectRatio='none' viewBox='0 0 750 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1014%26quot%3b)' fill='none'%3e%3crect width='750' height='560' x='0' y='0' fill='rgba(99%2c 102%2c 241%2c 1)'%3e%3c/rect%3e%3cpath d='M0 0L571.67 0L0 371.91z' filter='url(%23SvgjsFilter1015)' fill='rgba(199%2c 210%2c 254%2c 1)'%3e%3c/path%3e%3cpath d='M0 560L571.67 560L0 188.08999999999997z' filter='url(%23SvgjsFilter1015)' fill='rgba(199%2c 210%2c 254%2c 1)'%3e%3c/path%3e%3cpath d='M750 560L178.33000000000004 560L750 188.08999999999997z' filter='url(%23SvgjsFilter1015)' fill='rgba(199%2c 210%2c 254%2c 1)'%3e%3c/path%3e%3cpath d='M750 0L178.33000000000004 0L750 371.91z' filter='url(%23SvgjsFilter1015)' fill='rgba(199%2c 210%2c 254%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1014'%3e%3crect width='750' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cfilter height='130%25' id='SvgjsFilter1015'%3e%3cfeGaussianBlur in='SourceAlpha' stdDeviation='5' result='TopLeftG'%3e%3c/feGaussianBlur%3e%3cfeOffset dx='-5' dy='-5' in='TopLeftG' result='TopLeftO'%3e%3c/feOffset%3e%3cfeComponentTransfer in='TopLeftO' result='TopLeftC'%3e%3cfeFuncA type='linear' slope='0.7'%3e%3c/feFuncA%3e%3c/feComponentTransfer%3e%3cfeGaussianBlur in='SourceAlpha' stdDeviation='5' result='TopRightG'%3e%3c/feGaussianBlur%3e%3cfeOffset dx='5' dy='-5' in='TopRightG' result='TopRightO'%3e%3c/feOffset%3e%3cfeComponentTransfer in='TopRightO' result='TopRightC'%3e%3cfeFuncA type='linear' slope='0.7'%3e%3c/feFuncA%3e%3c/feComponentTransfer%3e%3cfeGaussianBlur in='SourceAlpha' stdDeviation='5' result='BottomLeftG'%3e%3c/feGaussianBlur%3e%3cfeOffset dx='-5' dy='5' in='BottomLeftG' result='BottomLeftO'%3e%3c/feOffset%3e%3cfeComponentTransfer in='BottomLeftO' result='BottomLeftC'%3e%3cfeFuncA type='linear' slope='0.7'%3e%3c/feFuncA%3e%3c/feComponentTransfer%3e%3cfeGaussianBlur in='SourceAlpha' stdDeviation='5' result='BottomRightG'%3e%3c/feGaussianBlur%3e%3cfeOffset dx='5' dy='5' in='BottomRightG' result='BottomRightO'%3e%3c/feOffset%3e%3cfeComponentTransfer in='BottomRightO' result='BottomRightC'%3e%3cfeFuncA type='linear' slope='0.7'%3e%3c/feFuncA%3e%3c/feComponentTransfer%3e%3cfeMerge%3e%3cfeMergeNode in='TopLeftC'%3e%3c/feMergeNode%3e%3cfeMergeNode in='TopRightC'%3e%3c/feMergeNode%3e%3cfeMergeNode in='BottomLeftC'%3e%3c/feMergeNode%3e%3cfeMergeNode in='BottomRightC'%3e%3c/feMergeNode%3e%3cfeMergeNode in='SourceGraphic'%3e%3c/feMergeNode%3e%3c/feMerge%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e");
  @media (min-width: 768px) {
    -webkit-clip-path: polygon(
      50% 0%,
      80% 10%,
      100% 35%,
      100% 70%,
      80% 90%,
      50% 100%,
      20% 90%,
      0% 70%,
      0% 35%,
      20% 10%
    );
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    background: linear-gradient(to right, rgb(252, 231, 243), rgb(165, 180, 252), rgb(252, 231, 243));
  }
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
            <CalendlyButton pulse primary modifier={' w-full'} text={undefined} />
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
        <CalendlyButton primary pulse text={undefined} modifier={undefined} />
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
        <div className={tw('flex-1  w-full h-full')}>
          <h1 className={tw(`text-center text-indigo-600 font-semibold tracking-wide uppercase`)}>{h1}</h1>
          <p className={tw(`font-sans font-bold text-2xl text-center leading-snug `)}>{subtitlu}</p>
          <div className={tw(`max-w-xl mx-auto`)}>
            <p className={tw(`mt-10 text-gray-800 text-center text-xl`)}>{indemn}</p>
          </div>
        </div>
        <div id="heroimg" className={tw(picContainer, 'h-80 w-80 relative  md:h-72 md:w-4/12')}>
          <Image src={meImg.url} alt={meImg.alt} width={30} height={10} layout="fill" objectFit="contain" />
        </div>
      </div>
      {Cta(variant)}
    </div>
  </header>
);

export default Header;
