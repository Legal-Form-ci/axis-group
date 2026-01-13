import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import axisLogo from "@/assets/axis-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: isHome ? "#accueil" : "/", label: "Accueil" },
    { href: isHome ? "#apropos" : "/#apropos", label: "À Propos" },
    { href: isHome ? "#services" : "/#services", label: "Nos Pôles" },
    { href: isHome ? "#equipe" : "/#equipe", label: "Équipe" },
    { href: isHome ? "#contact" : "/#contact", label: "Contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-card py-2" : "bg-primary/90 backdrop-blur-sm py-3"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md overflow-hidden p-1">
              <img src={axisLogo} alt="AXIS Group" className="w-full h-full object-contain" />
            </div>
            <span className={`font-display font-bold text-lg hidden sm:block ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}>
              AXIS Group
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={`font-medium transition-colors hover:text-accent ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}>
                {link.label}
              </a>
            ))}
            <Button variant="gold" size="sm" asChild>
              <a href={isHome ? "#contact" : "/#contact"}>Nous Contacter</a>
            </Button>
          </nav>

          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "text-foreground" : "text-primary-foreground"} size={24} />
            ) : (
              <Menu className={isScrolled ? "text-foreground" : "text-primary-foreground"} size={24} />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden bg-background border-t border-border py-4 animate-fade-in absolute left-0 right-0 top-full shadow-lg">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="block py-3 px-4 text-foreground font-medium hover:text-accent hover:bg-muted transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <div className="px-4 pt-4">
              <Button variant="gold" className="w-full" asChild>
                <a href={isHome ? "#contact" : "/#contact"} onClick={() => setIsMobileMenuOpen(false)}>Nous Contacter</a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;