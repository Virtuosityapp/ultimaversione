
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, TrendingUp, Users, Star, MapPin, Calendar, Clock, Zap, Target, Trophy, Gift, Coins } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Dashboard = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">
              {language === 'it' ? 'Dashboard Cittadino' : 'Citizen Dashboard'}
            </h1>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
                {language === 'it' ? 'Cittadino Attivo' : 'Active Citizen'}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
          {/* Punti Totali */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-yellow-200 to-yellow-300 text-white hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <CardHeader className="pb-1 sm:pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium text-yellow-800">
                {language === 'it' ? 'Punti Totali' : 'Total Points'}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-lg sm:text-2xl font-bold text-yellow-900">2,847</div>
              <p className="text-xs text-yellow-700 hidden sm:block">
                {language === 'it' ? '+245 questo mese' : '+245 this month'}
              </p>
            </CardContent>
          </Card>

          {/* Progetti Partecipati */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-green-400 to-green-500 text-white hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <CardHeader className="pb-1 sm:pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium text-green-100">
                {language === 'it' ? 'Progetti' : 'Projects'}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-lg sm:text-2xl font-bold">8</div>
              <p className="text-xs text-green-100 hidden sm:block">
                {language === 'it' ? '3 in corso' : '3 ongoing'}
              </p>
            </CardContent>
          </Card>

          {/* Certificati */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-300 to-orange-400 text-white hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <CardHeader className="pb-1 sm:pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium text-orange-100">
                {language === 'it' ? 'Certificati' : 'Certificates'}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-lg sm:text-2xl font-bold">12</div>
              <p className="text-xs text-orange-100 hidden sm:block">
                {language === 'it' ? '2 nuovi certificati' : '2 new certificates'}
              </p>
            </CardContent>
          </Card>

          {/* Ranking */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-400 to-purple-500 text-white hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <CardHeader className="pb-1 sm:pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium text-purple-100">
                {language === 'it' ? 'Ranking' : 'Ranking'}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-lg sm:text-2xl font-bold">#47</div>
              <p className="text-xs text-purple-100 hidden sm:block">
                {language === 'it' ? 'Top 5% cittadini' : 'Top 5% citizens'}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Projects & Activities */}
          <div className="lg:col-span-2 space-y-6">
            {/* Active Projects */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-green-600" />
                  {language === 'it' ? 'Progetti Attivi' : 'Active Projects'}
                </CardTitle>
                <CardDescription>
                  {language === 'it' ? 'I tuoi progetti di economia circolare in corso' : 'Your ongoing circular economy projects'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Users className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">
                        {language === 'it' ? 'Raccolta Differenziata Smart' : 'Smart Waste Collection'}
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">
                        {language === 'it' ? 'Progetto comunitario per ottimizzare la raccolta rifiuti' : 'Community project to optimize waste collection'}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            {language === 'it' ? 'In corso' : 'Active'}
                          </Badge>
                          <span className="text-xs text-gray-500 flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {language === 'it' ? '5 giorni rimasti' : '5 days left'}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-green-600">+150 punti</span>
                      </div>
                      <Progress value={75} className="mt-2" />
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Zap className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">
                        {language === 'it' ? 'Energia Rinnovabile Quartiere' : 'Neighborhood Renewable Energy'}
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">
                        {language === 'it' ? 'Installazione pannelli solari condivisi' : 'Shared solar panel installation'}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                            {language === 'it' ? 'In corso' : 'Active'}
                          </Badge>
                          <span className="text-xs text-gray-500 flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {language === 'it' ? '12 giorni rimasti' : '12 days left'}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-blue-600">+300 punti</span>
                      </div>
                      <Progress value={45} className="mt-2" />
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Gift className="h-4 w-4 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">
                        {language === 'it' ? 'Mercato Locale Sostenibile' : 'Sustainable Local Market'}
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">
                        {language === 'it' ? 'Promozione prodotti locali e zero waste' : 'Promoting local and zero waste products'}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                            {language === 'it' ? 'Pianificazione' : 'Planning'}
                          </Badge>
                          <span className="text-xs text-gray-500 flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {language === 'it' ? 'Inizia il 25 Dic' : 'Starts Dec 25'}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-purple-600">+200 punti</span>
                      </div>
                      <Progress value={20} className="mt-2" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activities */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  {language === 'it' ? 'Attività Recenti' : 'Recent Activities'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <div className="p-2 bg-green-100 rounded-full">
                      <Award className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {language === 'it' ? 'Hai guadagnato 50 punti per aver completato una sfida' : 'You earned 50 points for completing a challenge'}
                      </p>
                      <p className="text-xs text-gray-500">2 ore fa</p>
                    </div>
                    <span className="text-sm font-semibold text-green-600">+50</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <div className="p-2 bg-blue-100 rounded-full">
                      <Users className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {language === 'it' ? 'Ti sei unito al progetto "Compostaggio Comunitario"' : 'You joined the "Community Composting" project'}
                      </p>
                      <p className="text-xs text-gray-500">1 giorno fa</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <div className="p-2 bg-yellow-100 rounded-full">
                      <Trophy className="h-4 w-4 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {language === 'it' ? 'Hai ottenuto il badge "Riciclatore Esperto"' : 'You earned the "Expert Recycler" badge'}
                      </p>
                      <p className="text-xs text-gray-500">3 giorni fa</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Achievements & Challenges */}
          <div className="space-y-6">
            {/* Achievements */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-yellow-600" />
                  {language === 'it' ? 'Risultati' : 'Achievements'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-yellow-100 rounded-full">
                        <Award className="h-4 w-4 text-yellow-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {language === 'it' ? 'Eco Warrior' : 'Eco Warrior'}
                        </p>
                        <p className="text-xs text-gray-500">
                          {language === 'it' ? 'Livello 3' : 'Level 3'}
                        </p>
                      </div>
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-800">
                      {language === 'it' ? 'Nuovo' : 'New'}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-green-100 rounded-full">
                        <Users className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {language === 'it' ? 'Leader Comunitario' : 'Community Leader'}
                        </p>
                        <p className="text-xs text-gray-500">
                          {language === 'it' ? 'Livello 2' : 'Level 2'}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 rounded-full">
                        <Zap className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {language === 'it' ? 'Innovatore Verde' : 'Green Innovator'}
                        </p>
                        <p className="text-xs text-gray-500">
                          {language === 'it' ? 'Livello 1' : 'Level 1'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Current Challenges */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-purple-600" />
                  {language === 'it' ? 'Le Mie Sfide!' : 'My Challenges!'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium text-gray-900">
                        {language === 'it' ? 'Settimana Verde' : 'Green Week'}
                      </h4>
                      <Badge variant="outline" className="text-purple-700 border-purple-300">
                        {language === 'it' ? '3/7 giorni' : '3/7 days'}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">
                      {language === 'it' ? 'Usa solo mezzi sostenibili per una settimana' : 'Use only sustainable transport for a week'}
                    </p>
                    <div className="flex items-center justify-between">
                      <Progress value={43} className="flex-1 mr-2" />
                      <span className="text-xs font-medium text-purple-600">+100 pts</span>
                    </div>
                  </div>

                  <div className="p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium text-gray-900">
                        {language === 'it' ? 'Zero Sprechi' : 'Zero Waste'}
                      </h4>
                      <Badge variant="outline" className="text-green-700 border-green-300">
                        {language === 'it' ? '5/10 azioni' : '5/10 actions'}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">
                      {language === 'it' ? 'Completa 10 azioni anti-spreco' : 'Complete 10 anti-waste actions'}
                    </p>
                    <div className="flex items-center justify-between">
                      <Progress value={50} className="flex-1 mr-2" />
                      <span className="text-xs font-medium text-green-600">+150 pts</span>
                    </div>
                  </div>

                  <div className="p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium text-gray-900">
                        {language === 'it' ? 'Energia Pulita' : 'Clean Energy'}
                      </h4>
                      <Badge variant="outline" className="text-blue-700 border-blue-300">
                        {language === 'it' ? '2/5 installazioni' : '2/5 installs'}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">
                      {language === 'it' ? 'Promuovi 5 installazioni di energia rinnovabile' : 'Promote 5 renewable energy installations'}
                    </p>
                    <div className="flex items-center justify-between">
                      <Progress value={40} className="flex-1 mr-2" />
                      <span className="text-xs font-medium text-blue-600">+200 pts</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                  {language === 'it' ? 'Visualizza Tutte le Sfide' : 'View All Challenges'}
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-orange-600" />
                  {language === 'it' ? 'Azioni Rapide' : 'Quick Actions'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <MapPin className="h-4 w-4 mr-2" />
                    {language === 'it' ? 'Trova Progetti Vicini' : 'Find Nearby Projects'}
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Coins className="h-4 w-4 mr-2" />
                    {language === 'it' ? 'Scambia Punti' : 'Exchange Points'}
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Users className="h-4 w-4 mr-2" />
                    {language === 'it' ? 'Invita Amici' : 'Invite Friends'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
