import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import axisLogo from "@/assets/axis-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Accueil", href: "#accueil" },
    { label: "À Propos", href: "#apropos" },
    { label: "Nos Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    { label: "AXIS Finance", href: "#services" },
    { label: "AXIS Media", href: "#services" },
    { label: "AXIS Pay", href: "#services" },
    { label: "AXIS Market", href: "#services" },
    { label: "AXIS Academy", href: "#services" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-gradient-navy text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src={axisLogo}
              alt="AXIS Group"
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-primary-foreground/70 leading-relaxed mb-6">
              Le centre stratégique de votre croissance. Nous structurons l'Argent, développons l'Expansion, valorisons l'Image et transmettons le Savoir.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">
              Liens Rapides
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">
              Nos Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">
              Contact
            </h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li>Gagnoa, Côte d'Ivoire</li>
              <li>+225 XX XX XX XX XX</li>
              <li>contact@axisgroup.ci</li>
              <li>Lun - Ven: 8h - 18h</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>
              © {currentYear} AXIS GROUP. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
