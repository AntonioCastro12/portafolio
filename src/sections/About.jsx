import { Code2, Rocket, Users, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    tittle: "Codigo limpio y mantenible",
    description:
      "Me esfuerzo por escribir código que sea fácil de entender y mantener, siguiendo las mejores prácticas y principios de diseño.",
  },

  {
    icon: Rocket,
    tittle: "Rendimiento optimizado",
    description:
      "Me aseguro de que mis aplicaciones sean rápidas y eficientes, optimizando el rendimiento y la experiencia del usuario.",
  },
  {
    icon: Users,
    tittle: "Colaboración efectiva",
    description:
      "Trabajo bien en equipo, comunicándome de manera clara y colaborando para lograr los mejores resultados en cada proyecto.",
  },
  {
    icon: Lightbulb,
    tittle: "Soluciones innovadoras",
    description:
      "Siempre busco formas creativas de resolver problemas y mejorar las aplicaciones, aportando ideas frescas y efectivas.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div>
        <div>
          {/*left column */}
          <div>
            <span>Acerca de Mì</span>
          </div>
        </div>

        <div>
          <h2>
            Construyendo el futuro,
            <span>un componente a la vez.</span>
          </h2>
        </div>
      </div>
    </section>
  );
};
