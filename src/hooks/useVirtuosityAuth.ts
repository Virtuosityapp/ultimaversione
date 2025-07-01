
import { usePrivy, useWallets, useSmartWallets } from '@privy-io/react-auth';
import { useEffect, useState } from 'react';

export interface VirtuosityUser {
  id: string;
  email?: string;
  walletAddress?: string;
  smartWalletAddress?: string;
  isAuthenticated: boolean;
  isLoading: boolean;
  hasSmartWallet: boolean;
}

export const useVirtuosityAuth = () => {
  console.log('🔍 useVirtuosityAuth hook initialized');
  
  const { user, authenticated, ready, login, logout } = usePrivy();
  const { wallets } = useWallets();
  const { client: smartWalletClient, create: createSmartWallet } = useSmartWallets();
  
  console.log('📊 Privy state:', { 
    user, 
    authenticated, 
    ready, 
    walletsCount: wallets?.length,
    smartWalletClient: !!smartWalletClient
  });
  
  const [virtuosityUser, setVirtuosityUser] = useState<VirtuosityUser>({
    id: '',
    email: undefined,
    walletAddress: undefined,
    smartWalletAddress: undefined,
    isAuthenticated: false,
    isLoading: true,
    hasSmartWallet: false,
  });

  useEffect(() => {
    console.log('🔄 useEffect triggered - ready:', ready);
    
    if (ready) {
      // Find embedded wallet
      const embeddedWallet = wallets.find(wallet => wallet.walletClientType === 'privy');
      console.log('💰 Embedded wallet found:', embeddedWallet?.address);
      
      // Get smart wallet address
      const smartWalletAddress = smartWalletClient?.account?.address;
      console.log('🧠 Smart wallet address:', smartWalletAddress);
      
      const newUser = {
        id: user?.id || '',
        email: user?.email?.address,
        walletAddress: embeddedWallet?.address,
        smartWalletAddress: smartWalletAddress,
        isAuthenticated: authenticated,
        isLoading: false,
        hasSmartWallet: !!smartWalletClient,
      };
      
      console.log('👤 Setting virtuosity user:', newUser);
      setVirtuosityUser(newUser);
    }
  }, [user, authenticated, ready, wallets, smartWalletClient]);

  const handleLogin = async () => {
    try {
      console.log('🚀 Login attempt started');
      await login();
      console.log('✅ Login successful');
      
      // Try to create smart wallet if not exists
      if (authenticated && !smartWalletClient) {
        console.log('🧠 Creating smart wallet...');
        try {
          await createSmartWallet();
          console.log('✅ Smart wallet created successfully');
        } catch (error) {
          console.error('❌ Smart wallet creation failed:', error);
        }
      }
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
      console.log('🧠 Manual smart wallet creation started');
      await createSmartWallet();
      console.log('✅ Smart wallet created manually');
    } catch (error) {
      console.error('❌ Manual smart wallet creation failed:', error);
    }
  };

  console.log('📤 Returning hook data:', { user: virtuosityUser, isReady: ready });

  return {
    user: virtuosityUser,
    login: handleLogin,
    logout: handleLogout,
    createSmartWallet: handleCreateSmartWallet,
    isReady: ready,
  };
};
