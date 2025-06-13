
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, UserCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface MetricsCardsProps {
  certificatiDipendenti: number;
  certificatiEsterni: number;
}

const MetricsCards = ({ certificatiDipendenti, certificatiEsterni }: MetricsCardsProps) => {
  const { t } = useLanguage();

  return (
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
  );
};

export default MetricsCards;
