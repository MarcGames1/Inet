import { tw } from 'twind';
import { useState, useContext, useEffect } from 'react';
import { CalendlyButton } from '../calendly';
import Logo from '../../components/svg/logo';
import Link from 'next/link';
import { ScrollPosition } from '../../context/scroolPositionContext';

const links = [
  {
    label: `Servicii SEO`,
    href: `/servicii-seo`,
  },
  {
    label: `Blog`,
    href: `/blog`,
  },
];

const secondaryLinks = [
  {
    label: `Contact`,
    href: `/contact`,
  },
];

const MenuButton = ({ toggleMenu, showMenu }) => (
  <button
    type="button"
    aria-controls="mobile-menu"
    aria-expanded={showMenu}
    onClick={toggleMenu}
    className={tw(`p-2 text-gray-400`)}
  >
    <span className={tw(`sr-only`)}>Open menu</span>
    {showMenu ? (
      <svg
        className={tw(`h-6 w-6`)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ) : (
      <svg
        className={tw(`h-6 w-6`)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    )}
  </button>
);

const MobileMenu = () => (
  <div className={tw(`md:hidden`)}>
    <div className={tw(`px-2 pt-2 pb-3 space-y-1 sm:px-3`)}>
      {links.map((link) => (
        <a href={link.href} className={tw(`text-gray-500 block px-3 py-2 text-base font-medium`)} key={link.label}>
          {link.label}
        </a>
      ))}
    </div>
    <div className={tw(`pt-4 pb-3 border-t border-gray-400`)}>
      <div className={tw(`px-2 space-y-1`)}>
        {secondaryLinks.map((link) => (
          <Link
            key={`mobile-${link.label}`}
            href={link.href}
            className={tw(`block px-3 py-2 text-base font-medium text-gray-500`)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  </div>
);

const Navigation = () => {

  const [scroolPosition] = useContext(ScrollPosition);

  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  const [sticky, setSticky] = useState('');

 const addSticky = () => {
   setSticky('sticky top-0');
 };

 const removeSticky = () => {
   setSticky('');
 };

 useEffect(() => {
   if (scroolPosition < 200) {
     removeSticky();
   } else {
     addSticky();
   }
 }, [scroolPosition]);


  return (
    <nav className={tw(`bg-white z-[100] ${sticky}`)}>
      <div className={tw(`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)}>
        <div className={tw(`flex items-center justify-between`)}>
          <div className={tw(`flex items-center`)}>
            <div className={tw(`flex-shrink-0`)}>
              <Link href={'/'}>

                {/* <Image className={tw(`h-12 w-12`)} src="/logo.svg" alt="MarWeb-logo" width={150} height={150} /> */}
                <Logo />

              </Link>
            </div>
            <div className={tw(`hidden md:block`)}>
              <div className={tw(`ml-10 flex items-baseline space-x-4`)}>
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={tw(`text-gray-500 hover:text-gray-600 px-3 py-2 rounded-md font-medium`)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className={tw(`hidden md:block`)}>
            <div className={tw(`ml-4 flex items-center md:ml-6`)}>
              <CalendlyButton
                text={'Vreau Consultanta SEO!'}
                primary
                modifier={undefined}
                pulse={undefined}
                color={undefined}
              />

              {/* <Button primary>Analiza Gratuita</Button> */}
            </div>
          </div>
          <div className={tw(`-mr-2 flex md:hidden`)}>
            <MenuButton showMenu={showMenu} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
      {showMenu ? <MobileMenu /> : null}
    </nav>
  );
};

export default Navigation;
