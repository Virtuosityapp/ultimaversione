
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Users, UserCheck, Upload, FileText, Award, Gift, Plane, ArrowLeft, TrendingUp, Eye, Target, Globe, Droplet, Zap, Trash2, Percent } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const DashboardAziende = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  // Welfare per Dipendenti - Limited to 4 items
  const [welfareItems, setWelfareItems] = useState([
    { id: 1, tipo: 'Premio', nome: 'Voucher Cena Ristorante', valore: '€ 50', certificatiRichiesti: 'Risparmio Energetico', quantitaCertificati: 5 },
    { id: 2, tipo: 'Viaggio', nome: 'Weekend Spa Toscana', valore: '€ 300', certificatiRichiesti: 'Mobilità Sostenibile', quantitaCertificati: 20 },
    { id: 3, tipo: 'Gadget', nome: 'Smartwatch Aziendale', valore: '€ 150', certificatiRichiesti: 'Riciclo Rifiuti', quantitaCertificati: 10 },
    { id: 4, tipo: 'Premio', nome: 'Buono Acquisto Shopping', valore: '€ 100', certificatiRichiesti: 'Risparmio Idrico', quantitaCertificati: 8 }
  ]);

  // Premi per Followers (Sconti e Offerte) - Limited to 4 items
  const [followersRewards, setFollowersRewards] = useState([
    { id: 1, tipo: 'Sconto', nome: 'Sconto Prodotti Bio', valore: '15%', certificatiRichiesti: 'Risparmio Energetico', quantitaCertificati: 3 },
    { id: 2, tipo: 'Premio', nome: 'Borraccia Ecologica Gratis', valore: '€ 25', certificatiRichiesti: 'Risparmio Idrico', quantitaCertificati: 2 },
    { id: 3, tipo: 'Sconto', nome: 'Pannelli Solari Casa', valore: '20%', certificatiRichiesti: 'Riduzione CO2', quantitaCertificati: 15 },
    { id: 4, tipo: 'Premio', nome: 'Kit Compostaggio Domestico', valore: '€ 45', certificatiRichiesti: 'Riciclo Rifiuti', quantitaCertificati: 5 }
  ]);

  const [certificateMonitoringCategories] = useState([
    {
      category: 'Risparmio Idrico',
      mascot: '/lovable-uploads/0a948061-d9ea-4555-839e-59bc31cd4c9a.png',
      icon: <Droplet className="h-5 w-5" />,
      data: [
        { tipo: 'Uso Consapevole Acqua', count: 145, trend: '+12%', action: 'Sensori smart per rubinetti' },
        { tipo: 'Raccolta Acqua Piovana', count: 89, trend: '+8%', action: 'Sistemi di recupero in ufficio' },
        { tipo: 'Riduzione Sprechi', count: 67, trend: '+15%', action: 'Monitoraggio consumi real-time' }
      ]
    },
    {
      category: 'Risparmio Energetico',
      mascot: '/lovable-uploads/89a2a2c5-7071-4df2-8e73-c5e5b645b38b.png',
      icon: <Zap className="h-5 w-5" />,
      data: [
        { tipo: 'Smart Working', count: 245, trend: '+18%', action: 'Incentivi lavoro da remoto' },
        { tipo: 'LED e Sensori', count: 134, trend: '+10%', action: 'Sostituzione illuminazione tradizionale' },
        { tipo: 'Elettrodomestici A+++', count: 78, trend: '+6%', action: 'Programma di rinnovo attrezzature' }
      ]
    },
    {
      category: 'Riciclo e Rifiuti',
      mascot: '/lovable-uploads/491544c4-c37d-4c3b-a368-e0c71002d237.png',
      icon: <Trash2 className="h-5 w-5" />,
      data: [
        { tipo: 'Raccolta Differenziata', count: 298, trend: '+22%', action: 'Contenitori smart in ufficio' },
        { tipo: 'Riuso Materiali', count: 156, trend: '+14%', action: 'Mercatino interno usato' },
        { tipo: 'Zero Waste', count: 89, trend: '+16%', action: 'Challenge rifiuti zero mensile' }
      ]
    },
    {
      category: 'Riduzione CO2',
      mascot: '/lovable-uploads/f7195bbc-9cea-4e2a-93c5-b33349aed6ac.png',
      icon: <FileText className="h-5 w-5" />,
      data: [
        { tipo: 'Trasporto Sostenibile', count: 167, trend: '+20%', action: 'Bike sharing aziendale' },
        { tipo: 'Compensazione CO2', count: 112, trend: '+12%', action: 'Progetti di riforestazione' },
        { tipo: 'Digital First', count: 89, trend: '+25%', action: 'Riduzione carta e stampe' }
      ]
    }
  ]);

  const [externalCertificateCategories] = useState([
    {
      category: 'Risparmio Idrico',
      mascot: '/lovable-uploads/0a948061-d9ea-4555-839e-59bc31cd4c9a.png',
      icon: <Droplet className="h-5 w-5" />,
      data: [
        { tipo: 'Sistemi Raccolta Acqua', count: 1456, trend: '+28%', action: 'Sconti su sistemi di recupero' },
        { tipo: 'Elettrodomestici Water-Saving', count: 892, trend: '+15%', action: 'Partnership produttori eco' },
        { tipo: 'Giardini Sostenibili', count: 634, trend: '+18%', action: 'Workshop giardinaggio sostenibile' }
      ]
    },
    {
      category: 'Risparmio Energetico',
      mascot: '/lovable-uploads/89a2a2c5-7071-4df2-8e73-c5e5b645b38b.png',
      icon: <Zap className="h-5 w-5" />,
      data: [
        { tipo: 'Pannelli Solari', count: 2134, trend: '+32%', action: 'Finanziamenti agevolati installazione' },
        { tipo: 'Isolamento Termico', count: 1567, trend: '+22%', action: 'Incentivi ristrutturazione green' },
        { tipo: 'Smart Home', count: 987, trend: '+19%', action: 'Sconti dispositivi domotici' }
      ]
    },
    {
      category: 'Riciclo e Rifiuti',
      mascot: '/lovable-uploads/491544c4-c37d-4c3b-a368-e0c71002d237.png',
      icon: <Trash2 className="h-5 w-5" />,
      data: [
        { tipo: 'Compostaggio Domestico', count: 1789, trend: '+25%', action: 'Distribuzione compostiere gratuite' },
        { tipo: 'Riparazione vs Sostituzione', count: 1234, trend: '+20%', action: 'Rete repair café locali' },
        { tipo: 'Upcycling Creativo', count: 856, trend: '+30%', action: 'Workshop creativi riutilizzo' }
      ]
    },
    {
      category: 'Riduzione CO2',
      mascot: '/lovable-uploads/f7195bbc-9cea-4e2a-93c5-b33349aed6ac.png',
      icon: <FileText className="h-5 w-5" />,
      data: [
        { tipo: 'Mobilità Elettrica', count: 2456, trend: '+35%', action: 'Incentivi acquisto e-bike/auto elettriche' },
        { tipo: 'Alimentazione Plant-Based', count: 1678, trend: '+28%', action: 'Ricettari e corsi cucina sostenibile' },
        { tipo: 'Turismo Sostenibile', count: 923, trend: '+22%', action: 'Partnership strutture eco-certificate' }
      ]
    }
  ]);

  const [newWelfareItem, setNewWelfareItem] = useState({
    tipo: '',
    nome: '',
    valore: '',
    certificatiRichiesti: '',
    quantitaCertificati: ''
  });

  const [newFollowersReward, setNewFollowersReward] = useState({
    tipo: '',
    nome: '',
    valore: '',
    certificatiRichiesti: '',
    quantitaCertificati: ''
  });

  const handleAddWelfareItem = () => {
    if (newWelfareItem.tipo && newWelfareItem.nome && newWelfareItem.valore && newWelfareItem.certificatiRichiesti && newWelfareItem.quantitaCertificati) {
      setWelfareItems([...welfareItems, {
        id: Date.now(),
        ...newWelfareItem,
        quantitaCertificati: parseInt(newWelfareItem.quantitaCertificati)
      }]);
      setNewWelfareItem({ tipo: '', nome: '', valore: '', certificatiRichiesti: '', quantitaCertificati: '' });
    }
  };

  const handleAddFollowersReward = () => {
    if (newFollowersReward.tipo && newFollowersReward.nome && newFollowersReward.valore && newFollowersReward.certificatiRichiesti && newFollowersReward.quantitaCertificati) {
      setFollowersRewards([...followersRewards, {
        id: Date.now(),
        ...newFollowersReward,
        quantitaCertificati: parseInt(newFollowersReward.quantitaCertificati)
      }]);
      setNewFollowersReward({ tipo: '', nome: '', valore: '', certificatiRichiesti: '', quantitaCertificati: '' });
    }
  };

  const getIconForType = (tipo: string) => {
    switch (tipo.toLowerCase()) {
      case 'premio': return <Gift className="h-4 w-4" />;
      case 'viaggio': return <Plane className="h-4 w-4" />;
      case 'gadget': return <Award className="h-4 w-4" />;
      case 'sconto': return <Percent className="h-4 w-4" />;
      default: return <Gift className="h-4 w-4" />;
    }
  };

  const getBadgeColor = (tipo: string) => {
    switch (tipo.toLowerCase()) {
      case 'premio': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'viaggio': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'gadget': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'sconto': return 'bg-orange-100 text-orange-700 border-orange-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getTrendColor = (trend: string) => {
    return trend.startsWith('+') ? 'text-green-600' : 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6">
      <LanguageSwitcher />
      
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Dashboard Aziendale
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Gestisci le performance di sostenibilità e configura incentivi personalizzati
          </p>
        </div>

        {/* Navigation Button */}
        <div className="mb-6">
          <Button 
            onClick={() => navigate('/')} 
            variant="outline" 
            className="flex items-center gap-2 hover:bg-white/80 border-blue-200 text-blue-700 hover:text-blue-800"
          >
            <ArrowLeft className="h-4 w-4" />
            {t('backToMenu')}
          </Button>
        </div>

        {/* Metriche Certificati */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-green-500 to-emerald-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-green-100">{t('employeeCertificates')}</CardTitle>
              <div className="p-2 bg-white/20 rounded-lg">
                <Users className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">{certificatiDipendenti}</div>
              <p className="text-xs text-green-100 mt-1">
                Certificati scambiati con i dipendenti
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-500 to-cyan-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-blue-100">{t('externalCertificates')}</CardTitle>
              <div className="p-2 bg-white/20 rounded-lg">
                <UserCheck className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">{certificatiEsterni}</div>
              <p className="text-xs text-blue-100 mt-1">
                Certificati ricevuti da followers
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Monitoraggio Certificati - Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Monitoraggio Certificati Dipendenti */}
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-6 w-6" />
                Monitoraggio Certificati Dipendenti
              </CardTitle>
              <CardDescription className="text-green-100">
                Analisi dei comportamenti sostenibili per strategie di marketing mirate
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {certificateMonitoringCategories.map((category, categoryIndex) => (
                  <AccordionItem key={categoryIndex} value={`item-${categoryIndex}`}>
                    <AccordionTrigger className="flex items-center gap-3">
                      <div className="flex items-center gap-3">
                        <img 
                          src={category.mascot} 
                          alt={category.category}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        {category.icon}
                        <span>{category.category}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Tipo Certificato</TableHead>
                            <TableHead>Quantità</TableHead>
                            <TableHead>Trend</TableHead>
                            <TableHead>Azione Marketing</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {category.data.map((item, index) => (
                            <TableRow key={index}>
                              <TableCell className="font-medium">{item.tipo}</TableCell>
                              <TableCell className="text-center font-semibold">{item.count}</TableCell>
                              <TableCell className={`text-center font-semibold ${getTrendColor(item.trend)}`}>
                                <div className="flex items-center justify-center gap-1">
                                  <TrendingUp className="h-4 w-4" />
                                  {item.trend}
                                </div>
                              </TableCell>
                              <TableCell>
                                <Badge variant="outline" className="flex items-center gap-1 text-xs">
                                  <Target className="h-3 w-3" />
                                  {item.action}
                                </Badge>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Monitoraggio Certificati Esterni */}
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-6 w-6" />
                Monitoraggio Certificati Esterni
              </CardTitle>
              <CardDescription className="text-blue-100">
                Analisi dei comportamenti sostenibili dei followers per strategie di engagement
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {externalCertificateCategories.map((category, categoryIndex) => (
                  <AccordionItem key={categoryIndex} value={`external-item-${categoryIndex}`}>
                    <AccordionTrigger className="flex items-center gap-3">
                      <div className="flex items-center gap-3">
                        <img 
                          src={category.mascot} 
                          alt={category.category}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        {category.icon}
                        <span>{category.category}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Tipo Certificato</TableHead>
                            <TableHead>Quantità</TableHead>
                            <TableHead>Trend</TableHead>
                            <TableHead>Azione Marketing</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {category.data.map((item, index) => (
                            <TableRow key={index}>
                              <TableCell className="font-medium">{item.tipo}</TableCell>
                              <TableCell className="text-center font-semibold">{item.count}</TableCell>
                              <TableCell className={`text-center font-semibold ${getTrendColor(item.trend)}`}>
                                <div className="flex items-center justify-center gap-1">
                                  <TrendingUp className="h-4 w-4" />
                                  {item.trend}
                                </div>
                              </TableCell>
                              <TableCell>
                                <Badge variant="outline" className="flex items-center gap-1 text-xs">
                                  <Target className="h-3 w-3" />
                                  {item.action}
                                </Badge>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Sezioni Welfare e Premi - Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Sezione Welfare Dipendenti */}
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6" />
                Welfare per Dipendenti
              </CardTitle>
              <CardDescription className="text-green-100">
                Premi e benefit in cambio di comportamenti sostenibili certificati
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              {/* Form per aggiungere nuovo item welfare */}
              <div className="grid grid-cols-1 gap-4 mb-6 p-4 border-2 border-dashed border-green-200 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50">
                <div>
                  <Label htmlFor="welfare-tipo" className="text-green-700 font-medium">{t('type')}</Label>
                  <Input
                    id="welfare-tipo"
                    placeholder="Premio/Viaggio/Gadget"
                    value={newWelfareItem.tipo}
                    onChange={(e) => setNewWelfareItem({...newWelfareItem, tipo: e.target.value})}
                    className="border-green-200 focus:border-green-400"
                  />
                </div>
                <div>
                  <Label htmlFor="welfare-nome" className="text-green-700 font-medium">{t('name')}</Label>
                  <Input
                    id="welfare-nome"
                    placeholder="Nome del premio"
                    value={newWelfareItem.nome}
                    onChange={(e) => setNewWelfareItem({...newWelfareItem, nome: e.target.value})}
                    className="border-green-200 focus:border-green-400"
                  />
                </div>
                <div>
                  <Label htmlFor="welfare-valore" className="text-green-700 font-medium">{t('value')}</Label>
                  <Input
                    id="welfare-valore"
                    placeholder="€ 0"
                    value={newWelfareItem.valore}
                    onChange={(e) => setNewWelfareItem({...newWelfareItem, valore: e.target.value})}
                    className="border-green-200 focus:border-green-400"
                  />
                </div>
                <div>
                  <Label htmlFor="welfare-certificati" className="text-green-700 font-medium">Tipo Certificati</Label>
                  <Input
                    id="welfare-certificati"
                    placeholder="Es. Risparmio Energetico"
                    value={newWelfareItem.certificatiRichiesti}
                    onChange={(e) => setNewWelfareItem({...newWelfareItem, certificatiRichiesti: e.target.value})}
                    className="border-green-200 focus:border-green-400"
                  />
                </div>
                <div>
                  <Label htmlFor="welfare-quantita" className="text-green-700 font-medium">Quantità Certificati</Label>
                  <Input
                    id="welfare-quantita"
                    type="number"
                    placeholder="0"
                    value={newWelfareItem.quantitaCertificati}
                    onChange={(e) => setNewWelfareItem({...newWelfareItem, quantitaCertificati: e.target.value})}
                    className="border-green-200 focus:border-green-400"
                  />
                </div>
                <Button 
                  onClick={handleAddWelfareItem} 
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg"
                >
                  <Upload className="mr-2 h-4 w-4" />
                  {t('add')}
                </Button>
              </div>

              {/* Lista items welfare - 2x2 grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {welfareItems.map((item) => (
                  <div key={item.id} className="p-4 border-0 rounded-xl shadow-lg bg-gradient-to-br from-white to-green-50 hover:shadow-xl transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className={`flex items-center gap-1 ${getBadgeColor(item.tipo)}`}>
                        {getIconForType(item.tipo)}
                        {item.tipo}
                      </Badge>
                      <span className="font-bold text-lg text-gray-700">{item.valore}</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">{item.nome}</h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p><span className="font-medium">Richiede:</span> {item.quantitaCertificati}x {item.certificatiRichiesti}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Sezione Premi per Followers */}
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-6 w-6" />
                Premi e Sconti per Followers
              </CardTitle>
              <CardDescription className="text-blue-100">
                Offerte e sconti per followers in cambio di certificati sostenibili
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              {/* Form per aggiungere nuovo premio followers */}
              <div className="grid grid-cols-1 gap-4 mb-6 p-4 border-2 border-dashed border-blue-200 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50">
                <div>
                  <Label htmlFor="followers-tipo" className="text-blue-700 font-medium">Tipo</Label>
                  <Input
                    id="followers-tipo"
                    placeholder="Sconto/Premio"
                    value={newFollowersReward.tipo}
                    onChange={(e) => setNewFollowersReward({...newFollowersReward, tipo: e.target.value})}
                    className="border-blue-200 focus:border-blue-400"
                  />
                </div>
                <div>
                  <Label htmlFor="followers-nome" className="text-blue-700 font-medium">Nome</Label>
                  <Input
                    id="followers-nome"
                    placeholder="Nome dell'offerta"
                    value={newFollowersReward.nome}
                    onChange={(e) => setNewFollowersReward({...newFollowersReward, nome: e.target.value})}
                    className="border-blue-200 focus:border-blue-400"
                  />
                </div>
                <div>
                  <Label htmlFor="followers-valore" className="text-blue-700 font-medium">Valore</Label>
                  <Input
                    id="followers-valore"
                    placeholder="€ 0 / %"
                    value={newFollowersReward.valore}
                    onChange={(e) => setNewFollowersReward({...newFollowersReward, valore: e.target.value})}
                    className="border-blue-200 focus:border-blue-400"
                  />
                </div>
                <div>
                  <Label htmlFor="followers-certificati" className="text-blue-700 font-medium">Tipo Certificati</Label>
                  <Input
                    id="followers-certificati"
                    placeholder="Es. Risparmio Idrico"
                    value={newFollowersReward.certificatiRichiesti}
                    onChange={(e) => setNewFollowersReward({...newFollowersReward, certificatiRichiesti: e.target.value})}
                    className="border-blue-200 focus:border-blue-400"
                  />
                </div>
                <div>
                  <Label htmlFor="followers-quantita" className="text-blue-700 font-medium">Quantità Certificati</Label>
                  <Input
                    id="followers-quantita"
                    type="number"
                    placeholder="0"
                    value={newFollowersReward.quantitaCertificati}
                    onChange={(e) => setNewFollowersReward({...newFollowersReward, quantitaCertificati: e.target.value})}
                    className="border-blue-200 focus:border-blue-400"
                  />
                </div>
                <Button 
                  onClick={handleAddFollowersReward} 
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg"
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Aggiungi
                </Button>
              </div>

              {/* Lista premi followers - 2x2 grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {followersRewards.map((item) => (
                  <div key={item.id} className="p-4 border-0 rounded-xl shadow-lg bg-gradient-to-br from-white to-blue-50 hover:shadow-xl transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className={`flex items-center gap-1 ${getBadgeColor(item.tipo)}`}>
                        {getIconForType(item.tipo)}
                        {item.tipo}
                      </Badge>
                      <span className="font-bold text-lg text-gray-700">{item.valore}</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">{item.nome}</h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p><span className="font-medium">Richiede:</span> {item.quantitaCertificati}x {item.certificatiRichiesti}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pulsante Report Sostenibilità */}
        <Card className="border-0 shadow-xl bg-gradient-to-r from-orange-400 to-red-500 text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <FileText className="h-6 w-6" />
              {t('sustainabilityReport')}
            </CardTitle>
            <CardDescription className="text-orange-100">
              {t('sustainabilityDescription')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Dialog open={reportDialogOpen} onOpenChange={setReportDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="w-full md:w-auto bg-white text-orange-600 hover:bg-gray-100 shadow-lg text-lg py-6 px-8">
                  <FileText className="mr-2 h-6 w-6" />
                  {t('certifyAndCompensate')}
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    {t('sustainabilityReport')}
                  </DialogTitle>
                  <DialogDescription>
                    Dati ambientali e sociali per il bilancio di sostenibilità aziendale
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6">
                  {/* Sezione Certificazioni DPP */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-green-700">Certificazioni DPP</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                        <p className="text-sm text-green-600 font-medium">Certificati Dipendenti</p>
                        <p className="text-2xl font-bold text-green-700">{certificatiDipendenti}</p>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                        <p className="text-sm text-blue-600 font-medium">Certificati Esterni</p>
                        <p className="text-2xl font-bold text-blue-700">{certificatiEsterni}</p>
                      </div>
                    </div>
                  </div>

                  {/* Sezione Impatto Ambientale */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-blue-700">Impatto Ambientale</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded border border-blue-200">
                        <span className="text-blue-700">CO2 evitata tramite digitalizzazione</span>
                        <span className="font-semibold text-blue-800">2.8 tonnellate</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded border border-green-200">
                        <span className="text-green-700">Riduzione uso carta</span>
                        <span className="font-semibold text-green-800">89%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded border border-purple-200">
                        <span className="text-purple-700">Trasparenza supply chain</span>
                        <span className="font-semibold text-purple-800">78% prodotti tracciati</span>
                      </div>
                    </div>
                  </div>

                  {/* Sezione Welfare e Benefit */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-purple-700">Welfare e Benefit</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded border border-purple-200">
                        <span className="text-purple-700">Valore welfare erogato</span>
                        <span className="font-semibold text-purple-800">€ {welfareItems.reduce((acc, item) => acc + parseInt(item.valore.replace(/[€\s]/g, '') || '0'), 0).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded border border-orange-200">
                        <span className="text-orange-700">Dipendenti coinvolti</span>
                        <span className="font-semibold text-orange-800">85%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded border border-yellow-200">
                        <span className="text-yellow-700">Soddisfazione media</span>
                        <span className="font-semibold text-yellow-800">4.2/5</span>
                      </div>
                    </div>
                  </div>

                  {/* Sezione Governance */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-indigo-700">Governance e Trasparenza</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gradient-to-r from-indigo-50 to-blue-50 rounded border border-indigo-200">
                        <span className="text-indigo-700">Certificazioni di conformità</span>
                        <span className="font-semibold text-indigo-800">100%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gradient-to-r from-teal-50 to-cyan-50 rounded border border-teal-200">
                        <span className="text-teal-700">Audit di sostenibilità</span>
                        <span className="font-semibold text-teal-800">Completati</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gradient-to-r from-emerald-50 to-green-50 rounded border border-emerald-200">
                        <span className="text-emerald-700">Obiettivi SDG raggiunti</span>
                        <span className="font-semibold text-emerald-800">7/9</span>
                      </div>
                    </div>
                  </div>
                </div>

                <DialogFooter>
                  <Button variant="outline" onClick={() => setReportDialogOpen(false)}>
                    {t('close')}
                  </Button>
                  <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
                    <FileText className="mr-2 h-4 w-4" />
                    {t('exportReport')}
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
