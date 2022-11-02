import { tw, css } from 'twind/css';
import {CalendlyButton} from '../calendly';
import WhatsappCta from '../../ux/buttons/whatsappCta'
const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(100vh - 6rem);
`;


const variants = {
  default:()=>{

    return (
      <>
        <p className={tw(`mt-10 text-gray-800 text-center text-lg lg:text-2xl`)}> Hai să ne cunoaștem!</p>
        <div className={tw(` mt-5 grid gap-5 grid-cols-2 content-around`)}>
          <div>
            <CalendlyButton primary modifier={'w-full'} text={undefined} />
          </div>

          {/* <span className={tw(`mx-2`)}></span> */}
          <div>
            <WhatsappCta modifier={'w-full justify-center'} />
          </div>
        </div>
      </>
    );
  },
  waOnly:() =>{

     return (
       <div className={tw(`mt-10 flex justify-center  items-center w-full`)}>
         <WhatsappCta primary />
       </div>
     );
  },

  calendlyBtn:() =>{
    return (
    <div className={tw(`mt-10 flex justify-center  items-center w-full`)}>
      <CalendlyButton primary text={undefined} modifier={undefined} />
    </div>
    )
  }
  
}



let Cta =  (param: string) =>{

  switch (param){
    default:
      return  <variants.default />
      break;
      case 'whatsapp':
      return <variants.waOnly />
      break
      case'calendlyButton':
      return <variants.calendlyBtn />
      break
    }
    }

const Header = ({ h1, subtitlu, indemn, variant }: { h1: string; subtitlu: string; variant: string, indemn:string | undefined}) => (
  <header className={tw(headerStyle)}>
    <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
      <h1 className={tw(`text-center text-indigo-600 font-semibold tracking-wide uppercase`)}>{h1}</h1>
      <p className={tw(`font-sans font-bold text-2xl md:text-3xl lg:text-4xl text-center leading-snug text-gray-800`)}>
        {subtitlu}
      </p>
      <div className={tw(`max-w-xl mx-auto`)}>
        <p className={tw(`mt-10 text-primary text-center text-xl lg:text-3xl`)}>{indemn}</p>
      </div>
      {Cta(variant)}
    </div>
  </header>
);

export default Header;
