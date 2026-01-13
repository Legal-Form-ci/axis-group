import { Linkedin, Mail, Phone } from "lucide-react";
import teamInocent from "@/assets/team-inocent.png";

const Team = () => {
  const teamMembers = [
    {
      name: "Inocent KOFFI",
      role: "Fondateur & Directeur Général",
      description: "Conseiller en développement commercial, digital, numérique, informatique, intelligence artificielle, formateur, stratège et développement web. Entrepreneur Agricole, Fondateur & DG de AGRICAPITAL SARL.",
      image: teamInocent,
      specialties: ["Développement Commercial", "Digital & IA", "Stratégie", "Agriculture"],
    },
    {
      name: "Kouamé Aya Sylvie",
      role: "Directrice Financière",
      description: "Experte en gestion financière et budgétaire avec plus de 10 ans d'expérience dans le conseil aux entreprises et particuliers.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
      specialties: ["Finance", "Comptabilité", "Audit", "Conseil"],
    },
    {
      name: "Diabaté Moussa",
      role: "Directeur AXIS Media",
      description: "Photographe et vidéaste professionnel, spécialisé dans la production audiovisuelle et la création de contenus pour les marques.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
      specialties: ["Photographie", "Vidéo", "Production", "Branding"],
    },
    {
      name: "N'Guessan Adjoua",
      role: "Responsable AXIS Academy",
      description: "Formatrice certifiée en développement personnel et leadership, passionnée par l'accompagnement des talents ivoiriens.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      specialties: ["Formation", "Leadership", "Coaching", "Mentorat"],
    },
  ];

  return (
    <section id="equipe" className="py-24 bg-muted relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 border border-accent rounded-full" />
        <div className="absolute bottom-40 right-20 w-60 h-60 border border-primary rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium tracking-widest uppercase text-sm">
            Notre Équipe
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Les Visages de l'Excellence
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Une équipe d'experts passionnés, dédiés à votre réussite et à l'innovation en Côte d'Ivoire.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group relative"
            >
              {/* Card with Designer Border */}
              <div className="relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-3">
                {/* Designer Border - Gold top-left, Navy bottom-right */}
                <div className="absolute top-0 left-0 w-16 h-1 bg-gradient-gold rounded-tr-full" />
                <div className="absolute top-0 left-0 w-1 h-16 bg-gradient-gold rounded-br-full" />
                <div className="absolute bottom-0 right-0 w-16 h-1 bg-gradient-navy rounded-tl-full" />
                <div className="absolute bottom-0 right-0 w-1 h-16 bg-gradient-navy rounded-bl-full" />

                {/* Photo Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Social Icons on Hover */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <a
                      href="#"
                      className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <Linkedin className="w-5 h-5 text-primary" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <Mail className="w-5 h-5 text-primary" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <Phone className="w-5 h-5 text-primary" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {member.description}
                  </p>

                  {/* Specialties Tags */}
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.slice(0, 2).map((specialty) => (
                      <span
                        key={specialty}
                        className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;