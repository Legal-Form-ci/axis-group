import { Target, Users, TrendingUp, Award } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Clients Accompagnés" },
    { icon: TrendingUp, value: "5", label: "Pôles d'Expertise" },
    { icon: Award, value: "100%", label: "Satisfaction Client" },
    { icon: Target, value: "2025", label: "Fondé à Gagnoa" },
  ];

  const pillars = [
    {
      letter: "A",
      title: "ARGENT",
      description: "Gestion, structuration et optimisation des finances personnelles et d'entreprise.",
    },
    {
      letter: "X",
      title: "EXPANSION",
      description: "Croissance des activités, développement des opportunités et passage à l'échelle.",
    },
    {
      letter: "I",
      title: "IMAGE",
      description: "Visibilité, crédibilité et communication professionnelle pour valoriser votre présence.",
    },
    {
      letter: "S",
      title: "SAVOIR",
      description: "Formation, compétences et développement personnel pour performer durablement.",
    },
  ];

  return (
    <section id="apropos" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium tracking-widest uppercase text-sm">
            À Propos de Nous
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Un Groupe de Services Intégrés
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            AXIS GROUP est un groupe de services intégrés orienté finance, image, commerce et développement humain, conçu pour accompagner les particuliers et les entreprises dans la structuration, la croissance et la professionnalisation de leurs activités.
          </p>
        </div>

        {/* Four Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.letter}
              className="group bg-card p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-gold rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-display font-bold text-primary">
                  {pillar.letter}
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-gradient-navy rounded-3xl p-10 md:p-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-10 h-10 text-accent mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
