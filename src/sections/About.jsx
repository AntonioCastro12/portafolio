import { Code2, Rocket, Users, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Código limpio y mantenible",
    description: "Construyo sistemas ordenados, escalables y fáciles de actualizar para que tu inversión siga funcionando con el tiempo.",
  },
  {
    icon: Rocket,
    title: "Sitios rápidos y responsivos",
    description: "Optimizo cada interfaz para cargar bien, verse profesional en celular y convertir visitas en clientes.",
  },
  {
    icon: Users,
    title: "Comunicación clara",
    description: "Trabajo contigo paso a paso, explicando avances y tomando decisiones con enfoque de negocio.",
  },
  {
    icon: Lightbulb,
    title: "Soluciones a tu medida",
    description: "No vendo plantillas genéricas: propongo herramientas alineadas a tu operación, tu mercado y tus metas.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">Acerca de mí</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Código que transforma ideas
              <span className="font-serif italic font-normal text-white"> en soluciones reales.</span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Soy Antonio Castro, ingeniero de software y fundador de RCM CodeDev. Ayudo a negocios, emprendedores y equipos en México a crear presencia digital, automatizar procesos y desarrollar sistemas que sí se adaptan a su forma de trabajar.
              </p>
              <p>
                Tengo más de 5 años de experiencia desarrollando aplicaciones web, paneles administrativos, APIs, sistemas empresariales y herramientas internas con React, Angular, TypeScript, C#, .NET, Node.js, SQL Server y Tailwind CSS.
              </p>
              <p>
                Mi enfoque combina diseño moderno, arquitectura sólida y una comunicación cercana. Busco que cada proyecto sea útil desde el primer día: fácil de usar, fácil de mantener y preparado para crecer.
              </p>
              <p>
                También desarrollo automatizaciones con herramientas como n8n para reducir tareas repetitivas, conectar servicios y ahorrar tiempo operativo en ventas, atención, reportes o seguimiento de clientes.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Mi misión es crear soluciones digitales rápidas, modernas y eficientes que ayuden a los negocios a vender mejor, operar con más orden y verse profesionales en línea."
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={item.title}
                className="glass p-6 rounded-2xl animate-fade-in hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
