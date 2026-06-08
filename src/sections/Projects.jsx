import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Menú digital para restaurantes",
    description: "Carta interactiva para celular con categorías, productos, precios y diseño personalizado para mejorar la experiencia de tus clientes.",
    image: "/projects/patitas.png",
    tags: ["React", "Tailwind", "Diseño responsivo"],
    link: "https://patitas-de-puerco.netlify.app/",
    github: "https://github.com/AntonioCastro12/paginaRestauranteImelda.git",
  },
  {
    title: "Carrusel de marketing y ventas",
    description: "Carrusel con panel administrativo para gestionar contenido y campañas de marketing.",
    image: "/projects/Carrusel.png",
    tags: ["Angular", "Nest.js", "SQL Server", "APIs"],
    link: "https://app.netlify.com/projects/carrusel-prop/overview",
    github: "https://github.com/AntonioCastro12/Carrusel-nazan.git",
  },
  {
    title: "Automatización de procesos",
    description: "Flujos para conectar formularios, WhatsApp, correos, hojas de cálculo y bases de datos, reduciendo trabajo manual.",
    image: "/projects/flujon8n.png",
    tags: ["n8n", "Node.js", "Integraciones", "PostgreSQL"],
    link: "#contact",
    github: "#",
  },
  {
    title: "Sistema web a la medida",
    description: "Aplicación personalizada para baberia y gestion de citas automatizadas.",
    image: "/projects/Barberia.png",
    tags: ["React", ".NET", "SQL Server"],
    link: "https://black-barber.netlify.app/",
    github: "https://github.com/AntonioCastro12/paginaBarber.git",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Trabajo destacado</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Proyectos que impulsan
            <span className="font-serif italic font-normal text-white"> negocios.</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Una selección de soluciones que puedo adaptar para restaurantes, comercios, servicios profesionales y empresas que necesitan operar mejor en digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="group glass rounded-2xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/45 to-transparent opacity-75" />
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={project.link} aria-label={`Ver ${project.title}`} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a href={project.github} aria-label="Repositorio" className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a href="#contact">
            <AnimatedBorderButton>
              Quiero una solución similar
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};
