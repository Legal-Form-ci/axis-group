import { Wallet, TrendingUp, PiggyBank, BarChart3, Target, Users, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const AxisFinance = () => {
  const services = [
    {
      icon: PiggyBank,
      title: "Coaching Financier Personnel",
      description: "Apprenez à gérer votre budget, épargner intelligemment et atteindre vos objectifs financiers personnels.",
    },
    {
      icon: BarChart3,
      title: "Conseil aux Entreprises",
      description: "Optimisez la gestion financière de votre entreprise, réduisez vos coûts et maximisez vos profits.",
    },
    {
      icon: TrendingUp,
      title: "Stratégies d'Investissement",
      description: "Découvrez les meilleures opportunités d'investissement adaptées à votre profil et vos objectifs.",
    },
    {
      icon: Target,
      title: "Planification Budgétaire",
      description: "Établissez un plan financier solide pour atteindre vos objectifs à court, moyen et long terme.",
    },
  ];

  const benefits = [
    "Analyse personnalisée de votre situation financière",
    "Plan d'action sur mesure et réaliste",
    "Suivi régulier de vos progrès",
    "Accès à des outils de gestion modernes",
    "Formation continue en éducation financière",
    "Accompagnement par des experts certifiés",
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 border border-accent rounded-full" />
          <div className="absolute bottom-10 left-10 w-64 h-64 border border-accent/50 rounded-full" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full mb-6">
              <Wallet className="w-5 h-5 text-accent" />
              <span className="text-accent font-medium">AXIS Finance</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Maîtrisez Votre <span className="text-gradient-gold">Argent</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8 max-w-2xl">
              Coaching en gestion financière personnelle et d'entreprise. Nous vous accompagnons vers l'indépendance financière.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="lg" asChild>
                <a href="/#contact">Demander un Conseil</a>
              </Button>
              <Button variant="outline-light" size="lg" asChild>
                <Link to="/">
                  Retour à l'accueil
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-medium tracking-widest uppercase text-sm">
              Nos Services
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Solutions Financières Complètes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2"
              >
                {/* Designer Border */}
                <div className="absolute top-0 left-0 w-20 h-1 bg-gradient-gold" />
                <div className="absolute top-0 left-0 w-1 h-20 bg-gradient-gold" />
                <div className="absolute bottom-0 right-0 w-20 h-1 bg-gradient-navy" />
                <div className="absolute bottom-0 right-0 w-1 h-20 bg-gradient-navy" />

                <div className="p-8">
                  <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-medium tracking-widest uppercase text-sm">
                Pourquoi Nous Choisir
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-8">
                L'Excellence au Service de Votre Réussite
              </h2>
              
              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-navy rounded-3xl p-8 md:p-12">
                <div className="absolute top-0 right-0 w-32 h-1 bg-gradient-gold rounded-bl-full" />
                <div className="absolute top-0 right-0 w-1 h-32 bg-gradient-gold rounded-bl-full" />
                
                <Users className="w-16 h-16 text-accent mb-6" />
                <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">
                  +200 Clients Accompagnés
                </h3>
                <p className="text-primary-foreground/80 leading-relaxed mb-6">
                  Rejoignez les centaines de particuliers et entreprises qui ont transformé leur situation financière avec AXIS Finance.
                </p>
                <Button variant="gold" asChild>
                  <a href="/#contact">
                    Commencer Maintenant
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AxisFinance;