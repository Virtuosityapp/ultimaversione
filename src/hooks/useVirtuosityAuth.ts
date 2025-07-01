
import { usePrivy, useWallets } from '@privy-io/react-auth';
import { useSmartWallets } from '@privy-io/react-auth/smart-wallets';
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
  const { user, authenticated, ready, login, logout } = usePrivy();
  const { wallets } = useWallets();
  const { client: smartWalletClient } = useSmartWallets();
  
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
    if (!ready) return;

    console.log('🔄 useVirtuosityAuth - updating user state');
    console.log('User:', user);
    console.log('Wallets:', wallets);
    console.log('Smart wallet client:', smartWalletClient);

    const embeddedWallet = wallets.find(wallet => wallet.walletClientType === 'privy');
    const smartWalletAddress = smartWalletClient?.account?.address;

    setVirtuosityUser({
      id: user?.id || '',
      email: user?.email?.address,
      walletAddress: embeddedWallet?.address,
      smartWalletAddress,
      isAuthenticated: authenticated,
      isLoading: false,
      hasSmartWallet: !!smartWalletClient,
    });
  }, [ready, authenticated, user?.id, user?.email?.address, wallets.length, smartWalletClient?.account?.address]);

  const handleLogin = async () => {
    try {
      await login();
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const handleCreateSmartWallet = async () => {
    try {
      // Smart wallets are automatically created on login based on our PrivyProvider config
      // This function is here for compatibility but may not be needed
      console.log('Smart wallet creation is handled automatically on login');
    } catch (error) {
      console.error('Smart wallet creation failed:', error);
    }
  };

  return {
    user: virtuosityUser,
    login: handleLogin,
    logout: handleLogout,
    createSmartWallet: handleCreateSmartWallet,
    isReady: ready,
  };
};
