
import { usePrivy, useWallets, useCreateWallet } from '@privy-io/react-auth';
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
  const { createWallet } = useCreateWallet();
  
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
  const [showWalletCreation, setShowWalletCreation] = useState(false);

  // Timeout di sicurezza per forzare ready dopo 10 secondi
  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log('⏰ Timeout reached, forcing ready state');
      setForceReady(true);
    }, 10000);
    return () => clearTimeout(timeout);
  }, []);

  // Timeout per mostrare il pulsante di creazione wallet se ci mette troppo
  useEffect(() => {
    if (authenticated && !virtuosityUser.walletAddress) {
      const walletTimeout = setTimeout(() => {
        console.log('⏰ Wallet creation timeout, showing manual option');
        setShowWalletCreation(true);
      }, 8000); // 8 secondi per dare tempo alla creazione automatica
      
      return () => clearTimeout(walletTimeout);
    }
  }, [authenticated, virtuosityUser.walletAddress]);

  useEffect(() => {
    if (!ready && !forceReady) return;

    const embeddedWallet = wallets?.find(
      (wallet: any) => wallet?.walletClientType === 'privy'
    );

    const newUser: VirtuosityUser = {
      id: user?.id || '',
      email: user?.email?.address,
      walletAddress: embeddedWallet?.address,
      isAuthenticated: authenticated,
      isLoading: false,
    };

    setVirtuosityUser(newUser);

    // Se abbiamo un wallet address, nascondi il pulsante di creazione manuale
    if (embeddedWallet?.address) {
      setShowWalletCreation(false);
    }
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

  const handleCreateWallet = async () => {
    try {
      console.log('🔨 Manual wallet creation started');
      await createWallet();
      console.log('✅ Manual wallet creation successful');
      setShowWalletCreation(false);
    } catch (error) {
      console.error('❌ Manual wallet creation failed:', error);
    }
  };

  const actualReady = ready || forceReady;
  console.log('📤 Returning hook data:', { user: virtuosityUser, isReady: actualReady, showWalletCreation });
  
  return {
    user: virtuosityUser,
    login: handleLogin,
    logout: handleLogout,
    createWallet: handleCreateWallet,
    showWalletCreation,
    isReady: actualReady,
  };
};
