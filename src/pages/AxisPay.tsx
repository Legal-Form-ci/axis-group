import { CreditCard, Smartphone, Wallet, Shield, Zap, Globe, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const AxisPay = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile Money",
      description: "Transactions Orange Money, MTN Money, Moov Money et Wave en toute simplicité.",
    },
    {
      icon: Wallet,
      title: "Wallets Électroniques",
      description: "Gestion de portefeuilles numériques pour vos paiements quotidiens.",
    },
    {
      icon: CreditCard,
      title: "Cartes Visa/Mastercard",
      description: "Services de paiement par cartes bancaires nationales et internationales.",
    },
    {
      icon: Globe,
      title: "Transferts Internationaux",
      description: "Envoyez et recevez de l'argent depuis et vers l'étranger facilement.",
    },
  ];

  const features = [
    { icon: Shield, title: "Sécurisé", description: "Transactions cryptées et protégées" },
    { icon: Zap, title: "Rapide", description: "Paiements instantanés 24h/24" },
    { icon: Globe, title: "Accessible", description: "Disponible partout en Côte d'Ivoire" },
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
              <CreditCard className="w-5 h-5 text-accent" />
              <span className="text-accent font-medium">AXIS Pay</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Solutions de <span className="text-gradient-gold">Paiement</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8 max-w-2xl">
              Simplifiez vos transactions avec nos solutions de paiement digitales. Mobile Money, cartes et transferts pour tous vos besoins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="lg" asChild>
                <a href="/#contact">Découvrir Nos Services</a>
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

      {/* Features Bar */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-gold rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
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
              Paiements Sans Limites
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
                  <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-violet-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Smartphone className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Digitalisez Vos Paiements Dès Aujourd'hui
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Rejoignez les milliers de clients qui utilisent AXIS Pay pour des transactions simples, rapides et sécurisées.
            </p>
            <Button variant="gold" size="lg" asChild>
              <a href="/#contact">
                Commencer
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AxisPay;