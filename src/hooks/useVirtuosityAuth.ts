import { usePrivy, useWallets } from '@privy-io/react-auth';
import { useEffect, useState } from 'react';

export interface VirtuosityUser {
  id: string;
  email?: string;
  walletAddress?: string;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export const useVirtuosityAuth = () => {
  console.log('🔍 useVirtuosityAuth hook initialized');
  
  // Aggiungi try-catch per gestire errori di inizializzazione
  let privyState;
  let walletsState;
  
  try {
    privyState = usePrivy();
    walletsState = useWallets();
  } catch (error) {
    console.error('❌ Error initializing Privy hooks:', error);
    // Ritorna uno stato di errore se i hooks non sono disponibili
    return {
      user: {
        id: '',
        email: undefined,
        walletAddress: undefined,
        isAuthenticated: false,
        isLoading: true,
      },
      login: async () => console.error('Privy not initialized'),
      logout: async () => console.error('Privy not initialized'),
      isReady: false,
    };
  }

  const { user, authenticated, ready, login, logout } = privyState;
  const { wallets } = walletsState;
  
  console.log('📊 Privy state:', { 
    user, 
    authenticated, 
    ready, 
    walletsCount: wallets?.length,
  });
  
  const [virtuosityUser, setVirtuosityUser] = useState<VirtuosityUser>({
    id: '',
    email: undefined,
    walletAddress: undefined,
    isAuthenticated: false,
    isLoading: true,
  });
  
  const [forceReady, setForceReady] = useState(false);

  // Timeout di sicurezza ridotto a 5 secondi
  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log('⏰ Timeout reached, forcing ready state');
      setForceReady(true);
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!ready && !forceReady) {
      console.log('⏳ Privy not ready yet, waiting...');
      return;
    }

    console.log('✅ Privy ready, processing user data...');

    // Controllo più sicuro per il wallet
    const embeddedWallet = wallets?.find(
      (wallet: any) => wallet?.walletClientType === 'privy'
    );

    const newUser: VirtuosityUser = {
      id: user?.id || '',
      email: user?.email?.address,
      walletAddress: embeddedWallet?.address,
      isAuthenticated: authenticated || false,
      isLoading: false,
    };

    console.log('👤 Setting new user state:', newUser);
    setVirtuosityUser(newUser);
  }, [
    ready,
    forceReady,
    authenticated,
    wallets,
    user?.id,
    user?.email?.address
  ]);

  const handleLogin = async () => {
    try {
      console.log('🚀 Login attempt started');
      if (!login) {
        throw new Error('Login function not available');
      }
      await login();
      console.log('✅ Login successful');
    } catch (error) {
      console.error('❌ Login failed:', error);
    }
  };

  const handleLogout = async () => {
    try {
      console.log('👋 Logout attempt started');
      if (!logout) {
        throw new Error('Logout function not available');
      }
      await logout();
      console.log('✅ Logout successful');
    } catch (error) {
      console.error('❌ Logout failed:', error);
    }
  };

  const actualReady = ready || forceReady;
  console.log('📤 Returning hook data:', { user: virtuosityUser, isReady: actualReady });
  
  return {
    user: virtuosityUser,
    login: handleLogin,
    logout: handleLogout,
    isReady: actualReady,
  };
};