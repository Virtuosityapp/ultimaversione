
import React from 'react';
import { Building2, Users, Leaf, RefreshCw, ArrowRightLeft, Repeat } from 'lucide-react';

const CircularityIcons = () => {
  return (
    <div className="mb-8 max-w-4xl mx-auto px-4">
      <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
        Economia Circolare in Azione
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        <div className="flex flex-col items-center p-4 bg-white/60 backdrop-blur-sm rounded-lg hover:bg-white/80 transition-all duration-300">
          <Building2 className="h-8 w-8 text-blue-600 mb-2" />
          <span className="text-sm font-medium text-gray-700">Aziende</span>
        </div>
        
        <div className="flex flex-col items-center p-4 bg-white/60 backdrop-blur-sm rounded-lg hover:bg-white/80 transition-all duration-300">
          <Users className="h-8 w-8 text-green-600 mb-2" />
          <span className="text-sm font-medium text-gray-700">Comunità</span>
        </div>
        
        <div className="flex flex-col items-center p-4 bg-white/60 backdrop-blur-sm rounded-lg hover:bg-white/80 transition-all duration-300">
          <Leaf className="h-8 w-8 text-emerald-600 mb-2" />
          <span className="text-sm font-medium text-gray-700">Sostenibilità</span>
        </div>
        
        <div className="flex flex-col items-center p-4 bg-white/60 backdrop-blur-sm rounded-lg hover:bg-white/80 transition-all duration-300">
          <RefreshCw className="h-8 w-8 text-cyan-600 mb-2" />
          <span className="text-sm font-medium text-gray-700">Riciclo</span>
        </div>
        
        <div className="flex flex-col items-center p-4 bg-white/60 backdrop-blur-sm rounded-lg hover:bg-white/80 transition-all duration-300">
          <ArrowRightLeft className="h-8 w-8 text-purple-600 mb-2" />
          <span className="text-sm font-medium text-gray-700">Scambio</span>
        </div>
        
        <div className="flex flex-col items-center p-4 bg-white/60 backdrop-blur-sm rounded-lg hover:bg-white/80 transition-all duration-300">
          <Repeat className="h-8 w-8 text-orange-600 mb-2" />
          <span className="text-sm font-medium text-gray-700">Riuso</span>
        </div>
      </div>
    </div>
  );
};

export default CircularityIcons;
