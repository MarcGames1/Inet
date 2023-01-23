import Head from 'next/head';
import { tw } from 'twind';
import Footer from '../footer';
import { ScrollPositionProvider } from '../../context/scroolPositionContext';
import Navigation from '../../components/navigation';


const Page = ({ children }) => (
  <ScrollPositionProvider>
    <Contents>{children}</Contents>
  </ScrollPositionProvider>
);

export default Page;







const Contents = ({ children }) => {
return  <>
    <Head>
      <link rel="favicon" href="favicon.svg" />
    </Head>
    <div className={tw(`min-h-screen flex flex-col`)}>
      <Navigation />
      {children}
    </div>
    <Footer />
  </>;
};