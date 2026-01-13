import { GraduationCap, Users, BookOpen, Award, Target, Lightbulb, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const AxisAcademy = () => {
  const formations = [
    {
      icon: Target,
      title: "Développement Personnel",
      description: "Découvrez votre potentiel, fixez vos objectifs et développez votre confiance en vous.",
    },
    {
      icon: Users,
      title: "Leadership & Management",
      description: "Apprenez à diriger, motiver et inspirer vos équipes vers l'excellence.",
    },
    {
      icon: Lightbulb,
      title: "Mentalité Entrepreneuriale",
      description: "Cultivez l'état d'esprit des entrepreneurs à succès et passez à l'action.",
    },
    {
      icon: BookOpen,
      title: "Productivité & Discipline",
      description: "Maîtrisez votre temps, vos habitudes et maximisez votre efficacité.",
    },
  ];

  const programs = [
    {
      title: "Programme Starter",
      duration: "2 semaines",
      description: "Idéal pour découvrir les bases du développement personnel",
    },
    {
      title: "Programme Pro",
      duration: "1 mois",
      description: "Formation complète pour transformer votre vie professionnelle",
    },
    {
      title: "Programme Elite",
      duration: "3 mois",
      description: "Accompagnement premium avec coaching personnalisé",
    },
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
              <GraduationCap className="w-5 h-5 text-accent" />
              <span className="text-accent font-medium">AXIS Academy</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Développez Vos <span className="text-gradient-gold">Compétences</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8 max-w-2xl">
              Formation en développement personnel, leadership et mentalité entrepreneuriale pour révéler votre plein potentiel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="lg" asChild>
                <a href="/#contact">S'inscrire Maintenant</a>
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

      {/* Stats Bar */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">500+</div>
              <div className="text-muted-foreground font-medium">Apprenants Formés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">20+</div>
              <div className="text-muted-foreground font-medium">Formations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">98%</div>
              <div className="text-muted-foreground font-medium">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">5+</div>
              <div className="text-muted-foreground font-medium">Formateurs Experts</div>
            </div>
          </div>
        </div>
      </section>

      {/* Formations Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-medium tracking-widest uppercase text-sm">
              Nos Formations
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Domaines de Formation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {formations.map((formation) => (
              <div
                key={formation.title}
                className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2"
              >
                {/* Designer Border */}
                <div className="absolute top-0 left-0 w-20 h-1 bg-gradient-gold" />
                <div className="absolute top-0 left-0 w-1 h-20 bg-gradient-gold" />
                <div className="absolute bottom-0 right-0 w-20 h-1 bg-gradient-navy" />
                <div className="absolute bottom-0 right-0 w-1 h-20 bg-gradient-navy" />

                <div className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <formation.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {formation.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {formation.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-medium tracking-widest uppercase text-sm">
              Nos Programmes
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Choisissez Votre Parcours
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={program.title}
                className={`relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 ${
                  index === 1 ? "md:-translate-y-4" : ""
                }`}
              >
                {/* Designer Border */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold" />

                <div className="p-8 text-center">
                  <Award className={`w-12 h-12 mx-auto mb-4 ${
                    index === 0 ? "text-bronze" : index === 1 ? "text-accent" : "text-primary"
                  }`} />
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {program.title}
                  </h3>
                  <p className="text-accent font-semibold mb-3">{program.duration}</p>
                  <p className="text-muted-foreground text-sm mb-6">
                    {program.description}
                  </p>
                  <Button variant={index === 1 ? "gold" : "outline"} className="w-full" asChild>
                    <a href="/#contact">En savoir plus</a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AxisAcademy;