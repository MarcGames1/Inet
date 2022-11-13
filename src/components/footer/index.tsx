import { tw } from 'twind';
import Button from '@/components/button';
import Image from 'next/image';
import ScroolToTop from '../scrooltoTop/scrooltoTop';
import Link from 'next/link';

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
const resourceLinks = [
  'Termeni si Conditii',
];

const Footer = () => (
  <footer className={tw(`bg-gray-300 border-t border-gray-400 pt-14 pb-16`)}>
    <ScroolToTop />
    <div className={tw(`max-w-7xl mx-auto text-gray-400 px-8 lg:px-0 flex flex-wrap`)}>
      <div className={tw(`mb-14 flex items-center w-full`)}>
        <Image className={tw(`h-12 w-12 mr-4`)} src="/logo.svg" alt="logo" width={150} height={150} />
        {/* <p className={tw(`text-4xl text-indigo-500 font-bold`)}>STARTD</p> */}
      </div>
      <div className={tw(`w-full lg:w-1/2`)}>
        <ul className={tw(`text-lg font-light flex flex-wrap w-full`)}>
          <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}></li>
          <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
            <div>
              <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>Dispozitii Legale</h4>
              <ul>
                {resourceLinks.map((link) => (
                  <li className={tw(`text-gray-800 text-sm font-medium leading-6`)} key={link}>
                    <a href="/">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
            <div>
              <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>Linkuri Utile</h4>
              <ul>
                {linkuriUtile.map((link) => (
                  <li className={tw(`text-gray-800 text-sm font-medium leading-6`)} key={link.text}>
                    <Link href={link.href}>
                      <a href={link.href}>{link.text}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className={tw(`w-full lg:w-1/2 mt-12 lg:mt-0`)}>
        <div className={tw(`border border-gray-400 rounded py-5 px-4`)}>
          <h4 className={tw(`font-mono text-sm uppercase text-gray-500 mb-3`)}>Aboneaza-te la Newsletter</h4>
          <div className={tw(`flex w-full`)}>
            <input
              aria-label="email address"
              type="text"
              className={tw(`border border-gray-300 bg-gray-100 min-w-0 w-4/6 rounded text-gray-800 py-2 px-3 mr-2`)}
              placeholder="Adresa de email"
            />
            <Button>Aboneaza-te</Button>
          </div>
        </div>
      </div>
    </div>
    <span className={tw('flex  justify-center')}>
      Website dezoltat de <pre> </pre>
      <Link href={'/echipa/alexandru-marcu'}>
        <a>{''}Alexandru Marcu</a>
      </Link>
    </span>
  </footer>
);

export default Footer;
