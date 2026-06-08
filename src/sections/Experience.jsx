const experiences = [
  {
    period: "2024 - Actualidad",
    role: "Desarrollador Full Stack",
    company: "Grupo Nazan",
    description: "Desarrollo de soluciones web y móviles para marketing, logística e infraestructura empresarial, incluyendo sistemas de automatización y software preciador",
    technologies: ["React", "TypeScript", "Node.js", ".NET", "n8n", "Angular"],
    current: true,
  },
  {
    period: "2023 - 2024",
    role: "Desarrollador full stack",
    company: "Instituto Electoral del Estado De Guanajuato(IEEG)",
    description: "Desarrollo de sistemas electorales para el estado de Guanajuato, incluyendo PREP y cómputo electoral.",
    technologies: ["React", "Angular", "Tailwind", "C#", "MySQL", "APIs", "Git"],
    current: false,
  },
  {
    period: "2021 - 2023",
    role: "Mantenimiento De Páginas Web BIENESTAR ",
    company: "Bienestar",
    description: "Desarrollo de servicios, endpoints, autenticación y modelos de datos para sistemas que requieren seguridad, estabilidad y crecimiento gradual.",
    technologies: ["C#", ".NET", "SQL Server", "MySQL"],
    current: false,
  },
  {
    period: "2018 - 2021",
    role: "Profesor de programación",
    company: "Bachillerato SABES",
    description: "Enseñanza de desarrollo web con HTML5, CSS3, JavaScript,AJAX, PHP, y MySQL. Implementación de sitios web estáticos y dinámicos, constuccción de interfaces de usuario y consumo de APIs.",
    technologies: ["JavaScript", "HTML", "CSS", "PHP", "MySQL", "Git", "AJAX"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Trayectoria profesional</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Experiencia enfocada
            <span className="font-serif italic font-normal text-white"> en resultados.</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Mi trabajo combina desarrollo técnico, visión de producto y acompañamiento cercano para convertir necesidades reales en soluciones digitales claras.
          </p>
        </div>

        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={`${exp.period}-${exp.role}`} className="relative grid md:grid-cols-2 gap-8 animate-fade-in">
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />}
                </div>

                <div className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                  <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/60 transition-all duration-500">
                    <span className="text-sm text-primary font-medium">{exp.period}</span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">{exp.description}</p>
                    <div className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""}`}>
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground border border-border/40">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
