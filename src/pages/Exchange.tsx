import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  Award, 
  ShoppingBag, 
  Gift, 
  Star, 
  Heart, 
  Sparkles, 
  Clock, 
  TrendingUp, 
  Users, 
  Target, 
  Zap,
  UtensilsCrossed,
  Smile,
  Eye,
  Stethoscope,
  Car,
  Home,
  Coffee,
  Plane,
  Gamepad2,
  Music,
  Book,
  Dumbbell,
  Camera,
  Palette,
  TreePine,
  MapPin,
  Briefcase,
  GraduationCap,
  Headphones,
  ShoppingCart,
  Ticket,
  Calendar,
  ArrowRight,
  CheckCircle,
  Package,
  Leaf
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

const Exchange = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [selectedReward, setSelectedReward] = useState(null);
  const [userCertificates, setUserCertificates] = useState(47);
  const [showExchangeDialog, setShowExchangeDialog] = useState(false);

  // Rewards data with swapped positions
  const rewards = [
    {
      id: 1,
      title: "Visita Odontoiatrica",
      description: "Pulizia dentale professionale presso dentisti convenzionati",
      certificates: 12,
      value: "€120",
      category: "Salute",
      icon: Smile,
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
      available: 15,
      claimed: 23,
      rating: 4.8,
      popular: true
    },
    {
      id: 2,
      title: "Buono Pasto Premium",
      description: "Buoni pasto da €15 utilizzabili in ristoranti selezionati",
      certificates: 8,
      value: "€150",
      category: "Alimentazione",
      icon: UtensilsCrossed,
      color: "from-orange-400 to-red-500",
      bgColor: "bg-orange-50",
      textColor: "text-orange-700",
      available: 25,
      claimed: 89,
      rating: 4.9,
      popular: false
    },
    {
      id: 3,
      title: "Visita Oculistica",
      description: "Controllo completo della vista con esame del fondo oculare",
      certificates: 10,
      value: "€80",
      category: "Salute",
      icon: Eye,
      color: "from-blue-400 to-indigo-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      available: 12,
      claimed: 34,
      rating: 4.7,
      popular: false
    },
    {
      id: 4,
      title: "Visita Medica Specialistica",
      description: "Visita medica presso strutture sanitarie convenzionate",
      certificates: 15,
      value: "€200",
      category: "Salute",
      icon: Stethoscope,
      color: "from-red-400 to-pink-500",
      bgColor: "bg-red-50",
      textColor: "text-red-700",
      available: 8,
      claimed: 19,
      rating: 4.6,
      popular: false
    },
    {
      id: 5,
      title: "Buono Carburante",
      description: "Buono carburante da €50 per stazioni di servizio",
      certificates: 20,
      value: "€50",
      category: "Trasporti",
      icon: Car,
      color: "from-gray-400 to-slate-500",
      bgColor: "bg-gray-50",
      textColor: "text-gray-700",
      available: 30,
      claimed: 67,
      rating: 4.4,
      popular: false
    },
    {
      id: 6,
      title: "Buono Amazon",
      description: "Gift card Amazon da utilizzare per acquisti online",
      certificates: 25,
      value: "€100",
      category: "Shopping",
      icon: ShoppingBag,
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-700",
      available: 50,
      claimed: 156,
      rating: 4.9,
      popular: true
    },
    {
      id: 7,
      title: "Weekend Spa",
      description: "Soggiorno relax di 2 giorni in spa di lusso",
      certificates: 35,
      value: "€300",
      category: "Benessere",
      icon: Sparkles,
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
      available: 5,
      claimed: 12,
      rating: 4.8,
      popular: true
    },
    {
      id: 8,
      title: "Corso Online",
      description: "Accesso a corsi di formazione professionale online",
      certificates: 18,
      value: "€250",
      category: "Formazione",
      icon: GraduationCap,
      color: "from-indigo-400 to-blue-500",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-700",
      available: 20,
      claimed: 45,
      rating: 4.5,
      popular: false
    }
  ];

  const categories = [
    { name: "Tutti", count: rewards.length, active: true },
    { name: "Salute", count: 3, active: false },
    { name: "Shopping", count: 2, active: false },
    { name: "Benessere", count: 1, active: false },
    { name: "Trasporti", count: 1, active: false },
    { name: "Formazione", count: 1, active: false }
  ];

  const handleExchange = (reward) => {
    if (userCertificates >= reward.certificates) {
      setUserCertificates(prev => prev - reward.certificates);
      setShowExchangeDialog(false);
      // Show success message
      console.log(`Scambiato: ${reward.title}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="outline" 
                onClick={() => navigate('/dashboard')}
                className="border-green-200 text-green-700 hover:bg-green-50"
              >
                <Home className="w-4 h-4 mr-2" />
                Dashboard
              </Button>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Marketplace ESG
                </h1>
                <p className="text-slate-600 text-sm md:text-base">
                  Scambia i tuoi certificati con premi esclusivi
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-xl p-4">
              <div className="text-center">
                <p className="text-sm text-slate-600">I tuoi certificati</p>
                <p className="text-2xl font-bold text-green-700">{userCertificates}</p>
                <Badge className="bg-green-600 text-white mt-1">
                  <Award className="w-3 h-3 mr-1" />
                  Attivi
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-green-100 to-green-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-800">Premi Disponibili</p>
                  <p className="text-2xl font-bold text-green-900">{rewards.length}</p>
                </div>
                <Gift className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-100 to-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-800">Scambi Effettuati</p>
                  <p className="text-2xl font-bold text-blue-900">23</p>
                </div>
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-100 to-purple-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-purple-800">Valore Ottenuto</p>
                  <p className="text-2xl font-bold text-purple-900">€1,250</p>
                </div>
                <Star className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-100 to-orange-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-orange-800">Prossimo Premio</p>
                  <p className="text-2xl font-bold text-orange-900">3 cert.</p>
                </div>
                <Target className="w-8 h-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <Badge 
              key={index}
              className={`px-4 py-2 cursor-pointer transition-all ${
                category.active 
                  ? 'bg-green-600 text-white' 
                  : 'bg-white text-slate-600 hover:bg-green-50'
              }`}
            >
              {category.name} ({category.count})
            </Badge>
          ))}
        </div>

        {/* Rewards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {rewards.map((reward) => (
            <Card key={reward.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className={`h-2 bg-gradient-to-r ${reward.color}`} />
              
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-xl ${reward.bgColor}`}>
                    <reward.icon className={`w-6 h-6 ${reward.textColor}`} />
                  </div>
                  <div className="text-right">
                    {reward.popular && (
                      <Badge className="bg-red-500 text-white mb-2">
                        🔥 Popolare
                      </Badge>
                    )}
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{reward.rating}</span>
                    </div>
                  </div>
                </div>
                
                <CardTitle className="text-lg group-hover:text-green-600 transition-colors">
                  {reward.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {reward.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <p className="text-sm text-slate-600">Richiede</p>
                    <p className="text-lg font-bold text-green-600">{reward.certificates}</p>
                    <p className="text-xs text-slate-500">certificati</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-400" />
                  <div className="text-center">
                    <p className="text-sm text-slate-600">Valore</p>
                    <p className="text-lg font-bold text-blue-600">{reward.value}</p>
                    <p className="text-xs text-slate-500">equivalente</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Disponibili</span>
                    <span className="font-medium">{reward.available}</span>
                  </div>
                  <Progress 
                    value={(reward.available / (reward.available + reward.claimed)) * 100} 
                    className="h-2"
                  />
                  <p className="text-xs text-slate-500">{reward.claimed} già utilizzati</p>
                </div>

                <Dialog open={showExchangeDialog && selectedReward?.id === reward.id} onOpenChange={setShowExchangeDialog}>
                  <DialogTrigger asChild>
                    <Button 
                      className={`w-full ${
                        userCertificates >= reward.certificates
                          ? 'bg-green-600 hover:bg-green-700 text-white'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                      disabled={userCertificates < reward.certificates}
                      onClick={() => setSelectedReward(reward)}
                    >
                      {userCertificates >= reward.certificates ? (
                        <>
                          <Zap className="w-4 h-4 mr-2" />
                          Scambia Ora
                        </>
                      ) : (
                        <>
                          <Clock className="w-4 h-4 mr-2" />
                          Certificati Insufficienti
                        </>
                      )}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        Conferma Scambio
                      </DialogTitle>
                      <DialogDescription>
                        Stai per scambiare <strong>{reward.certificates} certificati ESG</strong> con:
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className={`p-4 rounded-lg ${reward.bgColor} border-l-4 border-l-green-500`}>
                        <div className="flex items-center gap-3">
                          <reward.icon className={`w-8 h-8 ${reward.textColor}`} />
                          <div>
                            <h3 className="font-semibold">{reward.title}</h3>
                            <p className="text-sm text-slate-600">{reward.description}</p>
                            <p className="font-bold text-green-600 mt-1">Valore: {reward.value}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm">
                          <strong>I tuoi certificati:</strong> {userCertificates} → {userCertificates - reward.certificates}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" className="flex-1" onClick={() => setShowExchangeDialog(false)}>
                        Annulla
                      </Button>
                      <Button className="flex-1 bg-green-600 hover:bg-green-700" onClick={() => handleExchange(reward)}>
                        Conferma Scambio
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-green-100 to-blue-100">
          <CardContent className="p-8 text-center">
            <Leaf className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Continua a guadagnare certificati ESG!
            </h3>
            <p className="text-slate-600 mb-6">
              Partecipa alle attività sostenibili per ottenere più certificati e sbloccare premi esclusivi
            </p>
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white"
              onClick={() => navigate('/dashboard')}
            >
              <Award className="w-5 h-5 mr-2" />
              Guadagna Certificati
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Exchange;
