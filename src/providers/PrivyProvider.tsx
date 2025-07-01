import { PrivyProvider, PrivyClientConfig } from '@privy-io/react-auth';
import { polygonAmoy } from 'viem/chains';
import { createConfig } from '@privy-io/wagmi';
import { http } from 'wagmi';
import { WagmiProvider } from '@privy-io/wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const wagmiConfig = createConfig({
  chains: [polygonAmoy],
  transports: {
    [polygonAmoy.id]: http(),
  },
});

// 🔥 CONFIGURAZIONE SMART WALLETS secondo la documentazione ufficiale
const privyConfig: PrivyClientConfig = {
  loginMethods: ['email', 'google', 'apple'],
  appearance: {
    theme: 'light',
    accentColor: '#10b981',
    logo: '/lovable-uploads/5930bd4d-6869-4b7d-8020-e58372708f8a.png',
    showWalletLoginFirst: false, // Email/social first
  },
  // 🔥 EMBEDDED WALLETS: Configurati per creare Smart Wallets
  embeddedWallets: {
    createOnLogin: 'all-users', // ✅ Crea per tutti gli utenti
    requireUserPasswordOnCreate: false,
    noPromptOnSignature: false,
  },
  defaultChain: polygonAmoy,
  supportedChains: [polygonAmoy],
  // 🔥 MFA configuration
  mfa: {
    noPromptOnMfaRequired: false,
  }
};

interface VirtuosityPrivyProviderProps {
  children: React.ReactNode;
}

export const VirtuosityPrivyProvider = ({ children }: VirtuosityPrivyProviderProps) => {
  console.log('🚀 Initializing Privy with Smart Wallets support');
  
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