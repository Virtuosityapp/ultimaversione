
import React from 'react';
import { Building2, Users, Leaf, RefreshCw, ArrowRightLeft, Repeat } from 'lucide-react';

const CircularityIcons = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
          Il Ciclo della Sostenibilità
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
          Un ecosistema circolare dove comuni, aziende e cittadini collaborano per creare valore sostenibile condiviso
        </p>
      </div>

      {/* Main Circular Flow */}
      <div className="relative mb-8 sm:mb-16">
        {/* Central Circle - Virtuosity Platform */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-gradient-to-br from-green-500 to-blue-500 rounded-full p-4 sm:p-6 shadow-xl">
            <RefreshCw className="w-6 h-6 sm:w-8 sm:h-8 text-white animate-spin" style={{
              animationDuration: '8s'
            }} />
          </div>
        </div>

        {/* Circular Icons Layout - Reduced size */}
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto">
          
          {/* Municipalities - Top */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
            <div className="bg-blue-100 rounded-full p-3 sm:p-4 shadow-lg border-2 sm:border-4 border-blue-200 hover:shadow-xl transition-all duration-300">
              <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            </div>
            <div className="text-center mt-1 sm:mt-2">
              <h4 className="font-semibold text-gray-900 text-xs sm:text-sm">Comuni</h4>
              <p className="text-xs text-gray-600 hidden sm:block">Smart City</p>
            </div>
          </div>

          {/* Companies - Right */}
          <div className="absolute top-1/2 right-0 transform translate-x-2 -translate-y-1/2">
            <div className="bg-sky-100 rounded-full p-3 sm:p-4 shadow-lg border-2 sm:border-4 border-sky-200 hover:shadow-xl transition-all duration-300">
              <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-sky-600" />
            </div>
            <div className="text-center mt-1 sm:mt-2">
              <h4 className="font-semibold text-gray-900 text-xs sm:text-sm">Aziende</h4>
              <p className="text-xs text-gray-600 hidden sm:block">Sostenibilità</p>
            </div>
          </div>

          {/* Citizens - Bottom */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2">
            <div className="bg-green-100 rounded-full p-3 sm:p-4 shadow-lg border-2 sm:border-4 border-green-200 hover:shadow-xl transition-all duration-300">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
            </div>
            <div className="text-center mt-1 sm:mt-2">
              <h4 className="font-semibold text-gray-900 text-xs sm:text-sm">Cittadini</h4>
              <p className="text-xs text-gray-600 hidden sm:block">Comportamenti</p>
            </div>
          </div>

          {/* Environment/Impact - Left */}
          <div className="absolute top-1/2 left-0 transform -translate-x-2 -translate-y-1/2">
            <div className="bg-emerald-100 rounded-full p-3 sm:p-4 shadow-lg border-2 sm:border-4 border-emerald-200 hover:shadow-xl transition-all duration-300">
              <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
            </div>
            <div className="text-center mt-1 sm:mt-2">
              <h4 className="font-semibold text-gray-900 text-xs sm:text-sm">Ambiente</h4>
              <p className="text-xs text-gray-600 hidden sm:block">Impatto</p>
            </div>
          </div>

          {/* Flow Arrows - Smaller and hidden on mobile */}
          <div className="hidden sm:block absolute top-12 right-12">
            <ArrowRightLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 rotate-45" />
          </div>
          <div className="hidden sm:block absolute bottom-12 right-12">
            <ArrowRightLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 rotate-135" />
          </div>
          <div className="hidden sm:block absolute bottom-12 left-12">
            <ArrowRightLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 rotate-225" />
          </div>
          <div className="hidden sm:block absolute top-12 left-12">
            <ArrowRightLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 rotate-315" />
          </div>
        </div>
      </div>

      {/* Explanation Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg border border-blue-200">
          <div className="flex items-center mb-2 sm:mb-3">
            <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-2" />
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Comuni</h3>
          </div>
          <p className="text-xs sm:text-sm text-gray-600">
            Implementano politiche sostenibili, monitorano l'impatto ambientale e incentivano comportamenti virtuosi
          </p>
        </div>

        <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg border border-sky-200">
          <div className="flex items-center mb-2 sm:mb-3">
            <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-sky-600 mr-2" />
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Aziende</h3>
          </div>
          <p className="text-xs sm:text-sm text-gray-600">
            Promuovono sostenibilità aziendale, coinvolgono dipendenti e misurano il proprio impatto ESG
          </p>
        </div>

        <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg border border-green-200">
          <div className="flex items-center mb-2 sm:mb-3">
            <Users className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mr-2" />
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Cittadini</h3>
          </div>
          <p className="text-xs sm:text-sm text-gray-600">
            Adottano comportamenti sostenibili, guadagnano punti e contribuiscono al cambiamento collettivo
          </p>
        </div>

        <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg border border-emerald-200">
          <div className="flex items-center mb-2 sm:mb-3">
            <Repeat className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 mr-2" />
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Circolarità</h3>
          </div>
          <p className="text-xs sm:text-sm text-gray-600">
            Ogni azione genera valore per tutti gli attori, creando un ciclo virtuoso di sostenibilità
          </p>
        </div>
      </div>
    </div>
  );
};

export default CircularityIcons;
