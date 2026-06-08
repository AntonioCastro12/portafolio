import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Patitas de Puerco Doña Imelda",
    role: "Menú digital",
    text: "El menú quedó moderno, rápido y fácil de actualizar. Nuestros clientes lo pueden consultar desde el celular sin complicaciones.",
  },
  {
    name: "Black & Blade",
    role: "Página web",
    text: "Antonio entendió lo que necesitábamos y lo convirtió en una página clara, profesional y lista para recibir prospectos.",
  },
  {
    name: "Agencia Travels",
    role: "Automatización",
    text: "El flujo automatizado nos ahorró tareas repetitivas y nos ayudó a dar seguimiento más rápido a los clientes.",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-12">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">Opiniones</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-secondary-foreground">
            Clientes que buscan
            <span className="font-serif italic font-normal text-white"> avanzar.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="glass rounded-2xl p-6 glow-border">
              <Quote className="w-8 h-8 text-primary mb-5" />
              <p className="text-muted-foreground mb-6">"{testimonial.text}"</p>
              <div>
                <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                <p className="text-sm text-primary">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
