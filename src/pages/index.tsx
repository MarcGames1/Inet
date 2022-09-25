import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import VideoSection from '@/components/video-section';
import ListSection from '@/components/list-section';
import ListWithPic from '@/components/list-pictures-section';
import FeatureSection from '@/components/feature-section';
import CasesSection from '@/components/cases-section';
import SocialProof from '@/components/social-proof';
import PricingTable from '@/components/pricing-table';
import Footer from '@/components/footer';
import Calendly from '../components/calendly/';
import {homepage} from '../data/homepage'
export default function Home() {
  return (
    <Page>
      <NextSeo
        title="Agentie SEO •
 Marketing Online cu rezultate • Inet.ro"
        description=" "
      />
      <Header />
      <main>
        <Calendly />
        {/* <VideoSection /> */}
        <ListSection
        reverse={false}
        indemn={homepage.s2.indemn}
        titlu={homepage.s2.titlu}
        listItems={homepage.s2.lista}
        FeatureSvg={homepage.s2.featureSvg}
        />

         <ListWithPic
        
        indemn={homepage.s3.indemn}
        titlu={homepage.s3.titlu}
        listItems={homepage.s3.lista}
        />
        
        {/* <FeatureSection />
        <CasesSection />
        <SocialProof />
        <PricingTable /> */}
      </main>
      
    </Page>
  );
}
