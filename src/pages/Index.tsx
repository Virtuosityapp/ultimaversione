import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import CircularityIcons from "@/components/CircularityIcons";
import { ExternalLink } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleBusinessPlanClick = () => {
    window.open('https://bp.virtuosity.site', '_blank');
  };

  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: 'url(/lovable-uploads/19a12e0c-3445-4274-97d6-4de92d0576fa.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <LanguageSwitcher />
        
        {/* Top navigation */}
        <div className="flex justify-end p-4 pt-16">
          <Button
            variant="outline"
            size="sm"
            onClick={handleBusinessPlanClick}
            className="bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white hover:scale-105 transition-all duration-200 shadow-lg"
            title="Business Plan Virtuosity"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Business Plan
          </Button>
        </div>
        
        {/* Hero Section - Reduced by 30% */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-8 sm:py-11 lg:py-14">
            <div className="text-center">
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
                  <img src="/lovable-uploads/5930bd4d-6869-4b7d-8020-e58372708f8a.png" alt="Virtuosity Logo" className="relative h-14 sm:h-17 md:h-22 w-auto mx-auto" />
                </div>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  {t('heroTitle')}
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8 max-w-4xl mx-auto font-medium px-3">
                {t('heroSubtitle')}
              </p>
              
              {/* Virtuosity Info Block - Reduced by 30% */}
              <div className="mb-6 sm:mb-8 max-w-xs mx-auto px-3">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-yellow-200 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Virtuosity</h3>
                  <p className="text-gray-600 mb-3 text-xs">Scopri i dettagli del progetto</p>
                  <Button onClick={() => navigate("/about")} className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-4 py-2 text-sm hover:from-yellow-600 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl w-full">
                    Clicca qui
                  </Button>
                </div>
              </div>

              {/* Dashboard Preview Image - Reduced by 30% */}
              <div className="mb-6 sm:mb-8 max-w-3xl mx-auto px-3">
                
                
              </div>

              {/* Four Dashboard Blocks - Reduced by 30% */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 sm:mb-8 max-w-3xl mx-auto px-3">
                
                {/* User Dashboard Block */}
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-green-200 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Dashboard Utente</h3>
                  <p className="text-gray-600 mb-3 text-xs">
                    Accedi alla tua dashboard personale per monitorare le tue attività sostenibili, visualizzare i certificati guadagnati e partecipare alle sfide della community.
                  </p>
                  <Button onClick={() => navigate("/dashboard")} className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 text-sm hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl w-full">
                    {t('buttonUser')}
                  </Button>
                </div>

                {/* Exchange Dashboard Block */}
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-green-200 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Exchange</h3>
                  <p className="text-gray-600 mb-3 text-xs">
                    Scopri il marketplace dove puoi scambiare i tuoi punti Virtuosity con premi reali, buoni sconto e vantaggi esclusivi offerti dai partner.
                  </p>
                  <Button onClick={() => navigate("/exchange")} className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 text-sm hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl w-full">
                    {t('buttonExchange')}
                  </Button>
                </div>

                {/* Companies Dashboard Block */}
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-sky-200 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Dashboard Aziende</h3>
                  <p className="text-gray-600 mb-3 text-xs">
                    Accedi al pannello di controllo aziendale per gestire i dipendenti, monitorare le performance di sostenibilità e configurare incentivi personalizzati.
                  </p>
                  <Button onClick={() => navigate("/dashboard-aziende")} className="bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-4 py-2 text-sm hover:from-sky-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl w-full">
                    {t('buttonCompanies')}
                  </Button>
                </div>

                {/* Municipalities Dashboard Block */}
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-blue-200 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Dashboard Comuni</h3>
                  <p className="text-gray-600 mb-3 text-xs">
                    Entra nel centro di controllo comunale per gestire le integrazioni smart city, monitorare le segnalazioni cittadine e configurare incentivi locali.
                  </p>
                  <Button onClick={() => navigate("/comuni")} className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 text-sm hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl w-full">
                    {t('buttonMunicipalities')}
                  </Button>
                </div>
              </div>

              {/* Circularity Icons Section - moved to bottom */}
              <CircularityIcons />

              {/* Video Section - Reduced by 30% */}
              <div className="mb-6 sm:mb-8 max-w-3xl mx-auto px-3">
                <AspectRatio ratio={16 / 9}>
                  <iframe src="https://www.youtube.com/embed/rdCqQPQfogs" title="Virtuosity Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="w-full h-full rounded-lg shadow-lg" />
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
