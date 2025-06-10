
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, Download, Calendar, TrendingUp, Award, MapPin, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Report = () => {
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
    },
    {
      id: 4,
      type: "bike",
      action: "Pedalata in bicicletta",
      distance: "8.7 km",
      co2Saved: "1.9 kg",
      points: 105,
      time: "30 min",
      timestamp: "2024-01-13T07:45:00",
      location: "Milano Navigli",
      source: "Strava"
    },
    {
      id: 5,
      type: "public_transport",
      action: "Trasporto pubblico",
      distance: "15.3 km",
      co2Saved: "2.8 kg",
      points: 160,
      time: "40 min",
      timestamp: "2024-01-12T17:30:00",
      location: "Milano - Bergamo",
      source: "ATM App"
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
    },
    {
      id: "CERT-003",
      title: "Green Mobility Champion",
      co2Saved: "22.1 kg",
      points: 1200,
      validatedAt: "2024-01-08",
      blockchainHash: "0x7g8h9i...",
      status: "verified"
    }
  ];

  const totalCO2Saved = activities.reduce((total, activity) => total + parseFloat(activity.co2Saved), 0);
  const totalPoints = activities.reduce((total, activity) => total + activity.points, 0);
  const totalCertifiedCO2 = certificates.reduce((total, cert) => total + parseFloat(cert.co2Saved), 0);
  const totalCertifiedPoints = certificates.reduce((total, cert) => total + cert.points, 0);

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('it-IT', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'bike': return '🚴';
      case 'public_transport': return '🚌';
      case 'walk': return '🚶';
      default: return '🌱';
    }
  };

  const handleDownloadReport = () => {
    // Simula il download del report
    const reportData = {
      generatedAt: new Date().toISOString(),
      period: "Gennaio 2024",
      summary: {
        totalActivities: activities.length,
        totalCO2Saved: totalCO2Saved.toFixed(1),
        totalPoints,
        totalCertificates: certificates.length,
        totalCertifiedCO2: totalCertifiedCO2.toFixed(1),
        totalCertifiedPoints
      },
      activities,
      certificates
    };

    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `virtuosity-report-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

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
                className="h-10 w-10 sm:h-16 sm:w-16 object-contain"
              />
              <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Report Virtuosity
              </h1>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Button 
                variant="outline" 
                onClick={handleDownloadReport}
                className="border-green-300 text-green-700 hover:bg-green-50 hover:border-green-400 hover:scale-105 transition-all duration-200 text-xs px-2 py-1.5 sm:text-sm sm:px-4 sm:py-2 active:scale-95"
              >
                <Download className="h-4 w-4 mr-2" />
                Scarica Report
              </Button>
              <Button 
                variant="outline" 
                onClick={() => navigate("/dashboard")}
                className="border-blue-300 text-blue-700 hover:bg-blue-50 hover:border-blue-400 hover:scale-105 transition-all duration-200 text-xs px-2 py-1.5 sm:text-sm sm:px-4 sm:py-2 active:scale-95"
              >
                Torna alla Dashboard
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-8">
        {/* Report Header */}
        <div className="mb-4 sm:mb-8 text-center">
          <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2 flex items-center justify-center gap-2">
            <FileText className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
            Report Attività Sostenibili
          </h2>
          <p className="text-gray-600 text-xs sm:text-base">
            Riepilogo completo delle tue attività e certificazioni - Periodo: Gennaio 2024
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-6 mb-4 sm:mb-8">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-green-400 to-emerald-500 text-white">
            <CardHeader className="pb-1 sm:pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium text-green-100">CO₂ Totale Risparmiata</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-lg sm:text-2xl font-bold">{totalCO2Saved.toFixed(1)} kg</div>
              <p className="text-xs text-green-100 hidden sm:block">{activities.length} attività</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-400 to-cyan-500 text-white">
            <CardHeader className="pb-1 sm:pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium text-blue-100">Punti Totali</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-lg sm:text-2xl font-bold">{totalPoints}</div>
              <p className="text-xs text-blue-100 hidden sm:block">Da attività</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-400 to-pink-500 text-white">
            <CardHeader className="pb-1 sm:pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium text-purple-100">CO₂ Certificata</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-lg sm:text-2xl font-bold">{totalCertifiedCO2.toFixed(1)} kg</div>
              <p className="text-xs text-purple-100 hidden sm:block">{certificates.length} certificati</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-400 to-red-500 text-white">
            <CardHeader className="pb-1 sm:pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium text-orange-100">Punti Certificati</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-lg sm:text-2xl font-bold">{totalCertifiedPoints}</div>
              <p className="text-xs text-orange-100 hidden sm:block">Blockchain verified</p>
            </CardContent>
          </Card>
        </div>

        {/* Activities Table */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base sm:text-xl">
              <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
              Dettaglio Attività
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Elenco completo di tutte le attività sostenibili registrate
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-xs">Tipo</TableHead>
                    <TableHead className="text-xs">Attività</TableHead>
                    <TableHead className="text-xs">Distanza</TableHead>
                    <TableHead className="text-xs">CO₂ Risp.</TableHead>
                    <TableHead className="text-xs">Punti</TableHead>
                    <TableHead className="text-xs">Data</TableHead>
                    <TableHead className="text-xs">Luogo</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {activities.map((activity) => (
                    <TableRow key={activity.id} className="hover:bg-green-50">
                      <TableCell className="text-center text-lg">{getActivityIcon(activity.type)}</TableCell>
                      <TableCell className="text-xs sm:text-sm font-medium">{activity.action}</TableCell>
                      <TableCell className="text-xs sm:text-sm">{activity.distance}</TableCell>
                      <TableCell className="text-xs sm:text-sm font-semibold text-green-600">{activity.co2Saved}</TableCell>
                      <TableCell className="text-xs sm:text-sm font-semibold text-blue-600">{activity.points}</TableCell>
                      <TableCell className="text-xs sm:text-sm">{formatDate(activity.timestamp)}</TableCell>
                      <TableCell className="text-xs sm:text-sm">{activity.location}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Certificates Table */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base sm:text-xl">
              <Award className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
              Certificati Blockchain
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Certificazioni digitali verificate e immutabili
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-xs">ID</TableHead>
                    <TableHead className="text-xs">Titolo</TableHead>
                    <TableHead className="text-xs">CO₂ Certificata</TableHead>
                    <TableHead className="text-xs">Punti</TableHead>
                    <TableHead className="text-xs">Data Validazione</TableHead>
                    <TableHead className="text-xs">Hash Blockchain</TableHead>
                    <TableHead className="text-xs">Stato</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {certificates.map((cert) => (
                    <TableRow key={cert.id} className="hover:bg-blue-50">
                      <TableCell className="text-xs sm:text-sm font-mono">{cert.id}</TableCell>
                      <TableCell className="text-xs sm:text-sm font-medium">{cert.title}</TableCell>
                      <TableCell className="text-xs sm:text-sm font-semibold text-green-600">{cert.co2Saved}</TableCell>
                      <TableCell className="text-xs sm:text-sm font-semibold text-blue-600">{cert.points}</TableCell>
                      <TableCell className="text-xs sm:text-sm">{cert.validatedAt}</TableCell>
                      <TableCell className="text-xs sm:text-sm font-mono">{cert.blockchainHash}</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800 text-xs">
                          Verificato
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Report;
