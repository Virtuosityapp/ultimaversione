
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
  
  const [virtuosityUser, setVirtuosityUser] = useState<VirtuosityUser>({
    id: '',
    email: undefined,
    walletAddress: undefined,
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    console.log('🔄 useEffect triggered - ready:', ready);
    
    if (ready) {
      const embeddedWallet = wallets.find(wallet => wallet.walletClientType === 'privy');
      
      console.log('💰 Embedded wallet found:', embeddedWallet?.address);
      
      const newUser = {
        id: user?.id || '',
        email: user?.email?.address,
        walletAddress: embeddedWallet?.address,
        isAuthenticated: authenticated,
        isLoading: false,
      };
      
      console.log('👤 Setting virtuosity user:', newUser);
      setVirtuosityUser(newUser);
    }
  }, [user, authenticated, ready, wallets]);

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

  console.log('📤 Returning hook data:', { user: virtuosityUser, isReady: ready });

  return {
    user: virtuosityUser,
    login: handleLogin,
    logout: handleLogout,
    isReady: ready,
  };
};
