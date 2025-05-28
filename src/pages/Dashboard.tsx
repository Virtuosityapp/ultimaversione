
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Award, TrendingUp, MapPin, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const activities = [
    {
      id: 1,
      type: "bike",
      action: "Pedalata in bicicletta",
      distance: "12.5 km",
      co2Saved: "2.8 kg",
      points: 150,
      time: "45 min",
      timestamp: "2024-01-15T08:30:00",
      location: "Milano Centro",
      source: "Strava"
    },
    {
      id: 2,
      type: "public_transport",
      action: "Trasporto pubblico",
      distance: "8.2 km",
      co2Saved: "1.5 kg",
      points: 80,
      time: "25 min",
      timestamp: "2024-01-15T18:15:00",
      location: "Milano - Roma",
      source: "ATM App"
    },
    {
      id: 3,
      type: "walk",
      action: "Camminata sostenibile",
      distance: "3.1 km",
      co2Saved: "0.7 kg",
      points: 45,
      time: "32 min",
      timestamp: "2024-01-14T12:20:00",
      location: "Parco Sempione",
      source: "Apple Health"
    }
  ];

  const certificates = [
    {
      id: "CERT-001",
      title: "Mobilità Sostenibile",
      co2Saved: "15.2 kg",
      points: 850,
      validatedAt: "2024-01-15",
      blockchainHash: "0x1a2b3c...",
      status: "verified"
    },
    {
      id: "CERT-002",
      title: "Eco Commuter",
      co2Saved: "8.7 kg",
      points: 470,
      validatedAt: "2024-01-10",
      blockchainHash: "0x4d5e6f...",
      status: "verified"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 space-y-4 sm:space-y-0">
            <div className="flex items-center justify-center sm:justify-start space-x-3">
              <img 
                src="/lovable-uploads/5930bd4d-6869-4b7d-8020-e58372708f8a.png" 
                alt="Virtuosity Logo" 
                className="h-12 w-12 sm:h-16 sm:w-16 object-contain"
              />
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Virtuosity
              </h1>
            </div>
            <div className="flex items-center justify-center space-x-2 sm:space-x-4">
              <Button 
                variant="outline" 
                onClick={() => navigate("/marketplace")}
                className="border-green-300 text-green-700 hover:bg-green-50 text-sm px-3 py-2 sm:px-4 sm:py-2"
              >
                Marketplace
              </Button>
              <Button 
                variant="outline" 
                onClick={() => navigate("/")}
                className="border-blue-300 text-blue-700 hover:bg-blue-50 text-sm px-3 py-2 sm:px-4 sm:py-2"
              >
                Home
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Welcome Section */}
        <div className="mb-6 sm:mb-8 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Benvenuto, Marco! 🌱</h2>
          <p className="text-gray-600 text-sm sm:text-base">Ecco il tuo impatto ambientale di oggi</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-green-400 to-emerald-500 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-green-100">CO₂ Risparmiata</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold">24.3 kg</div>
              <p className="text-xs text-green-100">+12% questa settimana</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-400 to-cyan-500 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-blue-100">Punti Totali</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold">1,275</div>
              <p className="text-xs text-blue-100">+85 punti oggi</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-400 to-pink-500 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-purple-100">Certificati</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold">12</div>
              <p className="text-xs text-purple-100">2 nuovi certificati</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-400 to-red-500 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-orange-100">Livello</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg sm:text-2xl font-bold">ECO EXPERT</div>
              <Progress value={75} className="h-2 bg-orange-200" />
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="activities" className="space-y-4 sm:space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-white/80 backdrop-blur-sm">
            <TabsTrigger value="activities" className="text-xs sm:text-sm">Attività</TabsTrigger>
            <TabsTrigger value="certificates" className="text-xs sm:text-sm">Certificati</TabsTrigger>
            <TabsTrigger value="insights" className="text-xs sm:text-sm">Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="activities" className="space-y-4 sm:space-y-6">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                  Attività Recenti
                </CardTitle>
                <CardDescription className="text-sm">
                  Tracciamento automatico delle tue azioni sostenibili
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 sm:space-y-4">
                  {activities.map((activity) => (
                    <div key={activity.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors space-y-3 sm:space-y-0">
                      <div className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-lg sm:text-xl flex-shrink-0">
                          {activity.type === 'bike' && '🚴'}
                          {activity.type === 'public_transport' && '🚌'}
                          {activity.type === 'walk' && '🚶'}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{activity.action}</h3>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-xs sm:text-sm text-gray-600 space-y-1 sm:space-y-0">
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3 flex-shrink-0" />
                              <span className="truncate">{activity.location}</span>
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3 flex-shrink-0" />
                              {activity.time}
                            </span>
                            <Badge variant="outline" className="text-xs w-fit">
                              {activity.source}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between sm:block sm:text-right">
                        <div className="font-bold text-green-600 text-sm sm:text-base">+{activity.points} punti</div>
                        <div className="text-xs sm:text-sm text-gray-600">{activity.co2Saved} CO₂</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="certificates" className="space-y-4 sm:space-y-6">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <Award className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                  Certificati Blockchain
                </CardTitle>
                <CardDescription className="text-sm">
                  I tuoi certificati digitali verificati e tracciabili
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {certificates.map((cert) => (
                    <div key={cert.id} className="p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-200">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 space-y-2 sm:space-y-0">
                        <div>
                          <h3 className="font-bold text-base sm:text-lg text-gray-900">{cert.title}</h3>
                          <p className="text-xs sm:text-sm text-gray-600">ID: {cert.id}</p>
                        </div>
                        <Badge className="bg-green-100 text-green-800 w-fit">
                          {cert.status === 'verified' ? 'Verificato' : 'In verifica'}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-4">
                        <div>
                          <p className="text-xs sm:text-sm text-gray-600">CO₂ Risparmiata</p>
                          <p className="font-bold text-green-600 text-sm sm:text-base">{cert.co2Saved}</p>
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm text-gray-600">Punti Guadagnati</p>
                          <p className="font-bold text-blue-600 text-sm sm:text-base">{cert.points}</p>
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm text-gray-600">Data Validazione</p>
                          <p className="font-bold text-gray-900 text-sm sm:text-base">{cert.validatedAt}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                        <p className="text-xs text-gray-500 font-mono break-all sm:break-normal">
                          Hash: {cert.blockchainHash}
                        </p>
                        <Button size="sm" variant="outline" className="text-xs">
                          Visualizza su Blockchain
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="insights" className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">Impatto Ambientale</CardTitle>
                  <CardDescription className="text-sm">Il tuo contributo al pianeta</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm sm:text-base">Alberi Equivalenti</span>
                      <span className="font-bold text-green-600 text-sm sm:text-base">2.3 🌳</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm sm:text-base">Energia Risparmiata</span>
                      <span className="font-bold text-blue-600 text-sm sm:text-base">45.7 kWh</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm sm:text-base">Km Sostenibili</span>
                      <span className="font-bold text-purple-600 text-sm sm:text-base">127.3 km</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">Obiettivi Mensili</CardTitle>
                  <CardDescription className="text-sm">Traguardi per gennaio 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <div className="flex justify-between text-xs sm:text-sm mb-1">
                        <span>CO₂ Risparmiata</span>
                        <span>24.3/50 kg</span>
                      </div>
                      <Progress value={48.6} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-xs sm:text-sm mb-1">
                        <span>Certificati</span>
                        <span>12/20</span>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-xs sm:text-sm mb-1">
                        <span>Attività</span>
                        <span>18/30</span>
                      </div>
                      <Progress value={60} className="h-2" />
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

export default Dashboard;
