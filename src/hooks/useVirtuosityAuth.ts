import { usePrivy, useWallets } from '@privy-io/react-auth';
import { useSmartWallets } from '@privy-io/react-auth'; // 🔥 AGGIUNTO
import { useEffect, useState } from 'react';

export interface VirtuosityUser {
  id: string;
  email?: string;
  walletAddress?: string;
  isAuthenticated: boolean;
  isLoading: boolean;
  // 🔥 NUOVI CAMPI per Smart Wallets
  hasSmartWallet?: boolean;
  gasSponsored?: boolean;
  walletType?: 'embedded' | 'smart' | 'none';
}

export const useVirtuosityAuth = () => {
  console.log('🔍 useVirtuosityAuth hook initialized');
  
  const { user, authenticated, ready, login, logout } = usePrivy();
  const { wallets } = useWallets();
  // 🔥 AGGIUNTO: Smart Wallets hook
  const { smartWallet, createSmartWallet } = useSmartWallets();
  
  console.log('📊 Privy state:', { 
    user, 
    authenticated, 
    ready, 
    walletsCount: wallets?.length,
    smartWallet: smartWallet?.address // 🔥 AGGIUNTO
  });
  
  const [virtuosityUser, setVirtuosityUser] = useState<VirtuosityUser>({
    id: '',
    email: undefined,
    walletAddress: undefined,
    isAuthenticated: false,
    isLoading: true,
    hasSmartWallet: false, // 🔥 AGGIUNTO
    gasSponsored: false,   // 🔥 AGGIUNTO
    walletType: 'none',    // 🔥 AGGIUNTO
  });

  const [forceReady, setForceReady] = useState(false);
  const [isCreatingWallet, setIsCreatingWallet] = useState(false); // 🔥 AGGIUNTO

  // Timeout di sicurezza per forzare ready dopo 10 secondi
  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log('⏰ Timeout reached, forcing ready state');
      setForceReady(true);
    }, 10000);
    return () => clearTimeout(timeout);
  }, []);

  // 🔥 NUOVO: Auto-creazione Smart Wallet dopo login
  useEffect(() => {
    const createSmartWalletIfNeeded = async () => {
      if (authenticated && ready && !smartWallet && !isCreatingWallet) {
        console.log('🧠 User authenticated but no Smart Wallet found, creating...');
        setIsCreatingWallet(true);
        
        try {
          await createSmartWallet();
          console.log('✅ Smart Wallet created successfully');
        } catch (error) {
          console.error('❌ Error creating Smart Wallet:', error);
          
          // 🔄 Retry dopo 3 secondi
          setTimeout(async () => {
            try {
              console.log('🔄 Retrying Smart Wallet creation...');
              await createSmartWallet();
              console.log('✅ Smart Wallet created on retry');
            } catch (retryError) {
              console.error('❌ Smart Wallet retry failed:', retryError);
            }
          }, 3000);
        } finally {
          setIsCreatingWallet(false);
        }
      }
    };

    if (authenticated && ready) {
      // Aspetta un secondo per essere sicuri che tutto sia inizializzato
      const timer = setTimeout(createSmartWalletIfNeeded, 1000);
      return () => clearTimeout(timer);
    }
  }, [authenticated, ready, smartWallet, createSmartWallet, isCreatingWallet]);

  // 🔥 AGGIORNATO: useEffect principale per gestire Smart Wallets
  useEffect(() => {
    console.log('🔄 useEffect triggered - ready:', ready, 'forceReady:', forceReady);
    
    const isActuallyReady = ready || forceReady;
    
    if (isActuallyReady) {
      // 🔥 PRIORITÀ: Smart Wallet prima, poi Embedded Wallet come fallback
      let walletAddress: string | undefined;
      let walletType: 'embedded' | 'smart' | 'none' = 'none';
      let hasSmartWallet = false;
      let gasSponsored = false;

      if (smartWallet?.address) {
        // ✅ Smart Wallet disponibile (preferenza)
        walletAddress = smartWallet.address;
        walletType = 'smart';
        hasSmartWallet = true;
        gasSponsored = true; // Smart Wallets hanno gas sponsorizzato
        console.log('🧠 Smart Wallet found:', walletAddress);
      } else {
        // 🔄 Fallback su Embedded Wallet se Smart Wallet non disponibile
        const embeddedWallet = wallets.find(wallet => wallet.walletClientType === 'privy');
        if (embeddedWallet?.address) {
          walletAddress = embeddedWallet.address;
          walletType = 'embedded';
          console.log('💰 Embedded wallet found as fallback:', walletAddress);
        } else if (isCreatingWallet) {
          // 🔄 Wallet in creazione
          console.log('⏳ Wallet creation in progress...');
        } else {
          console.log('❌ No wallet found');
        }
      }
      
      const newUser: VirtuosityUser = {
        id: user?.id || '',
        email: user?.email?.address,
        walletAddress,
        isAuthenticated: authenticated,
        isLoading: isCreatingWallet, // 🔥 Loading se stiamo creando il wallet
        hasSmartWallet,
        gasSponsored,
        walletType,
      };
      
      console.log('👤 Setting virtuosity user:', newUser);
      setVirtuosityUser(newUser);
    }
  }, [user, authenticated, ready, wallets, smartWallet, forceReady, isCreatingWallet]);

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

  // 🔥 NUOVO: Funzione per creare Smart Wallet manualmente
  const handleCreateSmartWallet = async () => {
    if (!authenticated) {
      console.log('❌ User not authenticated');
      return;
    }

    if (isCreatingWallet) {
      console.log('⏳ Wallet creation already in progress');
      return;
    }

    console.log('🧠 Manual Smart Wallet creation started');
    setIsCreatingWallet(true);
    
    try {
      await createSmartWallet();
      console.log('✅ Manual Smart Wallet creation successful');
    } catch (error) {
      console.error('❌ Manual Smart Wallet creation failed:', error);
    } finally {
      setIsCreatingWallet(false);
    }
  };

  const actualReady = ready || forceReady;
  
  // 🔥 AGGIORNATO: Return con nuove funzioni
  const returnData = {
    user: virtuosityUser,
    login: handleLogin,
    logout: handleLogout,
    isReady: actualReady,
    // 🔥 NUOVE funzioni e stati
    createSmartWallet: handleCreateSmartWallet,
    isCreatingWallet,
    smartWallet,
    // Informazioni aggiuntive per debug
    debug: {
      privyReady: ready,
      privyAuthenticated: authenticated,
      embeddedWalletsCount: wallets.length,
      hasSmartWallet: !!smartWallet,
    }
  };

  console.log('📤 Returning hook data:', returnData);
  
  return returnData;
};