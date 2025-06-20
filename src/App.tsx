import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import DashboardAziende from "./pages/DashboardAziende";
import Exchange from "./pages/Exchange";
import About from "./pages/About";
import Comuni from "./pages/Comuni";
import Report from "./pages/Report";
import NotFound from "./pages/NotFound";
import DigitalWarrantyUpload from "./pages/DigitalWarrantyUpload";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard-aziende" element={<DashboardAziende />} />
            <Route path="/exchange" element={<Exchange />} />
            <Route path="/marketplace" element={<Exchange />} />
            <Route path="/comuni" element={<Comuni />} />
            <Route path="/about" element={<About />} />
            <Route path="/report" element={<Report />} />
            <Route path="/digital-warranty-upload" element={<DigitalWarrantyUpload />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
