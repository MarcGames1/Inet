import { tw } from 'twind';
import Button from '@/components/button';
import Image from 'next/image';
import ScroolToTop from '../scrooltoTop/scrooltoTop';
import Link from 'next/link';
import { Newsletter } from '../CTA';

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
  { text: 'Politica Cookie', href: 'politica-cookie' }

];

const Footer = () => (
  <>
    <ScroolToTop />
    <footer className={tw(`grid grid-cols-3 gap-1 justify-items-center bg-gray-400 items-center`)}>
      <div>
        <Link href={'/'}>
          <a>
            <Image src="/logo.svg" alt="logo" width={150} height={150} />
          </a>
        </Link>
        {/* <p className={tw(`text-4xl text-indigo-500 font-bold`)}>STARTD</p> */}
      </div>

      <div>
        <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>Dispozitii Legale</h4>
        <ul>
          {dispozitiiLegale.map((link, index) => {
            console.log(Math.random() + index );
            return <FooterLink link={link} key={`dispozitiiLegale ${Math.random() * 10 * (index+1 * 15)}`} />;
          })}
        </ul>
      </div>

      <div>
        <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>Linkuri Utile</h4>
        <ul>
          {linkuriUtile.map((link, index) => (
            <FooterLink link={link} key={`linkuriUtile${Math.random() * 10 * (index+1 * 15)}`} />
          ))}
        </ul>
      </div>
      {/* <span className={tw('flex  justify-center')}>
        Website dezoltat de <pre> </pre>
        <Link href={'/echipa/alexandru-marcu'}>
          <a>{''}Alexandru Marcu</a>
        </Link>
      </span> */}
    </footer>
  </>
);



const FooterLink = ({
  link,
  
}: {
  link: {
    text: string;
    href: string;
  };
  
}) => {
  return (
    <>
      <li className={tw(`text-gray-800 text-sm font-medium leading-6`)} >
        <Link href={link.href}>
          <a href={link.href}>{link.text}</a>
        </Link>
      </li>
    </>
  );
};

export default Footer;
