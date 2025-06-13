import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QrCode, Camera, Shield, CheckCircle, AlertCircle, Leaf, Eye, EyeOff, Lock, Zap } from "lucide-react";

export const DppVerification = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [dppData, setDppData] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const fileInputRef = useRef(null);

  const handleScan = () => {
    setIsScanning(true);
  };

  const simulateScan = () => {
    const simulatedData = {
      productName: "Scarpe da Corsa EcoRun",
      manufacturer: "GreenStride Tech",
      productId: "GS-ER2024-123",
      manufacturingDate: "2024-01-15",
      materials: [
        { name: "Poliestere Riciclato", percentage: 60 },
        { name: "Gomma Naturale", percentage: 30 },
        { name: "Colla a Base d'Acqua", percentage: 10 },
      ],
      certifications: ["Global Recycled Standard", "Fair Rubber Association"],
      carbonFootprint: "4.5 kg CO2e",
    };
    setDppData(simulatedData);
    setIsScanning(false);
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Here you would typically process the file, e.g., read its contents
      // and then parse the DPP data from it.
      console.log("File uploaded:", file.name);
      // For now, let's simulate setting some DPP data:
      simulateScan();
    }
  };

  const handleFileButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="scan" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-white/80 backdrop-blur-sm">
          <TabsTrigger value="scan" className="text-xs sm:text-sm">
            <QrCode className="h-4 w-4 mr-2" />
            Scansiona
          </TabsTrigger>
          <TabsTrigger value="zkp" className="text-xs sm:text-sm">
            <Shield className="h-4 w-4 mr-2" />
            ZKP
          </TabsTrigger>
          <TabsTrigger value="verification" className="text-xs sm:text-sm">
            <CheckCircle className="h-4 w-4 mr-2" />
            Verifica
          </TabsTrigger>
        </TabsList>

        <TabsContent value="scan" className="space-y-6">
          {/* DPP Example Image */}
          {!dppData && !isScanning && (
            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-blue-50 mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Leaf className="h-5 w-5 text-green-600" />
                  Esempio di Passaporto Digitale del Prodotto
                </CardTitle>
                <CardDescription>
                  Ecco come appare un DPP verificato - scansiona un QR code per iniziare
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center">
                  <img 
                    src="/lovable-uploads/50118bf9-fb46-4bf5-9992-918acf87944d.png" 
                    alt="Esempio DPP - Scarpe da Corsa EcoRun"
                    className="max-w-full h-auto rounded-lg shadow-md border border-gray-200"
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {/* Scanning Interface */}
          {!dppData && (
            <div className="text-center space-y-4">
              {!isScanning ? (
                <Button 
                  onClick={handleScan}
                  className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-3 text-lg"
                >
                  <Camera className="mr-2 h-5 w-5" />
                  Avvia Scansione QR
                </Button>
              ) : (
                <div className="space-y-4">
                  <div className="mx-auto w-64 h-64 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                    <div className="text-center">
                      <Camera className="mx-auto h-12 w-12 text-gray-400 mb-2" />
                      <p className="text-gray-500">Inquadra il QR code</p>
                    </div>
                  </div>
                  <Button 
                    onClick={simulateScan}
                    variant="outline"
                    className="mr-2"
                  >
                    Simula Scansione
                  </Button>
                  <Button 
                    onClick={() => setIsScanning(false)}
                    variant="outline"
                  >
                    Annulla
                  </Button>
                </div>
              )}
            </div>
          )}

          {/* DPP Data Display */}
          {dppData && (
            <div className="space-y-4">
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Prodotto Verificato
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">{dppData.productName}</h3>
                    <p className="text-gray-600">{dppData.manufacturer}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">ID Prodotto</p>
                      <p className="font-mono text-sm">{dppData.productId}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Data Produzione</p>
                      <p className="text-sm">{dppData.manufacturingDate}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-2">Materiali</p>
                    <div className="space-y-1">
                      {dppData.materials.map((material, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span>{material.name}</span>
                          <span className="text-gray-600">{material.percentage}%</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-2">Certificazioni</p>
                    <div className="flex flex-wrap gap-2">
                      {dppData.certifications.map((cert, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-green-800">
                      <strong>Impatto Ambientale:</strong> {dppData.carbonFootprint}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Button 
                onClick={() => setDppData(null)}
                variant="outline"
                className="w-full"
              >
                Scansiona Nuovo Prodotto
              </Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="zkp" className="space-y-6">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-purple-600" />
                Zero-Knowledge Proof (ZKP)
              </CardTitle>
              <CardDescription>
                Verifica la sostenibilità senza rivelare dati sensibili
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Dashboard Example Image */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Eye className="h-4 w-4 text-blue-600" />
                  Esempio Dashboard Virtuosity
                </h4>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <img 
                    src="/lovable-uploads/2b99388d-261a-4949-bbbc-7406f21912ee.png" 
                    alt="Dashboard Virtuosity - Esempio ZKP"
                    className="w-full h-auto rounded-lg shadow-sm"
                  />
                  <p className="text-xs text-gray-600 mt-2 text-center">
                    Esempio di come i dati vengono visualizzati preservando la privacy
                  </p>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="p-4 bg-white rounded-lg border border-purple-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Lock className="h-4 w-4 text-purple-600" />
                    <h4 className="font-semibold">Verifica Privata</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Dimostra che un prodotto rispetta gli standard di sostenibilità senza rivelare i dettagli specifici della produzione.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="h-4 w-4 text-blue-600" />
                    <h4 className="font-semibold">Proof Generation</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Il sistema genera automaticamente prove crittografiche che certificano la conformità agli standard ambientali.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-lg border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <h4 className="font-semibold">Verifica Istantanea</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Chiunque può verificare l'autenticità della certificazione senza accedere ai dati sensibili dell'azienda.
                  </p>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-purple-800">Come Funziona:</h4>
                <ol className="text-sm text-purple-700 space-y-1">
                  <li>1. L'azienda carica i dati di sostenibilità nel sistema</li>
                  <li>2. Il sistema genera una prova ZKP che certifica la conformità</li>
                  <li>3. La prova viene associata al DPP del prodotto</li>
                  <li>4. I consumatori possono verificare la sostenibilità istantaneamente</li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="verification" className="space-y-6">
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Verifica Manuale
              </CardTitle>
              <CardDescription>
                Carica un file per la verifica del passaporto digitale del prodotto
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <Button variant="outline" onClick={handleFileButtonClick}>
                  Carica File
                </Button>
                <input
                  type="file"
                  accept=".json,.xml,.dpp"
                  onChange={handleFileUpload}
                  className="hidden"
                  ref={fileInputRef}
                />
                <p className="text-gray-500 text-sm mt-2">
                  Accetta file .json, .xml, .dpp
                </p>
              </div>
              {dppData && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    Risultato della Verfica:
                  </h3>
                  <p>Prodotto: {dppData.productName}</p>
                  <p>Produttore: {dppData.manufacturer}</p>
                  <p>ID Prodotto: {dppData.productId}</p>
                  <p>Data di Produzione: {dppData.manufacturingDate}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
