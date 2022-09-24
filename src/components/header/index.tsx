import { tw, css } from 'twind/css';
import Button from '@/components/button';
import dynamic from 'next/dynamic';
import Coramarc from '@/constants/svg/coramarc.svg';
import Image from 'next/image';
const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(100vh - 6rem);
`;
// import avocatdorubotea from '/logoClienti'
const FontAwesomeIcon = dynamic(
  async () => (await import('@fortawesome/react-fontawesome')).FontAwesomeIcon
);



const avocatdorubotea = '/logoClienti/avocatdorubotea.webp'
const casamoise = '/logoClienti/casamoise.webp'
const celmic = '/logoClienti/celmic.webp'
const drool = '/logoClienti/drool.webp'
const jadflamande = '/logoClienti/jadflamande.jpg'
const KosmomsKids = '/logoClienti/KosmomsKids.avif'
const vrom = '/logoClienti/logo-vrom.png'
const patulmeu = '/logoClienti/patulmeu.webp'
const supermercato = '/logoClienti/supermercato.webp'
import {Whatsapp} from '../svg'
const Header = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
      <h1 className={tw(`font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800`)}>
        Agentie SEO si Marketing Online
      </h1>
      <div className={tw(`max-w-xl mx-auto`)}>
        <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>
          Iti aducem site-ul pe prima pagina Google prin serviciile noastre.
        </p>
      </div>
      <div className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}>
        <Button primary><a href='#list'>Afla mai multe</a></Button>
        <span className={tw(`mx-2`)}>sau</span>
        <Button><a href='https://wa.me/+40750472447'><FontAwesomeIcon icon={['fab', 'whatsapp']} /> Contacteaza-ne (whatsapp)<i className="fab-brands fab-whatsapp"></i> </a></Button>
      </div>
    </div>
    
  </header>
);

export default Header;
