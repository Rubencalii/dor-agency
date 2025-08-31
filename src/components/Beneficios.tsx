const beneficios = [
  "ROAS predecible y enfoque en margen.",
  "Creatividades UGC que detienen el scroll.",
  "Testing estructurado y aprendizaje continuo.",
  "Reporting claro, decisiones basadas en datos.",
];

export default function Beneficios() {
  return (
    <section className="py-12 bg-bg">
      <div className="container mx-auto max-w-[1160px] px-6">
        <h2 className="font-serif text-2xl mb-6 text-accent">Beneficios</h2>
        <ul className="grid md:grid-cols-2 gap-6 text-lg text-muted">
          {beneficios.map((b, idx) => (
            <li key={idx} className="bg-[#111112] p-6 rounded-xl border border-border">{b}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// filepath: c:\Users\ruben\Desktop\dor-agency\src\components\CTAFinal.tsx
export default function CTAFinal() {
  return <div></div>;
}