
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileText, BarChart3, Gift, Building2, Users } from "lucide-react";

const DashboardAziende = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Dashboard Aziende
        </h1>
        
        {/* Statistiche generali */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Dipendenti Registrati
              </CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">1,234</div>
              <p className="text-xs text-gray-500">+12% rispetto al mese scorso</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Certificati Validati
              </CardTitle>
              <FileText className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">856</div>
              <p className="text-xs text-gray-500">+8% rispetto al mese scorso</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Premi Distribuiti
              </CardTitle>
              <Gift className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">342</div>
              <p className="text-xs text-gray-500">+15% rispetto al mese scorso</p>
            </CardContent>
          </Card>
        </div>

        {/* Tre blocchi colorati posizionati orizzontalmente */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Blocco Caricamento Premi e Sconti */}
          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Gift className="h-6 w-6" />
                Caricamento Premi e Sconti
              </CardTitle>
              <CardDescription className="text-green-100">
                Gestisci premi e sconti per i dipendenti
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-green-100">
                Carica e gestisci i premi e gli sconti disponibili per i tuoi dipendenti in base ai loro certificati di sostenibilità.
              </p>
              <Button 
                variant="secondary" 
                className="w-full bg-white text-green-600 hover:bg-green-50"
              >
                <Upload className="mr-2 h-4 w-4" />
                Carica Premi
              </Button>
            </CardContent>
          </Card>

          {/* Blocco Caricamento DPP Aziendali */}
          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Building2 className="h-6 w-6" />
                Caricamento DPP Aziendali
              </CardTitle>
              <CardDescription className="text-purple-100">
                Gestisci i Passaporti Digitali dei Prodotti
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-purple-100">
                Carica e gestisci i DPP dei tuoi prodotti per garantire trasparenza e tracciabilità nella catena di fornitura.
              </p>
              <Button 
                variant="secondary" 
                className="w-full bg-white text-purple-600 hover:bg-purple-50"
              >
                <Upload className="mr-2 h-4 w-4" />
                Carica DPP
              </Button>
            </CardContent>
          </Card>

          {/* Blocco Report Bilancio */}
          <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <BarChart3 className="h-6 w-6" />
                Report Bilancio
              </CardTitle>
              <CardDescription className="text-orange-100">
                Analisi delle performance aziendali
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-orange-100">
                Visualizza report dettagliati sul bilancio di sostenibilità e le performance ambientali della tua azienda.
              </p>
              <Button 
                variant="secondary" 
                className="w-full bg-white text-orange-600 hover:bg-orange-50"
              >
                <BarChart3 className="mr-2 h-4 w-4" />
                Visualizza Report
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Sezione Azioni Rapide */}
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-800">
              Azioni Rapide
            </CardTitle>
            <CardDescription>
              Accesso veloce alle funzioni principali
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-16 flex flex-col gap-2">
                <Users className="h-5 w-5" />
                <span className="text-sm">Gestione Dipendenti</span>
              </Button>
              <Button variant="outline" className="h-16 flex flex-col gap-2">
                <FileText className="h-5 w-5" />
                <span className="text-sm">Validazione Certificati</span>
              </Button>
              <Button variant="outline" className="h-16 flex flex-col gap-2">
                <Gift className="h-5 w-5" />
                <span className="text-sm">Sistema Premi</span>
              </Button>
              <Button variant="outline" className="h-16 flex flex-col gap-2">
                <BarChart3 className="h-5 w-5" />
                <span className="text-sm">Analytics</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardAziende;
