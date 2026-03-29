import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';
import Navbar from '../componets/Navbar'; 
import Main from './Main/Main';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider} from '@rainbow-me/rainbowkit';

import { config } from '../wagmi';
  
const client = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <body>
      <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        <RainbowKitProvider>
          <div className="flex items-center flex-col">
            <Navbar />
            <Component {...pageProps} />
          </div>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
    </body>
  );
}

export default MyApp;
