
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
  
  const { user, authenticated, ready, login, logout } = usePrivy();
  const { wallets } = useWallets();
  
  console.log('📊 Privy state:', { user, authenticated, ready, walletsCount: wallets?.length });
  console.log('💰 All wallets:', wallets?.map(w => ({ type: w.walletClientType, address: w.address })));
  
  const [virtuosityUser, setVirtuosityUser] = useState<VirtuosityUser>({
    id: '',
    email: undefined,
    walletAddress: undefined,
    isAuthenticated: false,
    isLoading: true,
  });

  const [forceReady, setForceReady] = useState(false);

  // Timeout di sicurezza per forzare ready dopo 10 secondi
  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log('⏰ Timeout reached, forcing ready state');
      setForceReady(true);
    }, 10000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    console.log('🔄 useEffect triggered - ready:', ready, 'forceReady:', forceReady);
    
    const isActuallyReady = ready || forceReady;
    
    if (isActuallyReady) {
      // Cercare specificamente il wallet embedded di Privy
      const privyWallet = wallets.find(wallet => wallet.walletClientType === 'privy');
      
      console.log('💰 Privy embedded wallet found:', privyWallet?.address);
      console.log('🔍 Wallet details:', {
        wallet: privyWallet,
        address: privyWallet?.address,
        clientType: privyWallet?.walletClientType
      });
      
      const newUser = {
        id: user?.id || '',
        email: user?.email?.address,
        walletAddress: privyWallet?.address,
        isAuthenticated: authenticated,
        isLoading: false,
      };
      
      console.log('👤 Setting virtuosity user:', newUser);
      setVirtuosityUser(newUser);
    }
  }, [user, authenticated, ready, wallets, forceReady]);

  const handleLogin = async () => {
    try {
      console.log('🚀 Login attempt started');
      await login();
      console.log('✅ Login successful');
    } catch (error) {
      console.error('❌ Login failed:', error);
    }
  };

  const handleLogout = async () => {
    try {
      console.log('👋 Logout attempt started');
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
