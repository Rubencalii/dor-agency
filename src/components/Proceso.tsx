const pasos = [
  "Auditoría & Objetivos",
  "Estrategia & Creatividades",
  "Lanzamiento & Testeo",
  "Escalado & Optimización",
];

export default function Proceso() {
  return (
    <section className="py-12 bg-bg">
      <div className="container mx-auto max-w-[1160px] px-6">
        <h2 className="font-serif text-2xl mb-6 text-accent">Nuestro proceso</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {pasos.map((p, idx) => (
            <div key={idx} className="p-6 rounded-xl border border-border bg-[#111112] flex flex-col items-center">
              <span className="text-accent text-3xl font-bold mb-2">{idx + 1}</span>
              <span className="text-muted text-lg text-center">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}