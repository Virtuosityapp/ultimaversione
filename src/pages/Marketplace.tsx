import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Leaf, Gift, Star, ShoppingCart, ArrowLeft, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Marketplace = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const rewards = [
    {
      id: 1,
      title: "Buono Pasto €10",
      description: "Buono spendibile in mense aziendali partner",
      cost: 250,
      category: "corporate",
      image: "🍽️",
      availability: "Disponibile",
      provider: "Corporate Benefits"
    },
    {
      id: 2,
      title: "Biglietto Metro Gratuito",
      description: "Viaggio gratuito su tutta la rete ATM Milano",
      cost: 80,
      category: "transport",
      image: "🚇",
      availability: "Limitato",
      provider: "ATM Milano"
    },
    {
      id: 3,
      title: "Ingresso Museo Gratuito",
      description: "Accesso gratuito ai musei civici di Milano",
      cost: 150,
      category: "culture",
      image: "🏛️",
      availability: "Disponibile",
      provider: "Comune di Milano"
    },
    {
      id: 4,
      title: "Gift Card Amazon €20",
      description: "Spendibile su tutti i prodotti Amazon",
      cost: 500,
      category: "shopping",
      image: "🛒",
      availability: "Disponibile",
      provider: "Amazon"
    },
    {
      id: 5,
      title: "Giorno di Permesso Extra",
      description: "Un giorno di permesso aggiuntivo retribuito",
      cost: 800,
      category: "corporate",
      image: "🏖️",
      availability: "Limitato",
      provider: "HR Department"
    },
    {
      id: 6,
      title: "Bike Sharing Premium",
      description: "30 giorni di bike sharing illimitato",
      cost: 300,
      category: "transport",
      image: "🚴",
      availability: "Disponibile",
      provider: "Mobike"
    }
  ];

  const userPoints = 1275;

  const handleRedeem = (reward: any) => {
    if (userPoints >= reward.cost) {
      toast({
        title: "Riscatto Completato! 🎉",
        description: `Hai riscattato: ${reward.title}. Riceverai istruzioni via email.`,
      });
    } else {
      toast({
        title: "Punti Insufficienti",
        description: `Ti servono ${reward.cost - userPoints} punti in più per questo premio.`,
        variant: "destructive",
      });
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      corporate: "bg-blue-100 text-blue-800",
      transport: "bg-green-100 text-green-800",
      culture: "bg-purple-100 text-purple-800",
      shopping: "bg-orange-100 text-orange-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  const getCategoryName = (category: string) => {
    const names = {
      corporate: "Aziendale",
      transport: "Trasporti",
      culture: "Cultura",
      shopping: "Shopping"
    };
    return names[category as keyof typeof names] || category;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Button 
                variant="ghost" 
                onClick={() => navigate("/dashboard")}
                className="mr-1 sm:mr-2 p-2 sm:p-3"
                size="sm"
              >
                <ArrowLeft className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Dashboard</span>
              </Button>
              <img 
                src="/lovable-uploads/5930bd4d-6869-4b7d-8020-e58372708f8a.png" 
                alt="Virtuosity Logo" 
                className="relative h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16 mx-auto object-contain"
              />
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Marketplace
              </h1>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full font-bold text-sm sm:text-base">
                💎 {userPoints}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Welcome Section */}
        <div className="mb-6 sm:mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Scambia i Tuoi Punti 🎁</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Hai guadagnato punti con le tue azioni sostenibili. È ora di trasformarli in premi reali!
          </p>
        </div>

        {/* Points Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-green-400 to-emerald-500 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-green-100">Punti Disponibili</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold">{userPoints}</div>
              <p className="text-xs text-green-100">Guadagnati con 24 attività</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-400 to-cyan-500 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-blue-100">Premi Riscattati</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold">8</div>
              <p className="text-xs text-blue-100">Questo mese</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-400 to-pink-500 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-purple-100">Livello VIP</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg sm:text-2xl font-bold">ECO EXPERT</div>
              <p className="text-xs text-purple-100">Sconti del 15%</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="all" className="space-y-4 sm:space-y-6">
          <TabsList className="grid w-full grid-cols-3 sm:grid-cols-5 bg-white/80 backdrop-blur-sm text-xs sm:text-sm">
            <TabsTrigger value="all" className="px-2 sm:px-4">Tutti</TabsTrigger>
            <TabsTrigger value="corporate" className="px-1 sm:px-4">Azienda</TabsTrigger>
            <TabsTrigger value="transport" className="px-1 sm:px-4">Trasporti</TabsTrigger>
            <TabsTrigger value="culture" className="px-1 sm:px-4 hidden sm:block">Cultura</TabsTrigger>
            <TabsTrigger value="shopping" className="px-1 sm:px-4 hidden sm:block">Shopping</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {rewards.map((reward) => (
                <Card key={reward.id} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start mb-2">
                      <div className="text-3xl sm:text-4xl">{reward.image}</div>
                      <Badge className={getCategoryColor(reward.category)}>
                        {getCategoryName(reward.category)}
                      </Badge>
                    </div>
                    <CardTitle className="text-base sm:text-lg">{reward.title}</CardTitle>
                    <CardDescription className="text-sm">{reward.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Costo</span>
                        <span className="font-bold text-base sm:text-lg text-blue-600">{reward.cost} punti</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Disponibilità</span>
                        <Badge variant={reward.availability === "Disponibile" ? "default" : "secondary"}>
                          {reward.availability}
                        </Badge>
                      </div>
                      
                      <div className="text-xs text-gray-500">
                        Partner: {reward.provider}
                      </div>
                      
                      <Button 
                        className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700 text-sm sm:text-base"
                        onClick={() => handleRedeem(reward)}
                        disabled={userPoints < reward.cost}
                        size="sm"
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        {userPoints >= reward.cost ? "Riscatta Ora" : "Punti Insufficienti"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Category specific tabs */}
          {["corporate", "transport", "culture", "shopping"].map((category) => (
            <TabsContent key={category} value={category} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {rewards.filter(reward => reward.category === category).map((reward) => (
                  <Card key={reward.id} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start mb-2">
                        <div className="text-3xl sm:text-4xl">{reward.image}</div>
                        <Badge className={getCategoryColor(reward.category)}>
                          {getCategoryName(reward.category)}
                        </Badge>
                      </div>
                      <CardTitle className="text-base sm:text-lg">{reward.title}</CardTitle>
                      <CardDescription className="text-sm">{reward.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Costo</span>
                          <span className="font-bold text-base sm:text-lg text-blue-600">{reward.cost} punti</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Disponibilità</span>
                          <Badge variant={reward.availability === "Disponibile" ? "default" : "secondary"}>
                            {reward.availability}
                          </Badge>
                        </div>
                        
                        <div className="text-xs text-gray-500">
                          Partner: {reward.provider}
                        </div>
                        
                        <Button 
                          className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700 text-sm sm:text-base"
                          onClick={() => handleRedeem(reward)}
                          disabled={userPoints < reward.cost}
                          size="sm"
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          {userPoints >= reward.cost ? "Riscatta Ora" : "Punti Insufficienti"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Bottom Info */}
        <div className="mt-8 sm:mt-12 bg-white/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 border-l-4 border-green-500">
          <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">💡 Come Funziona</h3>
          <p className="text-gray-600 text-xs sm:text-sm">
            I punti vengono guadagnati automaticamente attraverso le tue azioni sostenibili. 
            Ogni certificato blockchain validato ti dà diritto a premi esclusivi. 
            Più sei sostenibile, più premi puoi ottenere!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
