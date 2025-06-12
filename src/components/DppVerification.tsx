
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { QrCode, Send, Download, CheckCircle, AlertCircle, Clock, Package, Recycle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DppVerification = () => {
  const [qrCode, setQrCode] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<any>(null);
  const { toast } = useToast();

  const handleVerification = async () => {
    if (!qrCode.trim()) {
      toast({
        title: "Errore",
        description: "Inserisci un codice QR valido",
        variant: "destructive"
      });
      return;
    }

    setIsVerifying(true);
    
    // Simulazione verifica
    setTimeout(() => {
      const mockResult = {
        isValid: Math.random() > 0.3,
        productName: "Smartphone EcoTech Pro",
        manufacturer: "EcoTech Industries",
        productionDate: "2024-01-15",
        materials: ["Alluminio riciclato", "Plastica biodegradabile", "Vetro temperato"],
        carbonFootprint: "2.3 kg CO2",
        recyclability: "95%",
        certifications: ["Energy Star", "EPEAT Gold", "Cradle to Cradle"]
      };
      
      setVerificationResult(mockResult);
      setIsVerifying(false);
      
      if (mockResult.isValid) {
        toast({
          title: "Verifica completata",
          description: "DPP validato con successo",
        });
      } else {
        toast({
          title: "Verifica fallita",
          description: "DPP non valido o non trovato",
          variant: "destructive"
        });
      }
    }, 2000);
  };

  const handleReceiveDpp = () => {
    toast({
      title: "Ricevi DPP",
      description: "Funzionalità di ricezione DPP avviata",
    });
  };

  const handleSendDpp = () => {
    toast({
      title: "Invia DPP",
      description: "Funzionalità di invio DPP avviata",
    });
  };

  return (
    <div className="space-y-6">
      {/* Sezione Azioni DPP */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="h-5 w-5" />
            Gestione DPP Prodotti
          </CardTitle>
          <CardDescription>
            Ricevi o invia Digital Product Passport per i tuoi prodotti
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <Button 
              onClick={handleReceiveDpp}
              className="h-20 flex flex-col gap-2"
              variant="outline"
            >
              <Download className="h-6 w-6" />
              <span>Ricevi DPP Prodotto</span>
            </Button>
            
            <Button 
              onClick={handleSendDpp}
              className="h-20 flex flex-col gap-2"
              variant="outline"
            >
              <Send className="h-6 w-6" />
              <span>Invia DPP Prodotto</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Sezione Verifica DPP */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <QrCode className="h-5 w-5" />
            Verifica DPP
          </CardTitle>
          <CardDescription>
            Scansiona o inserisci il codice QR per verificare l'autenticità del Digital Product Passport
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="qr-code">Codice QR o ID Prodotto</Label>
            <Input
              id="qr-code"
              placeholder="Inserisci il codice QR o scansiona"
              value={qrCode}
              onChange={(e) => setQrCode(e.target.value)}
            />
          </div>
          
          <Button 
            onClick={handleVerification} 
            disabled={isVerifying}
            className="w-full"
          >
            {isVerifying ? (
              <>
                <Clock className="h-4 w-4 mr-2 animate-spin" />
                Verifica in corso...
              </>
            ) : (
              <>
                <QrCode className="h-4 w-4 mr-2" />
                Verifica DPP
              </>
            )}
          </Button>

          {verificationResult && (
            <Card className={`mt-4 ${verificationResult.isValid ? 'border-green-200' : 'border-red-200'}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {verificationResult.isValid ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-red-600" />
                  )}
                  {verificationResult.isValid ? 'DPP Verificato' : 'DPP Non Valido'}
                </CardTitle>
              </CardHeader>
              
              {verificationResult.isValid && (
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold">Prodotto</h4>
                      <p>{verificationResult.productName}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Produttore</h4>
                      <p>{verificationResult.manufacturer}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Data Produzione</h4>
                      <p>{verificationResult.productionDate}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Impronta Carbonio</h4>
                      <p>{verificationResult.carbonFootprint}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Materiali</h4>
                    <div className="flex flex-wrap gap-2">
                      {verificationResult.materials.map((material: string, index: number) => (
                        <Badge key={index} variant="secondary">{material}</Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Certificazioni</h4>
                    <div className="flex flex-wrap gap-2">
                      {verificationResult.certifications.map((cert: string, index: number) => (
                        <Badge key={index} variant="outline">{cert}</Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Recycle className="h-4 w-4 text-green-600" />
                    <span className="font-semibold">Riciclabilità: {verificationResult.recyclability}</span>
                  </div>
                </CardContent>
              )}
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default DppVerification;
