
import { usePrivy, useWallets } from '@privy-io/react-auth';
import { useSmartWallets } from '@privy-io/react-auth/smart-wallets';
import { useEffect, useState } from 'react';

export interface VirtuosityUser {
  id: string;
  email?: string;
  walletAddress?: string;
  smartWalletAddress?: string;
  hasSmartWallet?: boolean;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export const useVirtuosityAuth = () => {
  console.log('🔍 useVirtuosityAuth hook initialized');
  
  const { user, authenticated, ready, login, logout } = usePrivy();
  const { wallets } = useWallets();
  const { client: smartWalletClient } = useSmartWallets();
  
  console.log('📊 Privy state:', { 
    user, 
    authenticated, 
    ready, 
    walletsCount: wallets?.length,
    smartWalletClient: !!smartWalletClient 
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
      // Find embedded wallet
      const embeddedWallet = wallets?.find((wallet: any) => 
        wallet?.walletClientType === 'privy'
      );
      
      console.log('💰 Embedded wallet found:', embeddedWallet?.address);
      console.log('🔗 Smart wallet client:', smartWalletClient);
      
      const newUser: VirtuosityUser = {
        id: user?.id || '',
        email: user?.email?.address,
        walletAddress: embeddedWallet?.address,
        smartWalletAddress: smartWalletClient?.account?.address,
        hasSmartWallet: !!smartWalletClient,
        isAuthenticated: authenticated,
        isLoading: false,
      };
      
      console.log('👤 Setting virtuosity user:', newUser);
      setVirtuosityUser(newUser);
    }
  }, [user?.id, user?.email?.address, authenticated, ready, wallets?.length, forceReady, smartWalletClient?.account?.address]);

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
      console.log('🔗 Smart wallet creation is handled automatically by Privy configuration');
      console.log('ℹ️ Smart wallets are created based on your Privy dashboard settings');
    } catch (error) {
      console.error('❌ Smart wallet operation failed:', error);
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
