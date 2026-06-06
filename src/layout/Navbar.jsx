import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navlinks = [
  { href: "#about", name: "Acerca de mí" },
  { href: "#projects", name: "Proyectos" },
  { href: "#experience", name: "Experiencia" },
  { href: "#testimonials", name: "Opiniones" },
  { href: "#contact", name: "Contacto" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      } z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-black tracking-tight hover:text-primary transition-colors">
          RCM <span className="text-primary">CodeDev</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navlinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <a href="#contact">
            <Button size="sm">Cotizar proyecto</Button>
          </a>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Abrir menú"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navlinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
                {link.name}
              </a>
            ))}

            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button size="sm" className="w-full">Cotizar proyecto</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
