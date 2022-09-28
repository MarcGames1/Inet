import { tw, css } from 'twind/css';
import Button from '@/components/button';
import WhatsappCta from '../../ux/buttons/whatsappCta'
const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(100vh - 6rem);
`;


const variants = {
  default:()=>{

    return (
      <div className={tw(`mt-10 flex justify-center items-center w-full`)}>
        <Button modifier="py-2 px-3" primary>
          <a href="#list">Vezi mai mult</a>
        </Button>
        <span className={tw(`mx-2`)}></span>
       <WhatsappCta />
      </div>
    );
  },
  waOnly:() =>{

     return (
       <div className={tw(`mt-10 flex justify-center items-center w-full`)}>
         <WhatsappCta primary />
       </div>
     );
  },
  
}



let Cta =  (param: string) =>{

  switch (param){
    default:
      return  <variants.default />
      break;
      case 'whatsapp':
      return <variants.waOnly />
      break
    }
    }

const Header = ({h1, subtitlu, variant }:{
  h1: string,
  subtitlu:string,
  variant:string,
}) => (
  <header className={tw(headerStyle)}>
    <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
      <h1 className={tw(`font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800`)}>
        {h1}
      </h1>
      <div className={tw(`max-w-xl mx-auto`)}>
        <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>
          {subtitlu}
        </p>
      </div>
      {Cta(variant)}
    </div>
    
  </header>
);

export default Header;
