
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface WelfareItem {
  tipo: string;
  nome: string;
  valore: string;
  certificatiRichiesti: string;
  quantitaCertificati: string;
}

interface WelfareFormProps {
  newItem: WelfareItem;
  setNewItem: (item: WelfareItem) => void;
  onAdd: () => void;
  borderColor: string;
  focusColor: string;
  gradientFrom: string;
  gradientTo: string;
  gradientFromHover: string;
  gradientToHover: string;
  textColor: string;
}

const WelfareForm = ({ 
  newItem, 
  setNewItem, 
  onAdd, 
  borderColor, 
  focusColor, 
  gradientFrom, 
  gradientTo, 
  gradientFromHover, 
  gradientToHover, 
  textColor 
}: WelfareFormProps) => {
  const { t } = useLanguage();

  return (
    <div className={`grid grid-cols-1 gap-4 mb-6 p-4 border-2 border-dashed ${borderColor} rounded-xl bg-gradient-to-r from-opacity-50 to-opacity-50`}>
      <div>
        <Label htmlFor="tipo" className={`${textColor} font-medium`}>{t('type')}</Label>
        <Input
          id="tipo"
          placeholder="Premio/Viaggio/Gadget/Sconto"
          value={newItem.tipo}
          onChange={(e) => setNewItem({...newItem, tipo: e.target.value})}
          className={`${borderColor} ${focusColor}`}
        />
      </div>
      <div>
        <Label htmlFor="nome" className={`${textColor} font-medium`}>{t('name')}</Label>
        <Input
          id="nome"
          placeholder="Nome del premio"
          value={newItem.nome}
          onChange={(e) => setNewItem({...newItem, nome: e.target.value})}
          className={`${borderColor} ${focusColor}`}
        />
      </div>
      <div>
        <Label htmlFor="valore" className={`${textColor} font-medium`}>{t('value')}</Label>
        <Input
          id="valore"
          placeholder="€ 0 / %"
          value={newItem.valore}
          onChange={(e) => setNewItem({...newItem, valore: e.target.value})}
          className={`${borderColor} ${focusColor}`}
        />
      </div>
      <div>
        <Label htmlFor="certificati" className={`${textColor} font-medium`}>Tipo Certificati</Label>
        <Input
          id="certificati"
          placeholder="Es. Risparmio Energetico"
          value={newItem.certificatiRichiesti}
          onChange={(e) => setNewItem({...newItem, certificatiRichiesti: e.target.value})}
          className={`${borderColor} ${focusColor}`}
        />
      </div>
      <div>
        <Label htmlFor="quantita" className={`${textColor} font-medium`}>Quantità Certificati</Label>
        <Input
          id="quantita"
          type="number"
          placeholder="0"
          value={newItem.quantitaCertificati}
          onChange={(e) => setNewItem({...newItem, quantitaCertificati: e.target.value})}
          className={`${borderColor} ${focusColor}`}
        />
      </div>
      <Button 
        onClick={onAdd} 
        className={`w-full bg-gradient-to-r ${gradientFrom} ${gradientTo} hover:${gradientFromHover} hover:${gradientToHover} text-white shadow-lg`}
      >
        <Upload className="mr-2 h-4 w-4" />
        {t('add')}
      </Button>
    </div>
  );
};

export default WelfareForm;
