
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Users, Award, TrendingUp } from "lucide-react";

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
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
              <Button 
                onClick={() => navigate("/dashboard")} 
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 sm:px-8 py-3 text-base sm:text-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                Inizia il Tuo Viaggio Sostenibile
              </Button>
              <Button 
                variant="outline" 
                onClick={() => navigate("/about")}
                className="border-green-300 text-green-700 hover:bg-green-50 px-6 sm:px-8 py-3 text-base sm:text-lg w-full sm:w-auto"
              >
                Scopri Come Funziona
              </Button>
            </div>

            {/* Stats Preview */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto px-4">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-green-600">12.5k</div>
                <div className="text-xs sm:text-sm text-gray-600">Kg CO₂ Risparmiata</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-blue-600">2.8k</div>
                <div className="text-xs sm:text-sm text-gray-600">Utenti Attivi</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-emerald-600">450</div>
                <div className="text-xs sm:text-sm text-gray-600">Certificati Emessi</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-cyan-600">95%</div>
                <div className="text-xs sm:text-sm text-gray-600">Tracking Automatico</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            Come Funziona Virtuosity
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Tracciamento automatico, validazione certificata e premi reali per ogni azione sostenibile
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-lg">Tracking Automatico</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-sm sm:text-base">
                Le tue azioni sostenibili vengono registrate automaticamente tramite app e sensori del telefono
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-lg">Certificati Blockchain</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-sm sm:text-base">
                Ogni azione genera certificati digitali verificabili e tracciabili su blockchain
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-lg">Community & Sfide</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-sm sm:text-base">
                Partecipa a sfide, conquista badge e confrontati con altri utenti sostenibili
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mb-4">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-lg">Premi Reali</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-sm sm:text-base">
                Scambia i tuoi certificati con premi, benefit aziendali e vantaggi esclusivi
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Integration Preview */}
        <div className="mt-12 sm:mt-16 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Integrazioni Supportate</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 px-4">
            <Badge variant="secondary" className="px-3 sm:px-4 py-2 text-xs sm:text-sm">🚴 Bike Sharing</Badge>
            <Badge variant="secondary" className="px-3 sm:px-4 py-2 text-xs sm:text-sm">🚗 Car Sharing</Badge>
            <Badge variant="secondary" className="px-3 sm:px-4 py-2 text-xs sm:text-sm">🚌 Trasporti Pubblici</Badge>
            <Badge variant="secondary" className="px-3 sm:px-4 py-2 text-xs sm:text-sm">📱 Google Fit</Badge>
            <Badge variant="secondary" className="px-3 sm:px-4 py-2 text-xs sm:text-sm">🍎 Apple Health</Badge>
            <Badge variant="secondary" className="px-3 sm:px-4 py-2 text-xs sm:text-sm">📊 Strava</Badge>
            <Badge variant="secondary" className="px-3 sm:px-4 py-2 text-xs sm:text-sm">🅿️ Smart Parking</Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
