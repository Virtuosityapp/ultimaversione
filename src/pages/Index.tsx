import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Users, BarChart3, Award, ArrowRight, CheckCircle, Leaf, Recycle, Zap, Droplets, Shield, Globe, TrendingUp, Star, Heart, Gift, Target, Home, ShoppingBag, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const features = [
    { icon: Building2, title: "Dashboard Aziendale", desc: "Gestione ESG e sostenibilità", path: "/dashboard-aziende" },
    { icon: Users, title: "Dashboard Comuni", desc: "Amministrazione pubblica", path: "/comuni" },
    { icon: BarChart3, title: "Analytics & Report", desc: "Monitoraggio performance", path: "/report" },
    { icon: ShoppingBag, title: "Marketplace", desc: "Scambio sostenibile", path: "/marketplace" },
    { icon: MapPin, title: "Segnalazioni Cittadini", desc: "Partecipazione civica", path: "/report" }
  ];

  const stats = [
    { value: "2,847", label: "Certificati ESG", color: "text-green-600" },
    { value: "156", label: "Aziende Partner", color: "text-blue-600" },
    { value: "89%", label: "Riduzione CO₂", color: "text-purple-600" },
    { value: "€2.4M", label: "Valore Scambiato", color: "text-orange-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-green-800 via-blue-900 to-purple-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center space-y-8">
            <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm font-medium">
              🌱 Piattaforma ESG & Sostenibilità Digitale
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Futuro
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"> Sostenibile</span>
              <br />Certificato
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Trasforma la sostenibilità in valore. Certificati ESG, Digital Product Passport e economia circolare per aziende e pubbliche amministrazioni.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                size="lg" 
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-xl"
                onClick={() => navigate('/dashboard-aziende')}
              >
                <Building2 className="w-5 h-5 mr-2" />
                Dashboard Aziendale
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full"
                onClick={() => navigate('/comuni')}
              >
                <Users className="w-5 h-5 mr-2" />
                Dashboard Comuni
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-pulse">
          <div className="w-16 h-16 bg-green-400/20 rounded-full blur-xl"></div>
        </div>
        <div className="absolute bottom-20 right-10 animate-pulse delay-1000">
          <div className="w-24 h-24 bg-blue-400/20 rounded-full blur-xl"></div>
        </div>
      </div>

      {/* Platform Preview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <img 
          src="/lovable-uploads/b7f22aaa-74fe-490f-968e-c55caf99e5ca.png"
          alt="Dashboard Aziendale Preview"
          className="mx-auto rounded-lg shadow-2xl max-w-[80%] sm:max-w-[70%] md:max-w-[60%] h-auto border border-gray-200"
        />
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Esplora le Funzionalità
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Soluzioni integrate per la gestione ESG, certificazioni digitali e sostenibilità aziendale
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm cursor-pointer transform hover:scale-105"
              onClick={() => navigate(feature.path)}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-slate-600">
                  {feature.desc}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-green-600 group-hover:text-green-700 transition-colors duration-300">
                  <span className="font-medium">Esplora</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* ESG Benefits */}
      <div className="bg-gradient-to-br from-slate-100 to-green-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Vantaggi ESG Certificati
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Certifica il tuo impegno per la sostenibilità e ottieni vantaggi competitivi misurabili
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Leaf, title: "Riduzione CO₂", desc: "Monitora e certifica la riduzione delle emissioni", color: "from-green-500 to-green-600" },
              { icon: Recycle, title: "Economia Circolare", desc: "Gestione sostenibile dei rifiuti e riciclo", color: "from-blue-500 to-blue-600" },
              { icon: Zap, title: "Energia Pulita", desc: "Transizione verso fonti rinnovabili", color: "from-yellow-500 to-yellow-600" },
              { icon: Shield, title: "Certificazioni", desc: "Standard internazionali verificati", color: "from-purple-500 to-purple-600" }
            ].map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-green-800 to-blue-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Inizia il Tuo Percorso Sostenibile
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Unisciti alle aziende e amministrazioni che stanno già costruendo un futuro più sostenibile con le nostre soluzioni certificate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full"
              onClick={() => navigate('/dashboard-aziende')}
            >
              <Star className="w-5 h-5 mr-2" />
              Inizia Subito
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full"
              onClick={() => navigate('/about')}
            >
              Scopri di Più
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
