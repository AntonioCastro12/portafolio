export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
       <img
  src="/hero-bg.jpg"
  alt="Hero image"
  className="w-full h-full object-cover opacity-40"
/>

        <div className="absolute inset-0 bg-gradiente-to-b from-background/20 via-background/80 to-background"></div>
      </div>

      {/* Green Dots*/}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left Column -text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                Ingeniero de Software Especializado en React
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in">
                Desarrollador{" "}
                <span className="text-primary glow-text">digital</span>
                <br />
                con amplia experiencia y
                <br />
                <span className="font-serif italic font-normal text-white">
                  precisión
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in">
                Soy un ingeniero de software especializado en React, con una
                sólida experiencia en el desarrollo de aplicaciones web modernas
                y escalables. Mi pasión por la tecnología y mi compromiso con la
                excelencia me han llevado a crear soluciones innovadoras que
                impulsan el éxito de los proyectos en los que participo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
