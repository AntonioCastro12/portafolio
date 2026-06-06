import { ArrowRight, ChevronDown, Download, Facebook, Github, Linkedin, Zap, ShieldCheck, Headphones, TrendingUp } from "lucide-react";
import { Button } from "../components/Button";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "C#",
  ".NET",
  "SQL Server",
  "MongoDB",
  "Angular",
  "Nest.js",
  "Tailwind CSS",
  "n8n",
  "React Native",
  "Automatización",
  "APIs",
  "Git",
];

const benefits = [
  { icon: ShieldCheck, label: "Soluciones a medida" },
  { icon: Zap, label: "Entrega rápida" },
  { icon: Headphones, label: "Soporte continuo" },
  { icon: TrendingUp, label: "Resultados claros" },
];

const dots = [
  [8, 20], [18, 72], [30, 14], [42, 82], [55, 28], [67, 68], [78, 18], [88, 76],
  [12, 48], [24, 36], [36, 62], [50, 12], [62, 42], [74, 88], [92, 32], [84, 54],
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="/hero-bg.jpg" alt="Fondo tecnológico azul" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/25 via-background/82 to-background" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map(([left, top], i) => (
          <div
            key={`${left}-${top}`}
            className="absolute w-1.5 h-1.5 rounded-full opacity-70"
            style={{
              backgroundColor: i % 3 === 0 ? "#38c8ff" : "#1f6fff",
              left: `${left}%`,
              top: `${top}%`,
              animation: `slow-drift ${16 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.25}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Soluciones digitales para negocios
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight animate-fade-in animation-delay-100">
                Llevamos tu <span className="text-primary glow-text">negocio</span>
                <br />
                al siguiente nivel
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl animate-fade-in animation-delay-200">
                Soy Antonio Castro, desarrollador de RCM CodeDev. Diseño páginas web,
                sistemas a la medida, menús digitales, automatizaciones y aplicaciones
                que ayudan a vender mejor, ahorrar tiempo y operar con más orden.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="#contact">
                <Button size="lg">
                  Cotizar mi proyecto <ArrowRight className="w-5 h-5" />
                </Button>
              </a>

              <a href="/CV-FullStack-Antonio.pdf" download>
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Descargar CV
                </AnimatedBorderButton>
              </a>
            </div>

            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Sígueme:</span>
              {[
                { icon: Github, href: "https://github.com/", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/antoniojcc/", label: "LinkedIn" },
                { icon: Facebook, href: "https://www.facebook.com/RCMCodeDev", label: "Facebook" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/35 via-transparent to-highlight/20 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img src="/perfil.jpeg" alt="Antonio Castro" className="w-full aspect-[4/5] object-cover rounded-2xl" />

                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Listo para transformar ideas</span>
                  </div>
                </div>

                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-xs text-muted-foreground">años de experiencia</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in animation-delay-500">
          {benefits.map((item) => (
            <div key={item.label} className="glass rounded-xl p-4 flex items-center gap-3">
              <item.icon className="w-7 h-7 text-primary" />
              <span className="font-semibold">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">Tecnologías que trabajo</p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={`${skill}-${idx}`} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/60 hover:text-primary transition-colors">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
          <span className="text-xs uppercase tracking-wider">Ver más</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
