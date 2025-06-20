
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Download, FileText, Gift, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Skeleton } from "@/components/ui/skeleton";

interface DashboardAziendeProps {
}

const CircularProgress = ({ value, children }: { value: number; children: React.ReactNode }) => {
  const circumference = 2 * Math.PI * 45;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="relative w-24 h-24">
      <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="currentColor"
          strokeWidth="8"
          fill="transparent"
          className="text-gray-200"
        />
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="currentColor"
          strokeWidth="8"
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          className="text-green-400"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

const DashboardAziende: React.FC<DashboardAziendeProps> = () => {
  const { toast } = useToast()
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard Azienda</h1>

      {/* Riepilogo Rapido */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-blue-50 text-blue-700 shadow">
          <CardHeader>
            <CardTitle>Dipendenti Attivi</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">150</div>
            <p className="text-sm text-muted-foreground">Ultimo aggiornamento: oggi</p>
          </CardContent>
        </Card>

        <Card className="bg-green-50 text-green-700 shadow">
          <CardHeader>
            <CardTitle>Budget Rimanente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">€ 15.000</div>
            <p className="text-sm text-muted-foreground">Del budget annuale</p>
          </CardContent>
        </Card>

        <Card className="bg-yellow-50 text-yellow-700 shadow">
          <CardHeader>
            <CardTitle>Nuove Iscrizioni</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">25</div>
            <p className="text-sm text-muted-foreground">Questo mese</p>
          </CardContent>
        </Card>
      </div>

      {/* Grafici di monitoraggio */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="shadow">
          <CardHeader>
            <CardTitle>Utilizzo Premi</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Inserire grafico utilizzo premi */}
            <Skeleton className="w-full h-32" />
          </CardContent>
        </Card>

        <Card className="shadow">
          <CardHeader>
            <CardTitle>Soddisfazione Dipendenti</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Inserire grafico soddisfazione dipendenti */}
            <Skeleton className="w-full h-32" />
          </CardContent>
        </Card>
      </div>

      {/* Tre blocchi colorati posizionati orizzontalmente e ridotti */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {/* Caricamento Premi e Sconti - Verde */}
        <Card className="bg-gradient-to-br from-green-400 to-green-600 text-white p-4">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Gift className="h-5 w-5" />
              Caricamento Premi e Sconti
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-green-100">
              Carica i premi e gli sconti per i tuoi dipendenti.
            </p>
            <Button
              variant="secondary"
              className="w-full bg-white text-green-600 hover:bg-green-50"
              size="sm"
            >
              <Upload className="mr-2 h-4 w-4" />
              Carica File
            </Button>
          </CardContent>
        </Card>

        {/* Caricamento DPP Aziendali - Viola */}
        <Card className="bg-gradient-to-br from-purple-400 to-purple-600 text-white p-4">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Caricamento DPP Aziendali
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-purple-100">
              Carica i Documenti di Prodotto Digitali della tua azienda.
            </p>
            <Button
              variant="secondary"
              className="w-full bg-white text-purple-600 hover:bg-purple-50"
              size="sm"
            >
              <Upload className="mr-2 h-4 w-4" />
              Carica DPP
            </Button>
          </CardContent>
        </Card>

        {/* Report Bilancio - Arancio */}
        <Card className="bg-gradient-to-br from-orange-400 to-orange-600 text-white p-4">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Report Bilancio
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-orange-100">
              Visualizza e scarica i report del bilancio aziendale.
            </p>
            <Button
              variant="secondary"
              className="w-full bg-white text-orange-600 hover:bg-orange-50"
              size="sm"
            >
              <Download className="mr-2 h-4 w-4" />
              Scarica Report
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Circolarità cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="bg-white text-gray-700 shadow">
          <CardHeader>
            <CardTitle>
              <Badge variant="secondary">
                #plasticfree
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CircularProgress value={70}>
              <span className="text-sm font-semibold">70%</span>
            </CircularProgress>
          </CardContent>
        </Card>

        <Card className="bg-white text-gray-700 shadow">
          <CardHeader>
            <CardTitle>
              <Badge variant="secondary">
                #zerowaste
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CircularProgress value={30}>
              <span className="text-sm font-semibold">30%</span>
            </CircularProgress>
          </CardContent>
        </Card>

        <Card className="bg-white text-gray-700 shadow">
          <CardHeader>
            <CardTitle>
              <Badge variant="secondary">
                #reuse
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CircularProgress value={50}>
              <span className="text-sm font-semibold">50%</span>
            </CircularProgress>
          </CardContent>
        </Card>

        <Card className="bg-white text-gray-700 shadow">
          <CardHeader>
            <CardTitle>
              <Badge variant="secondary">
                #riciclo
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CircularProgress value={90}>
              <span className="text-sm font-semibold">90%</span>
            </CircularProgress>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-4" />

      <div className="w-full max-w-sm">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[280px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      <footer className="mt-8 text-center text-sm text-gray-500">
        <p>&copy; 2023 Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default DashboardAziende;
