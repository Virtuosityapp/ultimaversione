
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const { t } = useLanguage();

  const companyAdvantages = t('companyAdvantagesList') as string[];
  const municipalityAdvantages = t('municipalityAdvantagesList') as string[];
  const teamMembers = t('teamMembers') as string[];
  const advisors = t('advisors') as string[];
  const roadmapItems = t('roadmapItems') as string[];
  const integrationPartners = t('integrationPartners') as string[];
  const techStack = t('techStack') as {
    frontend: string[];
    blockchain: string[];
    backend: string[];
    compliance: string[];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <LanguageSwitcher />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            {t('aboutValueOfActions')}
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {t('aboutDescription')}
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{t('aboutOurMission')}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('aboutMissionText')}
          </p>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t('aboutHowItWorks')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="font-semibold mb-2">{t('trackingAutomatico')}</h3>
                <p className="text-sm text-gray-600">{t('trackingDesc')}</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">🔗</div>
                <h3 className="font-semibold mb-2">{t('certificazioneBlockchain')}</h3>
                <p className="text-sm text-gray-600">{t('certificazioneDesc')}</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">🎁</div>
                <h3 className="font-semibold mb-2">{t('premiReali')}</h3>
                <p className="text-sm text-gray-600">{t('premiDesc')}</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="font-semibold mb-2">{t('communityGamification')}</h3>
                <p className="text-sm text-gray-600">{t('communityDesc')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certificate Types */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">{t('fourCertificateTypes')}</h2>
          <p className="text-lg text-gray-600 text-center mb-12">{t('certificateTypesDesc')}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-green-50 border-green-200">
              <CardContent className="pt-6">
                <div className="text-3xl mb-4">🌱</div>
                <h3 className="font-semibold mb-2 text-green-800">{t('certificatiCO2')}</h3>
                <p className="text-sm text-green-700">{t('certificatiCO2Desc')}</p>
              </CardContent>
            </Card>
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <div className="text-3xl mb-4">♻️</div>
                <h3 className="font-semibold mb-2 text-blue-800">{t('rifiutiRiciclo')}</h3>
                <p className="text-sm text-blue-700">{t('rifiutiRicicloDesc')}</p>
              </CardContent>
            </Card>
            <Card className="bg-yellow-50 border-yellow-200">
              <CardContent className="pt-6">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="font-semibold mb-2 text-yellow-800">{t('risparmiEnergetico')}</h3>
                <p className="text-sm text-yellow-700">{t('risparmiEnergeticoDesc')}</p>
              </CardContent>
            </Card>
            <Card className="bg-cyan-50 border-cyan-200">
              <CardContent className="pt-6">
                <div className="text-3xl mb-4">💧</div>
                <h3 className="font-semibold mb-2 text-cyan-800">{t('certificatiAcqua')}</h3>
                <p className="text-sm text-cyan-700">{t('certificatiAcquaDesc')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Sections */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-green-50 to-green-100">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="font-bold text-xl mb-2">{t('perCittadini')}</h3>
                <p className="text-gray-700">{t('perCittadiniDesc')}</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="font-bold text-xl mb-2">{t('perAziende')}</h3>
                <p className="text-gray-700">{t('perAziendeDesc')}</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="font-bold text-xl mb-2">{t('perCitta')}</h3>
                <p className="text-gray-700">{t('perCittaDesc')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stakeholder Benefits */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t('stakeholderBenefitsTitle')}</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-xl mb-4">{t('companyAdvantages')}</h3>
                <ul className="space-y-2">
                  {companyAdvantages.map((advantage, index) => (
                    <li key={index} className="text-gray-700">{advantage}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-xl mb-4">{t('municipalityAdvantages')}</h3>
                <ul className="space-y-2">
                  {municipalityAdvantages.map((advantage, index) => (
                    <li key={index} className="text-gray-700">{advantage}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t('ilNostroTeam')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index}>
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-4"></div>
                  <p className="font-semibold">{member}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t('iNostriAdvisors')}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {advisors.map((advisor, index) => (
              <Card key={index}>
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mx-auto mb-4"></div>
                  <p className="font-semibold text-sm">{advisor}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">{t('techStackTitle')}</h2>
          <p className="text-lg text-gray-600 text-center mb-12">{t('techStackDesc')}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold mb-4">{t('frontend')}</h3>
                <div className="space-y-2">
                  {techStack.frontend.map((tech, index) => (
                    <Badge key={index} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold mb-4">{t('blockchain')}</h3>
                <div className="space-y-2">
                  {techStack.blockchain.map((tech, index) => (
                    <Badge key={index} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold mb-4">{t('backend')}</h3>
                <div className="space-y-2">
                  {techStack.backend.map((tech, index) => (
                    <Badge key={index} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold mb-4">{t('compliance')}</h3>
                <div className="space-y-2">
                  {techStack.compliance.map((tech, index) => (
                    <Badge key={index} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t('roadmapTitle')}</h2>
          <div className="space-y-6">
            {roadmapItems.map((item, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <p className="font-semibold">{item}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t('integrationsTitle')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {integrationPartners.map((partner, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-4">
                  <p className="text-sm font-medium">{partner}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{t('readyToStartTitle')}</h2>
          <p className="text-xl mb-8">{t('readyToStartDesc')}</p>
          <div className="space-x-4">
            <Button size="lg" variant="secondary">
              {t('iniziaSubito')}
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-green-600">
              {t('contattaci')}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <footer className="py-8 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <a 
            href="/" 
            className="text-green-400 hover:text-green-300 underline text-lg font-medium"
          >
            ← {t('aboutBackHome')}
          </a>
        </div>
      </footer>
    </div>
  );
};

export default About;
