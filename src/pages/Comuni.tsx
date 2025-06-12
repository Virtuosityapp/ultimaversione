import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Car, Lightbulb, Trash2, Recycle, ArrowLeft, Activity, Wifi, AlertCircle, CheckCircle, Clock, Settings, MapPin, AlertTriangle, FileText, Gift, Plus, Edit, Trash, Euro, Users, Target, Award, TrendingUp, TrendingDown, Leaf, Droplets } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useRef, useState } from "react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer, AreaChart, Area } from "recharts";

const Comuni = () => {
  const navigate = useNavigate();
  const {
    toast
  } = useToast();
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);
  const [selectedReward, setSelectedReward] = useState<any>(null);
  const [showAddReward, setShowAddReward] = useState(false);

  // Mock data for charts
  const environmentalData = [
    { month: "Gen", co2: 120, energia: 85, acqua: 90 },
    { month: "Feb", co2: 115, energia: 82, acqua: 88 },
    { month: "Mar", co2: 108, energia: 78, acqua: 85 },
    { month: "Apr", co2: 102, energia: 75, acqua: 82 },
    { month: "Mag", co2: 98, energia: 73, acqua: 80 },
    { month: "Giu", co2: 95, energia: 70, acqua: 78 },
  ];

  const parkingData = [
    { zone: "Centro", occupati: 340, totali: 400 },
    { zone: "Nord", occupati: 280, totali: 350 },
    { zone: "Sud", occupati: 220, totali: 300 },
    { zone: "Est", occupati: 190, totali: 250 },
    { zone: "Ovest", occupati: 160, totali: 200 },
  ];

  const waterSavingData = [
    { ora: "06:00", risparmio: 15 },
    { ora: "08:00", risparmio: 25 },
    { ora: "10:00", risparmio: 35 },
    { ora: "12:00", risparmio: 45 },
    { ora: "14:00", risparmio: 40 },
    { ora: "16:00", risparmio: 30 },
    { ora: "18:00", risparmio: 20 },
    { ora: "20:00", risparmio: 18 },
  ];

  const lightingData = [
    { name: "Funzionanti", value: 1245, color: "#10B981" },
    { name: "Guasti", value: 23, color: "#EF4444" },
    { name: "Manutenzione", value: 12, color: "#F59E0B" },
  ];

  const wasteData = [
    { giorno: "Lun", raccolto: 450, riciclato: 320 },
    { giorno: "Mar", raccolto: 420, riciclato: 295 },
    { giorno: "Mer", raccolto: 480, riciclato: 340 },
    { giorno: "Gio", raccolto: 460, riciclato: 330 },
    { giorno: "Ven", raccolto: 510, riciclato: 380 },
    { giorno: "Sab", raccolto: 380, riciclato: 270 },
    { giorno: "Dom", raccolto: 320, riciclato: 240 },
  ];

  // Mock data for rewards/incentives
  const communityRewards = [{
    id: 1,
    title: "Sconto Trasporto Pubblico",
    description: "Riduzione del 20% sugli abbonamenti mensili per autobus e metro",
    category: "transport",
    certificatesRequired: 50,
    value: "€15",
    maxUsers: 500,
    currentUsers: 127,
    status: "active",
    icon: Car,
    validUntil: "31/12/2024"
  }, {
    id: 2,
    title: "Parcheggio Gratuito Centro",
    description: "2 ore di parcheggio gratuito nelle zone blu del centro storico",
    category: "parking",
    certificatesRequired: 30,
    value: "€3/uso",
    maxUsers: 200,
    currentUsers: 89,
    status: "active",
    icon: Car,
    validUntil: "30/06/2025"
  }, {
    id: 3,
    title: "Tariffa Agevolata Rifiuti",
    description: "Sconto del 15% sulla TARI per famiglie virtuose",
    category: "waste",
    certificatesRequired: 100,
    value: "€80",
    maxUsers: 1000,
    currentUsers: 234,
    status: "active",
    icon: Trash2,
    validUntil: "31/12/2024"
  }, {
    id: 4,
    title: "Accesso Prioritario Servizi",
    description: "Accesso prioritario agli sportelli comunali e prenotazioni online",
    category: "services",
    certificatesRequired: 75,
    value: "Tempo",
    maxUsers: 300,
    currentUsers: 156,
    status: "active",
    icon: Users,
    validUntil: "31/12/2025"
  }, {
    id: 5,
    title: "Kit Energia Sostenibile",
    description: "Kit gratuito con lampadine LED e dispositivi per il risparmio energetico",
    category: "energy",
    certificatesRequired: 80,
    value: "€45",
    maxUsers: 150,
    currentUsers: 67,
    status: "draft",
    icon: Lightbulb,
    validUntil: "30/09/2024"
  }];

  // Mock data for map alerts and resolved issues
  const mapAlerts = [{
    id: 1,
    type: "alert",
    title: "Contenitore rifiuti pieno",
    location: "Via Roma 45",
    coords: [9.1900, 45.4642] as [number, number],
    severity: "high",
    timestamp: "10 min fa"
  }, {
    id: 2,
    type: "alert",
    title: "Lampione non funzionante",
    location: "Piazza Duomo",
    coords: [9.1916, 45.4640] as [number, number],
    severity: "medium",
    timestamp: "25 min fa"
  }, {
    id: 3,
    type: "resolved",
    title: "Parcheggio riparato",
    location: "Via Brera 12",
    coords: [9.1885, 45.4720] as [number, number],
    timestamp: "2 ore fa"
  }, {
    id: 4,
    type: "resolved",
    title: "Illuminazione ripristinata",
    location: "Corso Buenos Aires",
    coords: [9.2050, 45.4780] as [number, number],
    timestamp: "4 ore fa"
  }];
  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    // Initialize map with a placeholder (users should add their Mapbox token)
    const initializeMap = async () => {
      try {
        const mapboxgl = await import('mapbox-gl');

        // Placeholder token - users need to replace with their own
        mapboxgl.default.accessToken = 'pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJjbGV4YW1wbGUifQ.example';
        map.current = new mapboxgl.default.Map({
          container: mapContainer.current!,
          style: 'mapbox://styles/mapbox/light-v11',
          center: [9.1900, 45.4642],
          // Milan coordinates
          zoom: 13
        });

        // Add navigation controls
        map.current.addControl(new mapboxgl.default.NavigationControl(), 'top-right');

        // Add markers for alerts and resolved issues
        mapAlerts.forEach(item => {
          const el = document.createElement('div');
          el.className = `w-6 h-6 rounded-full border-2 border-white shadow-lg cursor-pointer ${
            item.type === 'alert' 
              ? item.severity === 'high' ? 'bg-red-500' : 'bg-orange-500' 
              : 'bg-green-500'
          }`;
          const popup = new mapboxgl.default.Popup({
            offset: 25
          }).setHTML(`
              <div class="p-2">
                <h3 class="font-bold text-sm">${item.title}</h3>
                <p class="text-xs text-gray-600">${item.location}</p>
                <p class="text-xs text-gray-500">${item.timestamp}</p>
              </div>
            `);
          new mapboxgl.default.Marker(el)
            .setLngLat(item.coords)
            .setPopup(popup)
            .addTo(map.current);
        });
      } catch (error) {
        console.error('Error initializing map:', error);
      }
    };
    initializeMap();
    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, []);
  const integrations = [{
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
  }, {
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
  }, {
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
  }, {
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
  }];
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800"><CheckCircle className="w-3 h-3 mr-1" />Attivo</Badge>;
      case "warning":
        return <Badge className="bg-orange-100 text-orange-800"><AlertCircle className="w-3 h-3 mr-1" />Attenzione</Badge>;
      case "inactive":
        return <Badge className="bg-gray-100 text-gray-800"><Clock className="w-3 h-3 mr-1" />Inattivo</Badge>;
      case "draft":
        return <Badge className="bg-blue-100 text-blue-800"><Edit className="w-3 h-3 mr-1" />Bozza</Badge>;
      default:
        return <Badge variant="secondary">Sconosciuto</Badge>;
    }
  };
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "transport":
        return "bg-blue-100 text-blue-800";
      case "parking":
        return "bg-purple-100 text-purple-800";
      case "waste":
        return "bg-green-100 text-green-800";
      case "services":
        return "bg-orange-100 text-orange-800";
      case "energy":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  const handleManageIntegration = (integration: any) => {
    toast({
      title: "Gestione Integrazione",
      description: `Apertura pannello di controllo per ${integration.name}`
    });
  };
  const handleEditReward = (reward: any) => {
    setSelectedReward(reward);
    toast({
      title: "Modifica Incentivo",
      description: `Modifica di ${reward.title}`
    });
  };
  const handleDeleteReward = (rewardId: number) => {
    toast({
      title: "Incentivo Eliminato",
      description: "L'incentivo è stato rimosso con successo"
    });
  };
  const totalDataPoints = integrations.reduce((sum, int) => sum + int.dataPoints, 0);
  const activeIntegrations = integrations.filter(int => int.status === "active").length;
  const totalRewards = communityRewards.length;
  const activeRewards = communityRewards.filter(r => r.status === "active").length;
  return <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50">
      {/* Header - Improved mobile spacing */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Button variant="ghost" onClick={() => navigate("/dashboard")} className="mr-1 sm:mr-2 p-2 sm:p-3 min-h-[44px] min-w-[44px]" size="sm">
                <ArrowLeft className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Dashboard</span>
              </Button>
              <img src="/lovable-uploads/5930bd4d-6869-4b7d-8020-e58372708f8a.png" alt="Virtuosity Logo" className="relative h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 object-contain" />
              <h1 className="text-sm sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Dashboard Comuni
              </h1>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Button variant="outline" onClick={() => navigate("/report")} className="border-green-300 text-green-700 hover:bg-green-50 hover:border-green-400 hover:scale-105 transition-all duration-200 text-xs px-2 py-2 sm:text-sm sm:px-4 active:scale-95 min-h-[44px]">
                <FileText className="h-4 w-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Genera Report</span>
                <span className="sm:hidden">Report</span>
              </Button>
              <div className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white px-2 sm:px-4 py-2 sm:py-2 rounded-full font-bold text-xs sm:text-base min-h-[36px] flex items-center">
                <Activity className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                {totalDataPoints}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Welcome Section - Better mobile spacing */}
        <div className="mb-6 sm:mb-8 text-center px-2">
          <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-2">Centro di Controllo Integrazioni 🏛️</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Monitora tutte le integrazioni del comune con Virtuosity. Controlla lo stato dei servizi smart della città.
          </p>
        </div>

        {/* Overview Cards - Better mobile grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-400 to-indigo-500 text-white">
            <CardHeader className="pb-2 p-3 sm:p-6">
              <CardTitle className="text-xs sm:text-sm font-medium text-blue-100">Integrazioni Attive</CardTitle>
            </CardHeader>
            <CardContent className="p-3 sm:p-6 pt-0">
              <div className="text-lg sm:text-2xl font-bold">{activeIntegrations}</div>
              <p className="text-xs text-blue-100">di {integrations.length} totali</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-green-400 to-emerald-500 text-white">
            <CardHeader className="pb-2 p-3 sm:p-6">
              <CardTitle className="text-xs sm:text-sm font-medium text-green-100">Punti Dati</CardTitle>
            </CardHeader>
            <CardContent className="p-3 sm:p-6 pt-0">
              <div className="text-lg sm:text-2xl font-bold">{totalDataPoints.toLocaleString()}</div>
              <p className="text-xs text-green-100">Oggi</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-400 to-pink-500 text-white">
            <CardHeader className="pb-2 p-3 sm:p-6">
              <CardTitle className="text-xs sm:text-sm font-medium text-purple-100">Incentivi Attivi</CardTitle>
            </CardHeader>
            <CardContent className="p-3 sm:p-6 pt-0">
              <div className="text-lg sm:text-2xl font-bold">{activeRewards}</div>
              <p className="text-xs text-purple-100">di {totalRewards} totali</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-400 to-red-500 text-white">
            <CardHeader className="pb-2 p-3 sm:p-6">
              <CardTitle className="text-xs sm:text-sm font-medium text-orange-100">Segnalazioni Cittadini</CardTitle>
            </CardHeader>
            <CardContent className="p-3 sm:p-6 pt-0">
              <div className="text-lg sm:text-2xl font-bold">2</div>
              <p className="text-xs text-orange-100">Richiedono attenzione</p>
            </CardContent>
          </Card>
        </div>
        
        {/* Dashboard Monitoring Section */}
        <div className="mb-8 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Dashboard di Monitoraggio 📊</h2>
            <Badge className="bg-blue-100 text-blue-800 py-1.5">
              <Activity className="w-3 h-3 mr-1" />
              <span>Aggiornamento ogni 5 minuti</span>
            </Badge>
          </div>
          
          {/* Map and Environmental Impact */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            <Card className="lg:col-span-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center text-lg">
                  <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                  Mappa Città
                </CardTitle>
                <CardDescription>
                  Visualizzazione in tempo reale di sensori e infrastrutture
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="h-64 sm:h-80 w-full rounded-lg overflow-hidden bg-gray-50">
                  <div ref={mapContainer} className="h-full w-full" />
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm">
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Sensori attivi</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span>Problemi critici</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span>Anomalie</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center text-lg">
                  <Leaf className="h-5 w-5 mr-2 text-green-600" />
                  Impatto Ambientale
                </CardTitle>
                <CardDescription>
                  Trend mensile di sostenibilità
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="h-64 w-full">
                  <ChartContainer
                    config={{
                      co2: {
                        label: "CO2 (ton)",
                        theme: { light: "#EF4444", dark: "#EF4444" }
                      },
                      energia: { 
                        label: "Energia (MWh)",
                        theme: { light: "#F59E0B", dark: "#F59E0B" }
                      },
                      acqua: {
                        label: "Acqua (m³x100)",
                        theme: { light: "#3B82F6", dark: "#3B82F6" }
                      }
                    }}
                  >
                    <LineChart data={environmentalData}>
                      <XAxis dataKey="month" />
                      <YAxis />
                      <CartesianGrid strokeDasharray="3 3" />
                      <ChartTooltip 
                        content={<ChartTooltipContent />}
                      />
                      <Line
                        type="monotone"
                        dataKey="co2"
                        stroke="var(--color-co2, #EF4444)"
                        strokeWidth={2}
                        dot={true}
                      />
                      <Line
                        type="monotone"
                        dataKey="energia"
                        stroke="var(--color-energia, #F59E0B)"
                        strokeWidth={2}
                        dot={true}
                      />
                      <Line
                        type="monotone"
                        dataKey="acqua"
                        stroke="var(--color-acqua, #3B82F6)"
                        strokeWidth={2}
                        dot={true}
                      />
                    </LineChart>
                  </ChartContainer>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                  <div className="bg-red-50 p-1.5 rounded">
                    <div className="text-red-600 font-bold text-sm sm:text-base flex items-center justify-center">
                      <TrendingDown className="h-3 w-3 mr-1" />-12%
                    </div>
                    <div className="text-xs text-gray-600">CO2</div>
                  </div>
                  <div className="bg-amber-50 p-1.5 rounded">
                    <div className="text-amber-600 font-bold text-sm sm:text-base flex items-center justify-center">
                      <TrendingDown className="h-3 w-3 mr-1" />-9%
                    </div>
                    <div className="text-xs text-gray-600">Energia</div>
                  </div>
                  <div className="bg-blue-50 p-1.5 rounded">
                    <div className="text-blue-600 font-bold text-sm sm:text-base flex items-center justify-center">
                      <TrendingDown className="h-3 w-3 mr-1" />-5%
                    </div>
                    <div className="text-xs text-gray-600">Acqua</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Water Saving, Parking, Lighting, and Waste/Recycling */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Water Saving Monitoring */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="p-3 sm:p-4">
                <CardTitle className="flex items-center text-base sm:text-lg">
                  <Droplets className="h-5 w-5 mr-2 text-blue-600" />
                  Risparmio Acqua
                </CardTitle>
                <CardDescription className="text-xs">
                  Percentuale risparmio - Oggi
                </CardDescription>
              </CardHeader>
              <CardContent className="p-3 sm:p-4 pt-0">
                <div className="h-36 sm:h-44 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={waterSavingData}>
                      <defs>
                        <linearGradient id="waterGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="ora" tick={{ fontSize: 10 }} />
                      <YAxis tick={{ fontSize: 10 }} />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Area
                        type="monotone"
                        dataKey="risparmio"
                        stroke="#3B82F6"
                        fill="url(#waterGradient)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-2 flex justify-between items-center text-xs sm:text-sm">
                  <div>Picco: <span className="font-bold">12:00</span></div>
                  <Badge className="bg-blue-100 text-blue-700">+8% vs ieri</Badge>
                </div>
              </CardContent>
            </Card>
            
            {/* Parking Monitoring */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="p-3 sm:p-4">
                <CardTitle className="flex items-center text-base sm:text-lg">
                  <Car className="h-5 w-5 mr-2 text-blue-600" />
                  Parcheggi
                </CardTitle>
                <CardDescription className="text-xs">
                  Occupazione per zone
                </CardDescription>
              </CardHeader>
              <CardContent className="p-3 sm:p-4 pt-0">
                <div className="h-36 sm:h-44 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={parkingData}>
                      <XAxis dataKey="zone" tick={{ fontSize: 10 }} />
                      <YAxis tick={{ fontSize: 10 }} />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Bar dataKey="occupati" stackId="a" fill="#3B82F6">
                        {parkingData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill="#3B82F6" />
                        ))}
                      </Bar>
                      <Bar dataKey="totali" stackId="a" fill="#E5E7EB">
                        {parkingData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill="#E5E7EB" />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-2 flex justify-between items-center text-xs sm:text-sm">
                  <div><span className="font-bold">75%</span> occupazione media</div>
                  <Badge className="bg-blue-100 text-blue-700">298 disponibili</Badge>
                </div>
              </CardContent>
            </Card>
            
            {/* Lighting Monitoring */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="p-3 sm:p-4">
                <CardTitle className="flex items-center text-base sm:text-lg">
                  <Lightbulb className="h-5 w-5 mr-2 text-yellow-600" />
                  Illuminazione
                </CardTitle>
                <CardDescription className="text-xs">
                  Stato lampioni pubblici
                </CardDescription>
              </CardHeader>
              <CardContent className="p-3 sm:p-4 pt-0">
                <div className="h-36 sm:h-44 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={lightingData}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={60}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        labelLine={false}
                      >
                        {lightingData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-2 grid grid-cols-3 gap-1 text-center text-xs sm:text-sm">
                  <div className="bg-green-50 p-1.5 rounded">
                    <div className="text-green-600 font-bold">1245</div>
                    <div className="text-xs text-gray-600">Attivi</div>
                  </div>
                  <div className="bg-red-50 p-1.5 rounded">
                    <div className="text-red-600 font-bold">23</div>
                    <div className="text-xs text-gray-600">Guasti</div>
                  </div>
                  <div className="bg-amber-50 p-1.5 rounded">
                    <div className="text-amber-600 font-bold">12</div>
                    <div className="text-xs text-gray-600">In manutenzione</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Waste and Recycling */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="p-3 sm:p-4">
                <CardTitle className="flex items-center text-base sm:text-lg">
                  <Recycle className="h-5 w-5 mr-2 text-green-600" />
                  Rifiuti e Riciclo
                </CardTitle>
                <CardDescription className="text-xs">
                  Raccolta settimanale (kg)
                </CardDescription>
              </CardHeader>
              <CardContent className="p-3 sm:p-4 pt-0">
                <div className="h-36 sm:h-44 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={wasteData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="giorno" tick={{ fontSize: 10 }} />
                      <YAxis tick={{ fontSize: 10 }} />
                      <Bar dataKey="raccolto" fill="#94A3B8" name="Totale raccolto">
                        {wasteData.map((entry, index) => (
                          <Cell key={`cell-raccolto-${index}`} fill="#94A3B8" />
                        ))}
                      </Bar>
                      <Bar dataKey="riciclato" fill="#10B981" name="Riciclato">
                        {wasteData.map((entry, index) => (
                          <Cell key={`cell-riciclato-${index}`} fill="#10B981" />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-2 flex justify-between items-center text-xs sm:text-sm">
                  <div><span className="font-bold text-green-600">72%</span> tasso di riciclo</div>
                  <Badge className="bg-green-100 text-green-700">+3% vs settimana scorsa</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-6 sm:space-y-8">
          {/* Navigation tabs now at the bottom */}
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 bg-white/80 backdrop-blur-sm shadow-md p-1 gap-1 sm:gap-0 sticky bottom-0 z-40">
            <TabsTrigger value="overview" className="px-1 py-3 sm:px-4 text-xs sm:text-sm hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100 hover:text-blue-700 active:scale-95 transition-all duration-200 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-400 data-[state=active]:to-indigo-500 data-[state=active]:text-white data-[state=active]:shadow-lg min-h-[44px]">
              Panoramica
            </TabsTrigger>
            <TabsTrigger value="integrations" className="px-1 py-3 sm:px-4 text-xs sm:text-sm hover:bg-gradient-to-r hover:from-green-100 hover:to-emerald-100 hover:text-green-700 active:scale-95 transition-all duration-200 data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-400 data-[state=active]:to-emerald-500 data-[state=active]:text-white data-[state=active]:shadow-lg min-h-[44px]">
              Integrazioni
            </TabsTrigger>
            <TabsTrigger value="rewards" className="px-1 py-3 sm:px-4 text-xs sm:text-sm hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 hover:text-purple-700 active:scale-95 transition-all duration-200 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-400 data-[state=active]:to-pink-500 data-[state=active]:text-white data-[state=active]:shadow-lg min-h-[44px]">
              Incentivi
            </TabsTrigger>
            <TabsTrigger value="map" className="px-1 py-3 sm:px-4 text-xs sm:text-sm hover:bg-gradient-to-r hover:from-cyan-100 hover:to-blue-100 hover:text-cyan-700 active:scale-95 transition-all duration-200 data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-400 data-[state=active]:to-blue-500 data-[state=active]:text-white data-[state=active]:shadow-lg min-h-[44px]">
              Mappa
            </TabsTrigger>
          </TabsList>

          <div className="mt-6 sm:mt-8">
            <TabsContent value="overview" className="space-y-4 sm:space-y-6 mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {integrations.map(integration => {
                const IconComponent = integration.icon;
                return <Card key={integration.id} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                      <CardHeader className="pb-3 p-4 sm:p-6">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-lg ${integration.color}`}>
                              <IconComponent className="h-5 w-5" />
                            </div>
                            <div>
                              <CardTitle className="text-sm sm:text-lg">{integration.name}</CardTitle>
                              <CardDescription className="text-xs sm:text-sm">{integration.description}</CardDescription>
                            </div>
                          </div>
                          {getStatusBadge(integration.status)}
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 sm:p-6 pt-0">
                        <div className="space-y-3 sm:space-y-4">
                          <div className="flex justify-between items-center text-xs sm:text-sm">
                            <span className="text-gray-600">Ultimo aggiornamento:</span>
                            <span className="font-medium">{integration.lastSync}</span>
                          </div>
                          
                          <div className="flex justify-between items-center text-xs sm:text-sm">
                            <span className="text-gray-600">Punti dati:</span>
                            <span className="font-medium">{integration.dataPoints}</span>
                          </div>
                          
                          <div className="grid grid-cols-3 gap-2 text-xs">
                            {Object.entries(integration.metrics).map(([key, value]) => <div key={key} className="text-center p-2 bg-gray-50 rounded">
                                <div className="font-bold text-gray-900 text-xs sm:text-sm">{value}</div>
                                <div className="text-gray-600 capitalize text-xs">{key}</div>
                              </div>)}
                          </div>
                          
                          <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 text-sm min-h-[44px]" onClick={() => handleManageIntegration(integration)} size="sm">
                            <Settings className="h-4 w-4 mr-2" />
                            Gestisci
                          </Button>
                        </div>
                      </CardContent>
                    </Card>;
              })}
              </div>
            </TabsContent>

            <TabsContent value="integrations" className="space-y-4 sm:space-y-6 mt-0">
              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                {integrations.map(integration => {
                const IconComponent = integration.icon;
                return <Card key={integration.id} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3 sm:space-x-4">
                            <div className={`p-3 rounded-lg ${integration.color}`}>
                              <IconComponent className="h-5 w-5 sm:h-6 sm:w-6" />
                            </div>
                            <div>
                              <h3 className="font-bold text-sm sm:text-lg">{integration.name}</h3>
                              <p className="text-gray-600 text-xs sm:text-sm">{integration.description}</p>
                              <div className="flex items-center space-x-2 sm:space-x-4 mt-2 text-xs text-gray-500">
                                <span>🔄 {integration.lastSync}</span>
                                <span>📊 {integration.dataPoints} punti dati</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 sm:space-x-3">
                            {getStatusBadge(integration.status)}
                            <Button variant="outline" size="sm" className="min-h-[40px] min-w-[40px]">
                              <Wifi className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>;
              })}
              </div>
            </TabsContent>

            <TabsContent value="rewards" className="space-y-4 sm:space-y-6 mt-0">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-3 sm:space-y-0">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">Gestione Incentivi Cittadini 🎁</h3>
                  <p className="text-gray-600 text-sm">Configura i servizi e vantaggi offerti in cambio di certificati ambientali</p>
                </div>
                <Button onClick={() => setShowAddReward(true)} className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 w-full sm:w-auto min-h-[44px]">
                  <Plus className="h-4 w-4 mr-2" />
                  Nuovo Incentivo
                </Button>
              </div>

              {/* Rewards Stats - Better mobile grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
                <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-400 to-pink-500 text-white">
                  <CardContent className="p-3 sm:p-4">
                    <div className="flex items-center space-x-2">
                      <Gift className="h-4 w-4 sm:h-5 sm:w-5" />
                      <div>
                        <div className="text-lg sm:text-2xl font-bold">{totalRewards}</div>
                        <div className="text-xs text-purple-100">Incentivi Totali</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-lg bg-gradient-to-br from-green-400 to-emerald-500 text-white">
                  <CardContent className="p-3 sm:p-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                      <div>
                        <div className="text-lg sm:text-2xl font-bold">{activeRewards}</div>
                        <div className="text-xs text-green-100">Attivi</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-400 to-cyan-500 text-white">
                  <CardContent className="p-3 sm:p-4">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 sm:h-5 sm:w-5" />
                      <div>
                        <div className="text-lg sm:text-2xl font-bold">{communityRewards.reduce((sum, r) => sum + r.currentUsers, 0)}</div>
                        <div className="text-xs text-blue-100">Utenti Coinvolti</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-400 to-red-500 text-white">
                  <CardContent className="p-3 sm:p-4">
                    <div className="flex items-center space-x-2">
                      <Award className="h-4 w-4 sm:h-5 sm:w-5" />
                      <div>
                        <div className="text-lg sm:text-2xl font-bold">{communityRewards.reduce((sum, r) => sum + r.certificatesRequired, 0)}</div>
                        <div className="text-xs text-orange-100">Certificati Target</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Rewards List - Better mobile layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {communityRewards.map(reward => {
                const IconComponent = reward.icon;
                const usagePercentage = reward.currentUsers / reward.maxUsers * 100;
                return <Card key={reward.id} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                      <CardHeader className="pb-3 p-4 sm:p-6">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-lg ${getCategoryColor(reward.category)}`}>
                              <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />
                            </div>
                            <div>
                              <CardTitle className="text-sm sm:text-lg">{reward.title}</CardTitle>
                              <CardDescription className="text-xs sm:text-sm">{reward.description}</CardDescription>
                            </div>
                          </div>
                          {getStatusBadge(reward.status)}
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 sm:p-6 pt-0">
                        <div className="space-y-4">
                          {/* Requirement and Value - Mobile optimized */}
                          <div className="grid grid-cols-2 gap-3 sm:gap-4 text-sm">
                            <div className="flex items-center space-x-2">
                              <Target className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />
                              <div>
                                <div className="font-medium text-xs sm:text-sm">{reward.certificatesRequired} certificati</div>
                                <div className="text-gray-500 text-xs">Richiesti</div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Euro className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                              <div>
                                <div className="font-medium text-xs sm:text-sm">{reward.value}</div>
                                <div className="text-gray-500 text-xs">Valore</div>
                              </div>
                            </div>
                          </div>

                          {/* Usage Progress */}
                          <div>
                            <div className="flex justify-between text-xs sm:text-sm mb-1">
                              <span className="text-gray-600">Utilizzo</span>
                              <span className="font-medium">{reward.currentUsers}/{reward.maxUsers}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full transition-all duration-300" style={{
                            width: `${Math.min(usagePercentage, 100)}%`
                          }}></div>
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              {usagePercentage.toFixed(1)}% utilizzato
                            </div>
                          </div>

                          {/* Validity */}
                          <div className="text-xs text-gray-500">
                            <span>Valido fino al: </span>
                            <span className="font-medium">{reward.validUntil}</span>
                          </div>

                          {/* Actions - Better mobile buttons */}
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm" className="flex-1 min-h-[40px]" onClick={() => handleEditReward(reward)}>
                              <Edit className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                              <span className="text-xs sm:text-sm">Modifica</span>
                            </Button>
                            <Button variant="outline" size="sm" className="text-red-600 border-red-300 hover:bg-red-50 min-h-[40px] min-w-[40px]" onClick={() => handleDeleteReward(reward.id)}>
                              <Trash className="h-3 w-3 sm:h-4 sm:w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>;
              })}
              </div>

              {/* Add New Reward Form - Better mobile layout */}
              {showAddReward && <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm border-purple-200">
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="flex items-center space-x-2">
                      <Plus className="h-5 w-5 text-purple-600" />
                      <span>Crea Nuovo Incentivo</span>
                    </CardTitle>
                    <CardDescription>
                      Configura un nuovo servizio o vantaggio da offrire ai cittadini
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 p-4 sm:p-6 pt-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="title">Titolo Incentivo</Label>
                        <Input id="title" placeholder="es. Sconto Trasporto Pubblico" className="min-h-[44px]" />
                      </div>
                      <div>
                        <Label htmlFor="category">Categoria</Label>
                        <Input id="category" placeholder="transport, parking, waste..." className="min-h-[44px]" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="description">Descrizione</Label>
                      <Input id="description" placeholder="Descrizione dettagliata del vantaggio offerto" className="min-h-[44px]" />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="certificates">Certificati Richiesti</Label>
                        <Input id="certificates" type="number" placeholder="50" className="min-h-[44px]" />
                      </div>
                      <div>
                        <Label htmlFor="value">Valore</Label>
                        <Input id="value" placeholder="€15" className="min-h-[44px]" />
                      </div>
                      <div>
                        <Label htmlFor="maxUsers">Utenti Max</Label>
                        <Input id="maxUsers" type="number" placeholder="500" className="min-h-[44px]" />
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                      <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 flex-1 min-h-[44px]" onClick={() => {
                    toast({
                      title: "Incentivo Creato",
                      description: "Il nuovo incentivo è stato aggiunto con successo"
                    });
                    setShowAddReward(false);
                  }}>
                        Crea Incentivo
                      </Button>
                      <Button variant="outline" onClick={() => setShowAddReward(false)} className="min-h-[44px]">
                        Annulla
                      </Button>
                    </div>
                  </CardContent>
                </Card>}
            </TabsContent>

            <TabsContent value="map" className="space-y-4 sm:space-y-6 mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                {/* Map */}
                <Card className="lg:col-span-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5" />
                      <span>Mappa del Comune</span>
                    </CardTitle>
                    <CardDescription>
                      Visualizzazione in tempo reale di allerte e problemi risolti
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="h-64 sm:h-96 w-full rounded-lg overflow-hidden">
                      <div ref={mapContainer} className="h-full w-full" />
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm">
                      <div className="flex items-center space-x-1">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span>Allerte critiche</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                        <span>Allerte moderate</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span>Problemi risolti</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Alerts and Issues Panel */}
                <div className="space-y-4">
                  {/* Active Alerts */}
                  <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                    <CardHeader className="pb-3 p-4 sm:p-6">
                      <CardTitle className="text-sm sm:text-lg flex items-center space-x-2">
                        <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
                        <span>Segnalazioni Cittadini</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 p-4 sm:p-6 pt-0">
                      {mapAlerts.filter(alert => alert.type === "alert").map(alert => <Alert key={alert.id} className={`border-l-4 ${alert.severity === "high" ? "border-red-500" : "border-orange-500"}`}>
                          <AlertCircle className="h-4 w-4" />
                          <AlertTitle className="text-xs sm:text-sm">{alert.title}</AlertTitle>
                          <AlertDescription className="text-xs text-gray-600">
                            {alert.location} • {alert.timestamp}
                          </AlertDescription>
                        </Alert>)}
                    </CardContent>
                  </Card>

                  {/* Resolved Issues */}
                  <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                    <CardHeader className="pb-3 p-4 sm:p-6">
                      <CardTitle className="text-sm sm:text-lg flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                        <span>Risolti di Recente</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 p-4 sm:p-6 pt-0">
                      {mapAlerts.filter(alert => alert.type === "resolved").map(issue => <div key={issue.id} className="p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-xs sm:text-sm font-medium">{issue.title}</span>
                          </div>
                          <p className="text-xs text-gray-600 mt-1">
                            {issue.location} • {issue.timestamp}
                          </p>
                        </div>)}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>

        {/* Bottom Info - Better mobile spacing */}
        <div className="mt-8 sm:mt-12 bg-white/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 border-l-4 border-blue-500">
          <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">🏛️ Centro di Controllo Virtuosity</h3>
          <p className="text-gray-600 text-xs sm:text-sm">
            Virtuosity funge da collettore centrale per tutte le applicazioni smart del comune. 
            Monitora in tempo reale parking, illuminazione, rifiuti e riciclo per una gestione urbana più efficiente.
          </p>
        </div>
      </div>
    </div>;
};
export default Comuni;
