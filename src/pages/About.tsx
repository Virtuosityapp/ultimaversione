
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Leaf, ArrowLeft, Shield, Zap, Globe, Award, Users, TrendingUp, CheckCircle, Target, Heart, Lightbulb, Droplets, Recycle, Battery, MapPin, Building, Euro, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const CertificateTypeCard = ({
  cert
}) => <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
    <CardHeader className="text-center">
      <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
        <img src={cert.image} alt={cert.title} className="w-full h-full object-contain" />
      </div>
      <CardTitle className="text-lg">{cert.title}</CardTitle>
      <CardDescription className="text-gray-600">
        {cert.description}
      </CardDescription>
    </CardHeader>
  </Card>;

const FeatureCard = ({
  feature
}) => <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
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
        {feature.details.map((detail, idx) => <div key={idx} className="flex items-center text-sm text-gray-600">
            <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
            {detail}
          </div>)}
      </div>
    </CardContent>
  </Card>;

const BenefitCard = ({
  benefit
}) => <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
    <CardHeader className="text-center">
      <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white mb-4 mx-auto">
        {benefit.icon}
      </div>
      <CardTitle className="text-xl">{benefit.title}</CardTitle>
      <CardDescription>{benefit.description}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-3">
        {benefit.points.map((point, idx) => <div key={idx} className="flex items-start text-sm text-gray-600">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
            {point}
          </div>)}
      </div>
    </CardContent>
  </Card>;

const RoadmapCard = ({
  phase
}) => <Card className={`border-0 shadow-lg ${phase.status === 'completed' ? 'bg-green-50' : phase.status === 'current' ? 'bg-blue-50' : 'bg-gray-50'}`}>
    <CardHeader>
      <div className="flex items-center justify-between">
        <Badge variant={phase.status === 'completed' ? 'default' : phase.status === 'current' ? 'secondary' : 'outline'} className={phase.status === 'completed' ? 'bg-green-500' : phase.status === 'current' ? 'bg-blue-500' : ''}>
          {phase.phase}
        </Badge>
        {phase.status === 'completed' && <CheckCircle className="w-5 h-5 text-green-500" />}
      </div>
      <CardTitle className="text-lg">{phase.title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-2">
        {phase.items.map((item, idx) => <div key={idx} className="flex items-center text-sm text-gray-600">
            <div className={`w-2 h-2 rounded-full mr-2 ${phase.status === 'completed' ? 'bg-green-400' : phase.status === 'current' ? 'bg-blue-400' : 'bg-gray-400'}`}></div>
            {item}
          </div>)}
      </div>
    </CardContent>
  </Card>;

const TeamMemberCard = ({
  member
}) => <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm text-center">
    <CardHeader className="text-center">
      <div className="text-6xl mb-4">{member.image}</div>
      <CardTitle className="text-xl text-center">{member.name}</CardTitle>
      <div className="flex justify-center">
        <Badge variant="secondary">{member.role}</Badge>
      </div>
    </CardHeader>
    <CardContent className="text-center">
      <p className="text-sm text-gray-600 text-center">{member.bio}</p>
    </CardContent>
  </Card>;

const IntegrationCard = ({
  integration
}) => <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
    <CardHeader className="text-center">
      <div className="text-4xl mb-2">{integration.icon}</div>
      <CardTitle className="text-lg">{integration.name}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex flex-wrap gap-2 justify-center">
        {integration.providers.map((provider, idx) => <Badge key={idx} variant="secondary" className="text-xs">
            {provider}
          </Badge>)}
      </div>
    </CardContent>
  </Card>;

const AdvisorCard = ({
  advisor
}) => <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm text-center">
    <CardHeader>
      <div className="text-4xl mb-4">{advisor.image}</div>
      <CardTitle className="text-lg">{advisor.name}</CardTitle>
      <Badge variant="secondary" className="text-xs">{advisor.role}</Badge>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-gray-600">{advisor.bio}</p>
    </CardContent>
  </Card>;

const About = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const features = [{
    icon: <Zap className="h-6 w-6" />,
    title: t('trackingAutomatico'),
    description: t('trackingDesc'),
    details: ["Accelerometro e GPS", "Integrazione Google Fit/Apple Health", "API Bike/Car Sharing", "Sensori smart city"]
  }, {
    icon: <Shield className="h-6 w-6" />,
    title: t('certificazioneBlockchain'),
    description: t('certificazioneDesc'),
    details: ["Hash crittografici unici", "Validazione automatica", "Tracciabilità completa", "Standard ESG compliance"]
  }, {
    icon: <Award className="h-6 w-6" />,
    title: t('premiReali'),
    description: t('premiDesc'),
    details: ["Benefit aziendali", "Sconti trasporti pubblici", "Accessi musei/eventi", "Gift card partner"]
  }, {
    icon: <Users className="h-6 w-6" />,
    title: t('communityGamification'),
    description: t('communityDesc'),
    details: ["Badge achievements", "Classifiche settimanali", "Sfide mensili", "Sistema referral"]
  }];

  const benefits = [{
    icon: <Target className="h-6 w-6" />,
    title: t('perCittadini'),
    description: t('perCittadiniDesc'),
    points: [t('companyAdvantagesList')[0], t('companyAdvantagesList')[1], t('companyAdvantagesList')[2], t('companyAdvantagesList')[3]]
  }, {
    icon: <Heart className="h-6 w-6" />,
    title: t('perAziende'),
    description: t('perAziendeDesc'),
    points: [t('companyAdvantagesList')[0], t('companyAdvantagesList')[1], t('companyAdvantagesList')[2], t('companyAdvantagesList')[3]]
  }, {
    icon: <Globe className="h-6 w-6" />,
    title: t('perCitta'),
    description: t('perCittaDesc'),
    points: [t('municipalityAdvantagesList')[0], t('municipalityAdvantagesList')[1], t('municipalityAdvantagesList')[2], t('municipalityAdvantagesList')[3]]
  }];

  const roadmap = [{
    phase: "Q4 2025",
    title: t('mvpPilotCities'),
    status: "upcoming",
    items: ["Lancio app mobile", "Prime 5 città pilota", "Integrazione bike sharing", "1000 utenti beta"]
  }, {
    phase: "Q1-Q2 2026",
    title: t('expansionPartnerships'),
    status: "upcoming",
    items: ["20 città partner", "Integrazione trasporti pubblici", "10.000 utenti attivi", "Prime aziende B2B"]
  }, {
    phase: "Q3-Q4 2026",
    title: t('marketplaceBlockchain'),
    status: "upcoming",
    items: ["Lancio marketplace", "Certificati blockchain", "Integrazione DPP", "100.000 utenti"]
  }, {
    phase: "2027-2028",
    title: t('europeanScaleAi'),
    status: "upcoming",
    items: ["Espansione EU", "API pubbliche", "IA predittiva", "1M utenti", "Carbon credit trading"]
  }];

  const integrations = [{
    name: t('bikeSharing'),
    providers: ["Mobike", "Lime", "Helbiz"],
    icon: "🚴"
  }, {
    name: t('carSharing'),
    providers: ["Enjoy", "ShareNow", "Car2Go"],
    icon: "🚗"
  }, {
    name: t('publicTransportProviders'),
    providers: ["ATM", "ATAC", "Open Data"],
    icon: "🚌"
  }, {
    name: t('fitnessTracking'),
    providers: ["Google Fit", "Apple Health", "Strava"],
    icon: "📱"
  }, {
    name: t('smartParking'),
    providers: ["EasyPark", "ParkMan", "Sensori IoT"],
    icon: "🅿️"
  }, {
    name: t('eScooters'),
    providers: ["Bird", "Voi", "Tier"],
    icon: "🛴"
  }];

  const certificateTypes = [{
    image: "/lovable-uploads/cef6f7ab-d91d-4e9f-8b7e-76e0c1eaa373.png",
    title: t('certificatiCO2'),
    description: t('certificatiCO2Desc'),
    color: "from-green-500 to-emerald-600"
  }, {
    image: "/lovable-uploads/9fb70260-01a6-45a7-8a67-f234cf098899.png",
    title: t('rifiutiRiciclo'),
    description: t('rifiutiRicicloDesc'),
    color: "from-blue-500 to-cyan-600"
  }, {
    image: "/lovable-uploads/16190dbd-ebd1-4b29-968d-8c8f8d26066d.png",
    title: t('risparmiEnergetico'),
    description: t('risparmiEnergeticoDesc'),
    color: "from-yellow-500 to-orange-600"
  }, {
    image: "/lovable-uploads/c6969dcf-1661-4aed-966e-43b21ed8f62a.png",
    title: t('certificatiAcqua'),
    description: t('certificatiAcquaDesc'),
    color: "from-blue-400 to-blue-600"
  }];

  const team = [{
    name: "Alessio Pagani",
    role: "Research Director and Data Scientist",
    bio: "PhD in Information Technology | Web3, blockchain, AI, DeFi",
    image: "👨‍🔬"
  }, {
    name: "Gianfranco Leone",
    role: "Web3 Expert Marketing Specialist",
    bio: "Esperto in strategie di marketing per tecnologie blockchain e Web3",
    image: "👨‍💼"
  }, {
    name: "Davide Galbiati",
    role: "Computer Engineer",
    bio: "Web and mobile Developer specializzato in soluzioni digitali innovative",
    image: "👨‍💻"
  }];

  const advisors = [{
    name: "Vincenzo Rana",
    role: "Blockchain Expert",
    bio: "Docente e ricercatore dell'Osservatorio Blockchain & DLT al Politecnico di Milano"
  }, {
    name: "Edoardo Degli Innocenti",
    role: "Web3 Industry Leader",
    bio: "CEO e Co-Founder di B3YOND, principale consorzio Web3 italiano, membro Commissione per l'IA della Presidenza del Consiglio"
  }, {
    name: "Emma Zavarrone",
    role: "Social Statistics Expert",
    bio: "Professore associato di statistica sociale presso la facoltà di Comunicazione, Pubbliche Relazioni e Pubblicità presso IULM, Milano"
  }, {
    name: "Laura Iacovone",
    role: "Economics & Management Expert",
    bio: "Docente e ricercatore del Dipartimento di Economia, Management e Metodi Quantitativi dell'Università degli Studi di Milano"
  }, {
    name: "Andrea Grieco",
    role: "Sustainability Expert",
    bio: "Sustainability Expert - LinkedInTopVoices Green & Climate Change"
  }, {
    name: "Vincenzo Pone",
    role: "Business Ethics Expert",
    bio: "Dott. Commercialista e Revisore dei Conti - Studioso di etica di azienda e delle nuove realtà economiche virtuali"
  }, {
    name: "Sara Noggler",
    role: "Web3 Innovation Expert",
    bio: "Building Milano Future Play - Distributed Minds, Public Speaker Web3"
  }, {
    name: "Stefano Capaccioli",
    role: "CSRD & ESRS Expert",
    bio: "Dottore Commercialista esperto della normativa CSRD e degli standard ESRS"
  }];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      <LanguageSwitcher />
      
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Button variant="ghost" onClick={() => navigate("/")} className="mr-1 sm:mr-2 p-2 sm:p-3" size="sm">
                <ArrowLeft className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">{t('aboutHome')}</span>
              </Button>
              <img src="/lovable-uploads/5930bd4d-6869-4b7d-8020-e58372708f8a.png" alt="Virtuosity Logo" className="relative h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16 mx-auto object-contain" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Virtuosity
              </h1>
            </div>
            <Button onClick={() => navigate("/dashboard")} className="bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700">
              {t('aboutStartNow')}
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 1. Hero Section - Introduzione */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('aboutValueOfActions')} <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"></span>
          </h2>
          
          {/* Marketplace Screenshot - Single Image */}
          <div className="mb-8">
            <img src="/lovable-uploads/f68e2d05-2991-4af9-a328-4b8b0b3e6728.png" alt="Virtuosity Marketplace Screenshot" className="mx-auto rounded-lg shadow-2xl max-w-[50%] h-auto" />
          </div>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">{t('aboutDescription')}</p>
        </div>

        {/* 2. Mission Statement - Perché esistiamo */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-green-50 to-blue-50 mb-16">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('aboutOurMission')}</h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              {t('aboutMissionText')}
            </p>
          </CardContent>
        </Card>

        {/* 3. Come Funziona - Il meccanismo base */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('aboutHowItWorks')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => <FeatureCard key={index} feature={feature} />)}
          </div>
        </div>

        {/* 4. Certificate Types - Cosa genera il sistema */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-4">
            {t('fourCertificateTypes')}
          </h3>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            {t('certificateTypesDesc')}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificateTypes.map((cert, index) => <CertificateTypeCard key={index} cert={cert} />)}
          </div>
        </div>

        {/* 5. DPP Integration - Il futuro della tracciabilità */}
        <div className="mb-16">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 via-green-50 to-purple-50">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                <Globe className="h-8 w-8" />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-900">
                {t('integrazioneDpp')}
              </CardTitle>
              <CardDescription className="text-lg text-gray-700 max-w-4xl mx-auto">
                {t('integrazioneDppDesc')}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-6">{t('whatAreDpp')}</h4>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                      <div>
                        <strong>{t('dppPassportsRequired')}</strong> {t('dppPassportsRequiredDesc')}
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                      <div>
                        <strong>{t('dppCompleteTraceability')}</strong> {t('dppCompleteTraceabilityDesc')}
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                      <div>
                        <strong>{t('dppTotalTransparency')}</strong> {t('dppTotalTransparencyDesc')}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-6">{t('howVirtusosityIntegratesDpp')}</h4>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Zap className="w-5 h-5 text-blue-500 mr-3 mt-1" />
                      <div>
                        <strong>{t('dppAutomaticScanning')}</strong> {t('dppAutomaticScanningDesc')}
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Award className="w-5 h-5 text-purple-500 mr-3 mt-1" />
                      <div>
                        <strong>{t('dppSustainableChoiceRewards')}</strong> {t('dppSustainableChoiceRewardsDesc')}
                      </div>
                    </div>
                    <div className="flex items-start">
                      <TrendingUp className="w-5 h-5 text-orange-500 mr-3 mt-1" />
                      <div>
                        <strong>{t('dppAdvancedAnalytics')}</strong> {t('dppAdvancedAnalyticsDesc')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-white/50 rounded-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">{t('dppWorkflowTitle')}</h4>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white mb-3 mx-auto">1</div>
                    <h5 className="font-bold text-sm mb-2">{t('dppQrScanning')}</h5>
                    <p className="text-xs text-gray-600">{t('dppQrScanningDesc')}</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white mb-3 mx-auto">2</div>
                    <h5 className="font-bold text-sm mb-2">{t('dppBlockchainValidation')}</h5>
                    <p className="text-xs text-gray-600">{t('dppBlockchainValidationDesc')}</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white mb-3 mx-auto">3</div>
                    <h5 className="font-bold text-sm mb-2">{t('dppCertificateGeneration')}</h5>
                    <p className="text-xs text-gray-600">{t('dppCertificateGenerationDesc')}</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white mb-3 mx-auto">4</div>
                    <h5 className="font-bold text-sm mb-2">{t('dppRewardsInsights')}</h5>
                    <p className="text-xs text-gray-600">{t('dppRewardsInsightsDesc')}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg text-white text-center">
                <h4 className="text-lg font-bold mb-2">{t('dppCompetitiveAdvantages')}</h4>
                <p className="text-sm font-normal">
                  {t('dppCompetitiveAdvantagesDesc')}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 6. Privacy & Security - Come proteggiamo i dati */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-purple-50 via-blue-50 to-green-50 mb-16">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white mb-4 mx-auto">
              <Shield className="h-8 w-8" />
            </div>
            <CardTitle className="text-3xl font-bold text-gray-900">
              {t('privacySecurity')}
            </CardTitle>
            <CardDescription className="text-lg text-gray-700 max-w-4xl mx-auto">
              {t('privacyDesc')}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="w-6 h-6 text-purple-500 mr-3" />
                  {t('whatAreZkProofs')}
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                    <div>
                      <strong>{t('zkProofWithoutRevelation')}</strong> {t('zkProofWithoutRevelationDesc')}
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                    <div>
                      <strong>{t('zkAdvancedCryptography')}</strong> {t('zkAdvancedCryptographyDesc')}
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                    <div>
                      <strong>{t('zkIndustryStandard')}</strong> {t('zkIndustryStandardDesc')}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Lightbulb className="w-6 h-6 text-blue-500 mr-3" />
                  {t('howZkWorksInVirtuosity')}
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Zap className="w-5 h-5 text-blue-500 mr-3 mt-1" />
                    <div>
                      <strong>{t('zkMinimalDataCollection')}</strong> {t('zkMinimalDataCollectionDesc')}
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Award className="w-5 h-5 text-purple-500 mr-3 mt-1" />
                    <div>
                      <strong>{t('zkProofGeneration')}</strong> {t('zkProofGenerationDesc')}
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Globe className="w-5 h-5 text-green-500 mr-3 mt-1" />
                    <div>
                      <strong>{t('zkBlockchainVerification')}</strong> {t('zkBlockchainVerificationDesc')}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border border-purple-200 bg-white/50">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white mb-3 mx-auto">
                    <Shield className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{t('zkTotalAnonymity')}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-gray-600">
                    {t('zkTotalAnonymityDesc')}
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-blue-200 bg-white/50">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white mb-3 mx-auto">
                    <Zap className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{t('zkLocalProcessing')}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-gray-600">
                    {t('zkLocalProcessingDesc')}
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-green-200 bg-white/50">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white mb-3 mx-auto">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{t('zkGdprCompliance')}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-gray-600">
                    {t('zkGdprComplianceDesc')}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white/70 rounded-lg p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">{t('zkExampleTitle')}</h4>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white mb-2 mx-auto text-sm font-bold">1</div>
                  <h5 className="font-bold text-sm mb-1">{t('zkSustainableAction')}</h5>
                  <p className="text-xs text-gray-600">{t('zkSustainableActionDesc')}</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white mb-2 mx-auto text-sm font-bold">2</div>
                  <h5 className="font-bold text-sm mb-1">{t('zkZkpGeneration')}</h5>
                  <p className="text-xs text-gray-600">{t('zkZkpGenerationDesc')}</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white mb-2 mx-auto text-sm font-bold">3</div>
                  <h5 className="font-bold text-sm mb-1">{t('zkBlockchainVerificationStep')}</h5>
                  <p className="text-xs text-gray-600">{t('zkBlockchainVerificationStepDesc')}</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white mb-2 mx-auto text-sm font-bold">4</div>
                  <h5 className="font-bold text-sm mb-1">{t('zkAnonymousCertificate')}</h5>
                  <p className="text-xs text-gray-600">{t('zkAnonymousCertificateDesc')}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white text-center">
              <h4 className="text-lg font-bold mb-2">{t('zkPrivacyFirstTitle')}</h4>
              <p className="text-sm">
                {t('zkPrivacyFirstDesc')}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* 7. Modelli di Scambio - Come si crea valore */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('exchangeModelsTitle')}
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Employee-Company Exchange */}
            <Card className="border-0 shadow-lg bg-gradient-to-r from-purple-50 via-blue-50 to-green-50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                  <Building className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {t('employeeCompanyExchange')}
                </CardTitle>
                <CardDescription className="text-lg text-gray-700">
                  {t('employeeCompanyExchangeDesc')}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                      <Award className="w-5 h-5 text-purple-500 mr-2" />
                      {t('howItWorks')}
                    </h4>
                    <p className="text-gray-600 mb-4">
                      {t('employeeExchangeDesc')}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <Heart className="w-5 h-5 text-red-500 mr-2" />
                      {t('practicalWelfareExamples')}
                    </h4>
                    <div className="space-y-4">
                      <div className="bg-white/70 rounded-lg p-4 border-l-4 border-purple-400">
                        <h5 className="font-bold text-purple-700 mb-2">{t('sustainableMobility')}</h5>
                        <p className="text-sm text-gray-600">
                          <strong>{t('certificatesRequired')}</strong> {t('sustainableMobilityReq')}
                          <br />
                          <strong>{t('benefitObtained')}</strong> {t('sustainableMobilityBenefit')}
                        </p>
                      </div>
                      
                      <div className="bg-white/70 rounded-lg p-4 border-l-4 border-green-400">
                        <h5 className="font-bold text-green-700 mb-2">{t('smartWorkingGreen')}</h5>
                        <p className="text-sm text-gray-600">
                          <strong>{t('certificatesRequired')}</strong> {t('smartWorkingReq')}
                          <br />
                          <strong>{t('benefitObtained')}</strong> {t('smartWorkingBenefit')}
                        </p>
                      </div>
                      
                      <div className="bg-white/70 rounded-lg p-4 border-l-4 border-blue-400">
                        <h5 className="font-bold text-blue-700 mb-2">{t('trainingDevelopment')}</h5>
                        <p className="text-sm text-gray-600">
                          <strong>{t('certificatesRequired')}</strong> {t('trainingReq')}
                          <br />
                          <strong>{t('benefitObtained')}</strong> {t('trainingBenefit')}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg p-4 text-white">
                    <h5 className="font-bold mb-2">{t('companyAdvantages')}</h5>
                    <ul className="text-sm space-y-1">
                      {t('companyAdvantagesList').map((advantage, idx) => (
                        <li key={idx}>{advantage}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Citizen-Municipality Exchange */}
            <Card className="border-0 shadow-lg bg-gradient-to-r from-green-50 via-emerald-50 to-blue-50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                  <MapPin className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {t('citizenMunicipalityExchange')}
                </CardTitle>
                <CardDescription className="text-lg text-gray-700">
                  {t('citizenMunicipalityExchangeDesc')}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                      <Globe className="w-5 h-5 text-green-500 mr-2" />
                      {t('howItWorks')}
                    </h4>
                    <p className="text-gray-600 mb-4">
                      {t('citizenExchangeDesc')}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <Target className="w-5 h-5 text-blue-500 mr-2" />
                      {t('practicalServicesExamples')}
                    </h4>
                    <div className="space-y-4">
                      <div className="bg-white/70 rounded-lg p-4 border-l-4 border-green-400">
                        <h5 className="font-bold text-green-700 mb-2">{t('publicTransport')}</h5>
                        <p className="text-sm text-gray-600">
                          <strong>{t('certificatesRequired')}</strong> {t('publicTransportReq')}
                          <br />
                          <strong>{t('serviceObtained')}</strong> {t('publicTransportService')}
                        </p>
                      </div>
                      
                      <div className="bg-white/70 rounded-lg p-4 border-l-4 border-blue-400">
                        <h5 className="font-bold text-blue-700 mb-2">{t('cultureLeisure')}</h5>
                        <p className="text-sm text-gray-600">
                          <strong>{t('certificatesRequired')}</strong> {t('cultureReq')}
                          <br />
                          <strong>{t('serviceObtained')}</strong> {t('cultureService')}
                        </p>
                      </div>
                      
                      <div className="bg-white/70 rounded-lg p-4 border-l-4 border-purple-400">
                        <h5 className="font-bold text-purple-700 mb-2">{t('taxBenefits')}</h5>
                        <p className="text-sm text-gray-600">
                          <strong>{t('certificatesRequired')}</strong> {t('taxBenefitsReq')}
                          <br />
                          <strong>{t('serviceObtained')}</strong> {t('taxBenefitsService')}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg p-4 text-white py-[12px]">
                    <h5 className="font-bold mb-2">{t('municipalityAdvantages')}</h5>
                    <ul className="text-sm space-y-1">
                      {t('municipalityAdvantagesList').map((advantage, idx) => (
                        <li key={idx}>{advantage}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 text-white text-center">
            <h4 className="text-2xl font-bold mb-2">{t('ecosystemTitle')}</h4>
            <p className="text-lg">
              {t('ecosystemDesc')}
            </p>
          </div>
        </div>

        {/* 8. Vantaggi per gli Stakeholder - Chi beneficia e come */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('stakeholderBenefitsTitle')}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => <BenefitCard key={index} benefit={benefit} />)}
          </div>
        </div>

        {/* 9. Integrazioni Tecnologiche - Come si connette con l'esistente */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('integrationsTitle')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration, index) => <IntegrationCard key={index} integration={integration} />)}
          </div>
        </div>

        {/* 10. Technology Stack - Su cosa si basa */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-green-50 mb-16">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">{t('techStackTitle')}</CardTitle>
            <CardDescription>{t('techStackDesc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">{t('frontend')}</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <div>React + Next.js</div>
                  <div>Tailwind CSS</div>
                  <div>PWA Ready</div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">{t('blockchain')}</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <div>Ethereum/Polygon</div>
                  <div>Smart Contracts</div>
                  <div>IPFS Storage</div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">{t('backend')}</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <div>Node.js/Python</div>
                  <div>Zero Knowledge Proof</div>
                  <div>API Gateway</div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">{t('compliance')}</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <div>GDPR Ready</div>
                  <div>ESG Standards</div>
                  <div>CSRD/ESRS</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 11. Roadmap - Quando e come si sviluppa */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('roadmapTitle')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmap.map((phase, index) => <RoadmapCard key={index} phase={phase} />)}
          </div>
        </div>

        {/* 12. Team - Chi c'è dietro */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('ilNostroTeam')}
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => <TeamMemberCard key={index} member={member} />)}
          </div>
        </div>

        {/* 13. Advisors - I nostri consulenti esperti */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-4">{t('iNostriAdvisors')}</h3>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
            Un team di esperti di livello internazionale che ci guida nell'innovazione sostenibile, 
            dalla blockchain alla compliance, dall'economia all'intelligenza artificiale.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {advisors.map((advisor, index) => <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm text-center">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg text-center">{advisor.name}</CardTitle>
                  <div className="flex justify-center">
                    <Badge variant="secondary" className="text-xs">{advisor.role}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-gray-600 text-center">{advisor.bio}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* 14. Offerta Commerciale - Piani di pricing */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-4">
            {t('offertaCommerciale')}
          </h3>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Scegli il piano più adatto alle tue esigenze e accedi alla piattaforma di sostenibilità più innovativa d'Europa.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Piano Micro */}
            <Card className="border-2 border-green-200 shadow-lg bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                  <Euro className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">{t('pianoMicro')}</CardTitle>
                <CardDescription className="text-gray-600">
                  {t('perfectForFreelance')}
                </CardDescription>
                <div className="mt-4">
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold text-green-600">9€</span>
                    <span className="text-lg text-gray-500 ml-2">{t('monthlyPrice')}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    <span>{t('trackingAutomatico')}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    <span>{t('unlimitedBlockchainCerts')}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    <span>{t('basicEsgDashboard')}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    <span>{t('exchangeAccess')}</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700">
                  {t('iniziaSubito')}
                </Button>
              </CardContent>
            </Card>

            {/* Piano PMI */}
            <Card className="border-2 border-blue-300 shadow-lg bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 relative">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                  <Building className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">{t('pianoPMI')}</CardTitle>
                <CardDescription className="text-gray-600">
                  {t('idealForSme')}
                </CardDescription>
                <div className="mt-4">
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold text-blue-600">99€</span>
                    <span className="text-lg text-gray-500 ml-2">{t('monthlyPrice')}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                    {t('everythingFromMicro')}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                    <span>{t('advancedEsgDashboard')}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                    <span>{t('automaticCsrdReports')}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                    <span>{t('corporateWelfareSystem')}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                    <span>{t('apiIntegration')}</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700">
                  {t('iniziaSubito')}
                </Button>
              </CardContent>
            </Card>

            {/* Piano Enterprise */}
            <Card className="border-2 border-purple-200 shadow-lg bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                  <Globe className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">{t('pianoEnterprise')}</CardTitle>
                <CardDescription className="text-gray-600">
                  {t('forLargeCompanies')}
                </CardDescription>
                <div className="mt-4">
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold text-purple-600">999€</span>
                    <span className="text-lg text-gray-500 ml-2">{t('monthlyPrice')}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" />
                    <span>{t('everythingFromSme')}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" />
                    <span>{t('whiteLabelSolution')}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" />
                    <span>{t('completeDppIntegration')}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" />
                    <span>{t('predictiveAiAnalytics')}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" />
                    <span>{t('dedicatedAccountManager')}</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700">
                  {t('contattaci')}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 15. Contact Section - Come contattarci */}
        <div className="mb-16">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-green-50 to-blue-50">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-gray-900">
                {t('digitalEcosystemTitle')}
              </CardTitle>
              <CardDescription className="text-lg text-gray-700">
                {t('digitalEcosystemDesc')}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card className="border border-green-200 bg-white/50">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                      <Building className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{t('businessInfoTitle')}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-center">
                      <h4 className="font-bold text-gray-900">Virtuosity Srl</h4>
                      <p className="text-sm text-gray-600">P.iva: 03438420733</p>
                      <p className="text-sm text-gray-600">N.REA 254707</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-blue-200 bg-white/50">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{t('contactInfo')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center space-y-2">
                      <p className="text-sm text-gray-600">Via per Avertana, 23</p>
                      <p className="text-sm text-gray-600">Manduria (TA) 74024</p>
                      <p className="text-sm text-gray-600">gianfranco.leone@virtuosity.it</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 16. CTA Section - Call to action finale */}
        <div className="text-center bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">{t('readyToStartTitle')}</h3>
          <p className="text-xl mb-8 text-green-100">
            {t('readyToStartDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => navigate("/dashboard")} className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              {t('aboutStartNow')}
            </Button>
            <Button variant="outline" onClick={() => navigate("/")} className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg">
              {t('aboutBackHome')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
