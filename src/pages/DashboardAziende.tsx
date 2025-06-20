import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building2, Upload, Gift, FileText, TrendingUp, Users, Award, CheckCircle } from 'lucide-react';
import { toast } from "sonner";
import { DialogTrigger } from '@radix-ui/react-dialog';

const DashboardAziende = () => {
  const [isDppDialogOpen, setIsDppDialogOpen] = useState(false);
  const [isRewardsDialogOpen, setIsRewardsDialogOpen] = useState(false);

  const handleDppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("DPP aziendale caricato con successo!");
    setIsDppDialogOpen(false);
  };

  const handleRewardsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Premio/Sconto caricato con successo!");
    setIsRewardsDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Aziende</h1>
          <p className="text-gray-600">Gestisci i tuoi prodotti sostenibili e monitora le performance</p>
        </div>

        {/* Upload Blocks - Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {/* DPP Upload Block */}
          <Card className="border border-green-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <FileText className="h-5 w-5 text-green-600" />
                DPP Aziendali
              </CardTitle>
              <CardDescription className="text-sm">
                Carica i Digital Product Passport collegati ai prodotti fisici
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <Dialog open={isDppDialogOpen} onOpenChange={setIsDppDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="w-full bg-green-600 hover:bg-green-700" size="sm">
                    <Upload className="mr-2 h-4 w-4" />
                    Carica DPP
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Carica DPP Aziendale</DialogTitle>
                    <DialogDescription>
                      Inserisci le informazioni del Digital Product Passport per i tuoi prodotti fisici
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleDppSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="product-name">Nome Prodotto</Label>
                        <Input id="product-name" placeholder="Es. Maglietta Bio Cotton" required />
                      </div>
                      <div>
                        <Label htmlFor="product-code">Codice Prodotto</Label>
                        <Input id="product-code" placeholder="Es. BCT001" required />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="description">Descrizione</Label>
                      <Textarea id="description" placeholder="Descrizione dettagliata del prodotto..." />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="sustainability-score">Punteggio Sostenibilità</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleziona punteggio" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="A">A - Eccellente</SelectItem>
                            <SelectItem value="B">B - Buono</SelectItem>
                            <SelectItem value="C">C - Discreto</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="carbon-footprint">Carbon Footprint (kg CO2)</Label>
                        <Input id="carbon-footprint" type="number" placeholder="Es. 2.5" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="certifications">Certificazioni</Label>
                      <Input id="certifications" placeholder="Es. GOTS, Cradle to Cradle" />
                    </div>
                    <div className="flex justify-end space-x-2">
                      <Button type="button" variant="outline" onClick={() => setIsDppDialogOpen(false)}>
                        Annulla
                      </Button>
                      <Button type="submit">Carica DPP</Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          {/* Rewards Upload Block */}
          <Card className="border border-blue-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Gift className="h-5 w-5 text-blue-600" />
                Premi e Sconti
              </CardTitle>
              <CardDescription className="text-sm">
                Offri incentivi in cambio di certificati sostenibili
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <Dialog open={isRewardsDialogOpen} onOpenChange={setIsRewardsDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700" size="sm">
                    <Gift className="mr-2 h-4 w-4" />
                    Aggiungi Premio
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Carica Premio o Sconto</DialogTitle>
                    <DialogDescription>
                      Crea incentivi per dipendenti e followers in cambio di certificati di sostenibilità
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleRewardsSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="reward-type">Tipo</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleziona tipo" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="discount">Sconto</SelectItem>
                            <SelectItem value="voucher">Voucher</SelectItem>
                            <SelectItem value="gift">Regalo</SelectItem>
                            <SelectItem value="experience">Esperienza</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="target-audience">Destinatari</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleziona destinatari" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="employees">Dipendenti</SelectItem>
                            <SelectItem value="followers">Followers</SelectItem>
                            <SelectItem value="both">Entrambi</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="reward-title">Titolo Premio</Label>
                      <Input id="reward-title" placeholder="Es. Sconto 20% su prodotti eco-friendly" required />
                    </div>
                    <div>
                      <Label htmlFor="reward-description">Descrizione</Label>
                      <Textarea id="reward-description" placeholder="Descrizione dettagliata del premio..." />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="certificates-required">Certificati Richiesti</Label>
                        <Input id="certificates-required" type="number" placeholder="Es. 5" min="1" required />
                      </div>
                      <div>
                        <Label htmlFor="reward-value">Valore</Label>
                        <Input id="reward-value" placeholder="Es. €50, 20%" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="validity-period">Periodo di Validità</Label>
                      <Input id="validity-period" type="date" />
                    </div>
                    <div className="flex justify-end space-x-2">
                      <Button type="button" variant="outline" onClick={() => setIsRewardsDialogOpen(false)}>
                        Annulla
                      </Button>
                      <Button type="submit">Carica Premio</Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Prodotti Certificati</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">247</div>
              <p className="text-xs text-muted-foreground">+12% dal mese scorso</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">CO2 Risparmiata</CardTitle>
              <TrendingUp className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">1,234 kg</div>
              <p className="text-xs text-muted-foreground">+8% dal mese scorso</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Dipendenti Attivi</CardTitle>
              <Users className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">89</div>
              <p className="text-xs text-muted-foreground">+15% dal mese scorso</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Punteggio ESG</CardTitle>
              <Award className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">8.7/10</div>
              <p className="text-xs text-muted-foreground">+0.3 dal mese scorso</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity and Sustainability Report */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Attività Recenti</CardTitle>
              <CardDescription>Ultime azioni dei tuoi dipendenti</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { user: "Marco Rossi", action: "ha caricato certificato riciclo", time: "2 ore fa", badge: "Riciclo" },
                  { user: "Anna Verdi", action: "ha completato corso sostenibilità", time: "4 ore fa", badge: "Formazione" },
                  { user: "Luca Bianchi", action: "ha utilizzato mezzi pubblici", time: "6 ore fa", badge: "Mobilità" },
                  { user: "Sara Neri", action: "ha partecipato a evento green", time: "1 giorno fa", badge: "Evento" },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Building2 className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{activity.user}</p>
                        <p className="text-xs text-gray-500">{activity.action}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="text-xs">{activity.badge}</Badge>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Report di Sostenibilità</CardTitle>
              <CardDescription>Panoramica delle performance ambientali</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-sm font-medium">Emissioni CO2</span>
                  <span className="text-sm text-green-600 font-bold">-15% vs 2023</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className="text-sm font-medium">Energia Rinnovabile</span>
                  <span className="text-sm text-blue-600 font-bold">85%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <span className="text-sm font-medium">Rifiuti Riciclati</span>
                  <span className="text-sm text-purple-600 font-bold">92%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                  <span className="text-sm font-medium">Acqua Risparmiata</span>
                  <span className="text-sm text-orange-600 font-bold">2,340L</span>
                </div>
              </div>
              <Button className="w-full mt-4" variant="outline">
                Visualizza Report Completo
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardAziende;
