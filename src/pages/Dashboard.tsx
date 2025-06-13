import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Award, TrendingUp, MapPin, Clock, QrCode, Camera, Smartphone, Users, Trophy, Target, Zap, Wallet, Eye, Shield, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { DppVerification } from "@/components/DppVerification";
import CitizenReporting from "@/components/CitizenReporting";
import { useState } from "react";

interface WalletProduct {
  id: string;
  name: string;
  brand: string;
  model: string;
  image: string;
  purchaseDate: string;
  warranty: {
    period: string;
    expires: string;
    coverage: string[];
  };
  sustainability: {
    score: number;
    certifications: string[];
  };
  value: string;
  category: string;
  status: 'active' | 'expired' | 'claimed';
}

const Dashboard = () => {
  const navigate = useNavigate();
  const [showWallet, setShowWallet] = useState(false);

  // Mock wallet products - same as in DPP component
  const walletProducts: WalletProduct[] = [
    {
      id: "DPP-PRADA-001",
      name: "Borsa Saffiano",
      brand: "PRADA",
      model: "1BA274",
      image: "/lovable-uploads/3481b0f8-728c-469a-88b5-11f47b0047a4.png",
      purchaseDate: "2024-01-15",
      warranty: {
        period: "2 anni",
        expires: "2026-01-15",
        coverage: ["Difetti di fabbricazione", "Riparazione pelletteria", "Sostituzione hardware"]
      },
      sustainability: {
        score: 92,
        certifications: ["Made in Italy", "Pelle certificata", "Carbon Neutral"]
      },
      value: "€ 2.850",
      category: "Pelletteria",
      status: 'active'
    },
    {
      id: "DPP-ROLEX-002",
      name: "Submariner Date",
      brand: "ROLEX",
      model: "126610LN",
      image: "/lovable-uploads/a51bd3a3-21bb-4cab-afc7-e651cac982e9.png",
      purchaseDate: "2023-11-20",
      warranty: {
        period: "5 anni",
        expires: "2028-11-20",
        coverage: ["Movimento", "Cassa e bracciale", "Impermeabilità"]
      },
      sustainability: {
        score: 88,
        certifications: ["Swiss Made", "Oro responsabile", "Packaging eco"]
      },
      value: "€ 9.150",
      category: "Orologeria",
      status: 'active'
    },
    {
      id: "DPP-APPLE-003",
      name: "iPhone 15 Pro",
      brand: "APPLE",
      model: "A3101",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=300&h=300&fit=crop",
      purchaseDate: "2023-09-22",
      warranty: {
        period: "1 anno",
        expires: "2024-09-22",
        coverage: ["Hardware", "Batteria", "AppleCare+"]
      },
      sustainability: {
        score: 85,
        certifications: ["Carbon Neutral", "Materiali riciclati", "Packaging plastic-free"]
      },
      value: "€ 1.199",
      category: "Tecnologia",
      status: 'expired'
    }
  ];

  const activities = [{
    id: 1,
    type: "bike",
    action: "Pedalata in bicicletta",
    distance: "12.5 km",
    co2Saved: "2.8 kg",
    points: 150,
    time: "45 min",
    timestamp: "2024-01-15T08:30:00",
    location: "Milano Centro",
    source: "Strava"
  }, {
    id: 2,
    type: "public_transport",
    action: "Trasporto pubblico",
    distance: "8.2 km",
    co2Saved: "1.5 kg",
    points: 80,
    time: "25 min",
    timestamp: "2024-01-15T18:15:00",
    location: "Milano - Roma",
    source: "ATM App"
  }, {
    id: 3,
    type: "walk",
    action: "Camminata sostenibile",
    distance: "3.1 km",
    co2Saved: "0.7 kg",
    points: 45,
    time: "32 min",
    timestamp: "2024-01-14T12:20:00",
    location: "Parco Sempione",
    source: "Samsung Health"
  }];
  const certificates = [{
    id: "CERT-001",
    title: "Mobilità Sostenibile",
    co2Saved: "15.2 kg",
    points: 850,
    validatedAt: "2024-01-15",
    blockchainHash: "0x1a2b3c...",
    status: "verified"
  }, {
    id: "CERT-002",
    title: "Trasporto Pubblico",
    co2Saved: "8.7 kg",
    points: 470,
    validatedAt: "2024-01-10",
    blockchainHash: "0x4d5e6f...",
    status: "verified"
  }];
  const challenges = [{
    id: 1,
    title: "Settimana della Mobilità Verde",
    description: "Chi percorre più km con mezzi sostenibili questa settimana?",
    type: "weekly",
    participants: 12,
    yourPosition: 3,
    leadingUser: "Anna M.",
    leadingScore: "45.2 km",
    yourScore: "32.7 km",
    timeLeft: "3 giorni",
    category: "Mobilità",
    prize: "Buono spesa €50",
    progress: 73,
    status: "active"
  }, {
    id: 2,
    title: "Challenge CO₂ Aziendale",
    description: "Squadra che risparmia più CO₂ questo mese",
    type: "team",
    participants: 8,
    yourPosition: 1,
    leadingUser: "Il tuo team",
    leadingScore: "128.5 kg CO₂",
    yourScore: "128.5 kg CO₂",
    timeLeft: "12 giorni",
    category: "Riduzione CO₂",
    prize: "Team Building ecologico",
    progress: 85,
    status: "leading"
  }];
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'leading':
        return 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white';
      case 'active':
        return 'bg-gradient-to-r from-blue-400 to-purple-500 text-white';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };
  const getPositionBadge = (position: number) => {
    if (position === 1) return 'bg-yellow-100 text-yellow-800 border-yellow-300';
    if (position <= 3) return 'bg-green-100 text-green-800 border-green-300';
    return 'bg-blue-100 text-blue-800 border-blue-300';
  };

  const getSustainabilityColor = (score: number) => {
    if (score >= 80) return "text-green-600 bg-green-100";
    if (score >= 60) return "text-yellow-600 bg-yellow-100";
    return "text-red-600 bg-red-100";
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Pelletteria': return '👜';
      case 'Orologeria': return '⌚';
      case 'Tecnologia': return '📱';
      default: return '📦';
    }
  };

  const handleWalletClick = () => {
    setShowWallet(!showWallet);
  };

  return <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 sm:py-4 space-y-3 sm:space-y-0">
            <div className="flex items-center justify-center sm:justify-start space-x-2">
              <img src="/lovable-uploads/5930bd4d-6869-4b7d-8020-e58372708f8a.png" alt="Virtuosity Logo" className="h-10 w-10 sm:h-16 sm:w-16 object-contain" />
              <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Virtuosity
              </h1>
            </div>
            <div className="flex items-center justify-center space-x-2">
              
              <Button variant="outline" onClick={() => navigate("/marketplace")} className="border-green-300 text-green-700 hover:bg-green-50 hover:border-green-400 hover:scale-105 transition-all duration-200 text-xs px-2 py-1.5 sm:text-sm sm:px-4 sm:py-2 active:scale-95 bg-gradient-to-r from-green-500 to-green-600 text-white border-green-500 hover:from-green-600 hover:to-green-700">
                Exchange
              </Button>
              <Button variant="outline" onClick={() => navigate("/")} className="border-blue-300 text-blue-700 hover:bg-blue-50 hover:border-blue-400 hover:scale-105 transition-all duration-200 text-xs px-2 py-1.5 sm:text-sm sm:px-4 sm:py-2 active:scale-95">
                Home
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-8">
        {/* Welcome Section */}
        <div className="mb-4 sm:mb-8 text-center sm:text-left">
          <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">Benvenuto, Marco! 🌱</h2>
          <p className="text-gray-600 text-xs sm:text-base">Ecco il tuo impatto ambientale di oggi</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-6 mb-4 sm:mb-8">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-green-400 to-emerald-500 text-white hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <CardHeader className="pb-1 sm:pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium text-green-100">CO₂ Risparmiata</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-lg sm:text-2xl font-bold">24.3 kg</div>
              <p className="text-xs text-green-100 hidden sm:block">+12% questa settimana</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-400 to-cyan-500 text-white hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <CardHeader className="pb-1 sm:pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium text-blue-100">Punti Totali</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-lg sm:text-2xl font-bold">1,275</div>
              <p className="text-xs text-blue-100 hidden sm:block">+85 punti oggi</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-400 to-pink-500 text-white hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <CardHeader className="pb-1 sm:pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium text-purple-100">Certificati</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-lg sm:text-2xl font-bold">12</div>
              <p className="text-xs text-purple-100 hidden sm:block">2 nuovi certificati</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-400 to-red-500 text-white hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <CardHeader className="pb-1 sm:pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium text-orange-100">Livello</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-sm sm:text-2xl font-bold">ECO EXPERT</div>
              <Progress value={75} className="h-1.5 sm:h-2 bg-orange-200 [&>div]:bg-green-500" />
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="activities" className="space-y-3 sm:space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur-sm h-auto p-1 shadow-md">
            <TabsTrigger value="activities" className="text-[10px] sm:text-sm px-1 py-2 hover:bg-gradient-to-r hover:from-green-100 hover:to-emerald-100 hover:text-green-700 active:scale-95 transition-all duration-200 data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-400 data-[state=active]:to-emerald-500 data-[state=active]:text-white data-[state=active]:shadow-lg">
              Attività
            </TabsTrigger>
            <TabsTrigger value="certificates" className="text-[10px] sm:text-sm px-1 py-2 hover:bg-gradient-to-r hover:from-blue-100 hover:to-cyan-100 hover:text-blue-700 active:scale-95 transition-all duration-200 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-400 data-[state=active]:to-cyan-500 data-[state=active]:text-white data-[state=active]:shadow-lg">
              Certificati
            </TabsTrigger>
            <TabsTrigger value="reporting" className="text-[10px] sm:text-sm px-1 py-2 hover:bg-gradient-to-r hover:from-orange-100 hover:to-red-100 hover:text-orange-700 active:scale-95 transition-all duration-200 data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-400 data-[state=active]:to-red-500 data-[state=active]:text-white data-[state=active]:shadow-lg">
              Segnala
            </TabsTrigger>
            <TabsTrigger value="dpp" className="text-[10px] sm:text-sm px-1 py-2 hover:bg-gradient-to-r hover:from-cyan-100 hover:to-teal-100 hover:text-cyan-700 active:scale-95 transition-all duration-200 data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-400 data-[state=active]:to-teal-500 data-[state=active]:text-white data-[state=active]:shadow-lg">
              DPP
            </TabsTrigger>
          </TabsList>

          <TabsContent value="activities" className="space-y-3 sm:space-y-6">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="flex items-center gap-2 text-base sm:text-xl">
                  <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                  Attività Recenti
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  Tracciamento automatico delle tue azioni sostenibili
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 sm:space-y-4">
                  {activities.map(activity => <div key={activity.id} className="flex items-center justify-between p-2 sm:p-4 bg-gray-50 rounded-lg hover:bg-green-50 hover:shadow-md hover:scale-[1.02] transition-all duration-200 cursor-pointer active:scale-[0.98]">
                      <div className="flex items-center space-x-2 sm:space-x-4 flex-1 min-w-0">
                        <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-sm sm:text-xl flex-shrink-0">
                          {activity.type === 'bike' && '🚴'}
                          {activity.type === 'public_transport' && '🚌'}
                          {activity.type === 'walk' && '🚶'}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 text-xs sm:text-base truncate">{activity.action}</h3>
                          <div className="flex items-center space-x-2 text-xs text-gray-600">
                            <span className="flex items-center gap-1">
                              <Smartphone className="h-3 w-3 flex-shrink-0" />
                              <span className="truncate max-w-20 sm:max-w-none">{activity.source}</span>
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3 flex-shrink-0" />
                              {activity.time}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0 ml-2">
                        <div className="font-bold text-green-600 text-xs sm:text-base">+{activity.points}</div>
                        <div className="text-xs text-gray-600">{activity.co2Saved}</div>
                      </div>
                    </div>)}
                </div>
                
                {/* Wallet Button */}
                <div className="mt-4 sm:mt-6 pt-4 border-t border-gray-200">
                  <Button 
                    onClick={handleWalletClick}
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 text-sm sm:text-base py-2 sm:py-3"
                  >
                    <Wallet className="mr-2 h-4 w-4" />
                    {showWallet ? 'Nascondi Wallet' : 'Il tuo Wallet'}
                  </Button>
                  <p className="text-xs text-gray-500 text-center mt-2">
                    Visualizza i tuoi certificati digitali e garanzie prodotti
                  </p>
                </div>

                {/* Wallet Products Display - Only show when showWallet is true */}
                {showWallet && (
                  <div className="mt-6 p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                    <div className="mb-4 text-center">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        Il Mio Wallet DPP
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Conserva e gestisci le garanzie digitali dei tuoi prodotti di lusso
                      </p>
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        {walletProducts.length} Prodotti
                      </div>
                      <p className="text-sm text-gray-600">
                        Valore totale: {walletProducts.reduce((sum, product) => sum + parseFloat(product.value.replace(/[€\s.]/g, '').replace(',', '.')), 0).toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {walletProducts.map((product) => (
                        <Card key={product.id} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                          <div className="relative">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-full h-32 object-cover"
                            />
                            <div className="absolute top-2 right-2">
                              <Badge className={getStatusColor(product.status)}>
                                {product.status === 'active' ? 'Attiva' : product.status === 'expired' ? 'Scaduta' : 'Utilizzata'}
                              </Badge>
                            </div>
                            <div className="absolute top-2 left-2">
                              <div className="bg-white/90 backdrop-blur-sm rounded-full p-1 text-lg">
                                {getCategoryIcon(product.category)}
                              </div>
                            </div>
                          </div>

                          <CardContent className="p-3">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <h3 className="font-bold text-sm text-gray-900">{product.brand}</h3>
                                <p className="text-xs text-gray-600">{product.name}</p>
                                <p className="text-xs text-gray-500">Modello: {product.model}</p>
                              </div>
                              <div className="text-right">
                                <p className="font-bold text-sm text-blue-600">{product.value}</p>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <div className="flex items-center justify-between text-xs">
                                <span className="text-gray-600">Garanzia:</span>
                                <span className="font-semibold">{product.warranty.period}</span>
                              </div>
                              
                              <div className="flex items-center justify-between text-xs">
                                <span className="text-gray-600">Scade:</span>
                                <span className="font-semibold">{new Date(product.warranty.expires).toLocaleDateString('it-IT')}</span>
                              </div>

                              <div className="flex items-center justify-between text-xs">
                                <span className="text-gray-600">Sostenibilità:</span>
                                <Badge className={getSustainabilityColor(product.sustainability.score)}>
                                  {product.sustainability.score}/100
                                </Badge>
                              </div>

                              <div>
                                <p className="text-xs text-gray-600 mb-1">Certificazioni:</p>
                                <div className="flex flex-wrap gap-1">
                                  {product.sustainability.certifications.slice(0, 2).map((cert, index) => (
                                    <Badge key={index} variant="outline" className="text-xs">
                                      {cert}
                                    </Badge>
                                  ))}
                                  {product.sustainability.certifications.length > 2 && (
                                    <Badge variant="outline" className="text-xs">
                                      +{product.sustainability.certifications.length - 2}
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            </div>

                            <div className="flex gap-2 mt-3">
                              <Button size="sm" variant="outline" className="flex-1 text-xs">
                                <Eye className="h-3 w-3 mr-1" />
                                Dettagli
                              </Button>
                              <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 text-xs">
                                <Shield className="h-3 w-3 mr-1" />
                                Garanzia
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <div className="mt-4 text-center">
                      <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white shadow-lg text-sm">
                        <ShoppingBag className="mr-2 h-4 w-4" />
                        Aggiungi Nuovo Prodotto
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* New Gamification Section */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="flex items-center gap-2 text-base sm:text-xl">
                  <Trophy className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600" />
                  Le tue sfide!
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  Compete con altri utenti e dipendenti per essere più sostenibili
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 sm:space-y-4">
                  {challenges.map(challenge => <div key={challenge.id} className={`p-3 sm:p-4 rounded-lg border-2 hover:shadow-lg hover:scale-[1.01] transition-all duration-200 cursor-pointer ${getStatusColor(challenge.status)}`}>
                      <div className="flex justify-between items-start mb-2 sm:mb-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold text-sm sm:text-base truncate">{challenge.title}</h3>
                            <Badge className={`text-xs ${getPositionBadge(challenge.yourPosition)}`}>
                              #{challenge.yourPosition}
                            </Badge>
                          </div>
                          <p className="text-xs opacity-90">{challenge.description}</p>
                        </div>
                        <div className="flex items-center gap-1 ml-2 flex-shrink-0">
                          <Users className="h-3 w-3" />
                          <span className="text-xs">{challenge.participants}</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-2 sm:mb-3">
                        <div>
                          <p className="text-xs opacity-75">🥇 In testa</p>
                          <p className="font-semibold text-xs sm:text-sm">{challenge.leadingUser}</p>
                          <p className="text-xs opacity-90">{challenge.leadingScore}</p>
                        </div>
                        <div>
                          <p className="text-xs opacity-75">🎯 Il tuo punteggio</p>
                          <p className="font-semibold text-xs sm:text-sm">{challenge.yourScore}</p>
                          <p className="text-xs opacity-90">Categoria: {challenge.category}</p>
                        </div>
                      </div>

                      <div className="mb-2 sm:mb-3">
                        <div className="flex justify-between text-xs mb-1">
                          <span>Progresso</span>
                          <span>{challenge.progress}%</span>
                        </div>
                        <Progress value={challenge.progress} className="h-1.5 sm:h-2 bg-white/20 [&>div]:bg-white" />
                      </div>
                      
                      <div className="flex justify-between items-center text-xs">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>Tempo rimanente: {challenge.timeLeft}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Trophy className="h-3 w-3" />
                          
                        </div>
                      </div>
                    </div>)}
                  
                  <div className="pt-2">
                    <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg text-xs sm:text-sm py-2 sm:py-3">
                      <Target className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      Partecipa a Nuove Sfide
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="certificates" className="space-y-3 sm:space-y-6">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="flex items-center gap-2 text-base sm:text-xl">
                  <Award className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                  Certificati Blockchain
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  I tuoi certificati digitali verificati e tracciabili
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 sm:space-y-4">
                  {certificates.map(cert => <div key={cert.id} className="p-3 sm:p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-200 hover:shadow-lg hover:scale-[1.02] transition-all duration-200 cursor-pointer">
                      <div className="flex justify-between items-start mb-2 sm:mb-4">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-sm sm:text-lg text-gray-900 truncate">{cert.title}</h3>
                          <p className="text-xs text-gray-600">ID: {cert.id}</p>
                        </div>
                        <Badge className="bg-green-100 text-green-800 text-xs ml-2 flex-shrink-0">
                          {cert.status === 'verified' ? 'Verificato' : 'In verifica'}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-3 sm:mb-4">
                        <div>
                          <p className="text-xs text-gray-600">CO₂ Risparmiata</p>
                          <p className="font-bold text-green-600 text-sm">{cert.co2Saved}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600">Punti</p>
                          <p className="font-bold text-blue-600 text-sm">{cert.points}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600">Data</p>
                          <p className="font-bold text-gray-900 text-sm">{cert.validatedAt}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                        <p className="text-xs text-gray-500 font-mono truncate">
                          Hash: {cert.blockchainHash}
                        </p>
                        <Button size="sm" variant="outline" className="text-xs self-start sm:self-auto hover:bg-blue-50 hover:border-blue-300 hover:scale-105 active:scale-95 transition-all duration-200">
                          Visualizza
                        </Button>
                      </div>
                    </div>)}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reporting" className="space-y-3 sm:space-y-6">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="flex items-center gap-2 text-base sm:text-xl">
                  <Camera className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                  Segnala Problema al Comune
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  Contribuisci al miglioramento della tua città segnalando problemi urbani
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CitizenReporting />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="dpp" className="space-y-3 sm:space-y-6">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="flex items-center gap-2 text-base sm:text-xl">
                  <QrCode className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                  Verifica Passaporto Digitale del Prodotto
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  Scansiona il QR code per verificare l'origine e la sostenibilità del prodotto
                </CardDescription>
              </CardHeader>
              <CardContent id="dpp-wallet-section">
                <DppVerification />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>;
};

export default Dashboard;
