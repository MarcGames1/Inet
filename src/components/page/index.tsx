import Head from 'next/head';
import Navigation from '@/components/navigation';
import { tw } from 'twind';
import Footer from '../footer';

interface IProps {
  children: React.ReactNode;
}

const Page = ({ children }: IProps) => (
  <>
    <Head>
      <link rel="icon" href="/logo.svg" />
    </Head>
    <div className={tw(`min-h-screen flex flex-col`)}>
      <Navigation />
      {children}
    </div>
    <Footer />
  </>
);

export default Page;
