import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users, Globe, Eye, Droplet, Zap, Trash2, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import MetricsCards from '@/components/dashboard/MetricsCards';
import MonitoringSection from '@/components/dashboard/MonitoringSection';
import WelfareSection from '@/components/dashboard/WelfareSection';
import ReportDialog from '@/components/dashboard/ReportDialog';

const DashboardAziende = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [certificatiDipendenti] = useState(1589);
  const [certificatiEsterni] = useState(14568);
  const [reportDialogOpen, setReportDialogOpen] = useState(false);
  
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
      ],
      chartData: [
        { name: 'Uso Consapevole', value: 145, color: '#3b82f6' },
        { name: 'Raccolta Piovana', value: 89, color: '#10b981' },
        { name: 'Riduzione Sprechi', value: 67, color: '#f59e0b' }
      ],
      trendData: [
        { month: 'Gen', count: 120 },
        { month: 'Feb', count: 135 },
        { month: 'Mar', count: 145 }
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
      ],
      chartData: [
        { name: 'Smart Working', value: 245, color: '#8b5cf6' },
        { name: 'LED e Sensori', value: 134, color: '#ef4444' },
        { name: 'Elettrodomestici', value: 78, color: '#06b6d4' }
      ],
      trendData: [
        { month: 'Gen', count: 200 },
        { month: 'Feb', count: 220 },
        { month: 'Mar', count: 245 }
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
      ],
      chartData: [
        { name: 'Raccolta Diff.', value: 298, color: '#10b981' },
        { name: 'Riuso Materiali', value: 156, color: '#f59e0b' },
        { name: 'Zero Waste', value: 89, color: '#8b5cf6' }
      ],
      trendData: [
        { month: 'Gen', count: 250 },
        { month: 'Feb', count: 275 },
        { month: 'Mar', count: 298 }
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
      ],
      chartData: [
        { name: 'Trasporto Sost.', value: 167, color: '#ef4444' },
        { name: 'Compensazione', value: 112, color: '#3b82f6' },
        { name: 'Digital First', value: 89, color: '#10b981' }
      ],
      trendData: [
        { month: 'Gen', count: 140 },
        { month: 'Feb', count: 155 },
        { month: 'Mar', count: 167 }
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
      ],
      chartData: [
        { name: 'Sistemi Raccolta', value: 1456, color: '#3b82f6' },
        { name: 'Elettrodomestici', value: 892, color: '#10b981' },
        { name: 'Giardini Sost.', value: 634, color: '#f59e0b' }
      ],
      trendData: [
        { month: 'Gen', count: 1200 },
        { month: 'Feb', count: 1350 },
        { month: 'Mar', count: 1456 }
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
      ],
      chartData: [
        { name: 'Pannelli Solari', value: 2134, color: '#8b5cf6' },
        { name: 'Isolamento', value: 1567, color: '#ef4444' },
        { name: 'Smart Home', value: 987, color: '#06b6d4' }
      ],
      trendData: [
        { month: 'Gen', count: 1800 },
        { month: 'Feb', count: 1950 },
        { month: 'Mar', count: 2134 }
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
      ],
      chartData: [
        { name: 'Compostaggio', value: 1789, color: '#10b981' },
        { name: 'Riparazione', value: 1234, color: '#f59e0b' },
        { name: 'Upcycling', value: 856, color: '#8b5cf6' }
      ],
      trendData: [
        { month: 'Gen', count: 1500 },
        { month: 'Feb', count: 1650 },
        { month: 'Mar', count: 1789 }
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
      ],
      chartData: [
        { name: 'Mobilità Elettrica', value: 2456, color: '#ef4444' },
        { name: 'Alimentazione', value: 1678, color: '#3b82f6' },
        { name: 'Turismo Sost.', value: 923, color: '#10b981' }
      ],
      trendData: [
        { month: 'Gen', count: 2000 },
        { month: 'Feb', count: 2200 },
        { month: 'Mar', count: 2456 }
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
      const newItem = {
        id: Math.max(...welfareItems.map(item => item.id)) + 1,
        tipo: newWelfareItem.tipo,
        nome: newWelfareItem.nome,
        valore: newWelfareItem.valore,
        certificatiRichiesti: newWelfareItem.certificatiRichiesti,
        quantitaCertificati: parseInt(newWelfareItem.quantitaCertificati)
      };
      setWelfareItems([...welfareItems, newItem]);
      setNewWelfareItem({
        tipo: '',
        nome: '',
        valore: '',
        certificatiRichiesti: '',
        quantitaCertificati: ''
      });
    }
  };

  const handleAddFollowersReward = () => {
    if (newFollowersReward.tipo && newFollowersReward.nome && newFollowersReward.valore && newFollowersReward.certificatiRichiesti && newFollowersReward.quantitaCertificati) {
      const newReward = {
        id: Math.max(...followersRewards.map(item => item.id)) + 1,
        tipo: newFollowersReward.tipo,
        nome: newFollowersReward.nome,
        valore: newFollowersReward.valore,
        certificatiRichiesti: newFollowersReward.certificatiRichiesti,
        quantitaCertificati: parseInt(newFollowersReward.quantitaCertificati)
      };
      setFollowersRewards([...followersRewards, newReward]);
      setNewFollowersReward({
        tipo: '',
        nome: '',
        valore: '',
        certificatiRichiesti: '',
        quantitaCertificati: ''
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6">
      <LanguageSwitcher />
      
      <div className="max-w-7xl mx-auto">
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
        <MetricsCards 
          certificatiDipendenti={certificatiDipendenti}
          certificatiEsterni={certificatiEsterni}
        />

        {/* Monitoraggio Certificati - Side by Side con Grafici */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <MonitoringSection
            title="Monitoraggio Certificati Dipendenti"
            description="Analisi dei comportamenti sostenibili per strategie di marketing mirate"
            categories={certificateMonitoringCategories}
            icon={<Eye className="h-6 w-6" />}
            chartType="pie"
            gradientFrom="from-green-500"
            gradientTo="to-emerald-500"
            prefix="employee"
          />

          <MonitoringSection
            title="Monitoraggio Certificati Esterni"
            description="Analisi dei comportamenti sostenibili dei followers per strategie di engagement"
            categories={externalCertificateCategories}
            icon={<Globe className="h-6 w-6" />}
            chartType="bar"
            gradientFrom="from-blue-500"
            gradientTo="to-cyan-500"
            prefix="external"
          />
        </div>

        {/* Sezioni Welfare e Premi - Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <WelfareSection
            title="Welfare per Dipendenti"
            description="Premi e benefit in cambio di comportamenti sostenibili certificati"
            icon={<Users className="h-6 w-6" />}
            items={welfareItems}
            newItem={newWelfareItem}
            setNewItem={setNewWelfareItem}
            onAdd={handleAddWelfareItem}
            gradientFrom="from-green-500"
            gradientTo="to-emerald-500"
            bgGradient="to-green-50"
            borderColor="border-green-200"
            focusColor="focus:border-green-400"
            gradientFromHover="from-green-600"
            gradientToHover="to-emerald-600"
            textColor="text-green-700"
            descriptionTextColor="text-green-100"
          />

          <WelfareSection
            title="Premi e Sconti per Followers"
            description="Offerte e sconti per followers in cambio di certificati sostenibili"
            icon={<Globe className="h-6 w-6" />}
            items={followersRewards}
            newItem={newFollowersReward}
            setNewItem={setNewFollowersReward}
            onAdd={handleAddFollowersReward}
            gradientFrom="from-blue-500"
            gradientTo="to-cyan-500"
            bgGradient="to-blue-50"
            borderColor="border-blue-200"
            focusColor="focus:border-blue-400"
            gradientFromHover="from-blue-600"
            gradientToHover="to-cyan-600"
            textColor="text-blue-700"
            descriptionTextColor="text-blue-100"
          />
        </div>

        {/* Pulsante Report Sostenibilità */}
        <ReportDialog
          reportDialogOpen={reportDialogOpen}
          setReportDialogOpen={setReportDialogOpen}
          certificatiDipendenti={certificatiDipendenti}
          certificatiEsterni={certificatiEsterni}
          welfareItems={welfareItems}
        />
      </div>
    </div>
  );
};

export default DashboardAziende;
