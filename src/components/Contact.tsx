import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", service: "", message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: formData
      });
      
      if (error) throw error;
      
      toast({ title: "Message envoyé !", description: "Nous vous contacterons bientôt." });
      setFormData({ name: "", phone: "", email: "", service: "", message: "" });
    } catch (error) {
      toast({ title: "Erreur", description: "Une erreur est survenue.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    { icon: MapPin, title: "Adresse", value: "Gagnoa, Côte d'Ivoire" },
    { icon: Phone, title: "Téléphone", value: "+225 XX XX XX XX XX" },
    { icon: Mail, title: "Email", value: "contact@axisgroup.ci" },
    { icon: Clock, title: "Horaires", value: "Lun - Ven: 8h - 18h" },
  ];

  return (
    <section id="contact" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium tracking-widest uppercase text-sm">Contactez-Nous</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">Parlons de Votre Projet</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">Vous avez un projet ? N'hésitez pas à nous contacter.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="relative bg-card rounded-2xl p-8 md:p-10 shadow-card border border-border overflow-hidden">
            <div className="absolute top-0 left-0 w-20 h-1 bg-gradient-gold" />
            <div className="absolute top-0 left-0 w-1 h-20 bg-gradient-gold" />
            <div className="absolute bottom-0 right-0 w-20 h-1 bg-gradient-navy" />
            <div className="absolute bottom-0 right-0 w-1 h-20 bg-gradient-navy" />
            
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">Envoyez-nous un message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Nom complet</label>
                  <Input type="text" placeholder="Votre nom" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required className="bg-muted" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Téléphone</label>
                  <Input type="tel" placeholder="+225 XX XX XX XX XX" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="bg-muted" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <Input type="email" placeholder="votre@email.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required className="bg-muted" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Service concerné</label>
                <select value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})} className="w-full rounded-md border border-border bg-muted px-3 py-2 text-foreground">
                  <option value="">Sélectionnez un service</option>
                  <option value="finance">AXIS Finance</option>
                  <option value="media">AXIS Media</option>
                  <option value="pay">AXIS Pay</option>
                  <option value="market">AXIS Market</option>
                  <option value="academy">AXIS Academy</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <Textarea placeholder="Décrivez votre projet..." rows={5} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required className="bg-muted resize-none" />
              </div>
              <Button variant="gold" size="lg" className="w-full" disabled={isLoading}>
                {isLoading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Send className="w-4 h-4 mr-2" />}
                {isLoading ? "Envoi..." : "Envoyer le Message"}
              </Button>
            </form>
          </div>

          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.title} className="relative flex items-start gap-4 p-6 bg-card rounded-xl border border-border shadow-card hover:shadow-card-hover transition-shadow overflow-hidden">
                  <div className="absolute top-0 left-0 w-12 h-0.5 bg-gradient-gold" />
                  <div className="absolute top-0 left-0 w-0.5 h-12 bg-gradient-gold" />
                  <div className="absolute bottom-0 right-0 w-12 h-0.5 bg-gradient-navy" />
                  <div className="absolute bottom-0 right-0 w-0.5 h-12 bg-gradient-navy" />
                  <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;