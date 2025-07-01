
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
  const { user, authenticated, ready, login, logout } = usePrivy();
  const { wallets } = useWallets();
  const [virtuosityUser, setVirtuosityUser] = useState<VirtuosityUser>({
    id: '',
    email: undefined,
    walletAddress: undefined,
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    if (ready) {
      const embeddedWallet = wallets.find(wallet => wallet.walletClientType === 'privy');
      
      setVirtuosityUser({
        id: user?.id || '',
        email: user?.email?.address,
        walletAddress: embeddedWallet?.address,
        isAuthenticated: authenticated,
        isLoading: false,
      });
    }
  }, [user, authenticated, ready, wallets]);

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

  return {
    user: virtuosityUser,
    login: handleLogin,
    logout: handleLogout,
    isReady: ready,
  };
};
