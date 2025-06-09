
import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { QrCode, Camera, MapPin, Leaf, Shield, Truck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DppData {
  id: string;
  name: string;
  brand: string;
  origin: {
    country: string;
    region: string;
    coordinates: [number, number];
  };
  sustainability: {
    score: number;
    certifications: string[];
    carbonFootprint: string;
    recyclable: boolean;
  };
  supply_chain: {
    manufacturer: string;
    production_date: string;
    batch_number: string;
    transport_method: string;
  };
  verified: boolean;
  verification_date: string;
}

export const DppVerification = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [dppData, setDppData] = useState<DppData | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  // Mock DPP data for demonstration
  const mockDppData: DppData = {
    id: "DPP-2024-001234",
    name: "Scarpe da Corsa EcoRun",
    brand: "GreenStep",
    origin: {
      country: "Italia",
      region: "Toscana, Firenze",
      coordinates: [11.2558, 43.7696]
    },
    sustainability: {
      score: 85,
      certifications: ["EU Ecolabel", "OEKO-TEX", "Carbon Neutral"],
      carbonFootprint: "2.3 kg CO₂",
      recyclable: true
    },
    supply_chain: {
      manufacturer: "EcoFootwear S.r.l.",
      production_date: "2024-01-15",
      batch_number: "EF2024-A001",
      transport_method: "Trasporto elettrico"
    },
    verified: true,
    verification_date: "2024-01-15T10:30:00Z"
  };

  const handleScanQR = () => {
    setIsScanning(true);
    // Simulate scanning process
    setTimeout(() => {
      setIsScanning(false);
      setDppData(mockDppData);
      toast({
        title: "QR Code Scansionato!",
        description: "Informazioni del prodotto caricate con successo.",
      });
    }, 2000);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsScanning(true);
      // Simulate QR code reading from image
      setTimeout(() => {
        setIsScanning(false);
        setDppData(mockDppData);
        toast({
          title: "QR Code Riconosciuto!",
          description: "Informazioni del prodotto estratte dall'immagine.",
        });
      }, 1500);
    }
  };

  const getSustainabilityColor = (score: number) => {
    if (score >= 80) return "text-green-600 bg-green-100";
    if (score >= 60) return "text-yellow-600 bg-yellow-100";
    return "text-red-600 bg-red-100";
  };

  return (
    <div className="space-y-6">
      {/* Scanning Interface */}
      {!dppData && (
        <div className="text-center space-y-4">
          <div className="w-48 h-48 mx-auto bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
            {isScanning ? (
              <div className="animate-pulse">
                <QrCode className="h-16 w-16 text-green-600" />
                <p className="text-sm text-gray-600 mt-2">Scansionando...</p>
              </div>
            ) : (
              <div>
                <QrCode className="h-16 w-16 text-gray-400 mx-auto" />
                <p className="text-sm text-gray-500 mt-2">Inquadra il QR Code</p>
              </div>
            )}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              onClick={handleScanQR} 
              disabled={isScanning}
              className="bg-green-600 hover:bg-green-700"
            >
              <Camera className="h-4 w-4 mr-2" />
              {isScanning ? "Scansionando..." : "Scansiona QR Code"}
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => fileInputRef.current?.click()}
              disabled={isScanning}
            >
              <QrCode className="h-4 w-4 mr-2" />
              Carica Immagine
            </Button>
          </div>
          
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />
        </div>
      )}

      {/* Product Information */}
      {dppData && (
        <div className="space-y-4">
          {/* Product Header */}
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start space-y-2 sm:space-y-0">
                <div>
                  <CardTitle className="text-xl text-green-800">{dppData.name}</CardTitle>
                  <CardDescription className="text-green-600">
                    {dppData.brand} • ID: {dppData.id}
                  </CardDescription>
                </div>
                <Badge className="bg-green-100 text-green-800 w-fit">
                  {dppData.verified ? "✓ Verificato" : "⚠ Non Verificato"}
                </Badge>
              </div>
            </CardHeader>
          </Card>

          {/* Origin Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                Origine del Prodotto
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Paese di Origine</p>
                  <p className="font-semibold">{dppData.origin.country}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Regione</p>
                  <p className="font-semibold">{dppData.origin.region}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Produttore</p>
                  <p className="font-semibold">{dppData.supply_chain.manufacturer}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Data di Produzione</p>
                  <p className="font-semibold">{new Date(dppData.supply_chain.production_date).toLocaleDateString('it-IT')}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sustainability Score */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="h-5 w-5 text-green-600" />
                Punteggio Sostenibilità
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Punteggio Generale</span>
                  <Badge className={getSustainabilityColor(dppData.sustainability.score)}>
                    {dppData.sustainability.score}/100
                  </Badge>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Impronta Carbonica</p>
                    <p className="font-semibold">{dppData.sustainability.carbonFootprint}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Riciclabile</p>
                    <p className="font-semibold">{dppData.sustainability.recyclable ? "Sì" : "No"}</p>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-gray-600 mb-2">Certificazioni</p>
                  <div className="flex flex-wrap gap-2">
                    {dppData.sustainability.certifications.map((cert, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Supply Chain */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-purple-600" />
                Filiera Produttiva
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Numero Lotto</p>
                  <p className="font-semibold font-mono">{dppData.supply_chain.batch_number}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Metodo di Trasporto</p>
                  <p className="font-semibold">{dppData.supply_chain.transport_method}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              onClick={() => setDppData(null)}
              variant="outline"
              className="w-full sm:w-auto"
            >
              Scansiona Nuovo Prodotto
            </Button>
            <Button 
              className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto"
            >
              <Shield className="h-4 w-4 mr-2" />
              Verifica su Blockchain
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
