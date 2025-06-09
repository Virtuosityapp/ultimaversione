
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
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
                Virtuosity
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              La piattaforma che premia i tuoi comportamenti sostenibili. 
              Tracciamento automatico, certificati blockchain e premi reali per un futuro più verde.
            </p>
            
            <div className="flex flex-col gap-4 justify-center mb-8 sm:mb-12 px-4 max-w-md mx-auto">
              <Button 
                onClick={() => navigate("/dashboard")} 
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 sm:px-8 py-3 text-base sm:text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl w-full"
              >
                Inizia il Tuo Viaggio Sostenibile
              </Button>
              <Button 
                onClick={() => navigate("/about")}
                className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-6 sm:px-8 py-3 text-base sm:text-lg hover:from-yellow-600 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl w-full"
              >
                Scopri Come Funziona
              </Button>
              <Button 
                onClick={() => navigate("/comuni")} 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 sm:px-8 py-3 text-base sm:text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl w-full"
              >
                Dashboard Comuni
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
