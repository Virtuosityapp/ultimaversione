import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Leaf, ArrowLeft, Shield, Zap, Globe, Award, Users, TrendingUp, CheckCircle, Target, Heart, Lightbulb } from "lucide-react";
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
    }
  ];

  const benefits = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Per i Cittadini",
      description: "Premi concreti per comportamenti sostenibili quotidiani",
      points: ["Incentivi economici reali", "Riconoscimento sociale", "Miglioramento qualità vita", "Contributo ambientale misurabile"]
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Per le Aziende",
      description: "Strumenti ESG avanzati e coinvolgimento dei dipendenti",
      points: ["Report ESG automatici", "Engagement dei dipendenti", "Riduzione carbon footprint", "Compliance normative"]
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Per le Città",
      description: "Dati real-time per politiche di sostenibilità efficaci",
      points: ["Analytics mobilità urbana", "Monitoraggio obiettivi ambientali", "Citizen engagement", "Smart city integration"]
    }
  ];

  const roadmap = [
    {
      phase: "Q1 2024",
      title: "MVP & Pilot Cities",
      status: "completed",
      items: ["Lancio app mobile", "Prime 5 città pilota", "Integrazione bike sharing", "1000 utenti beta"]
    },
    {
      phase: "Q2 2024",
      title: "Espansione & Partnership",
      status: "current",
      items: ["50 città partner", "Integrazione trasporti pubblici", "10.000 utenti attivi", "Prime aziende B2B"]
    },
    {
      phase: "Q3 2024",
      title: "Marketplace & Blockchain",
      status: "upcoming",
      items: ["Lancio marketplace", "Certificati blockchain", "100.000 utenti", "Partnership retail"]
    },
    {
      phase: "Q4 2024",
      title: "Scala Europea",
      status: "upcoming",
      items: ["Espansione EU", "API pubbliche", "1M utenti", "Carbon credit trading"]
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

  const team = [
    {
      name: "Alessio Pagani",
      role: "Research Director and Data Scientist",
      bio: "PhD in Information Technology | Web3, blockchain, AI, DeFi",
      image: "👨‍🔬"
    },
    {
      name: "Gianfranco Leone",
      role: "Web3 Expert Marketing Specialist",
      bio: "Esperto in strategie di marketing per tecnologie blockchain e Web3",
      image: "👨‍💼"
    },
    {
      name: "Davide Galbiati",
      role: "Computer Engineer",
      bio: "Web and mobile Developer specializzato in soluzioni digitali innovative",
      image: "👨‍💻"
    }
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
                <span className="hidden sm:inline">Home</span>
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

        {/* How It Works */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Come Funziona Virtuosity
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* DPP Integration Section */}
        <div className="mb-16">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 via-green-50 to-purple-50">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                <Globe className="h-8 w-8" />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-900">
                Integrazione con Digital Product Passports (DPP)
              </CardTitle>
              <CardDescription className="text-lg text-gray-700 max-w-4xl mx-auto">
                Virtuosity sarà tra le prime piattaforme europee ad integrare i Digital Product Passports, 
                rivoluzionando la tracciabilità e sostenibilità dei prodotti secondo la normativa EU 2024
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-6">Cosa sono i DPP</h4>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                      <div>
                        <strong>Passaporti Digitali Obbligatori:</strong> Dal 2026, ogni prodotto venduto in EU avrà un QR code con informazioni complete su origine, materiali, impatto ambientale e riciclabilità
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                      <div>
                        <strong>Tracciabilità Completa:</strong> Ogni fase del ciclo di vita del prodotto viene registrata in modo immutabile su blockchain
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                      <div>
                        <strong>Trasparenza Totale:</strong> Consumatori e aziende possono verificare istantaneamente l'autenticità e sostenibilità di ogni prodotto
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-6">Come Virtuosity Integra i DPP</h4>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Zap className="w-5 h-5 text-blue-500 mr-3 mt-1" />
                      <div>
                        <strong>Scansione Automatica:</strong> L'app rileva automaticamente i QR code DPP durante gli acquisti, calcolando l'impatto ambientale in tempo reale
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Award className="w-5 h-5 text-purple-500 mr-3 mt-1" />
                      <div>
                        <strong>Premi per Scelte Sostenibili:</strong> Acquistare prodotti con DPP ad alto rating di sostenibilità genera certificati e ricompense extra
                      </div>
                    </div>
                    <div className="flex items-start">
                      <TrendingUp className="w-5 h-5 text-orange-500 mr-3 mt-1" />
                      <div>
                        <strong>Analytics Avanzate:</strong> Dashboard personalizzate mostrano l'impatto ambientale dei tuoi acquisti e suggeriscono alternative più sostenibili
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-white/50 rounded-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Il Flusso di Lavoro DPP in Virtuosity</h4>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white mb-3 mx-auto">1</div>
                    <h5 className="font-bold text-sm mb-2">Scansione QR</h5>
                    <p className="text-xs text-gray-600">App rileva automaticamente DPP durante acquisti o uso prodotti</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white mb-3 mx-auto">2</div>
                    <h5 className="font-bold text-sm mb-2">Validazione Blockchain</h5>
                    <p className="text-xs text-gray-600">Verifica autenticità e calcola impact score basato su dati DPP</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white mb-3 mx-auto">3</div>
                    <h5 className="font-bold text-sm mb-2">Generazione Certificati</h5>
                    <p className="text-xs text-gray-600">Crea certificati ESG basati su sostenibilità prodotto acquistato</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white mb-3 mx-auto">4</div>
                    <h5 className="font-bold text-sm mb-2">Premi & Insights</h5>
                    <p className="text-xs text-gray-600">Sblocca ricompense e ricevi suggerimenti per scelte più sostenibili</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg text-white text-center">
                <h4 className="text-lg font-bold mb-2">Vantaggi Competitivi</h4>
                <p className="text-sm">
                  Con l'integrazione DPP, Virtuosity diventa l'unica piattaforma che collega automaticamente 
                  le scelte di consumo sostenibile con un sistema di incentivi concreti, 
                  preparando utenti e aziende alla nuova era della trasparenza ambientale europea.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Vantaggi per Tutti
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {benefit.points.map((point, idx) => (
                      <div key={idx} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {point}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Roadmap */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            La Nostra Roadmap
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmap.map((phase, index) => (
              <Card key={index} className={`border-0 shadow-lg ${
                phase.status === 'completed' ? 'bg-green-50' :
                phase.status === 'current' ? 'bg-blue-50' :
                'bg-gray-50'
              }`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant={
                      phase.status === 'completed' ? 'default' :
                      phase.status === 'current' ? 'secondary' :
                      'outline'
                    } className={
                      phase.status === 'completed' ? 'bg-green-500' :
                      phase.status === 'current' ? 'bg-blue-500' :
                      ''
                    }>
                      {phase.phase}
                    </Badge>
                    {phase.status === 'completed' && (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    )}
                  </div>
                  <CardTitle className="text-lg">{phase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {phase.items.map((item, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className={`w-2 h-2 rounded-full mr-2 ${
                          phase.status === 'completed' ? 'bg-green-400' :
                          phase.status === 'current' ? 'bg-blue-400' :
                          'bg-gray-400'
                        }`}></div>
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Il Nostro Team
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm text-center">
                <CardHeader>
                  <div className="text-6xl mb-4">{member.image}</div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <Badge variant="secondary">{member.role}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{member.bio}</p>
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

        {/* Contact Section */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm mb-16">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Contattaci</CardTitle>
            <CardDescription>Vuoi saperne di più? Siamo qui per aiutarti</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold mb-2">Email</h4>
                <p className="text-sm text-gray-600">info@virtuosity.eu</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Telefono</h4>
                <p className="text-sm text-gray-600">+39 02 1234 5678</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Sede</h4>
                <p className="text-sm text-gray-600">Milano, Italia</p>
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
