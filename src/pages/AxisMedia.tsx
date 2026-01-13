import { Camera, Video, Film, Image, Palette, Monitor, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const AxisMedia = () => {
  const services = [
    {
      icon: Camera,
      title: "Photographie Professionnelle",
      description: "Portraits, événements, produits et shooting corporate avec équipement haut de gamme.",
    },
    {
      icon: Video,
      title: "Production Vidéo",
      description: "Spots publicitaires, clips, documentaires et contenus pour réseaux sociaux.",
    },
    {
      icon: Film,
      title: "Reportages & Événements",
      description: "Couverture complète de vos événements : mariages, conférences, cérémonies.",
    },
    {
      icon: Palette,
      title: "Création Graphique",
      description: "Logos, identité visuelle, supports marketing et design créatif.",
    },
  ];

  const portfolio = [
    { title: "Mariages", count: "150+" },
    { title: "Spots Publicitaires", count: "80+" },
    { title: "Événements Corporate", count: "200+" },
    { title: "Shooting Produits", count: "500+" },
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
              <Camera className="w-5 h-5 text-accent" />
              <span className="text-accent font-medium">AXIS Media</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Valorisez Votre <span className="text-gradient-gold">Image</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8 max-w-2xl">
              Photographie, vidéo et création de contenus visuels pour sublimer votre marque et capturer vos moments précieux.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="lg" asChild>
                <a href="/#contact">Demander un Devis</a>
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

      {/* Portfolio Stats */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {portfolio.map((item) => (
              <div key={item.title} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">
                  {item.count}
                </div>
                <div className="text-muted-foreground font-medium">{item.title}</div>
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
              Création Visuelle d'Excellence
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
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
            <Image className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Prêt à Sublimer Votre Image ?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Que ce soit pour un événement, une campagne publicitaire ou votre identité de marque, nous créons des visuels qui marquent les esprits.
            </p>
            <Button variant="gold" size="lg" asChild>
              <a href="/#contact">
                Discutons de Votre Projet
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

export default AxisMedia;