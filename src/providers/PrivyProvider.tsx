import { PrivyProvider, PrivyClientConfig } from '@privy-io/react-auth';
import { polygonAmoy } from 'viem/chains';
import { createConfig } from '@privy-io/wagmi';
import { http } from 'viem';
import { WagmiProvider } from '@privy-io/wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState, useEffect } from 'react'; // <-- Importa useState e useEffect

const queryClient = new QueryClient();

const wagmiConfig = createConfig({
  chains: [polygonAmoy],
  transports: {
    [polygonAmoy.id]: http(),
  },
});

const privyConfig: PrivyClientConfig = {
  // ... la tua configurazione rimane invariata
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
  // Aggiungi questo stato per tracciare se il componente è "montato" sul client
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Questo effect viene eseguito solo sul client, dopo il primo render
    setIsMounted(true);
  }, []);

  // Se non siamo ancora sul client, non renderizzare i provider.
  // Puoi anche mostrare un loader qui se preferisci.
  if (!isMounted) {
    return null;
  }

  // Una volta che isMounted è true, renderizza tutto come prima
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={wagmiConfig}>
        <PrivyProvider
          appId="cmckjxj1c00fgkw0n6qrf826e"
          config={privyConfig}
        >
          {children}
        </PrivyProvider>
      </WagmiProvider>
    </QueryClientProvider>
  );
};