
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
  
  console.log('📊 Privy state:', { 
    user: user ? { id: user.id, email: user.email?.address } : null, 
    authenticated, 
    ready, 
    walletsCount: wallets?.length,
    walletTypes: wallets?.map(w => ({ type: w.walletClientType, address: w.address }))
  });
  
  const [virtuosityUser, setVirtuosityUser] = useState<VirtuosityUser>({
    id: '',
    email: undefined,
    walletAddress: undefined,
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    console.log('🔄 useEffect triggered - ready:', ready, 'authenticated:', authenticated);
    
    if (ready) {
      // Look for embedded wallet specifically (Privy's embedded wallet)
      const embeddedWallet = wallets.find(wallet => 
        wallet.walletClientType === 'privy' || 
        wallet.walletClientType === 'embedded'
      );
      
      console.log('💰 Available wallets:', wallets.map(w => ({
        type: w.walletClientType,
        address: w.address,
        chainId: w.chainId
      })));
      
      console.log('🎯 Embedded wallet found:', embeddedWallet ? {
        type: embeddedWallet.walletClientType,
        address: embeddedWallet.address,
        chainId: embeddedWallet.chainId
      } : 'None');
      
      const newUser = {
        id: user?.id || '',
        email: user?.email?.address,
        walletAddress: embeddedWallet?.address,
        isAuthenticated: authenticated,
        isLoading: false,
      };
      
      console.log('👤 Setting virtuosity user:', newUser);
      
      // Additional check if user is authenticated but no wallet found
      if (authenticated && !embeddedWallet && wallets.length === 0) {
        console.warn('⚠️ User authenticated but no embedded wallet found. This might indicate a configuration issue.');
      }
      
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

  console.log('📤 Returning hook data:', { 
    user: virtuosityUser, 
    isReady: ready,
    hasEmbeddedWallet: !!virtuosityUser.walletAddress 
  });

  return {
    user: virtuosityUser,
    login: handleLogin,
    logout: handleLogout,
    isReady: ready,
  };
};
