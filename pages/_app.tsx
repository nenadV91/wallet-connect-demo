import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Web3ReactProvider } from "@web3-react/core";
import dynamic from 'next/dynamic';
import getLibrary from 'utils/getLibrary';

const Web3ReactProviderDefault = dynamic(
  () => import("components/Providers/DefaultProvider"),
  { ssr: false }
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
        <Web3ReactProviderDefault getLibrary={getLibrary}>
          <Component {...pageProps} />
        </Web3ReactProviderDefault>
      </Web3ReactProvider>
  )
}

export default MyApp
