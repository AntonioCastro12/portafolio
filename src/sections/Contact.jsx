import { Facebook, Mail, MessageCircle, Phone, Send } from "lucide-react";
import { Button } from "@/components/Button";

const contactLinks = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "4624921594",
    href: "https://wa.me/4624921594",
  },
  {
    icon: Mail,
    title: "Correo",
    value: "antoniojcc786@gmail.com",
    href: "mailto:antoniojcc786@gmail.com",
  },
  {
    icon: Facebook,
    title: "Facebook",
    value: "RCM CodeDev",
    href: "https://www.facebook.com/RCMCodeDev",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/10 to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-stretch">
          <div className="glass rounded-2xl p-8 md:p-10 glow-border">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">Contacto</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
              ¿Listo para transformar
              <span className="font-serif italic font-normal text-white"> tu negocio?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mb-8">
              Cuéntame qué necesitas: una página web, un sistema personalizado, un menú digital, una app móvil o una automatización. Te ayudo a convertirlo en una solución clara, moderna y eficiente.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {[
                "Desarrollo web",
                "Automatizaciones",
                "Menús digitales",
                "Sistemas personalizados",
                "Aplicaciones móviles",
                "Soporte y mejoras",
              ].map((service) => (
                <span key={service} className="px-4 py-3 rounded-xl bg-surface border border-border/50 text-sm text-muted-foreground">
                  {service}
                </span>
              ))}
            </div>

            <a href="https://www.facebook.com/RCMCodeDev" target="_blank" rel="noopener noreferrer">
              <Button size="lg">
                Enviar mensaje por Facebook <Send className="w-5 h-5" />
              </Button>
            </a>
          </div>

          <div className="space-y-4">
            {contactLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="glass rounded-2xl p-6 flex items-start gap-4 hover:border-primary/70 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <link.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{link.title}</h3>
                  <p className="text-sm text-muted-foreground">{link.value}</p>
                </div>
              </a>
            ))}

            <div className="glass rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Atención en Personalizada</h3>
                <p className="text-sm text-muted-foreground">Proyectos remotos, seguimiento por llamada y entregas por etapas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

