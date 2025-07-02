import { PrivyProvider, PrivyClientConfig } from '@privy-io/react-auth';
import { polygonAmoy } from 'viem/chains';
import { createConfig, http } from '@privy-io/wagmi';
import { WagmiProvider } from '@privy-io/wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const wagmiConfig = createConfig({
  chains: [polygonAmoy],
  transports: {
    [polygonAmoy.id]: http(),
  },
});

const privyConfig: PrivyClientConfig = {
  loginMethods: ['email'],
  appearance: {
    theme: 'light',
    accentColor: '#10b981',
    logo: '/lovable-uploads/5930bd4d-6869-4b7d-8020-e58372708f8a.png',
  },
  embeddedWallets: {
    createOnLogin: 'all-users',
    requireUserPasswordOnCreate: false,
  },
  defaultChain: polygonAmoy,
  supportedChains: [polygonAmoy],
};

interface VirtuosityPrivyProviderProps {
  children: React.ReactNode;
}

export const VirtuosityPrivyProvider = ({ children }: VirtuosityPrivyProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={wagmiConfig}>
        <PrivyProvider
          appId="cmckjxj1c00fgkw0n6qrf826e" // Assicurati che questo sia il tuo App ID corretto
          config={privyConfig}
        >
          {children}
        </PrivyProvider>
      </WagmiProvider>
    </QueryClientProvider>
  );
};