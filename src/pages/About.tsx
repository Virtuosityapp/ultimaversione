
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Leaf, ArrowLeft, Shield, Zap, Globe, Award, Users, TrendingUp, CheckCircle, Target, Heart, Lightbulb, Droplets, Recycle, Battery, MapPin, Building, Euro, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CertificateTypeCard = ({ cert }) => (
  <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 h-full">
    <CardHeader className="text-center pb-4">
      <div className="w-20 h-20 mx-auto mb-3 flex items-center justify-center">
        <img src={cert.image} alt={cert.title} className="w-full h-full object-contain" />
      </div>
      <CardTitle className="text-base font-bold">{cert.title}</CardTitle>
      <CardDescription className="text-sm text-gray-600">
        {cert.description}
      </CardDescription>
    </CardHeader>
  </Card>
);

const FeatureCard = ({ feature }) => (
  <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm h-full">
    <CardHeader className="pb-4">
      <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white mb-3">
        {feature.icon}
      </div>
      <CardTitle className="text-lg font-bold">{feature.title}</CardTitle>
      <CardDescription className="text-sm text-gray-600">
        {feature.description}
      </CardDescription>
    </CardHeader>
    <CardContent className="pt-0">
      <div className="space-y-2">
        {feature.details.map((detail, idx) => (
          <div key={idx} className="flex items-center text-xs text-gray-600">
            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
            {detail}
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

const BenefitCard = ({ benefit }) => (
  <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm h-full">
    <CardHeader className="text-center pb-3">
      <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white mb-3 mx-auto">
        {benefit.icon}
      </div>
      <CardTitle className="text-lg font-bold">{benefit.title}</CardTitle>
      <CardDescription className="text-sm">{benefit.description}</CardDescription>
    </CardHeader>
    <CardContent className="pt-0">
      <div className="space-y-2">
        {benefit.points.map((point, idx) => (
          <div key={idx} className="flex items-start text-xs text-gray-600">
            <CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
            {point}
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

const RoadmapCard = ({ phase }) => (
  <Card className={`border-0 shadow-lg h-full ${
    phase.status === 'completed' ? 'bg-green-50' : 
    phase.status === 'current' ? 'bg-blue-50' : 'bg-gray-50'
  }`}>
    <CardHeader className="pb-3">
      <div className="flex items-center justify-between mb-2">
        <Badge variant={
          phase.status === 'completed' ? 'default' : 
          phase.status === 'current' ? 'secondary' : 'outline'
        } className={`text-xs ${
          phase.status === 'completed' ? 'bg-green-500' : 
          phase.status === 'current' ? 'bg-blue-500' : ''
        }`}>
          {phase.phase}
        </Badge>
        {phase.status === 'completed' && <CheckCircle className="w-4 h-4 text-green-500" />}
      </div>
      <CardTitle className="text-base font-bold">{phase.title}</CardTitle>
    </CardHeader>
    <CardContent className="pt-0">
      <div className="space-y-2">
        {phase.items.map((item, idx) => (
          <div key={idx} className="flex items-center text-xs text-gray-600">
            <div className={`w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0 ${
              phase.status === 'completed' ? 'bg-green-400' : 
              phase.status === 'current' ? 'bg-blue-400' : 'bg-gray-400'
            }`}></div>
            {item}
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

const TeamMemberCard = ({ member }) => (
  <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm text-center h-full">
    <CardHeader className="text-center pb-3">
      <div className="text-4xl mb-3">{member.image}</div>
      <CardTitle className="text-lg font-bold">{member.name}</CardTitle>
      <div className="flex justify-center mt-2">
        <Badge variant="secondary" className="text-xs">{member.role}</Badge>
      </div>
    </CardHeader>
    <CardContent className="pt-0">
      <p className="text-xs text-gray-600 text-center">{member.bio}</p>
    </CardContent>
  </Card>
);

const IntegrationCard = ({ integration }) => (
  <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm h-full">
    <CardHeader className="text-center pb-3">
      <div className="text-3xl mb-2">{integration.icon}</div>
      <CardTitle className="text-base font-bold">{integration.name}</CardTitle>
    </CardHeader>
    <CardContent className="pt-0">
      <div className="flex flex-wrap gap-1 justify-center">
        {integration.providers.map((provider, idx) => (
          <Badge key={idx} variant="secondary" className="text-xs">
            {provider}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const PrivacySecurityCard = () => (
  <Card className="border-0 shadow-lg bg-gradient-to-r from-purple-50 via-blue-50 to-green-50">
    <CardHeader className="text-center pb-6">
      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white mb-4 mx-auto">
        <Shield className="h-8 w-8" />
      </div>
      <CardTitle className="text-2xl font-bold text-gray-900 mb-3">
        Privacy e Sicurezza con Zero-Knowledge Proofs
      </CardTitle>
      <CardDescription className="text-base text-gray-700 max-w-3xl mx-auto">
        La tua privacy è al sicuro grazie alle Zero-Knowledge Proofs (ZKP), 
        che permettono di verificare i tuoi comportamenti sostenibili senza rivelare dati personali sensibili
      </CardDescription>
      
      <div className="mt-6 mb-6">
        <img 
          src="/lovable-uploads/56496a06-43af-4808-b63c-de4e8104341d.png" 
          alt="Dashboard Utente Virtuosity - Tracciamento Sostenibilità Personale" 
          className="mx-auto rounded-lg shadow-xl max-w-[70%] sm:max-w-[60%] md:max-w-[50%] h-auto border border-gray-200"
        />
        <p className="text-xs text-gray-600 mt-2 italic">
          Dashboard utente: monitora le tue attività sostenibili quotidiane e i certificati blockchain generati
        </p>
      </div>
    </CardHeader>
    <CardContent className="px-6 pb-6">
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <Shield className="w-5 h-5 text-purple-500 mr-2" />
            Cosa sono le Zero-Knowledge Proofs
          </h4>
          <div className="space-y-3">
            <div className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
              <div className="text-sm">
                <strong>Prova senza Rivelazione:</strong> Le ZKP permettono di dimostrare che hai compiuto un'azione sostenibile senza rivelare dettagli personali come posizione esatta, orari specifici o abitudini
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
              <div className="text-sm">
                <strong>Crittografia Avanzata:</strong> Utilizzano algoritmi matematici complessi per creare prove verificabili senza esporre i dati sottostanti
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
              <div className="text-sm">
                <strong>Standard Industriale:</strong> Tecnologia utilizzata da blockchain leader come Ethereum e protocolli DeFi per garantire privacy e sicurezza
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <Lightbulb className="w-5 h-5 text-blue-500 mr-2" />
            Come Funziona in Virtuosity
          </h4>
          <div className="space-y-3">
            <div className="flex items-start">
              <Zap className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
              <div className="text-sm">
                <strong>Raccolta Dati Minimale:</strong> L'app rileva solo l'essenziale (es. "hai usato una bici") senza registrare percorsi dettagliati o orari precisi
              </div>
            </div>
            <div className="flex items-start">
              <Award className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" />
              <div className="text-sm">
                <strong>Proof Generation:</strong> I tuoi dispositivi generano localmente prove crittografiche che dimostrano l'azione sostenibile senza inviare dati raw
              </div>
            </div>
            <div className="flex items-start">
              <Globe className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
              <div className="text-sm">
                <strong>Verifica Blockchain:</strong> Le prove vengono verificate sulla blockchain senza mai esporre i tuoi dati personali, generando certificati anonimi
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card className="border border-purple-200 bg-white/50">
          <CardHeader className="text-center pb-3">
            <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white mb-2 mx-auto">
              <Shield className="h-5 w-5" />
            </div>
            <CardTitle className="text-base">Anonimato Totale</CardTitle>
          </CardHeader>
          <CardContent className="text-center pt-0">
            <p className="text-xs text-gray-600">
              Nessun dato personale identificabile viene mai memorizzato o trasmesso. 
              Solo le prove matematiche delle tue azioni sostenibili.
            </p>
          </CardContent>
        </Card>

        <Card className="border border-blue-200 bg-white/50">
          <CardHeader className="text-center pb-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white mb-2 mx-auto">
              <Zap className="h-5 w-5" />
            </div>
            <CardTitle className="text-base">Elaborazione Locale</CardTitle>
          </CardHeader>
          <CardContent className="text-center pt-0">
            <p className="text-xs text-gray-600">
              Le ZKP vengono generate direttamente sul tuo dispositivo. 
              I dati sensibili non lasciano mai il tuo telefono.
            </p>
          </CardContent>
        </Card>

        <Card className="border border-green-200 bg-white/50">
          <CardHeader className="text-center pb-3">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white mb-2 mx-auto">
              <CheckCircle className="h-5 w-5" />
            </div>
            <CardTitle className="text-base">Conformità GDPR</CardTitle>
          </CardHeader>
          <CardContent className="text-center pt-0">
            <p className="text-xs text-gray-600">
              Privacy by design e conformità totale alle normative europee. 
              I tuoi diritti digitali sono sempre protetti.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-white/70 rounded-lg p-5">
        <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">Esempio Pratico: Come Funziona</h4>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white mb-2 mx-auto text-xs font-bold">1</div>
            <h5 className="font-bold text-xs mb-1">Azione Sostenibile</h5>
            <p className="text-xs text-gray-600">Usi una bici elettrica per 5km</p>
          </div>
          <div className="text-center">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white mb-2 mx-auto text-xs font-bold">2</div>
            <h5 className="font-bold text-xs mb-1">Generazione ZKP</h5>
            <p className="text-xs text-gray-600">Il tuo phone crea una prova: "ho risparmiato CO2" senza rivelare dove/quando</p>
          </div>
          <div className="text-center">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white mb-2 mx-auto text-xs font-bold">3</div>
            <h5 className="font-bold text-xs mb-1">Verifica Blockchain</h5>
            <p className="text-xs text-gray-600">La rete valida la prova senza accedere ai tuoi dati personali</p>
          </div>
          <div className="text-center">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white mb-2 mx-auto text-xs font-bold">4</div>
            <h5 className="font-bold text-xs mb-1">Certificato Anonimo</h5>
            <p className="text-xs text-gray-600">Ricevi certificati CO2 verificabili ma completamente anonimi</p>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white text-center">
        <h4 className="text-base font-bold mb-2">Privacy First, Sostenibilità Sempre</h4>
        <p className="text-xs">
          Con Virtuosity, la tua privacy non è negoziabile. Le Zero-Knowledge Proofs garantiscono 
          che puoi dimostrare il tuo impegno per l'ambiente mantenendo il controllo totale sui tuoi dati personali.
        </p>
      </div>
    </CardContent>
  </Card>
);

const AdvisorCard = ({ advisor }) => (
  <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm text-center h-full">
    <CardHeader className="pb-3">
      <CardTitle className="text-base font-bold">{advisor.name}</CardTitle>
      <Badge variant="secondary" className="text-xs mt-2">{advisor.role}</Badge>
    </CardHeader>
    <CardContent className="pt-0">
      <p className="text-xs text-gray-600">{advisor.bio}</p>
    </CardContent>
  </Card>
);

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
      description: "Ogni azione genera 4 tipologie di certificati digitali verificabili e immutabili su blockchain Ethereum/Polygon: CO2, Rifiuti e Riciclo, Risparmio Energetico e Acqua.",
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
      points: ["Incentivi reali", "Riconoscimento sociale", "Miglioramento qualità vita", "Contributo ambientale misurabile"]
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
      phase: "Gen-Mar 2026",
      title: "MVP & Pilot Cities",
      status: "upcoming",
      items: ["Lancio app mobile", "Prime 5 città pilota", "Integrazione bike sharing", "1000 utenti beta"]
    },
    {
      phase: "Apr-Giu 2026",
      title: "Espansione & Partnership",
      status: "upcoming",
      items: ["20 città partner", "Integrazione trasporti pubblici", "10.000 utenti attivi", "Prime aziende B2B"]
    },
    {
      phase: "Lug-Dic 2026",
      title: "Marketplace & Blockchain",
      status: "upcoming",
      items: ["Lancio marketplace", "Certificati blockchain", "Integrazione DPP", "100.000 utenti"]
    },
    {
      phase: "2027-2028",
      title: "Scala Europea & IA",
      status: "upcoming",
      items: ["Espansione EU", "API pubbliche", "IA predittiva", "1M utenti", "Carbon credit trading"]
    }
  ];

  const integrations = [
    {
      name: "Bike Sharing",
      providers: ["Mobike", "Lime", "Helbiz"],
      icon: "🚴"
    },
    {
      name: "Car Sharing",
      providers: ["Enjoy", "ShareNow", "Car2Go"],
      icon: "🚗"
    },
    {
      name: "Trasporti Pubblici",
      providers: ["ATM", "ATAC", "Open Data"],
      icon: "🚌"
    },
    {
      name: "Fitness Tracking",
      providers: ["Google Fit", "Apple Health", "Strava"],
      icon: "📱"
    },
    {
      name: "Smart Parking",
      providers: ["EasyPark", "ParkMan", "Sensori IoT"],
      icon: "🅿️"
    },
    {
      name: "E-Scooters",
      providers: ["Bird", "Voi", "Tier"],
      icon: "🛴"
    }
  ];

  const certificateTypes = [
    {
      image: "/lovable-uploads/cef6f7ab-d91d-4e9f-8b7e-76e0c1eaa373.png",
      title: "Certificati CO2",
      description: "Riduzione emissioni attraverso mobilità sostenibile",
      color: "from-green-500 to-emerald-600"
    },
    {
      image: "/lovable-uploads/9fb70260-01a6-45a7-8a67-f234cf098899.png",
      title: "Rifiuti e Riciclo",
      description: "Gestione responsabile e riciclo dei materiali",
      color: "from-blue-500 to-cyan-600"
    },
    {
      image: "/lovable-uploads/16190dbd-ebd1-4b29-968d-8c8f8d26066d.png",
      title: "Risparmio Energetico",
      description: "Ottimizzazione consumi e efficienza energetica",
      color: "from-yellow-500 to-orange-600"
    },
    {
      image: "/lovable-uploads/7942f312-9a3e-4b02-9bdd-c96f9d500a13.png",
      title: "Risparmio Idrico",
      description: "Gestione sostenibile delle risorse idriche",
      color: "from-cyan-500 to-blue-600"
    }
  ];

  const teamMembers = [
    {
      name: "Marco Rossi",
      role: "CEO & Co-Founder",
      bio: "Esperto in sostenibilità urbana e tecnologie blockchain con 10+ anni nel settore smart cities",
      image: "👨‍💼"
    },
    {
      name: "Laura Bianchi",
      role: "CTO & Co-Founder",
      bio: "Lead Developer blockchain e AI, ex-Google. Specializzata in zero-knowledge proofs e protocolli di consenso",
      image: "👩‍💻"
    },
    {
      name: "Andrea Verdi",
      role: "Head of Partnerships",
      bio: "Network di contatti nel settore pubblico e privato. Ex-manager in aziende Fortune 500",
      image: "🤝"
    },
    {
      name: "Sofia Neri",
      role: "Head of Design",
      bio: "UX/UI Designer con focus su app mobile. Vincitrice di premi internazionali per il design sostenibile",
      image: "🎨"
    }
  ];

  const advisors = [
    {
      name: "Prof. Giovanni Alberti",
      role: "Advisor Scientifico",
      bio: "Professore di Ingegneria Ambientale al Politecnico di Milano, esperto in smart cities e sostenibilità urbana"
    },
    {
      name: "Dott.ssa Maria Conti",
      role: "Advisor Legale",
      bio: "Avvocato specializzato in diritto digitale e blockchain, consulente per normative GDPR e Web3"
    },
    {
      name: "Ing. Roberto Ferrari",
      role: "Advisor Tecnico",
      bio: "Ex-CTO di startup blockchain unicorno, esperto in scalabilità e architetture distribuite"
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
                className="mr-2 p-3" 
                size="sm"
              >
                <ArrowLeft className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Home</span>
              </Button>
              <img 
                src="/lovable-uploads/5930bd4d-6869-4b7d-8020-e58372708f8a.png" 
                alt="Virtuosity Logo" 
                className="h-12 w-12 lg:h-16 lg:w-16 object-contain" 
              />
              <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                About Virtuosity
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Il Futuro della Sostenibilità è Qui
            </span>
          </h2>
          
          {/* Marketplace Screenshot */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/d0eb56b6-be3f-4087-974f-575b93e35f0f.png" 
              alt="Premi Aziendali - Marketplace Virtuosity" 
              className="mx-auto rounded-lg shadow-2xl max-w-[80%] sm:max-w-[70%] md:max-w-[60%] h-auto" 
            />
          </div>
          
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            Virtuosity è la prima piattaforma europea che trasforma automaticamente i comportamenti sostenibili 
            in certificati verificabili, creando un ecosistema di incentivi concreti per cittadini, aziende e pubbliche amministrazioni.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge className="bg-green-100 text-green-800 px-4 py-2">🌱 Zero-Knowledge Privacy</Badge>
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2">🔗 Blockchain Certificates</Badge>
            <Badge className="bg-purple-100 text-purple-800 px-4 py-2">🏆 Real Rewards</Badge>
            <Badge className="bg-orange-100 text-orange-800 px-4 py-2">📱 Auto-Tracking</Badge>
          </div>
        </div>

        {/* Certificate Types */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">4 Tipologie di Certificati Blockchain</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Ogni azione sostenibile genera certificati digitali verificabili e immutabili, 
              categorizzati per tipo di impatto ambientale
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificateTypes.map((cert, index) => (
              <CertificateTypeCard key={index} cert={cert} />
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Come Funziona</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Una tecnologia all'avanguardia che rende la sostenibilità semplice, automatica e premiante
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Vantaggi per Tutti</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Un ecosistema che crea valore condiviso per cittadini, aziende e istituzioni
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} />
            ))}
          </div>
        </div>

        {/* Privacy & Security Section */}
        <div className="mb-16">
          <PrivacySecurityCard />
        </div>

        {/* Integrations */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Integrazioni Smart City</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Connessioni native con i principali servizi di mobilità e IoT urbano
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {integrations.map((integration, index) => (
              <IntegrationCard key={index} integration={integration} />
            ))}
          </div>
        </div>

        {/* Roadmap */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Roadmap di Sviluppo</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Il piano strategico per trasformare la sostenibilità urbana in Europa
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmap.map((phase, index) => (
              <RoadmapCard key={index} phase={phase} />
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Il Nostro Team</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Un gruppo di esperti appassionati di sostenibilità e innovazione tecnologica
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>

        {/* Advisors */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Advisory Board</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Consulenti strategici che guidano la nostra visione
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advisors.map((advisor, index) => (
              <AdvisorCard key={index} advisor={advisor} />
            ))}
          </div>
        </div>

        {/* Vision */}
        <div className="mb-16">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold mb-4">La Nostra Visione</CardTitle>
              <CardDescription className="text-white/90 text-lg max-w-4xl mx-auto">
                Creare un mondo dove ogni azione sostenibile viene riconosciuta, 
                premiata e amplificata attraverso la tecnologia blockchain, 
                trasformando le città in ecosistemi intelligenti e sostenibili.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold mb-2">1M+</div>
                  <p className="text-white/80 text-sm">Cittadini Attivi entro 2028</p>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">100+</div>
                  <p className="text-white/80 text-sm">Città Partner in Europa</p>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">50M</div>
                  <p className="text-white/80 text-sm">Tonnellate CO2 Risparmiate</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                Pronto a Fare la Differenza?
              </CardTitle>
              <CardDescription className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
                Unisciti alla rivoluzione della sostenibilità digitale. 
                Scarica l'app e inizia a guadagnare premi per le tue azioni sostenibili.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3"
                  onClick={() => navigate("/dashboard")}
                >
                  <Award className="h-5 w-5 mr-2" />
                  Inizia Ora
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-green-500 text-green-600 hover:bg-green-50 px-8 py-3"
                  onClick={() => navigate("/")}
                >
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Torna alla Home
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
