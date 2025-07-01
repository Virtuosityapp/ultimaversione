import React from 'react';
import { useVirtuosityAuth } from '@/hooks/useVirtuosityAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Brain, Wallet, User, AlertCircle, CheckCircle, LogOut, LogIn, Zap, ExternalLink } from 'lucide-react';

export const VirtuosityAuth = () => {
  console.log('🎨 VirtuosityAuth component rendering (Smart Wallets)');
  
  const {
    user,
    login,
    logout,
    isReady,
    allWallets,
    allLinkedAccounts,
    debug
  } = useVirtuosityAuth();

  console.log('🔐 VirtuosityAuth state:', { user, isReady, hasSmartWallet: user.hasSmartWallet });

  // 🔥 STATO DI CARICAMENTO
  if (!isReady || user.isLoading) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="flex items-center justify-center p-6">
          <div className="flex items-center space-x-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Inizializzando Smart Wallets...</span>
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
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-100 to-blue-100">
            <Brain className="h-6 w-6 text-purple-600" />
          </div>
          <CardTitle>Accedi per Continuare</CardTitle>
          <CardDescription>
            Smart Wallet con gas sponsorizzato incluso
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button 
            onClick={login} 
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700" 
            size="lg"
            disabled={!isReady}
          >
            <LogIn className="mr-2 h-4 w-4" />
            {isReady ? 'Accedi e Crea Smart Wallet' : 'Caricamento...'}
          </Button>
          
          {/* Info sui vantaggi Smart Wallet */}
          <Alert className="border-purple-200 bg-purple-50">
            <Brain className="h-4 w-4 text-purple-600" />
            <AlertDescription>
              <div className="space-y-1 text-purple-800">
                <div className="font-medium">🧠 Smart Wallet incluso:</div>
                <div className="text-sm">• Gas sponsorizzato automaticamente</div>
                <div className="text-sm">• Sicurezza avanzata con recovery</div>
                <div className="text-sm">• Nessuna installazione richiesta</div>
                <div className="text-sm">• Transazioni batch e gasless</div>
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
                <div>Smart Wallets: Configurati nel dashboard</div>
              </div>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    );
  }

  // 🔥 STATO AUTENTICATO
  console.log('✅ User authenticated, showing Smart Wallet state');
  
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-100 to-purple-100">
          {user.hasSmartWallet ? (
            <Brain className="h-6 w-6 text-purple-600" />
          ) : user.hasEmbeddedWallet ? (
            <Wallet className="h-6 w-6 text-blue-600" />
          ) : (
            <CheckCircle className="h-6 w-6 text-green-600" />
          )}
        </div>
        <CardTitle>
          {user.hasSmartWallet ? 'Smart Wallet Attivo' : 
           user.hasEmbeddedWallet ? 'Embedded Wallet Attivo' :
           'Wallet Configurazione'}
        </CardTitle>
        <CardDescription>
          {user.hasSmartWallet 
            ? '🎉 Smart Wallet con gas sponsorizzato è pronto!'
            : user.hasEmbeddedWallet 
              ? '💰 Embedded Wallet attivo - Smart Wallet in configurazione...'
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

        {/* 🔥 SMART WALLET - SEZIONE PRINCIPALE */}
        {user.hasSmartWallet && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium flex items-center">
                <Brain className="mr-2 h-4 w-4 text-purple-600" />
                Smart Wallet
              </h3>
              <div className="flex space-x-2">
                <Badge variant="default" className="bg-purple-600">
                  ✅ Attivo
                </Badge>
                <Badge variant="outline" className="border-green-500 text-green-700">
                  <Zap className="h-3 w-3 mr-1" />
                  Gas Gratuito
                </Badge>
                <Badge variant="outline">
                  {user.smartWalletType || 'Smart Contract'}
                </Badge>
              </div>
            </div>

            {/* Indirizzo Smart Wallet */}
            <div className="space-y-2">
              <label className="text-sm font-medium">🧠 Indirizzo Smart Wallet</label>
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-l-4 border-purple-400 p-3 rounded">
                <div className="text-sm text-purple-700 font-mono break-all">
                  {user.smartWalletAddress}
                </div>
                <div className="text-xs text-purple-600 mt-1 flex items-center">
                  <Brain className="h-3 w-3 mr-1" />
                  Smart Contract • Gas sponsorizzato • Tipo: {user.smartWalletType || 'Unknown'}
                </div>
              </div>
            </div>

            {/* Vantaggi Smart Wallet */}
            <div className="bg-gradient-to-r from-green-50 to-purple-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-medium text-green-800 mb-3 flex items-center">
                <Zap className="h-4 w-4 mr-2" />
                Vantaggi del tuo Smart Wallet:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center text-sm text-green-700">
                  <CheckCircle className="h-3 w-3 mr-2 text-green-600" />
                  Gas sponsorizzato automaticamente
                </div>
                <div className="flex items-center text-sm text-green-700">
                  <Brain className="h-3 w-3 mr-2 text-purple-600" />
                  Sicurezza smart contract
                </div>
                <div className="flex items-center text-sm text-green-700">
                  <Zap className="h-3 w-3 mr-2 text-yellow-600" />
                  Transazioni batch
                </div>
                <div className="flex items-center text-sm text-green-700">
                  <User className="h-3 w-3 mr-2 text-blue-600" />
                  Account recovery integrato
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 🔥 EMBEDDED WALLET (se presente) */}
        {user.hasEmbeddedWallet && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium flex items-center">
                <Wallet className="mr-2 h-4 w-4 text-blue-600" />
                Embedded Wallet
              </h3>
              <Badge variant="outline">Backup</Badge>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">💰 Indirizzo Embedded Wallet</label>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded">
                <div className="text-sm text-blue-700 font-mono break-all">
                  {user.embeddedWalletAddress}
                </div>
                <div className="text-xs text-blue-600 mt-1">
                  Wallet Privy standard (utilizzato per creare lo Smart Wallet)
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 🔥 TUTTI I WALLETS (debug) */}
        {allWallets.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">📋 Tutti i Wallets ({allWallets.length})</h3>
              <Badge variant="outline">{user.totalWallets} totali</Badge>
            </div>

            <div className="space-y-2">
              {allWallets.map((wallet, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded-lg border">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium flex items-center">
                      {wallet.walletClientType === 'privy' ? (
                        <>
                          <Wallet className="h-3 w-3 mr-1" />
                          Privy Embedded
                        </>
                      ) : (
                        <>
                          <ExternalLink className="h-3 w-3 mr-1" />
                          {wallet.walletClientType}
                        </>
                      )}
                    </span>
                    <div className="flex space-x-2">
                      <Badge variant="outline" className="text-xs">
                        {wallet.connectorType}
                      </Badge>
                      {wallet.address === user.walletAddress && (
                        <Badge variant="default" className="text-xs">Principale</Badge>
                      )}
                    </div>
                  </div>
                  <div className="text-xs text-gray-600 font-mono bg-white p-2 rounded">
                    {wallet.address}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

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

        {/* 🔥 DEBUG INFORMAZIONI AVANZATE */}
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            <details className="cursor-pointer">
              <summary className="font-medium mb-2">🔍 Debug Info Smart Wallets (Click per espandere)</summary>
              <div className="text-xs space-y-1 bg-gray-50 p-2 rounded">
                <div>Privy Ready: {debug.privyReady ? '✅' : '❌'}</div>
                <div>Authenticated: {debug.privyAuthenticated ? '✅' : '❌'}</div>
                <div>Smart Wallet: {user.hasSmartWallet ? '✅' : '❌'}</div>
                <div>Smart Wallet Address: {user.smartWalletAddress || 'None'}</div>
                <div>Smart Wallet Type: {user.smartWalletType || 'None'}</div>
                <div>Embedded Wallet: {user.hasEmbeddedWallet ? '✅' : '❌'}</div>
                <div>Total Wallets: {user.totalWallets}</div>
                <div>Linked Accounts: {debug.linkedAccountsCount}</div>
                <div>Environment: Lovable</div>
              </div>
            </details>
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
};