const testimonios = [
  {
    nombre: "Laura G.",
    texto: "Con D OR Agency hemos multiplicado nuestro ROAS y el equipo es súper profesional.",
  },
  {
    nombre: "Carlos M.",
    texto: "Las creatividades UGC nos han dado un impulso brutal en TikTok. ¡Repetiremos!",
  },
  {
    nombre: "Marta S.",
    texto: "El reporting y la transparencia nos dan mucha confianza. Recomendados.",
  },
];

export default function Testimonios() {
  return (
    <section className="py-12 bg-bg">
      <div className="container mx-auto max-w-[1160px] px-6">
        <h2 className="font-serif text-2xl mb-6 text-accent">Testimonios</h2>
        <div className="flex gap-8 overflow-x-auto pb-4">
          {testimonios.map((t, idx) => (
            <div key={idx} className="min-w-[320px] p-6 rounded-xl border border-border bg-[#111112]">
              <p className="text-muted mb-4">&quot;{t.texto}&quot;</p>
              <span className="text-accent font-serif">{t.nombre}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}