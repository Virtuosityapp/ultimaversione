import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Building2, Users, Coins, TrendingUp, Gift, Upload, Award, Heart } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const DashboardAziende = () => {
  const { toast } = useToast();
  const [isRewardsDialogOpen, setIsRewardsDialogOpen] = useState(false);
  const [isDppDialogOpen, setIsDppDialogOpen] = useState(false);
  const [isWelfareDialogOpen, setIsWelfareDialogOpen] = useState(false);

  const data = [
    { name: 'Gennaio', valore: 4000 },
    { name: 'Febbraio', valore: 3000 },
    { name: 'Marzo', valore: 2000 },
    { name: 'Aprile', valore: 2780 },
    { name: 'Maggio', valore: 1890 },
    { name: 'Giugno', valore: 2390 },
    { name: 'Luglio', valore: 3490 },
  ];

  const pieData = [
    { name: 'Gruppo A', value: 400 },
    { name: 'Gruppo B', value: 300 },
    { name: 'Gruppo C', value: 300 },
    { name: 'Gruppo D', value: 200 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const handleRewardsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Premi e Sconti Caricati",
      description: "I premi e sconti sono stati caricati con successo.",
    });
    setIsRewardsDialogOpen(false);
  };

  const handleDppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "DPP Caricato",
      description: "Il Digital Product Passport è stato caricato con successo.",
    });
    setIsDppDialogOpen(false);
  };

  const handleWelfareSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Benefit Welfare Caricato",
      description: "Il benefit welfare è stato caricato con successo.",
    });
    setIsWelfareDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Dashboard Aziendale</h1>
          <p className="text-lg text-gray-600">Monitora la sostenibilità e l'impatto ambientale della tua azienda</p>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Welfare Benefits Button */}
          <Dialog open={isWelfareDialogOpen} onOpenChange={setIsWelfareDialogOpen}>
            <DialogTrigger asChild>
              <Button className="h-16 bg-purple-600 hover:bg-purple-700 text-white">
                <Heart className="mr-2 h-5 w-5" />
                Carica Benefit Welfare
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Carica Benefit Welfare</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleWelfareSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="benefit-name">Nome Benefit</Label>
                    <Input id="benefit-name" placeholder="es. Visita medica gratuita" required />
                  </div>
                  <div>
                    <Label htmlFor="benefit-type">Tipo Benefit</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleziona tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="medical">Assistenza Sanitaria</SelectItem>
                        <SelectItem value="time-off">Permessi Extra</SelectItem>
                        <SelectItem value="wellness">Benessere</SelectItem>
                        <SelectItem value="education">Formazione</SelectItem>
                        <SelectItem value="transport">Trasporti</SelectItem>
                        <SelectItem value="food">Buoni Pasto</SelectItem>
                        <SelectItem value="other">Altro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="benefit-description">Descrizione</Label>
                  <Textarea 
                    id="benefit-description" 
                    placeholder="Descrivi il benefit offerto..."
                    className="min-h-[100px]"
                    required 
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="certificates-required">Certificati Richiesti</Label>
                    <Input 
                      id="certificates-required" 
                      type="number" 
                      placeholder="es. 5" 
                      min="1"
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="benefit-value">Valore Benefit (€)</Label>
                    <Input 
                      id="benefit-value" 
                      type="number" 
                      placeholder="es. 150" 
                      min="0"
                      step="0.01"
                      required 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="target-audience">Destinatari</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleziona destinatari" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="employees">Solo Dipendenti</SelectItem>
                        <SelectItem value="followers">Solo Followers</SelectItem>
                        <SelectItem value="both">Dipendenti e Followers</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="validity-period">Validità (giorni)</Label>
                    <Input 
                      id="validity-period" 
                      type="number" 
                      placeholder="es. 30" 
                      min="1"
                      required 
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="terms-conditions">Termini e Condizioni</Label>
                  <Textarea 
                    id="terms-conditions" 
                    placeholder="Inserisci eventuali condizioni o limitazioni..."
                    className="min-h-[80px]"
                  />
                </div>

                <div className="flex justify-end space-x-2 pt-4">
                  <Button type="button" variant="outline" onClick={() => setIsWelfareDialogOpen(false)}>
                    Annulla
                  </Button>
                  <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
                    Carica Benefit
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>

          {/* Rewards and Discounts Button */}
          <Dialog open={isRewardsDialogOpen} onOpenChange={setIsRewardsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="h-16 bg-orange-600 hover:bg-orange-700 text-white">
                <Gift className="mr-2 h-5 w-5" />
                Carica Premi e Sconti
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Carica Premi e Sconti</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleRewardsSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="reward-name">Nome Premio/Sconto</Label>
                  <Input id="reward-name" placeholder="es. Sconto 10% su..." required />
                </div>
                <div>
                  <Label htmlFor="reward-description">Descrizione</Label>
                  <Textarea id="reward-description" placeholder="Descrivi il premio o lo sconto..." className="min-h-[80px]" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="certificates-needed">Certificati Necessari</Label>
                    <Input type="number" id="certificates-needed" placeholder="es. 3" min="1" required />
                  </div>
                  <div>
                    <Label htmlFor="discount-code">Codice Sconto (opzionale)</Label>
                    <Input type="text" id="discount-code" placeholder="es. SCONTO10" />
                  </div>
                </div>
                <div className="flex justify-end space-x-2 pt-4">
                  <Button type="button" variant="outline" onClick={() => setIsRewardsDialogOpen(false)}>
                    Annulla
                  </Button>
                  <Button type="submit" className="bg-orange-600 hover:bg-orange-700">
                    Carica Premio/Sconto
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>

          {/* DPP Upload Button */}
          <Dialog open={isDppDialogOpen} onOpenChange={setIsDppDialogOpen}>
            <DialogTrigger asChild>
              <Button className="h-16 bg-blue-600 hover:bg-blue-700 text-white">
                <Upload className="mr-2 h-5 w-5" />
                Carica DPP Aziendali
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Carica Digital Product Passport</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleDppSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="dpp-name">Nome DPP</Label>
                  <Input id="dpp-name" placeholder="es. Prodotto X - DPP" required />
                </div>
                <div>
                  <Label htmlFor="dpp-description">Descrizione</Label>
                  <Textarea id="dpp-description" placeholder="Descrivi il Digital Product Passport..." className="min-h-[80px]" required />
                </div>
                <div>
                  <Label htmlFor="dpp-file">File DPP</Label>
                  <Input type="file" id="dpp-file" />
                </div>
                <div className="flex justify-end space-x-2 pt-4">
                  <Button type="button" variant="outline" onClick={() => setIsDppDialogOpen(false)}>
                    Annulla
                  </Button>
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                    Carica DPP
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Dipendenti Attivi</CardTitle>
              <Building2 className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">120</div>
              <p className="text-sm text-gray-500">Rispetto al mese scorso +5</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Followers</CardTitle>
              <Users className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4,524</div>
              <p className="text-sm text-gray-500">Rispetto al mese scorso +120</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Certificati Emessi</CardTitle>
              <Award className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,350</div>
              <p className="text-sm text-gray-500">Rispetto al mese scorso +350</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Punteggio di Sostenibilità</CardTitle>
              <TrendingUp className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">85/100</div>
              <p className="text-sm text-gray-500">Migliora il tuo impatto ambientale</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Emissioni di CO2 (kg) - Ultimi 7 Mesi</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="valore" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Distribuzione Certificati per Area</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Sustainability Report */}
        <Card>
          <CardHeader>
            <CardTitle>Report di Sostenibilità</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p><strong>Obiettivi di Sostenibilità:</strong> Riduzione del 15% delle emissioni di CO2 entro il 2025.</p>
              <p><strong>Azioni Intraprese:</strong> Implementazione di un sistema di gestione energetica, utilizzo di energia rinnovabile, e programmi di sensibilizzazione per i dipendenti.</p>
              <p><strong>Risultati:</strong> Riduzione del 8% delle emissioni nel 2023. Aumento del 20% nell'utilizzo di energia rinnovabile.</p>
              <Badge className="bg-green-500 text-white">In linea con gli obiettivi</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardAziende;
