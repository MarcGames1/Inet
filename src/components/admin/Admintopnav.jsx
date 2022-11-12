import { tw } from 'twind';
import { useState } from 'react';
import { CalendlyButton } from '../calendly';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../button';
import { useRouter } from 'next/router';
import { toast, Toast } from 'react-hot-toast';
import axios from 'axios'

const handleSignout = async () =>{
  try{
    const {data} = await axios.get('/signout');
    
    if(data?.error){
      toast.error(data.error)
    } else if(data?.message){
      toast.success(data.message)
    }
  } catch (err){
    toast.error(err.message)
  }
 
  
}

  
 
   



const links = [
    {
        label: `Servicii SEO`,
        href: `/servicii-seo`,
    },
    
];

const secondaryLinks = [
    {
        label: `contact`,
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
                    <a
                        key={`mobile-${link.label}`}
                        href={link.href}
                        className={tw(`block px-3 py-2 text-base font-medium text-gray-500`)}
                    >
                        {link.label}
                    </a>
                ))}
            </div>
      <Button click={() => { handleSignout().then(router.push('/')) }}>Logout</Button>
        </div>
    </div>
);

const AdminNavigation = () => {
    const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <nav className={tw(`bg-white`)}>
      <div className={tw(`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)}>
        <div className={tw(`flex items-center justify-between h-24`)}>
          <div className={tw(`flex items-center`)}>
            <div className={tw(`flex-shrink-0`)}>
              <Link href={'/'}>
                <a>
                  <Image className={tw(`h-12 w-12`)} src="/logo.svg" alt="Inet-logo" width={150} height={150} />
                </a>
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
                text={'Programeaza-te la o sedinta gratuita!'}
                primary
                modifier={undefined}
                pulse={undefined}
              />

              {/* <Button primary>Analiza Gratuita</Button> */}
              <Button
                click={()=>{handleSignout().then(router.push('/'))}}
              >
                Logout
              </Button>
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

export default AdminNavigation;
