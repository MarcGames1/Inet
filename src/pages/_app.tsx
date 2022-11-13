import { AppProps } from 'next/app';
import '@/styles/global.css';
import '@fontsource/inter';
import { setup } from 'twind';
import twindConfig from '../twind.config';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from '@/context/auth';
import '/node_modules/react-quill/dist/quill.snow.css';
if (typeof window !== `undefined`) {
  setup(twindConfig);
}

export default function MyApp({ Component, pageProps }: AppProps) {
   return(
    <AuthProvider>
      <Toaster />
      <Component {...pageProps} />
    </AuthProvider>
   )
}
