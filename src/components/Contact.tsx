import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      value: "Gagnoa, Côte d'Ivoire",
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "+225 XX XX XX XX XX",
    },
    {
      icon: Mail,
      title: "Email",
      value: "contact@axisgroup.ci",
    },
    {
      icon: Clock,
      title: "Horaires",
      value: "Lun - Ven: 8h - 18h",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium tracking-widest uppercase text-sm">
            Contactez-Nous
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Parlons de Votre Projet
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Vous avez un projet ? Une question ? N'hésitez pas à nous contacter. Notre équipe est à votre disposition pour vous accompagner.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-card border border-border">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Envoyez-nous un message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nom complet
                  </label>
                  <Input
                    type="text"
                    placeholder="Votre nom"
                    className="bg-muted border-border focus:ring-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Téléphone
                  </label>
                  <Input
                    type="tel"
                    placeholder="+225 XX XX XX XX XX"
                    className="bg-muted border-border focus:ring-accent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="votre@email.com"
                  className="bg-muted border-border focus:ring-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Service concerné
                </label>
                <select className="w-full rounded-md border border-border bg-muted px-3 py-2 text-foreground focus:ring-2 focus:ring-accent focus:outline-none">
                  <option value="">Sélectionnez un service</option>
                  <option value="finance">AXIS Finance</option>
                  <option value="media">AXIS Media</option>
                  <option value="pay">AXIS Pay</option>
                  <option value="market">AXIS Market</option>
                  <option value="academy">AXIS Academy</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  placeholder="Décrivez votre projet ou votre demande..."
                  rows={5}
                  className="bg-muted border-border focus:ring-accent resize-none"
                />
              </div>
              <Button variant="gold" size="lg" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Envoyer le Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border shadow-card hover:shadow-card-hover transition-shadow"
                >
                  <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {info.title}
                    </h4>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 h-64 bg-card rounded-2xl border border-border overflow-hidden">
              <div className="w-full h-full bg-gradient-navy flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <MapPin className="w-12 h-12 mx-auto mb-3 text-accent" />
                  <p className="font-display font-semibold text-lg">Gagnoa, Côte d'Ivoire</p>
                  <p className="text-sm text-primary-foreground/70">Région du Gôh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
