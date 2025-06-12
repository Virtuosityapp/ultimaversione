
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Car, Lightbulb, Trash2, Recycle, ArrowLeft, Activity, Wifi, AlertCircle, CheckCircle, Clock, Settings, MapPin, AlertTriangle, FileText, Gift, Plus, Edit, Trash, Euro, Users, Target, Award, TrendingUp, TrendingDown, Leaf, Droplets, Package } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import DppVerification from "@/components/DppVerification";

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("overview");

  // Dummy data for demonstration
  const citizenName = "Mario Rossi";
  const citizenPoints = 1250;
  const nextReward = "Sconto del 10% presso i negozi convenzionati";
  const lastActivity = "Raccolta differenziata: +50 punti";
  const reportsCount = 5;
  const completedReports = 3;

  const handleReportIssue = () => {
    toast({
      title: "Segnala un problema",
      description: "Funzionalità di segnalazione in arrivo!",
    });
  };

  const handleRedeemReward = () => {
    toast({
      title: "Riscatta premio",
      description: "Funzionalità di riscatto premi in arrivo!",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Torna alla Home
          </Button>
          <h1 className="text-3xl font-bold text-gray-800">Dashboard Cittadino</h1>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Panoramica</TabsTrigger>
            <TabsTrigger value="activity">Attività</TabsTrigger>
            <TabsTrigger value="rewards">Ricompense</TabsTrigger>
            <TabsTrigger value="reports">Segnalazioni</TabsTrigger>
            <TabsTrigger value="dpp">DPP</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Benvenuto, {citizenName}
                  </CardTitle>
                  <CardDescription>
                    Riepilogo del tuo account e delle tue attività
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Punti accumulati: {citizenPoints}</p>
                  <p>Prossimo premio: {nextReward}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5" />
                    Ultima Attività
                  </CardTitle>
                  <CardDescription>
                    Dettagli sulla tua ultima interazione
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{lastActivity}</p>
                </CardContent>
              </Card>
            </div>

            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Aggiornamento Importante</AlertTitle>
              <AlertDescription>
                Nuove funzionalità e miglioramenti sono stati aggiunti alla
                dashboard. Esplora le nuove sezioni!
              </AlertDescription>
            </Alert>
          </TabsContent>

          <TabsContent value="activity" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Andamento Attività
                </CardTitle>
                <CardDescription>
                  Visualizza il tuo storico attività e progressi
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Grafico delle attività e statistiche varie</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rewards" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gift className="h-5 w-5" />
                  Ricompense Disponibili
                </CardTitle>
                <CardDescription>
                  Sfrutta i tuoi punti per ottenere sconti e vantaggi esclusivi
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={handleRedeemReward}>
                  <Euro className="h-4 w-4 mr-2" />
                  Riscatta Premio
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Segnalazioni
                </CardTitle>
                <CardDescription>
                  Tieni traccia delle tue segnalazioni e del loro stato
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Segnalazioni inviate: {reportsCount}</p>
                <p>Segnalazioni completate: {completedReports}</p>
                <Button onClick={handleReportIssue}>
                  <Plus className="h-4 w-4 mr-2" />
                  Segnala un Problema
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="dpp" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  Digital Product Passport (DPP)
                </CardTitle>
                <CardDescription>
                  Gestisci e verifica i Digital Product Passport dei tuoi prodotti
                </CardDescription>
              </CardHeader>
              <CardContent>
                <DppVerification />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
