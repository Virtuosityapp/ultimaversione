import React from 'react';
import { useVirtuosityAuth } from '@/hooks/useVirtuosityAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Brain, User, AlertCircle, CheckCircle, LogOut, LogIn, Zap } from 'lucide-react';

export const VirtuosityAuth = () => {
  console.log('🎨 VirtuosityAuth component rendering');
  
  const {
    user,
    login,
    logout,
    isReady,
    createSmartWallet,
    isCreatingWallet,
    smartWallet,
    debug
  } = useVirtuosityAuth();

  console.log('🔐 VirtuosityAuth state:', { user, isReady, isCreatingWallet, hasSmartWallet: user.hasSmartWallet });

  // 🔥 STATO DI CARICAMENTO
  if (!isReady || user.isLoading) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="flex items-center justify-center p-6">
          <div className="flex items-center space-x-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>
              {!isReady ? 'Inizializzando Privy...' : 'Configurando Smart Wallet...'}
            </span>
          </div>
        </CardContent>
      </Card>
    );
  }

  // 🔥 STATO NON AUTENTICATO
  if (!user.isAuthenticated) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
            <User className="h-6 w-6 text-blue-600" />
          </div>
          <CardTitle>Accedi per Continuare</CardTitle>
          <CardDescription>
            Crea il tuo Smart Wallet senza preoccuparti del gas
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button 
            onClick={login} 
            className="w-full" 
            size="lg"
            disabled={!isReady}
          >
            <LogIn className="mr-2 h-4 w-4" />
            {isReady ? 'Accedi e Crea Smart Wallet' : 'Caricamento...'}
          </Button>
          
          {/* Info sui vantaggi Smart Wallet */}
          <Alert>
            <Zap className="h-4 w-4" />
            <AlertDescription>
              <div className="space-y-1">
                <div className="font-medium">🧠 Smart Wallet incluso:</div>
                <div className="text-sm">• Gas sponsorizzato (pagano per te)</div>
                <div className="text-sm">• Nessun costo di transazione</div>
                <div className="text-sm">• Sicurezza avanzata</div>
              </div>
            </AlertDescription>
          </Alert>
          
          {/* Debug info */}
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              <div className="text-xs space-y-1">
                <div>Privy Ready: {debug.privyReady ? '✅' : '❌'}</div>
                <div>Is Ready: {isReady ? '✅' : '❌'}</div>
                <div>Mode: Smart Wallet Priority</div>
              </div>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    );
  }

  // 🔥 STATO AUTENTICATO
  console.log('✅ User authenticated, showing wallet state');
  
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
          {user.walletAddress ? (
            <CheckCircle className="h-6 w-6 text-green-600" />
          ) : (
            <Brain className="h-6 w-6 text-purple-600" />
          )}
        </div>
        <CardTitle>
          {user.walletType === 'smart' ? 'Smart Wallet Attivo' : 
           user.walletType === 'embedded' ? 'Embedded Wallet Attivo' :
           'Wallet in Configurazione'}
        </CardTitle>
        <CardDescription>
          {user.hasSmartWallet 
            ? '🎉 Il tuo Smart Wallet è pronto! Gas sponsorizzato incluso.' 
            : user.walletAddress 
              ? '💰 Embedded Wallet attivo. Smart Wallet in configurazione...'
              : '⏳ Configurazione wallet in corso...'
          }
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* 🔥 INFORMAZIONI UTENTE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">User ID</label>
            <div className="text-sm text-gray-600 font-mono bg-gray-50 p-2 rounded">
              {user.id}
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <div className="text-sm text-gray-600 bg-gray-50 p-2 rounded">
              {user.email || 'Non disponibile'}
            </div>
          </div>
        </div>

        {/* 🔥 WALLET - SEZIONE PRINCIPALE */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-medium flex items-center">
              {user.walletType === 'smart' ? (
                <>
                  <Brain className="mr-2 h-4 w-4 text-purple-600" />
                  Smart Wallet
                </>
              ) : (
                <>
                  <User className="mr-2 h-4 w-4 text-blue-600" />
                  Wallet
                </>
              )}
            </h3>
            <div className="flex space-x-2">
              <Badge variant={user.walletAddress ? "default" : "secondary"}>
                {user.walletAddress ? '✅ Attivo' : '⏳ Configurazione'}
              </Badge>
              {user.gasSponsored && (
                <Badge variant="outline" className="border-green-500 text-green-700">
                  <Zap className="h-3 w-3 mr-1" />
                  Gas Gratuito
                </Badge>
              )}
              {user.walletType !== 'none' && (
                <Badge variant="outline">
                  {user.walletType === 'smart' ? 'Smart Contract' : 'Embedded'}
                </Badge>
              )}
            </div>
          </div>

          {/* Indirizzo Wallet */}
          {user.walletAddress && (
            <div className="space-y-2">
              <label className="text-sm font-medium">
                🔑 Indirizzo {user.walletType === 'smart' ? 'Smart Wallet' : 'Wallet'}
              </label>
              <div className={`border-l-4 p-3 rounded ${
                user.walletType === 'smart' 
                  ? 'bg-purple-50 border-purple-400' 
                  : 'bg-blue-50 border-blue-400'
              }`}>
                <div className={`text-sm font-mono break-all ${
                  user.walletType === 'smart' ? 'text-purple-600' : 'text-blue-600'
                }`}>
                  {user.walletAddress}
                </div>
                <div className={`text-xs mt-1 ${
                  user.walletType === 'smart' ? 'text-purple-500' : 'text-blue-500'
                }`}>
                  {user.walletType === 'smart' 
                    ? 'Smart Contract Wallet con gas sponsorizzato'
                    : 'Embedded Wallet standard'
                  }
                </div>
              </div>
            </div>
          )}

          {/* Vantaggi Smart Wallet */}
          {user.hasSmartWallet && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-medium text-green-800 mb-2">🎯 Vantaggi del tuo Smart Wallet:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-green-700">
                <div className="flex items-center">
                  <Zap className="h-3 w-3 mr-2" />
                  Gas sponsorizzato
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-3 w-3 mr-2" />
                  Transazioni gratuite
                </div>
                <div className="flex items-center">
                  <Brain className="h-3 w-3 mr-2" />
                  Sicurezza avanzata
                </div>
                <div className="flex items-center">
                  <User className="h-3 w-3 mr-2" />
                  Recupero account
                </div>
              </div>
            </div>
          )}

          {/* 🔥 STATO CREAZIONE WALLET */}
          {isCreatingWallet && (
            <Alert className="border-purple-200 bg-purple-50">
              <Loader2 className="h-4 w-4 animate-spin text-purple-600" />
              <AlertDescription>
                <div className="text-purple-800">
                  <strong>Creazione Smart Wallet in corso...</strong>
                  <br />
                  <span className="text-sm">Configurazione del contratto smart, attendere...</span>
                </div>
              </AlertDescription>
            </Alert>
          )}

          {/* 🔥 PULSANTE CREA SMART WALLET MANUALE */}
          {user.isAuthenticated && !user.hasSmartWallet && !isCreatingWallet && (
            <Alert className="border-purple-200 bg-purple-50">
              <Brain className="h-4 w-4 text-purple-600" />
              <AlertDescription>
                <div className="space-y-3">
                  <div className="text-purple-800">
                    {user.walletType === 'embedded' 
                      ? 'Aggiorna al Smart Wallet per gas gratuito!'
                      : 'Crea il tuo Smart Wallet con gas sponsorizzato!'
                    }
                  </div>
                  <Button 
                    onClick={createSmartWallet} 
                    className="w-full bg-purple-600 hover:bg-purple-700" 
                    size="sm"
                  >
                    <Brain className="mr-2 h-4 w-4" />
                    Crea Smart Wallet
                  </Button>
                </div>
              </AlertDescription>
            </Alert>
          )}
        </div>

        {/* 🔥 PULSANTE LOGOUT */}
        <div className="pt-4 border-t">
          <Button 
            onClick={logout} 
            variant="outline" 
            className="w-full"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Disconnetti
          </Button>
        </div>

        {/* 🔥 DEBUG INFORMAZIONI */}
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            <details className="cursor-pointer">
              <summary className="font-medium mb-2">🔍 Debug Info (Click per espandere)</summary>
              <div className="text-xs space-y-1 bg-gray-50 p-2 rounded">
                <div>Privy Ready: {debug.privyReady ? '✅' : '❌'}</div>
                <div>Authenticated: {debug.privyAuthenticated ? '✅' : '❌'}</div>
                <div>Wallet Type: {user.walletType}</div>
                <div>Has Smart Wallet: {user.hasSmartWallet ? '✅' : '❌'}</div>
                <div>Gas Sponsored: {user.gasSponsored ? '✅' : '❌'}</div>
                <div>Creating Wallet: {isCreatingWallet ? '⏳' : '✅'}</div>
                <div>Embedded Wallets: {debug.embeddedWalletsCount}</div>
                <div>Smart Wallet: {debug.hasSmartWallet ? '✅' : '❌'}</div>
              </div>
            </details>
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
};