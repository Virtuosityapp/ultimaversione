
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Users, UserCheck, Upload, FileText, Award, Gift, Plane } from 'lucide-react';

const DashboardAziende = () => {
  const [certificatiDipendenti] = useState(245);
  const [certificatiEsterni] = useState(89);
  const [reportDialogOpen, setReportDialogOpen] = useState(false);
  const [welfareItems, setWelfareItems] = useState([
    { id: 1, tipo: 'Premio', nome: 'Voucher Cena Ristorante', valore: '€ 50' },
    { id: 2, tipo: 'Viaggio', nome: 'Weekend Spa Toscana', valore: '€ 300' },
    { id: 3, tipo: 'Gadget', nome: 'Smartwatch Aziendale', valore: '€ 150' }
  ]);

  const [newWelfareItem, setNewWelfareItem] = useState({
    tipo: '',
    nome: '',
    valore: ''
  });

  const handleAddWelfareItem = () => {
    if (newWelfareItem.tipo && newWelfareItem.nome && newWelfareItem.valore) {
      setWelfareItems([...welfareItems, {
        id: Date.now(),
        ...newWelfareItem
      }]);
      setNewWelfareItem({ tipo: '', nome: '', valore: '' });
    }
  };

  const getIconForType = (tipo: string) => {
    switch (tipo.toLowerCase()) {
      case 'premio': return <Gift className="h-4 w-4" />;
      case 'viaggio': return <Plane className="h-4 w-4" />;
      case 'gadget': return <Award className="h-4 w-4" />;
      default: return <Gift className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground mb-8">Dashboard Aziende</h1>
        
        {/* Metriche Certificati */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Certificati Dipendenti</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{certificatiDipendenti}</div>
              <p className="text-xs text-muted-foreground">
                Certificati DPP ricevuti dai dipendenti aziendali
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Certificati Esterni</CardTitle>
              <UserCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{certificatiEsterni}</div>
              <p className="text-xs text-muted-foreground">
                Certificati DPP ricevuti da soggetti esterni
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Sezione Welfare */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Welfare, Premi e Gadget Aziendali</CardTitle>
            <CardDescription>
              Gestisci i premi welfare, gadget aziendali e viaggi premio disponibili per i dipendenti
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Form per aggiungere nuovo item */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 p-4 border rounded-lg bg-muted/50">
              <div>
                <Label htmlFor="tipo">Tipo</Label>
                <Input
                  id="tipo"
                  placeholder="Premio/Viaggio/Gadget"
                  value={newWelfareItem.tipo}
                  onChange={(e) => setNewWelfareItem({...newWelfareItem, tipo: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="nome">Nome</Label>
                <Input
                  id="nome"
                  placeholder="Nome del premio"
                  value={newWelfareItem.nome}
                  onChange={(e) => setNewWelfareItem({...newWelfareItem, nome: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="valore">Valore</Label>
                <Input
                  id="valore"
                  placeholder="€ 0"
                  value={newWelfareItem.valore}
                  onChange={(e) => setNewWelfareItem({...newWelfareItem, valore: e.target.value})}
                />
              </div>
              <div className="flex items-end">
                <Button onClick={handleAddWelfareItem} className="w-full">
                  <Upload className="mr-2 h-4 w-4" />
                  Aggiungi
                </Button>
              </div>
            </div>

            {/* Lista items welfare */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {welfareItems.map((item) => (
                <div key={item.id} className="p-4 border rounded-lg bg-card">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      {getIconForType(item.tipo)}
                      {item.tipo}
                    </Badge>
                    <span className="font-semibold text-primary">{item.valore}</span>
                  </div>
                  <h4 className="font-medium">{item.nome}</h4>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pulsante Report Sostenibilità */}
        <Card>
          <CardHeader>
            <CardTitle>Report Bilancio di Sostenibilità</CardTitle>
            <CardDescription>
              Genera report con i dati per il bilancio di sostenibilità aziendale
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Dialog open={reportDialogOpen} onOpenChange={setReportDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="w-full md:w-auto">
                  <FileText className="mr-2 h-5 w-5" />
                  Certifica e Compensa
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Report Bilancio di Sostenibilità</DialogTitle>
                  <DialogDescription>
                    Dati ambientali e sociali per il bilancio di sostenibilità aziendale
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6">
                  {/* Sezione Certificazioni DPP */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Certificazioni DPP</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-muted rounded-lg">
                        <p className="text-sm text-muted-foreground">Certificati Dipendenti</p>
                        <p className="text-2xl font-bold">{certificatiDipendenti}</p>
                      </div>
                      <div className="p-4 bg-muted rounded-lg">
                        <p className="text-sm text-muted-foreground">Certificati Esterni</p>
                        <p className="text-2xl font-bold">{certificatiEsterni}</p>
                      </div>
                    </div>
                  </div>

                  {/* Sezione Impatto Ambientale */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Impatto Ambientale</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-muted rounded">
                        <span>CO2 evitata tramite digitalizzazione</span>
                        <span className="font-semibold">2.8 tonnellate</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted rounded">
                        <span>Riduzione uso carta</span>
                        <span className="font-semibold">89%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted rounded">
                        <span>Trasparenza supply chain</span>
                        <span className="font-semibold">78% prodotti tracciati</span>
                      </div>
                    </div>
                  </div>

                  {/* Sezione Welfare e Benefit */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Welfare e Benefit</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-muted rounded">
                        <span>Valore welfare erogato</span>
                        <span className="font-semibold">€ {welfareItems.reduce((acc, item) => acc + parseInt(item.valore.replace(/[€\s]/g, '') || '0'), 0).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted rounded">
                        <span>Dipendenti coinvolti</span>
                        <span className="font-semibold">85%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted rounded">
                        <span>Soddisfazione media</span>
                        <span className="font-semibold">4.2/5</span>
                      </div>
                    </div>
                  </div>

                  {/* Sezione Governance */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Governance e Trasparenza</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-muted rounded">
                        <span>Certificazioni di conformità</span>
                        <span className="font-semibold">100%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted rounded">
                        <span>Audit di sostenibilità</span>
                        <span className="font-semibold">Completati</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted rounded">
                        <span>Obiettivi SDG raggiunti</span>
                        <span className="font-semibold">7/9</span>
                      </div>
                    </div>
                  </div>
                </div>

                <DialogFooter>
                  <Button variant="outline" onClick={() => setReportDialogOpen(false)}>
                    Chiudi
                  </Button>
                  <Button>
                    <FileText className="mr-2 h-4 w-4" />
                    Esporta Report
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardAziende;
