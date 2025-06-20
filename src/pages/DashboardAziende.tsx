
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { 
  Upload, 
  FileText, 
  BarChart3, 
  TrendingUp, 
  Award, 
  Shield, 
  DollarSign,
  Users,
  Package,
  Recycle,
  Eye,
  Download,
  Plus,
  Calendar,
  Activity
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const DashboardAziende = () => {
  const { t } = useLanguage();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const stats = [
    {
      title: "Prodotti Registrati",
      value: "2,847",
      change: "+12%",
      icon: Package,
      color: "text-blue-600"
    },
    {
      title: "Materiali Riciclati",
      value: "1,234 kg",
      change: "+8%",
      icon: Recycle,
      color: "text-green-600"
    },
    {
      title: "Score Circolarità",
      value: "87/100",
      change: "+5%",
      icon: Award,
      color: "text-purple-600"
    },
    {
      title: "Valore Generato",
      value: "€45,890",
      change: "+15%",
      icon: DollarSign,
      color: "text-orange-600"
    }
  ];

  const quickActions = [
    {
      title: "Caricamento Premi e Sconti",
      description: "Gestisci incentivi per i clienti",
      icon: Award,
      color: "bg-gradient-to-br from-green-500 to-green-600",
      hoverColor: "hover:from-green-600 hover:to-green-700"
    },
    {
      title: "Caricamento DPP",
      description: "Digital Product Passport",
      icon: Shield,
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      hoverColor: "hover:from-purple-600 hover:to-purple-700"
    },
    {
      title: "Report Bilancio",
      description: "Analisi finanziaria dettagliata",
      icon: BarChart3,
      color: "bg-gradient-to-br from-orange-500 to-orange-600",
      hoverColor: "hover:from-orange-600 hover:to-orange-700"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
              Dashboard Aziende
            </h1>
            <p className="text-slate-600 text-lg">
              Gestisci la tua presenza nell'economia circolare
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="px-3 py-1">
              <Calendar className="w-4 h-4 mr-1" />
              Ultimo aggiornamento: Oggi
            </Badge>
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg">
              <Plus className="w-4 h-4 mr-2" />
              Nuovo Progetto
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-slate-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-green-500" />
                      <span className="text-xs font-medium text-green-600">{stat.change}</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-xl bg-slate-50 ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions - Horizontal Layout */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Activity className="w-6 h-6 text-slate-700" />
            <h2 className="text-2xl font-bold text-slate-900">Azioni Rapide</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <Card key={index} className={`group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 shadow-lg overflow-hidden ${action.color} ${action.hoverColor}`}>
                <CardContent className="p-6 text-white">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                      <action.icon className="w-6 h-6" />
                    </div>
                    <Button 
                      size="sm" 
                      variant="secondary" 
                      className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm transition-all duration-200"
                    >
                      <Upload className="w-4 h-4 mr-1" />
                      Carica
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{action.title}</h3>
                    <p className="text-white/80 text-sm">{action.description}</p>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/70">Status: Attivo</span>
                      <Eye className="w-4 h-4 text-white/70" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* File Upload Section */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <CardTitle className="text-xl text-slate-900">Caricamento File</CardTitle>
                <CardDescription className="text-slate-600">
                  Carica documenti e report per la tua azienda
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center hover:border-blue-300 transition-colors duration-200 bg-slate-50/50">
              <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <div className="space-y-2">
                <p className="text-lg font-medium text-slate-700">
                  Trascina i file qui o clicca per selezionare
                </p>
                <p className="text-sm text-slate-500">
                  Supportati: PDF, DOC, XLS (max 10MB)
                </p>
              </div>
              <input
                type="file"
                onChange={handleFileUpload}
                className="hidden"
                accept=".pdf,.doc,.docx,.xls,.xlsx"
                id="file-upload"
              />
              <label htmlFor="file-upload">
                <Button className="mt-4 bg-blue-600 hover:bg-blue-700" asChild>
                  <span>Seleziona File</span>
                </Button>
              </label>
            </div>
            
            {selectedFile && (
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium text-green-800">{selectedFile.name}</p>
                    <p className="text-sm text-green-600">
                      {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                  <Upload className="w-4 h-4 mr-1" />
                  Carica
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Monitoring Charts Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BarChart3 className="w-6 h-6 text-slate-700" />
              <h2 className="text-2xl font-bold text-slate-900">Grafici di Monitoraggio</h2>
            </div>
            <Button variant="outline" className="border-slate-200 hover:bg-slate-50">
              <Download className="w-4 h-4 mr-2" />
              Esporta Report
            </Button>
          </div>

          <Tabs defaultValue="performance" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 bg-slate-100 p-1 rounded-xl">
              <TabsTrigger value="performance" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
                Performance
              </TabsTrigger>
              <TabsTrigger value="sustainability" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
                Sostenibilità
              </TabsTrigger>
              <TabsTrigger value="financial" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
                Finanziario
              </TabsTrigger>
            </TabsList>

            <TabsContent value="performance" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                      Trend Produzione
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 bg-gradient-to-br from-blue-50 to-slate-50 rounded-lg flex items-center justify-center">
                      <p className="text-slate-500">Grafico Trend Produzione</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-green-600" />
                      Engagement Clienti
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 bg-gradient-to-br from-green-50 to-slate-50 rounded-lg flex items-center justify-center">
                      <p className="text-slate-500">Grafico Engagement</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="sustainability" className="space-y-6">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Recycle className="w-5 h-5 text-green-600" />
                    Impatto Ambientale
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                        <Recycle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">CO₂ Ridotta</h3>
                      <p className="text-2xl font-bold text-green-600">2.4 t</p>
                      <Progress value={75} className="h-2" />
                    </div>
                    
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                        <Package className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">Materiali Recuperati</h3>
                      <p className="text-2xl font-bold text-blue-600">1.8 t</p>
                      <Progress value={60} className="h-2" />
                    </div>
                    
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                        <Award className="w-8 h-8 text-purple-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">Score Circolarità</h3>
                      <p className="text-2xl font-bold text-purple-600">87/100</p>
                      <Progress value={87} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="financial" className="space-y-6">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-orange-600" />
                    Performance Finanziaria
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gradient-to-br from-orange-50 to-slate-50 rounded-lg flex items-center justify-center">
                    <p className="text-slate-500">Grafico Performance Finanziaria</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default DashboardAziende;
