
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import CircularityIcons from "@/components/CircularityIcons";

const Index = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      <LanguageSwitcher />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center">
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
                <img 
                  src="/lovable-uploads/5930bd4d-6869-4b7d-8020-e58372708f8a.png" 
                  alt="Virtuosity Logo" 
                  className="relative h-20 sm:h-24 md:h-32 w-auto mx-auto" 
                />
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                {t('heroTitle')}
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-700 mb-4 max-w-4xl mx-auto px-4 font-medium">
              {t('heroSubtitle')}
            </p>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              {t('heroDescription')}
            </p>
            
            {/* Enhanced Virtuosity Button */}
            <div className="flex justify-center mb-8 sm:mb-12 px-4 max-w-md mx-auto">
              <Button 
                onClick={() => navigate("/about")} 
                className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-6 sm:px-8 py-3 text-base sm:text-lg hover:from-yellow-600 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl w-full border-4 border-yellow-600 hover:border-yellow-700 ring-4 ring-yellow-300/50 hover:ring-yellow-400/60 font-bold transform hover:scale-105"
              >
                {t('buttonVirtusosity')}
              </Button>
            </div>

            {/* Four Dashboard Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 sm:mb-12 max-w-4xl mx-auto px-4">
              
              {/* User Dashboard Block */}
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-green-200 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Dashboard Utente</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Accedi alla tua dashboard personale per monitorare le tue attività sostenibili, visualizzare i certificati guadagnati e partecipare alle sfide della community.
                </p>
                <Button 
                  onClick={() => navigate("/dashboard")} 
                  className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 text-base hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl w-full"
                >
                  {t('buttonUser')}
                </Button>
              </div>

              {/* Exchange Dashboard Block */}
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-green-200 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Exchange</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Scopri il marketplace dove puoi scambiare i tuoi punti Virtuosity con premi reali, buoni sconto e vantaggi esclusivi offerti dai partner.
                </p>
                <Button 
                  onClick={() => navigate("/exchange")} 
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 text-base hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl w-full"
                >
                  {t('buttonExchange')}
                </Button>
              </div>

              {/* Companies Dashboard Block */}
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-sky-200 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Dashboard Aziende</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Accedi al pannello di controllo aziendale per monitorare le performance di sostenibilità e configurare incentivi personalizzati.
                </p>
                <Button 
                  onClick={() => navigate("/dashboard-aziende")} 
                  className="bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-6 py-3 text-base hover:from-sky-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl w-full"
                >
                  {t('buttonCompanies')}
                </Button>
              </div>

              {/* Municipalities Dashboard Block */}
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-blue-200 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Dashboard Comuni</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Entra nel centro di controllo comunale per gestire le integrazioni smart city, monitorare le segnalazioni cittadine e configurare incentivi locali.
                </p>
                <Button 
                  onClick={() => navigate("/comuni")} 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 text-base hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl w-full"
                >
                  {t('buttonMunicipalities')}
                </Button>
              </div>
            </div>

            {/* Circularity Icons Section - moved to bottom */}
            <CircularityIcons />

            {/* Video Section */}
            <div className="mb-8 sm:mb-12 max-w-4xl mx-auto px-4">
              <AspectRatio ratio={16 / 9}>
                <iframe 
                  src="https://www.youtube.com/embed/rdCqQPQfogs" 
                  title="Virtuosity Video" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen 
                  className="w-full h-full rounded-lg shadow-lg" 
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
