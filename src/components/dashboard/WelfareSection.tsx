
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import WelfareForm from './WelfareForm';
import WelfareGrid from './WelfareGrid';

interface WelfareItem {
  id: number;
  tipo: string;
  nome: string;
  valore: string;
  certificatiRichiesti: string;
  quantitaCertificati: number;
}

interface WelfareSectionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  items: WelfareItem[];
  newItem: {
    tipo: string;
    nome: string;
    valore: string;
    certificatiRichiesti: string;
    quantitaCertificati: string;
  };
  setNewItem: (item: any) => void;
  onAdd: () => void;
  gradientFrom: string;
  gradientTo: string;
  bgGradient: string;
  borderColor: string;
  focusColor: string;
  gradientFromHover: string;
  gradientToHover: string;
  textColor: string;
  descriptionTextColor: string;
}

const WelfareSection = ({ 
  title, 
  description, 
  icon, 
  items, 
  newItem, 
  setNewItem, 
  onAdd, 
  gradientFrom, 
  gradientTo, 
  bgGradient, 
  borderColor, 
  focusColor, 
  gradientFromHover, 
  gradientToHover, 
  textColor, 
  descriptionTextColor 
}: WelfareSectionProps) => {
  return (
    <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
      <CardHeader className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white rounded-t-lg`}>
        <CardTitle className="flex items-center gap-2">
          {icon}
          {title}
        </CardTitle>
        <CardDescription className={descriptionTextColor}>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <WelfareForm
          newItem={newItem}
          setNewItem={setNewItem}
          onAdd={onAdd}
          borderColor={borderColor}
          focusColor={focusColor}
          gradientFrom={gradientFrom}
          gradientTo={gradientTo}
          gradientFromHover={gradientFromHover}
          gradientToHover={gradientToHover}
          textColor={textColor}
        />
        <WelfareGrid items={items} bgGradient={bgGradient} />
      </CardContent>
    </Card>
  );
};

export default WelfareSection;
