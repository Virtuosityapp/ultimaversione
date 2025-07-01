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

// 🔥 CONFIGURAZIONE SOLO SMART WALLETS (no embedded wallets)
const privyConfig: PrivyClientConfig = {
  loginMethods: ['email', 'google', 'apple'], // ❌ Rimosso 'wallet' per ora
  appearance: {
    theme: 'light',
    accentColor: '#10b981',
    logo: '/lovable-uploads/5930bd4d-6869-4b7d-8020-e58372708f8a.png',
  },
  // ❌ DISABILITATO: Embedded Wallets
  embeddedWallets: {
    createOnLogin: 'off', // 🔥 DISABILITATO - usiamo solo Smart Wallets
  },
  defaultChain: polygonAmoy,
  supportedChains: [polygonAmoy],
  // ✅ ABILITATO: SOLO Smart Wallets
  smartWallet: {
    createOnLogin: 'all-users', // 🔥 Crea Smart Wallet per tutti
    sponsorGas: true, // 🔥 Privy paga il gas!
    sponsorGasPrice: 'fast', // Velocità transazioni sponsorizzate
  },
  // Configurazione MFA
  mfa: {
    noPromptOnMfaRequired: false,
  },
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