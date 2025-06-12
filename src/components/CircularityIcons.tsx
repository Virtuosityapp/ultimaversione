
import React from 'react';
import { Building2, Users, Leaf, RefreshCw, ArrowRightLeft, Repeat } from 'lucide-react';

const CircularityIcons = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Il Ciclo della Sostenibilità
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Un ecosistema circolare dove comuni, aziende e cittadini collaborano per creare valore sostenibile condiviso
        </p>
      </div>

      {/* Main Circular Flow */}
      <div className="relative">
        {/* Central Circle - Virtuosity Platform */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-gradient-to-br from-green-500 to-blue-500 rounded-full p-8 shadow-2xl">
            <RefreshCw className="w-12 h-12 text-white animate-spin" style={{animationDuration: '8s'}} />
          </div>
          <div className="absolute top-full mt-4 text-center">
            <h3 className="text-xl font-bold text-gray-900">Virtuosity</h3>
            <p className="text-sm text-gray-600">Piattaforma Centrale</p>
          </div>
        </div>

        {/* Circular Icons Layout */}
        <div className="relative w-96 h-96 mx-auto">
          
          {/* Municipalities - Top */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
            <div className="bg-blue-100 rounded-full p-6 shadow-lg border-4 border-blue-200 hover:shadow-xl transition-all duration-300">
              <Building2 className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-center mt-2">
              <h4 className="font-semibold text-gray-900">Comuni</h4>
              <p className="text-xs text-gray-600">Smart City</p>
            </div>
          </div>

          {/* Companies - Right */}
          <div className="absolute top-1/2 right-0 transform translate-x-4 -translate-y-1/2">
            <div className="bg-sky-100 rounded-full p-6 shadow-lg border-4 border-sky-200 hover:shadow-xl transition-all duration-300">
              <Building2 className="w-8 h-8 text-sky-600" />
            </div>
            <div className="text-center mt-2">
              <h4 className="font-semibold text-gray-900">Aziende</h4>
              <p className="text-xs text-gray-600">Sostenibilità</p>
            </div>
          </div>

          {/* Citizens - Bottom */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4">
            <div className="bg-green-100 rounded-full p-6 shadow-lg border-4 border-green-200 hover:shadow-xl transition-all duration-300">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <div className="text-center mt-2">
              <h4 className="font-semibold text-gray-900">Cittadini</h4>
              <p className="text-xs text-gray-600">Comportamenti</p>
            </div>
          </div>

          {/* Environment/Impact - Left */}
          <div className="absolute top-1/2 left-0 transform -translate-x-4 -translate-y-1/2">
            <div className="bg-emerald-100 rounded-full p-6 shadow-lg border-4 border-emerald-200 hover:shadow-xl transition-all duration-300">
              <Leaf className="w-8 h-8 text-emerald-600" />
            </div>
            <div className="text-center mt-2">
              <h4 className="font-semibold text-gray-900">Ambiente</h4>
              <p className="text-xs text-gray-600">Impatto</p>
            </div>
          </div>

          {/* Flow Arrows */}
          <div className="absolute top-16 right-16">
            <ArrowRightLeft className="w-6 h-6 text-gray-400 rotate-45" />
          </div>
          <div className="absolute bottom-16 right-16">
            <ArrowRightLeft className="w-6 h-6 text-gray-400 rotate-135" />
          </div>
          <div className="absolute bottom-16 left-16">
            <ArrowRightLeft className="w-6 h-6 text-gray-400 rotate-225" />
          </div>
          <div className="absolute top-16 left-16">
            <ArrowRightLeft className="w-6 h-6 text-gray-400 rotate-315" />
          </div>
        </div>
      </div>

      {/* Explanation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        <div className="bg-white rounded-lg p-6 shadow-lg border border-blue-200">
          <div className="flex items-center mb-3">
            <Building2 className="w-6 h-6 text-blue-600 mr-2" />
            <h3 className="font-semibold text-gray-900">Comuni</h3>
          </div>
          <p className="text-sm text-gray-600">
            Implementano politiche sostenibili, monitorano l'impatto ambientale e incentivano comportamenti virtuosi
          </p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-lg border border-sky-200">
          <div className="flex items-center mb-3">
            <Building2 className="w-6 h-6 text-sky-600 mr-2" />
            <h3 className="font-semibold text-gray-900">Aziende</h3>
          </div>
          <p className="text-sm text-gray-600">
            Promuovono sostenibilità aziendale, coinvolgono dipendenti e misurano il proprio impatto ESG
          </p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-lg border border-green-200">
          <div className="flex items-center mb-3">
            <Users className="w-6 h-6 text-green-600 mr-2" />
            <h3 className="font-semibold text-gray-900">Cittadini</h3>
          </div>
          <p className="text-sm text-gray-600">
            Adottano comportamenti sostenibili, guadagnano punti e contribuiscono al cambiamento collettivo
          </p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-lg border border-emerald-200">
          <div className="flex items-center mb-3">
            <Repeat className="w-6 h-6 text-emerald-600 mr-2" />
            <h3 className="font-semibold text-gray-900">Circolarità</h3>
          </div>
          <p className="text-sm text-gray-600">
            Ogni azione genera valore per tutti gli attori, creando un ciclo virtuoso di sostenibilità
          </p>
        </div>
      </div>
    </div>
  );
};

export default CircularityIcons;
