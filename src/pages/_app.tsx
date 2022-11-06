import { AppProps } from 'next/app';
import '@/styles/global.css';
import '@fontsource/inter';
import { setup } from 'twind';
import twindConfig from '../twind.config';
import { ParallaxProvider } from 'react-scroll-parallax';

if (typeof window !== `undefined`) {
  setup(twindConfig);

}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ParallaxProvider>
      <Component {...pageProps} />;
    </ParallaxProvider>
  );
}
