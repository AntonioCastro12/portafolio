// import { Code2, Rocket, Users, Lightbulb } from "lucide-react";

// const highlights = [
//   {
//     icon: Code2,
//     tittle: "Codigo limpio y mantenible",
//     description:
//       "Me esfuerzo por escribir código que sea fácil de entender y mantener, siguiendo las mejores prácticas y principios de diseño.",
//   },

//   {
//     icon: Rocket,
//     tittle: "Rendimiento optimizado",
//     description:
//       "Me aseguro de que mis aplicaciones sean rápidas y eficientes, optimizando el rendimiento y la experiencia del usuario.",
//   },
//   {
//     icon: Users,
//     tittle: "Colaboración efectiva",
//     description:
//       "Trabajo bien en equipo, comunicándome de manera clara y colaborando para lograr los mejores resultados en cada proyecto.",
//   },
//   {
//     icon: Lightbulb,
//     tittle: "Soluciones innovadoras",
//     description:
//       "Siempre busco formas creativas de resolver problemas y mejorar las aplicaciones, aportando ideas frescas y efectivas.",
//   },
// ];

// export const About = () => {
//   return (
//      <section id="about" className="py-32 relative overflow-hidden">
//       <div className="container mx-auto px-6 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left Column */}
//           <div className="space-y-8">
//             <div className="animate-fade-in">
//               <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
//                 Acerca de Mì
//               </span>
//             </div>
//           </div>

//           <div>
//              <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
//               Construyendo el futuro,
//              <span className="font-serif italic font-normal text-white">
//                 {" "}
//                 un componente a la vez.
//               </span>{" "}
//             </h2>

//              <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
//               <p>
//                 Soy un Ingeniero de Software apasionado por el desarrollo de
//                 soluciones digitales escalables y de alto impacto. Cuento con
//                 más de 5 años de experiencia en desarrollo web, participando en
//                 la creación de aplicaciones modernas que combinan rendimiento,
//                 diseño y una excelente experiencia de usuario.
//               </p>

//               <p>
//                 A lo largo de mi trayectoria he trabajado en el desarrollo de
//                 aplicaciones web y sistemas empresariales, utilizando
//                 tecnologías modernas tanto en frontend como en backend. Me
//                 especializo en React, Angular, TypeScript y TailwindCSS para la
//                 construcción de interfaces dinámicas, y en .NET, C# y MySQL para
//                 el desarrollo de APIs robustas y arquitecturas backend
//                 escalables.
//               </p>

//               <p>
//                 He participado en proyectos que van desde plataformas web
//                 interactivas y sistemas administrativos, hasta aplicaciones para
//                 manejo de datos y automatización de procesos, aplicando buenas
//                 prácticas de desarrollo, patrones de arquitectura y control de
//                 versiones.
//               </p>

//               <p>
//                 Mi enfoque combina excelencia técnica, diseño centrado en el
//                 usuario y desarrollo limpio y mantenible, permitiéndome
//                 construir productos digitales confiables y preparados para
//                 crecer.
//               </p>

//               <p>
//                 Cuando no estoy programando, me gusta explorar nuevas
//                 tecnologías, mejorar mis habilidades en arquitectura de software
//                 y compartir conocimientos con la comunidad de desarrolladores.
//               </p>
//             </div>
//             <br />
//             <br />
//                  <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
//               <p className="text-lg font-medium italic text-foreground">
//                     "Mi misión es crear experiencias digitales que no solo sean
// funcionales, sino verdaderamente encantadoras - productos que a los usuarios les encante
// usar y a los desarrolladores les encante mantener."
//                 </p>
//             </div>
//           </div>

//           {/*Right column - Hilights */}

//           <div className="grid sm:grid-cols-2 gap-6">
//             {highlights.map((item, idx) => (
//               <div
//                 key={idx}
//                 className="glass p-6 rounded-2xl animate-fade-in"
//                 style={{ animationDelay: `${(idx + 1) * 100}ms` }}
//               >
//                 <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
//                   <item.icon className="w-6 h-6 text-primary" />
//                 </div>
//                 <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
//                 <p className="text-sm text-muted-foreground">
//                   {item.description}
//                 </p>
//               </div>
//             ))}

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };


import { Code2, Rocket, Users, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Código limpio y mantenible",
    description:
      "Me esfuerzo por escribir código que sea fácil de entender y mantener, siguiendo las mejores prácticas y principios de diseño.",
  },
  {
    icon: Rocket,
    title: "Rendimiento optimizado",
    description:
      "Me aseguro de que mis aplicaciones sean rápidas y eficientes, optimizando el rendimiento y la experiencia del usuario.",
  },
  {
    icon: Users,
    title: "Colaboración efectiva",
    description:
      "Trabajo bien en equipo, comunicándome de manera clara y colaborando para lograr los mejores resultados en cada proyecto.",
  },
  {
    icon: Lightbulb,
    title: "Soluciones innovadoras",
    description:
      "Siempre busco formas creativas de resolver problemas y mejorar las aplicaciones, aportando ideas frescas y efectivas.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                Acerca de mí
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Construyendo el futuro,
              <span className="font-serif italic font-normal text-white">
                {" "}un componente a la vez.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Soy un Ingeniero de Software apasionado por el desarrollo de
                soluciones digitales escalables y de alto impacto. Cuento con
                más de 5 años de experiencia en desarrollo web, participando en
                la creación de aplicaciones modernas que combinan rendimiento,
                diseño y una excelente experiencia de usuario.
              </p>

              <p>
                A lo largo de mi trayectoria he trabajado en el desarrollo de
                aplicaciones web y sistemas empresariales, utilizando
                tecnologías modernas tanto en frontend como en backend. Me
                especializo en React, Angular, TypeScript y TailwindCSS para la
                construcción de interfaces dinámicas, y en .NET, C# y MySQL para
                el desarrollo de APIs robustas y arquitecturas backend
                escalables.
              </p>

              <p>
                He participado en proyectos que van desde plataformas web
                interactivas y sistemas administrativos, hasta aplicaciones para
                manejo de datos y automatización de procesos, aplicando buenas
                prácticas de desarrollo, patrones de arquitectura y control de
                versiones.
              </p>

              <p>
                Mi enfoque combina excelencia técnica, diseño centrado en el
                usuario y desarrollo limpio y mantenible, permitiéndome
                construir productos digitales confiables y preparados para
                crecer.
              </p>

              <p>
                Cuando no estoy programando, me gusta explorar nuevas
                tecnologías, mejorar mis habilidades en arquitectura de software
                y compartir conocimientos con la comunidad de desarrolladores.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Mi misión es crear experiencias digitales que no solo sean
                funcionales, sino verdaderamente encantadoras — productos que
                los usuarios disfruten usar y que los desarrolladores disfruten
                mantener."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};