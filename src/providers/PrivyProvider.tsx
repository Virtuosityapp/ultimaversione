
import { PrivyProvider, PrivyClientConfig } from '@privy-io/react-auth';
import { polygonMumbai } from 'viem/chains';
import { createConfig } from '@privy-io/wagmi';
import { http } from 'wagmi';
import { WagmiProvider } from '@privy-io/wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const wagmiConfig = createConfig({
  chains: [polygonMumbai],
  transports: {
    [polygonMumbai.id]: http(),
  },
});

const privyConfig: PrivyClientConfig = {
  loginMethods: ['email', 'google', 'apple'],
  appearance: {
    theme: 'light',
    accentColor: '#10b981',
    logo: '/lovable-uploads/5930bd4d-6869-4b7d-8020-e58372708f8a.png',
  },
  embeddedWallets: {
    createOnLogin: 'all-users',
    requireUserPasswordOnCreate: false,
  },
  externalWallets: {
    coinbaseWallet: {
      // Disable to avoid conflicts with embedded wallets
      connectionOptions: 'smartWalletOnly',
    },
    metamask: {
      // Disable to avoid conflicts  
      connectionOptions: 'eoaOnly',
    },
  },
  smartWallet: {
    createOnLogin: 'all-users',
    // Use the default Privy paymaster for now
  },
  defaultChain: polygonMumbai,
  supportedChains: [polygonMumbai],
};

interface VirtuosityPrivyProviderProps {
  children: React.ReactNode;
}

export const VirtuosityPrivyProvider = ({ children }: VirtuosityPrivyProviderProps) => {
  return (
    <PrivyProvider
      appId="cmckjxj1c00fgkw0n6qrf826e"
      config={privyConfig}
    >
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={wagmiConfig}>
          {children}
        </WagmiProvider>
      </QueryClientProvider>
    </PrivyProvider>
  );
};
