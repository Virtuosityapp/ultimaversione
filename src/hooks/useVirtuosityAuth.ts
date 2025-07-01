
import { usePrivy, useWallets } from '@privy-io/react-auth';
import { useSmartWallets } from '@privy-io/react-auth/smart-wallets';
import { useEffect, useState } from 'react';

export interface VirtuosityUser {
  id: string;
  email?: string;
  walletAddress?: string;
  smartWalletAddress?: string;
  hasSmartWallet: boolean;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export const useVirtuosityAuth = () => {
  console.log('🔍 useVirtuosityAuth hook initialized');
  
  const { user, authenticated, ready, login, logout } = usePrivy();
  const { wallets } = useWallets();
  const { client } = useSmartWallets();
  
  console.log('📊 Privy state:', { 
    user, 
    authenticated, 
    ready, 
    walletsCount: wallets?.length,
  });
  
  const [virtuosityUser, setVirtuosityUser] = useState<VirtuosityUser>(() => ({
    id: '',
    email: undefined,
    walletAddress: undefined,
    smartWalletAddress: undefined,
    hasSmartWallet: false,
    isAuthenticated: false,
    isLoading: true,
  }));
  const [forceReady, setForceReady] = useState(false);

  // Safety timeout to force ready after 10 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log('⏰ Timeout reached, forcing ready state');
      setForceReady(true);
    }, 10000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!ready && !forceReady) return;

    const embeddedWallet = wallets?.find(
      (wallet: any) => wallet?.walletClientType === 'privy'
    );

    const smartWallet = wallets?.find(
      (wallet: any) => wallet?.walletClientType === 'privy' && wallet?.smartWallet
    );

    const newUser: VirtuosityUser = {
      id: user?.id || '',
      email: user?.email?.address,
      walletAddress: embeddedWallet?.address,
      smartWalletAddress: smartWallet?.address,
      hasSmartWallet: !!smartWallet,
      isAuthenticated: authenticated,
      isLoading: false,
    };

    setVirtuosityUser(newUser);
  }, [ready, forceReady, authenticated, wallets, user?.id, user?.email]);

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

  const handleCreateSmartWallet = async () => {
    try {
      console.log('🧠 Creating smart wallet...');
      if (client) {
        await client.create();
        console.log('✅ Smart wallet created successfully');
      }
    } catch (error) {
      console.error('❌ Smart wallet creation failed:', error);
    }
  };

  const actualReady = ready || forceReady;
  console.log('📤 Returning hook data:', { user: virtuosityUser, isReady: actualReady });
  
  return {
    user: virtuosityUser,
    login: handleLogin,
    logout: handleLogout,
    createSmartWallet: handleCreateSmartWallet,
    isReady: actualReady,
  };
};
