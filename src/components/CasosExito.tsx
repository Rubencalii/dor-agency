const casos = [
  {
    empresa: "Marca A",
    problema: "Bajo ROAS en Facebook Ads",
    estrategia: "Optimización de creatividades y segmentación",
    resultado: "+320% ROAS, CPL -40%",
  },
  {
    empresa: "Marca B",
    problema: "Poca conversión en TikTok",
    estrategia: "UGC y Spark Ads",
    resultado: "+210% leads, CPA -30%",
  },
  {
    empresa: "Marca C",
    problema: "Landing poco efectiva",
    estrategia: "CRO y A/B testing",
    resultado: "+45% conversión, +18% LTV",
  },
];

export default function CasosExito() {
  return (
    <section className="py-12 bg-bg">
      <div className="container mx-auto max-w-[1160px] px-6">
        <h2 className="font-serif text-2xl mb-6 text-accent">Casos de éxito</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {casos.map((c, idx) => (
            <div key={idx} className="p-6 rounded-xl border border-border bg-[#111112] shadow-gold">
              <h3 className="font-serif text-xl mb-2">{c.empresa}</h3>
              <p className="text-muted text-sm mb-2"><strong>Problema:</strong> {c.problema}</p>
              <p className="text-muted text-sm mb-2"><strong>Estrategia:</strong> {c.estrategia}</p>
              <p className="text-accent text-lg"><strong>Resultado:</strong> {c.resultado}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}