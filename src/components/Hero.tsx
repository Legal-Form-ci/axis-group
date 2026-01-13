import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="AXIS Group Côte d'Ivoire"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        <div className="absolute inset-0 bg-primary/40" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="inline-block px-6 py-2 mb-6 text-sm font-medium tracking-widest uppercase bg-accent/20 text-accent rounded-full border border-accent/30">
              Gagnoa, Côte d'Ivoire
            </span>
          </div>

          <h1
            className="animate-fade-up text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground mb-6 leading-tight"
            style={{ animationDelay: "0.2s" }}
          >
            Le Centre Stratégique de{" "}
            <span className="text-gradient-gold">Votre Croissance</span>
          </h1>

          <p
            className="animate-fade-up text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed"
            style={{ animationDelay: "0.3s" }}
          >
            Nous structurons l'Argent, développons l'Expansion, valorisons
            l'Image et transmettons le Savoir pour créer une croissance durable
            et maîtrisée.
          </p>

          <div
            className="animate-fade-up flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{ animationDelay: "0.4s" }}
          >
            <Button variant="gold" size="xl" asChild>
              <a href="#services">Découvrir Nos Services</a>
            </Button>
            <Button variant="outline-light" size="xl" asChild>
              <a href="#apropos">En Savoir Plus</a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
          style={{ animationDelay: "1s" }}
        >
          <a
            href="#apropos"
            className="flex flex-col items-center text-primary-foreground/60 hover:text-accent transition-colors"
          >
            <span className="text-xs uppercase tracking-widest mb-2">Défiler</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 border border-accent/20 rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 border border-accent/10 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
    </section>
  );
};

export default Hero;
