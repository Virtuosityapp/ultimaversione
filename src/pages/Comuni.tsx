
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Car, 
  Lightbulb, 
  Trash2, 
  Recycle, 
  ArrowLeft, 
  Activity, 
  Wifi, 
  AlertCircle,
  CheckCircle,
  Clock,
  Settings
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Comuni = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const integrations = [
    {
      id: 1,
      name: "Smart Parking",
      description: "Gestione aree parcheggio e monitoraggio occupazione",
      status: "active",
      lastSync: "2 minuti fa",
      dataPoints: 1247,
      icon: Car,
      color: "bg-green-100 text-green-800",
      metrics: {
        parkingSpaces: 850,
        occupied: 634,
        revenue: "€2,340"
      }
    },
    {
      id: 2,
      name: "Illuminazione Pubblica",
      description: "Controllo LED e risparmio energetico",
      status: "active",
      lastSync: "5 minuti fa",
      dataPoints: 892,
      icon: Lightbulb,
      color: "bg-yellow-100 text-yellow-800",
      metrics: {
        lampPosts: 456,
        energySaved: "23%",
        cost: "€890"
      }
    },
    {
      id: 3,
      name: "Gestione Rifiuti",
      description: "Monitoraggio raccolta e ottimizzazione percorsi",
      status: "warning",
      lastSync: "15 minuti fa",
      dataPoints: 567,
      icon: Trash2,
      color: "bg-orange-100 text-orange-800",
      metrics: {
        containers: 234,
        fullContainers: 12,
        efficiency: "87%"
      }
    },
    {
      id: 4,
      name: "Riciclo e Tracciamento",
      description: "Tracciamento materiali riciclabili e incentivi",
      status: "inactive",
      lastSync: "2 ore fa",
      dataPoints: 0,
      icon: Recycle,
      color: "bg-blue-100 text-blue-800",
      metrics: {
        materials: 0,
        recycled: "0kg",
        citizens: 0
      }
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800"><CheckCircle className="w-3 h-3 mr-1" />Attivo</Badge>;
      case "warning":
        return <Badge className="bg-orange-100 text-orange-800"><AlertCircle className="w-3 h-3 mr-1" />Attenzione</Badge>;
      case "inactive":
        return <Badge className="bg-gray-100 text-gray-800"><Clock className="w-3 h-3 mr-1" />Inattivo</Badge>;
      default:
        return <Badge variant="secondary">Sconosciuto</Badge>;
    }
  };

  const handleManageIntegration = (integration: any) => {
    toast({
      title: "Gestione Integrazione",
      description: `Apertura pannello di controllo per ${integration.name}`,
    });
  };

  const totalDataPoints = integrations.reduce((sum, int) => sum + int.dataPoints, 0);
  const activeIntegrations = integrations.filter(int => int.status === "active").length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Button 
                variant="ghost" 
                onClick={() => navigate("/dashboard")}
                className="mr-1 sm:mr-2 p-2 sm:p-3"
                size="sm"
              >
                <ArrowLeft className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Dashboard</span>
              </Button>
              <img 
                src="/lovable-uploads/5930bd4d-6869-4b7d-8020-e58372708f8a.png" 
                alt="Virtuosity Logo" 
                className="relative h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16 mx-auto object-contain"
              />
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Dashboard Comuni
              </h1>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full font-bold text-sm sm:text-base">
                <Activity className="h-4 w-4 mr-1 inline" />
                {totalDataPoints}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Welcome Section */}
        <div className="mb-6 sm:mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Centro di Controllo Integrazioni 🏛️</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Monitora tutte le integrazioni del comune con Virtuosity. Controlla lo stato dei servizi smart della città.
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-400 to-indigo-500 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-blue-100">Integrazioni Attive</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold">{activeIntegrations}</div>
              <p className="text-xs text-blue-100">di {integrations.length} totali</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-green-400 to-emerald-500 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-green-100">Punti Dati</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold">{totalDataPoints.toLocaleString()}</div>
              <p className="text-xs text-green-100">Oggi</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-400 to-pink-500 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-purple-100">Efficienza</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold">94%</div>
              <p className="text-xs text-purple-100">Media servizi</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-400 to-red-500 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-orange-100">Allerte</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold">2</div>
              <p className="text-xs text-orange-100">Richiedono attenzione</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-4 sm:space-y-6">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 bg-white/80 backdrop-blur-sm text-xs sm:text-sm">
            <TabsTrigger value="overview" className="px-2 sm:px-4">Panoramica</TabsTrigger>
            <TabsTrigger value="integrations" className="px-1 sm:px-4">Integrazioni</TabsTrigger>
            <TabsTrigger value="analytics" className="px-1 sm:px-4 hidden sm:block">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {integrations.map((integration) => {
                const IconComponent = integration.icon;
                return (
                  <Card key={integration.id} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg ${integration.color}`}>
                            <IconComponent className="h-5 w-5" />
                          </div>
                          <div>
                            <CardTitle className="text-base sm:text-lg">{integration.name}</CardTitle>
                            <CardDescription className="text-sm">{integration.description}</CardDescription>
                          </div>
                        </div>
                        {getStatusBadge(integration.status)}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-600">Ultimo aggiornamento:</span>
                          <span className="font-medium">{integration.lastSync}</span>
                        </div>
                        
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-600">Punti dati:</span>
                          <span className="font-medium">{integration.dataPoints}</span>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-2 text-xs">
                          {Object.entries(integration.metrics).map(([key, value]) => (
                            <div key={key} className="text-center p-2 bg-gray-50 rounded">
                              <div className="font-bold text-gray-900">{value}</div>
                              <div className="text-gray-600 capitalize">{key}</div>
                            </div>
                          ))}
                        </div>
                        
                        <Button 
                          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 text-sm"
                          onClick={() => handleManageIntegration(integration)}
                          size="sm"
                        >
                          <Settings className="h-4 w-4 mr-2" />
                          Gestisci
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="integrations" className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              {integrations.map((integration) => {
                const IconComponent = integration.icon;
                return (
                  <Card key={integration.id} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-lg ${integration.color}`}>
                            <IconComponent className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg">{integration.name}</h3>
                            <p className="text-gray-600 text-sm">{integration.description}</p>
                            <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                              <span>🔄 {integration.lastSync}</span>
                              <span>📊 {integration.dataPoints} punti dati</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          {getStatusBadge(integration.status)}
                          <Button variant="outline" size="sm">
                            <Wifi className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4 sm:space-y-6">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Analytics Avanzate</CardTitle>
                <CardDescription>Analisi dettagliate delle performance delle integrazioni</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  <Activity className="h-12 w-12 mx-auto mb-4" />
                  <p>Dashboard analytics in fase di sviluppo</p>
                  <p className="text-sm">Qui verranno mostrati grafici e metriche dettagliate</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Bottom Info */}
        <div className="mt-8 sm:mt-12 bg-white/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 border-l-4 border-blue-500">
          <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">🏛️ Centro di Controllo Virtuosity</h3>
          <p className="text-gray-600 text-xs sm:text-sm">
            Virtuosity funge da collettore centrale per tutte le applicazioni smart del comune. 
            Monitora in tempo reale parking, illuminazione, rifiuti e riciclo per una gestione urbana più efficiente.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comuni;
