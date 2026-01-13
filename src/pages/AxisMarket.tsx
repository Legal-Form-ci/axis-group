import { ShoppingCart, Store, Truck, TrendingUp, Package, Globe, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const AxisMarket = () => {
  const services = [
    {
      icon: Store,
      title: "Boutique en Ligne",
      description: "Création et gestion de votre e-commerce pour vendre vos produits en ligne 24h/24.",
    },
    {
      icon: Package,
      title: "Marketplace AXIS",
      description: "Accédez à notre plateforme de vente multi-vendeurs pour toucher plus de clients.",
    },
    {
      icon: Truck,
      title: "Logistique & Livraison",
      description: "Solutions de livraison rapide partout en Côte d'Ivoire et dans la sous-région.",
    },
    {
      icon: TrendingUp,
      title: "Marketing Digital",
      description: "Stratégies de promotion pour booster vos ventes et votre visibilité en ligne.",
    },
  ];

  const benefits = [
    "Vente 24h/24, 7j/7 sans interruption",
    "Accès à des milliers de clients potentiels",
    "Gestion simplifiée des stocks et commandes",
    "Paiements sécurisés intégrés (AXIS Pay)",
    "Support client dédié et réactif",
    "Statistiques et analyses de vos ventes",
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
              <ShoppingCart className="w-5 h-5 text-accent" />
              <span className="text-accent font-medium">AXIS Market</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Développez Vos <span className="text-gradient-gold">Ventes</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8 max-w-2xl">
              E-commerce, vente en ligne et plateforme marchande pour étendre votre marché et multiplier vos opportunités.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="lg" asChild>
                <a href="/#contact">Lancer Ma Boutique</a>
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
              Votre Commerce, Sans Frontières
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
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
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
                Avantages
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-8">
                Vendez Plus, Vendez Mieux
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
                
                <Globe className="w-16 h-16 text-accent mb-6" />
                <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">
                  +50 Vendeurs Actifs
                </h3>
                <p className="text-primary-foreground/80 leading-relaxed mb-6">
                  Rejoignez notre communauté de vendeurs et bénéficiez de notre réseau pour développer votre activité.
                </p>
                <Button variant="gold" asChild>
                  <a href="/#contact">
                    Devenir Vendeur
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

export default AxisMarket;