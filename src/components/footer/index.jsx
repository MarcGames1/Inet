


import { tw } from 'twind';
import Image from "next/legacy/image";
import ScroolToTop from '../scrooltoTop/scrooltoTop';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';

const productLinks = [`Features`, `Customers`, `Platform`, `Pricing`, `Enterprise`, `What's new?`];
const linkuriUtile = [{
  text: "Blog",
  href: '/blog'
},
{
  text: 'Servicii SEO',
  href: '/servicii-seo'
},
// {
//   text: 'Mentorat SEO',
//   href: '/mentorat-seo'
// },
{
  text: 'Alexandru-Marcu',
  href: '/echipa/alexandru-marcu'
}
];
const dispozitiiLegale = [
  { text: 'Termeni si Conditii', href: 'termeni-conditii' },
  { text: 'Politica Cookie', href: 'politica-cookie' },
  { text: 'Contact', href: 'contact' }

];

const Footer = () => (
  <>
    <ScroolToTop />
    <hr />
    <footer className={tw(`grid grid-cols-3 gap-1 justify-items-center bg-indigo-50 items-center`)}>
      <div>
        <Link href={'/'}>
          <Image src="/logo.svg" alt="logo" width={150} height={150} />
        </Link>
        {/* <p className={tw(`text-4xl text-indigo-500 font-bold`)}>STARTD</p> */}
      </div>
          

      <div>
        <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>Dispozitii Legale</h4>
        <ul>
          {dispozitiiLegale.map((link, index) => (
            <FooterLink link={link} key={`dispozitiiLegale ${Math.random() * 10 * (index + 1 * 15)}`} />
          ))}
        </ul>
      </div>

      <div>
        <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>Linkuri Utile</h4>
        <ul>
          {linkuriUtile.map((link, index) => (
            <FooterLink link={link} key={`linkuriUtile${Math.random() * 10 * (index + 1 * 15)}`} />
          ))}
        </ul>
      </div>
      
    </footer>
  </>
);



const FooterLink = ({
  link,
  
}) => {
  return <>
    <li className={tw(`text-gray-800 text-sm font-medium leading-6`)} >
      <Link href={link.href}>
        {link.text}
      </Link>
    </li>
  </>;
};

export default Footer;
