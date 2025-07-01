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

  const newUser: VirtuosityUser = {
    id: user?.id || '',
    email: user?.email?.address,
    walletAddress: embeddedWallet?.address,
    smartWalletAddress: smartWalletAddress,
    isAuthenticated: authenticated,
    isLoading: false,
    hasSmartWallet: !!smartWalletClient,
  };

  useEffect(() => {
    if (!ready) return;

    const embeddedWallet = wallets.find(wallet => wallet.walletClientType === 'privy');
    const smartWalletAddress = smartWalletClient?.account?.address;

    const newUser: VirtuosityUser = {
      id: user?.id || '',
      email: user?.email?.address,
      walletAddress: embeddedWallet?.address,
      smartWalletAddress,
      isAuthenticated: authenticated,
      isLoading: false,
      hasSmartWallet: !!smartWalletClient,
    };

    setVirtuosityUser(newUser);
  }, [user, authenticated, ready, wallets, smartWalletClient]);

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