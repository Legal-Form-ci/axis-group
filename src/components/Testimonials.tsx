import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Kouassi Marie-Claire",
      role: "Entrepreneure, Gagnoa",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop&crop=face",
      quote: "Grâce à AXIS Finance, j'ai pu structurer mon entreprise et multiplier mes revenus par 3 en moins d'un an. Une équipe exceptionnelle qui comprend vraiment les besoins des entrepreneurs ivoiriens.",
    },
    {
      name: "Bamba Souleymane",
      role: "Directeur Commercial, Abidjan",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      quote: "AXIS Media a transformé notre image de marque. Leurs vidéos et photos sont d'une qualité exceptionnelle. Notre visibilité a explosé depuis notre collaboration.",
    },
    {
      name: "Aïcha Diallo",
      role: "Commerçante, Daloa",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
      quote: "AXIS Pay m'a permis de digitaliser mes paiements. Mes clients peuvent maintenant payer facilement avec Mobile Money. C'est révolutionnaire pour mon business !",
    },
    {
      name: "Yao Konan Patrick",
      role: "E-commerçant, Bouaké",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      quote: "AXIS Market m'a accompagné dans le lancement de ma boutique en ligne. En 6 mois, j'ai atteint une clientèle que je n'aurais jamais pu toucher physiquement.",
    },
    {
      name: "Traoré Aminata",
      role: "Coach de vie, Gagnoa",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      quote: "Les formations AXIS Academy ont complètement changé ma vision du leadership. J'ai développé des compétences qui font la différence dans mon métier de coach.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="temoignages" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium tracking-widest uppercase text-sm">
            Témoignages
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Ce Que Nos Clients Disent
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Découvrez les expériences de ceux qui nous ont fait confiance et qui ont transformé leur vie avec AXIS Group.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Main Testimonial Card */}
            <div className="relative bg-card rounded-3xl overflow-hidden shadow-card-hover border-2 border-transparent testimonial-card-border">
              {/* Designer Border Effect - Gold top-left, Navy bottom-right */}
              <div className="absolute top-0 left-0 w-1/2 h-1 bg-gradient-gold" />
              <div className="absolute top-0 left-0 w-1 h-1/2 bg-gradient-gold" />
              <div className="absolute bottom-0 right-0 w-1/2 h-1 bg-gradient-navy" />
              <div className="absolute bottom-0 right-0 w-1 h-1/2 bg-gradient-navy" />
              
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Client Photo */}
                  <div className="relative flex-shrink-0">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-accent/30 shadow-gold">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Quote Icon */}
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center shadow-lg">
                      <Quote className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
                      "{testimonials[currentIndex].quote}"
                    </blockquote>
                    <div>
                      <h4 className="font-display text-xl font-bold text-foreground">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-accent font-medium">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full w-12 h-12 border-2 border-accent hover:bg-accent hover:text-primary transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              
              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 bg-gradient-gold"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full w-12 h-12 border-2 border-accent hover:bg-accent hover:text-primary transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;