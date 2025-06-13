
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Gift, Plane, Award, Percent } from 'lucide-react';

interface WelfareItem {
  id: number;
  tipo: string;
  nome: string;
  valore: string;
  certificatiRichiesti: string;
  quantitaCertificati: number;
}

interface WelfareGridProps {
  items: WelfareItem[];
  bgGradient: string;
}

const WelfareGrid = ({ items, bgGradient }: WelfareGridProps) => {
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item) => (
        <div key={item.id} className={`p-4 border-0 rounded-xl shadow-lg bg-gradient-to-br from-white ${bgGradient} hover:shadow-xl transition-shadow`}>
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
  );
};

export default WelfareGrid;
