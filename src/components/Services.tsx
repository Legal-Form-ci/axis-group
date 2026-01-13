import { Wallet, Camera, CreditCard, ShoppingCart, GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Wallet,
      title: "AXIS FINANCE",
      tagline: "Maîtrisez Votre Argent",
      description: "Coaching en gestion financière personnelle et d'entreprise, éducation financière, planification budgétaire et stratégies de croissance.",
      features: ["Coaching financier", "Conseils d'entreprise", "Planification budgétaire", "Éducation financière"],
      color: "from-emerald-500 to-emerald-600",
      link: "/axis-finance",
    },
    {
      icon: Camera,
      title: "AXIS MEDIA",
      tagline: "Valorisez Votre Image",
      description: "Photographie professionnelle, vidéo & caméra, reportages événementiels et création de contenus visuels pour entreprises et marques.",
      features: ["Photographie pro", "Vidéo & caméra", "Reportages", "Contenus visuels"],
      color: "from-blue-500 to-blue-600",
      link: "/axis-media",
    },
    {
      icon: CreditCard,
      title: "AXIS PAY",
      tagline: "Solutions de Paiement",
      description: "Transactions Mobile Money, wallets électroniques, cartes Visa et solutions de paiement digitales pour simplifier vos opérations.",
      features: ["Mobile Money", "Wallets électroniques", "Cartes Visa", "Paiements digitaux"],
      color: "from-violet-500 to-violet-600",
      link: "/axis-pay",
    },
    {
      icon: ShoppingCart,
      title: "AXIS MARKET",
      tagline: "Développez Vos Ventes",
      description: "E-commerce, vente de produits et services, plateforme marchande physique et digitale pour étendre votre marché.",
      features: ["E-commerce", "Vente en ligne", "Plateforme digitale", "Marché physique"],
      color: "from-orange-500 to-orange-600",
      link: "/axis-market",
    },
    {
      icon: GraduationCap,
      title: "AXIS ACADEMY",
      tagline: "Développez Vos Compétences",
      description: "Formation en développement personnel, leadership, mentalité entrepreneuriale, productivité et discipline personnelle.",
      features: ["Développement personnel", "Leadership", "Mentalité entrepreneur", "Productivité"],
      color: "from-rose-500 to-rose-600",
      link: "/axis-academy",
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium tracking-widest uppercase text-sm">
            Nos Pôles d'Activité
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Cinq Domaines d'Expertise Intégrés
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Découvrez nos cinq pôles d'activité conçus pour accompagner votre croissance à chaque étape de votre parcours.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-3 border border-border ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Gradient Top Bar */}
              <div className={`h-2 bg-gradient-to-r ${service.color}`} />

              <div className="p-8">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {service.title}
                </h3>
                <p className="text-accent font-medium text-sm mb-4">
                  {service.tagline}
                </p>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button variant="ghost" className="group/btn p-0 h-auto text-accent hover:text-accent-foreground hover:bg-transparent" asChild>
                  <Link to={service.link}>
                    En savoir plus
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
