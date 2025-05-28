
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Leaf, ArrowLeft, Shield, Zap, Globe, Award, Users, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Tracking Automatico",
      description: "Nessun input manuale. Le tue azioni sostenibili vengono rilevate automaticamente tramite sensori del telefono e integrazioni con app esterne.",
      details: ["Accelerometro e GPS", "Integrazione Google Fit/Apple Health", "API Bike/Car Sharing", "Sensori smart city"]
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Certificazione Blockchain",
      description: "Ogni azione genera certificati digitali verificabili e immutabili su blockchain Ethereum/Polygon per garantire trasparenza totale.",
      details: ["Hash crittografici unici", "Validazione automatica", "Tracciabilità completa", "Standard ESG compliance"]
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Premi Reali",
      description: "Converti i tuoi certificati in benefit aziendali, sconti sui trasporti, ingressi gratuiti e molto altro tramite il marketplace integrato.",
      details: ["Benefit aziendali", "Sconti trasporti pubblici", "Accessi musei/eventi", "Gift card partner"]
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community & Gamification",
      description: "Partecipa a sfide, conquista badge, scala le classifiche e connettiti con altri cittadini virtuosi nella community sostenibile.",
      details: ["Badge achievements", "Classifiche settimanali", "Sfide mensili", "Sistema referral"]
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Analytics & Reporting",
      description: "Dashboard avanzate per monitorare il tuo impatto ambientale e report ESG per aziende e pubbliche amministrazioni.",
      details: ["Metriche CO₂ risparmiate", "Report ESG automatici", "Analytics predittive", "Dashboard personalizzate"]
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Integrazione Multi-Partner",
      description: "Ecosistema aperto che si integra con bike sharing, car sharing, trasporti pubblici, smart parking e servizi di mobilità urbana.",
      details: ["API RESTful aperte", "Standard GTFS/TPL", "Integrazione IoT", "Partnership strategiche"]
    }
  ];

  const integrations = [
    { name: "Bike Sharing", providers: ["Mobike", "Lime", "Helbiz"], icon: "🚴" },
    { name: "Car Sharing", providers: ["Enjoy", "ShareNow", "Car2Go"], icon: "🚗" },
    { name: "Trasporti Pubblici", providers: ["ATM", "ATAC", "Open Data"], icon: "🚌" },
    { name: "Fitness Tracking", providers: ["Google Fit", "Apple Health", "Strava"], icon: "📱" },
    { name: "Smart Parking", providers: ["EasyPark", "ParkMan", "Sensori IoT"], icon: "🅿️" },
    { name: "E-Scooters", providers: ["Bird", "Voi", "Tier"], icon: "🛴" }
  ];

  const stats = [
    { label: "Comuni Partner", value: "150+", color: "text-green-600" },
    { label: "Aziende Attive", value: "80+", color: "text-blue-600" },
    { label: "Utenti Registrati", value: "25k+", color: "text-purple-600" },
    { label: "CO₂ Risparmiata", value: "500t+", color: "text-orange-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Button 
                variant="ghost" 
                onClick={() => navigate("/")}
                className="mr-1 sm:mr-2 p-2 sm:p-3"
                size="sm"
              >
                <ArrowLeft className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Homepage</span>
              </Button>
              <img 
                src="/lovable-uploads/5930bd4d-6869-4b7d-8020-e58372708f8a.png" 
                alt="Virtuosity Logo" 
                className="relative h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16 mx-auto object-contain"
              />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Virtuosity
              </h1>
            </div>
            <Button 
              onClick={() => navigate("/dashboard")}
              className="bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700"
            >
              Inizia Ora
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Il Futuro della <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Sostenibilità Digitale</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Virtuosity è la prima piattaforma europea che trasforma automaticamente i comportamenti sostenibili 
            in certificati blockchain verificabili, creando un ecosistema di incentivi concreti per cittadini, 
            aziende e pubbliche amministrazioni.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-green-50 to-blue-50 mb-16">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">La Nostra Missione</h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Democratizzare la sostenibilità attraverso la tecnologia blockchain, 
              rendendo ogni azione sostenibile misurabile, verificabile e premiabile. 
              Costruiamo un futuro dove fare la scelta giusta per il pianeta 
              diventa anche la scelta più conveniente per le persone.
            </p>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Come Funziona Virtuosity
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                        {detail}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Integrations Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Integrazioni & Partner
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{integration.icon}</div>
                  <CardTitle className="text-lg">{integration.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {integration.providers.map((provider, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {provider}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-green-50 mb-16">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Stack Tecnologico</CardTitle>
            <CardDescription>Tecnologie all'avanguardia per la sostenibilità del futuro</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Frontend</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <div>React + Next.js</div>
                  <div>Tailwind CSS</div>
                  <div>PWA Ready</div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Blockchain</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <div>Ethereum/Polygon</div>
                  <div>Smart Contracts</div>
                  <div>IPFS Storage</div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Backend</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <div>Node.js/Python</div>
                  <div>PostgreSQL</div>
                  <div>API Gateway</div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Compliance</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <div>GDPR Ready</div>
                  <div>ESG Standards</div>
                  <div>CSRD/ESRS</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Pronto a Iniziare il Tuo Viaggio Sostenibile?</h3>
          <p className="text-xl mb-8 text-green-100">
            Unisciti a migliaia di cittadini che stanno già facendo la differenza per il pianeta
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate("/dashboard")}
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
            >
              Inizia Subito
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate("/")}
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg"
            >
              Torna alla Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
