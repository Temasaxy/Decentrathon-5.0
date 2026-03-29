import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';
import Navbar from '../componets/Navbar'; 
import Main from '../componets/Main';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider} from '@rainbow-me/rainbowkit';

import { config } from '../wagmi';
  
const client = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <body className="min-h-screen bg-[url(/mountain.jpg)] bg-local">
      <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        <RainbowKitProvider>
          <div className="flex items-center flex-col">
            <div className='flex flex-col top-2 h-dvh w-auto'>
              <Navbar /> 
              <Main />
            </div>
            <main>
              <Component {...pageProps} />
            </main>
          </div>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
    </body>
  );
}

export default MyApp;
