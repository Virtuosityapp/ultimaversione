import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Building2, 
  Users, 
  Leaf, 
  TrendingUp, 
  MapPin, 
  Calendar,
  Award,
  Target,
  BarChart3,
  Zap,
  Recycle,
  Bus,
  TreePine,
  Droplets,
  Wind,
  Sun,
  Camera,
  AlertTriangle,
  CheckCircle,
  Clock,
  Star
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, LineChart, Line } from "recharts";

const Comuni = () => {
  const navigate = useNavigate();

  // Mock data for environmental monitoring
  const airQualityData = [
    { name: "PM2.5", value: 12 },
    { name: "PM10", value: 23 },
    { name: "NO₂", value: 18 },
  ];

  const energyConsumptionData = [
    { name: "Illuminazione Pubblica", value: 68 },
    { name: "Edifici Pubblici", value: 45 },
    { name: "Semafori Smart", value: 32 },
  ];

  const wasteManagementData = [
    { name: "Riciclabile", value: 78 },
    { name: "Organico", value: 85 },
  ];

  const mobilityData = {
    electricBuses: 89,
    bikeSharing: 1247,
  };

  const citizenReportsData = [
    { id: 1, tipo: "Buche stradali", status: "risolto", zona: "Centro", priorita: "alta" },
    { id: 2, tipo: "Illuminazione", status: "in_corso", zona: "Porta Garibaldi", priorita: "media" },
    { id: 3, tipo: "Rifiuti abbandonati", status: "nuovo", zona: "Navigli", priorita: "alta" },
  ];

  const greenInitiativesData = [
    { name: "Piantumazione Urbana", progress: 83, description: "500 nuovi alberi piantati" },
    { name: "Pannelli Solari", progress: 65, description: "20 edifici pubblici coinvolti" },
  ];

  const awardsData = [
    { name: "Città Sostenibile 2024", level: "Oro" },
    { name: "Green City Award", level: "Platino" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 sm:py-4 space-y-3 sm:space-y-0">
            <div className="flex items-center justify-center sm:justify-start space-x-2">
              <img 
                src="/lovable-uploads/5930bd4d-6869-4b7d-8020-e58372708f8a.png" 
                alt="Virtuosity Logo" 
                className="h-8 w-8 sm:h-12 sm:w-12 object-contain" 
              />
              <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Dashboard Comune di Milano
              </h1>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Button 
                variant="outline" 
                onClick={() => navigate("/dashboard")}
                className="border-blue-300 text-blue-700 hover:bg-blue-50 hover:border-blue-400 text-xs px-2 py-1.5 sm:text-sm sm:px-3 sm:py-2"
              >
                Dashboard Utente
              </Button>
              <Button 
                variant="outline" 
                onClick={() => navigate("/")}
                className="border-green-300 text-green-700 hover:bg-green-50 hover:border-green-400 text-xs px-2 py-1.5 sm:text-sm sm:px-3 sm:py-2"
              >
                Home
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-6">
        {/* Welcome Section */}
        <div className="mb-3 sm:mb-6 text-center sm:text-left">
          <h2 className="text-lg sm:text-2xl font-bold text-gray-900 mb-1">
            Benvenuto, Amministrazione 🏛️
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm">
            Monitoraggio sostenibilità e impatto ambientale della città
          </p>
        </div>

        {/* Stats Cards - Reduced sizes */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 mb-3 sm:mb-6">
          <Card className="border-0 shadow-md bg-gradient-to-br from-green-400 to-green-600 text-white hover:shadow-lg hover:scale-105 transition-all duration-300">
            <CardHeader className="pb-1 px-2 pt-2 sm:px-4 sm:pt-3">
              <CardTitle className="text-xs sm:text-sm font-medium text-green-100">CO₂ Totale Risparmiata</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 px-2 pb-2 sm:px-4 sm:pb-3">
              <div className="text-sm sm:text-xl font-bold">1,247 kg</div>
              <p className="text-xs text-green-100 hidden sm:block">+18% questo mese</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md bg-gradient-to-br from-blue-400 to-blue-600 text-white hover:shadow-lg hover:scale-105 transition-all duration-300">
            <CardHeader className="pb-1 px-2 pt-2 sm:px-4 sm:pt-3">
              <CardTitle className="text-xs sm:text-sm font-medium text-blue-100">Cittadini Attivi</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 px-2 pb-2 sm:px-4 sm:pb-3">
              <div className="text-sm sm:text-xl font-bold">4,892</div>
              <p className="text-xs text-blue-100 hidden sm:block">+234 nuovi utenti</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md bg-gradient-to-br from-purple-400 to-purple-600 text-white hover:shadow-lg hover:scale-105 transition-all duration-300">
            <CardHeader className="pb-1 px-2 pt-2 sm:px-4 sm:pt-3">
              <CardTitle className="text-xs sm:text-sm font-medium text-purple-100">Segnalazioni</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 px-2 pb-2 sm:px-4 sm:pb-3">
              <div className="text-sm sm:text-xl font-bold">127</div>
              <p className="text-xs text-purple-100 hidden sm:block">15 risolte oggi</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md bg-gradient-to-br from-orange-400 to-orange-600 text-white hover:shadow-lg hover:scale-105 transition-all duration-300">
            <CardHeader className="pb-1 px-2 pt-2 sm:px-4 sm:pt-3">
              <CardTitle className="text-xs sm:text-sm font-medium text-orange-100">Indice Qualità</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 px-2 pb-2 sm:px-4 sm:pb-3">
              <div className="text-sm sm:text-xl font-bold">8.7/10</div>
              <Progress value={87} className="h-1 sm:h-1.5 bg-orange-200 [&>div]:bg-orange-100" />
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="monitoring" className="space-y-3 sm:space-y-4">
          <TabsList className="grid w-full grid-cols-3 bg-white/80 backdrop-blur-sm h-auto p-1 shadow-sm">
            <TabsTrigger 
              value="monitoring" 
              className="text-xs sm:text-sm px-1 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-400 data-[state=active]:to-emerald-500 data-[state=active]:text-white"
            >
              Monitoraggio
            </TabsTrigger>
            <TabsTrigger 
              value="reports" 
              className="text-xs sm:text-sm px-1 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-400 data-[state=active]:to-cyan-500 data-[state=active]:text-white"
            >
              Segnalazioni
            </TabsTrigger>
            <TabsTrigger 
              value="initiatives" 
              className="text-xs sm:text-sm px-1 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-400 data-[state=active]:to-pink-500 data-[state=active]:text-white"
            >
              Iniziative
            </TabsTrigger>
          </TabsList>

          <TabsContent value="monitoring" className="space-y-3 sm:space-y-4">
            {/* Environmental Monitoring - Reduced impact */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
              <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-2 sm:pb-3">
                  <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                    <Wind className="h-4 w-4 text-blue-600" />
                    Qualità dell'Aria
                  </CardTitle>
                  <CardDescription className="text-xs">Monitoraggio in tempo reale</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex justify-between items-center p-2 bg-green-50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs sm:text-sm font-medium">PM2.5</span>
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-green-600">12 μg/m³</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-yellow-50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-xs sm:text-sm font-medium">PM10</span>
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-yellow-600">23 μg/m³</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-blue-50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-xs sm:text-sm font-medium">NO₂</span>
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-blue-600">18 μg/m³</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-2 sm:pb-3">
                  <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                    <Zap className="h-4 w-4 text-yellow-600" />
                    Consumo Energetico
                  </CardTitle>
                  <CardDescription className="text-xs">Gestione smart city</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm">Illuminazione Pubblica</span>
                      <Badge className="bg-green-100 text-green-800 text-xs">-12%</Badge>
                    </div>
                    <Progress value={68} className="h-1.5 sm:h-2" />
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm">Edifici Pubblici</span>
                      <Badge className="bg-blue-100 text-blue-800 text-xs">-8%</Badge>
                    </div>
                    <Progress value={45} className="h-1.5 sm:h-2" />
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm">Semafori Smart</span>
                      <Badge className="bg-purple-100 text-purple-800 text-xs">-15%</Badge>
                    </div>
                    <Progress value={32} className="h-1.5 sm:h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Mobility and Waste - Reduced impact */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
              <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-2 sm:pb-3">
                  <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                    <Bus className="h-4 w-4 text-green-600" />
                    Mobilità Sostenibile
                  </CardTitle>
                  <CardDescription className="text-xs">Trasporti e bike sharing</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <div className="text-center p-2 bg-green-50 rounded-lg">
                      <div className="text-lg sm:text-xl font-bold text-green-600">89%</div>
                      <div className="text-xs text-gray-600">Bus Elettrici</div>
                    </div>
                    <div className="text-center p-2 bg-blue-50 rounded-lg">
                      <div className="text-lg sm:text-xl font-bold text-blue-600">1,247</div>
                      <div className="text-xs text-gray-600">Bike Sharing</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-2 sm:pb-3">
                  <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                    <Recycle className="h-4 w-4 text-purple-600" />
                    Gestione Rifiuti
                  </CardTitle>
                  <CardDescription className="text-xs">Raccolta differenziata</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span>Riciclabile</span>
                      <span className="font-semibold text-green-600">78%</span>
                    </div>
                    <Progress value={78} className="h-1.5 sm:h-2 bg-gray-200 [&>div]:bg-green-500" />
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span>Organico</span>
                      <span className="font-semibold text-blue-600">85%</span>
                    </div>
                    <Progress value={85} className="h-1.5 sm:h-2 bg-gray-200 [&>div]:bg-blue-500" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-3 sm:space-y-4">
            {/* Citizen Reports - Reduced impact */}
            <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-2 sm:pb-3">
                <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                  <Camera className="h-4 w-4 text-orange-600" />
                  Segnalazioni Cittadini
                </CardTitle>
                <CardDescription className="text-xs">
                  Problemi urbani segnalati tramite app
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 sm:space-y-3">
                  {citizenReportsData.map((segnalazione) => (
                    <div key={segnalazione.id} className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
                        <div className="flex-shrink-0">
                          {segnalazione.status === 'risolto' && <CheckCircle className="h-4 w-4 text-green-600" />}
                          {segnalazione.status === 'in_corso' && <Clock className="h-4 w-4 text-yellow-600" />}
                          {segnalazione.status === 'nuovo' && <AlertTriangle className="h-4 w-4 text-red-600" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-xs sm:text-sm text-gray-900 truncate">
                            {segnalazione.tipo}
                          </h3>
                          <p className="text-xs text-gray-600">{segnalazione.zona}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 flex-shrink-0">
                        <Badge 
                          className={`text-xs ${
                            segnalazione.priorita === 'alta' 
                              ? 'bg-red-100 text-red-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {segnalazione.priorita}
                        </Badge>
                        <Button size="sm" variant="outline" className="text-xs px-2 py-1">
                          Dettagli
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="initiatives" className="space-y-3 sm:space-y-4">
            {/* Green Initiatives - Reduced impact */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
              <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-2 sm:pb-3">
                  <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                    <TreePine className="h-4 w-4 text-green-600" />
                    Progetti Verdi
                  </CardTitle>
                  <CardDescription className="text-xs">Iniziative ambientali attive</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="p-2 sm:p-3 bg-green-50 rounded-lg">
                      <h3 className="font-medium text-xs sm:text-sm text-green-900">Piantumazione Urbana</h3>
                      <p className="text-xs text-green-700">{greenInitiativesData[0].description}</p>
                      <Progress value={greenInitiativesData[0].progress} className="h-1.5 sm:h-2 mt-1 bg-green-200 [&>div]:bg-green-600" />
                    </div>
                    <div className="p-2 sm:p-3 bg-blue-50 rounded-lg">
                      <h3 className="font-medium text-xs sm:text-sm text-blue-900">Pannelli Solari</h3>
                      <p className="text-xs text-blue-700">{greenInitiativesData[1].description}</p>
                      <Progress value={greenInitiativesData[1].progress} className="h-1.5 sm:h-2 mt-1 bg-blue-200 [&>div]:bg-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-2 sm:pb-3">
                  <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                    <Award className="h-4 w-4 text-purple-600" />
                    Riconoscimenti
                  </CardTitle>
                  <CardDescription className="text-xs">Premi e certificazioni</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-yellow-50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-yellow-600" />
                        <span className="text-xs sm:text-sm font-medium">{awardsData[0].name}</span>
                      </div>
                      <Badge className="bg-yellow-100 text-yellow-800 text-xs">{awardsData[0].level}</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-green-50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Leaf className="h-4 w-4 text-green-600" />
                        <span className="text-xs sm:text-sm font-medium">{awardsData[1].name}</span>
                      </div>
                      <Badge className="bg-green-100 text-green-800 text-xs">{awardsData[1].level}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Comuni;
