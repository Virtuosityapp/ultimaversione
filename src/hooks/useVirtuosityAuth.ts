import { usePrivy, useWallets } from '@privy-io/react-auth';
import { useEffect, useState } from 'react';

export interface VirtuosityUser {
  id: string;
  email?: string;
  walletAddress?: string;
  isAuthenticated: boolean;
  isLoading: boolean;
  // 🔥 Smart Wallets info
  hasSmartWallet?: boolean;
  smartWalletAddress?: string;
  smartWalletType?: string;
  hasEmbeddedWallet?: boolean;
  embeddedWalletAddress?: string;
  totalWallets?: number;
}

export const useVirtuosityAuth = () => {
  console.log('🔍 useVirtuosityAuth hook initialized (Smart Wallets)');
  
  const { user, authenticated, ready, login, logout } = usePrivy();
  const { wallets } = useWallets();
  
  console.log('📊 Privy state:', { 
    user: user?.id, 
    authenticated, 
    ready, 
    walletsCount: wallets?.length,
    userLinkedAccounts: user?.linkedAccounts?.length
  });
  
  const [virtuosityUser, setVirtuosityUser] = useState<VirtuosityUser>({
    id: '',
    email: undefined,
    walletAddress: undefined,
    isAuthenticated: false,
    isLoading: true,
    hasSmartWallet: false,
    smartWalletAddress: undefined,
    smartWalletType: undefined,
    hasEmbeddedWallet: false,
    embeddedWalletAddress: undefined,
    totalWallets: 0,
  });

  const [forceReady, setForceReady] = useState(false);

  // Timeout di sicurezza per Lovable
  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log('⏰ Timeout reached, forcing ready state');
      setForceReady(true);
    }, 15000);
    return () => clearTimeout(timeout);
  }, []);

  // 🔥 useEffect principale per Smart Wallets
  useEffect(() => {
    console.log('🔄 useEffect triggered - ready:', ready, 'forceReady:', forceReady);
    
    const isActuallyReady = ready || forceReady;
    
    if (isActuallyReady) {
      // 🔥 CERCA SMART WALLET nei linkedAccounts (metodo ufficiale)
      const smartWallet = user?.linkedAccounts?.find(
        (account: any) => account.type === 'smart_wallet'
      );
      
      // 🔥 CERCA EMBEDDED WALLET nei wallets array
      const embeddedWallet = wallets.find(wallet => 
        wallet.walletClientType === 'privy'
      );
      
      // Altri wallets esterni
      const externalWallets = wallets.filter(wallet => 
        wallet.walletClientType !== 'privy'
      );
      
      // 🎯 LOGICA DI PRIORITÀ: Smart Wallet > Embedded Wallet > External Wallet
      let primaryWalletAddress: string | undefined;
      let hasSmartWallet = false;
      let hasEmbeddedWallet = false;
      
      if (smartWallet?.address) {
        // ✅ SMART WALLET (priorità massima)
        primaryWalletAddress = smartWallet.address;
        hasSmartWallet = true;
        console.log('🧠 Smart Wallet found:', {
          address: smartWallet.address,
          type: smartWallet.smartWalletType || 'unknown'
        });
      } else if (embeddedWallet?.address) {
        // 💰 EMBEDDED WALLET (fallback)
        primaryWalletAddress = embeddedWallet.address;
        hasEmbeddedWallet = true;
        console.log('💰 Embedded Wallet found:', embeddedWallet.address);
      } else if (externalWallets.length > 0) {
        // 🦊 EXTERNAL WALLET (ultimo fallback)
        primaryWalletAddress = externalWallets[0].address;
        console.log('🦊 External Wallet found:', primaryWalletAddress);
      } else {
        console.log('❌ No wallets found');
      }
      
      const newUser: VirtuosityUser = {
        id: user?.id || '',
        email: user?.email?.address,
        walletAddress: primaryWalletAddress,
        isAuthenticated: authenticated,
        isLoading: false,
        // 🔥 Smart Wallet specifici
        hasSmartWallet,
        smartWalletAddress: smartWallet?.address,
        smartWalletType: smartWallet?.smartWalletType || undefined,
        // 🔥 Embedded Wallet specifici
        hasEmbeddedWallet,
        embeddedWalletAddress: embeddedWallet?.address,
        // 🔥 Info generali
        totalWallets: wallets.length,
      };
      
      console.log('👤 Setting virtuosity user (Smart Wallets):', newUser);
      setVirtuosityUser(newUser);
    }
  }, [user, authenticated, ready, wallets, forceReady]);

  const handleLogin = async () => {
    try {
      console.log('🚀 Login attempt started (Smart Wallets)');
      await login();
      console.log('✅ Login successful - Smart Wallets should be created automatically');
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
  
  // 🔥 Return data con info Smart Wallets
  const returnData = {
    user: virtuosityUser,
    login: handleLogin,
    logout: handleLogout,
    isReady: actualReady,
    // 🔥 Array di tutti i wallets per debug
    allWallets: wallets,
    allLinkedAccounts: user?.linkedAccounts || [],
    // 🔥 Debug info specifico per Smart Wallets
    debug: {
      privyReady: ready,
      privyAuthenticated: authenticated,
      walletsCount: wallets.length,
      linkedAccountsCount: user?.linkedAccounts?.length || 0,
      embeddedWallet: wallets.find(w => w.walletClientType === 'privy'),
      smartWalletFromAccounts: user?.linkedAccounts?.find((a: any) => a.type === 'smart_wallet'),
      externalWallets: wallets.filter(w => w.walletClientType !== 'privy'),
      forceReady,
    }
  };

  console.log('📤 Returning hook data (Smart Wallets):', returnData);
  
  return returnData;
};