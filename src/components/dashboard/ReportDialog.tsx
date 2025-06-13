
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface WelfareItem {
  id: number;
  tipo: string;
  nome: string;
  valore: string;
  certificatiRichiesti: string;
  quantitaCertificati: number;
}

interface ReportDialogProps {
  reportDialogOpen: boolean;
  setReportDialogOpen: (open: boolean) => void;
  certificatiDipendenti: number;
  certificatiEsterni: number;
  welfareItems: WelfareItem[];
}

const ReportDialog = ({ 
  reportDialogOpen, 
  setReportDialogOpen, 
  certificatiDipendenti, 
  certificatiEsterni, 
  welfareItems 
}: ReportDialogProps) => {
  const { t } = useLanguage();

  return (
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
  );
};

export default ReportDialog;
