export default function Servicios() {
  return (
    <section className="py-16 bg-bg">
      <div className="container mx-auto max-w-[1160px] px-6">
        <h2 className="font-serif text-3xl mb-8 text-accent">Servicios</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 rounded-xl border border-border bg-[#111112]">
            <h3 className="font-serif text-xl mb-2">Facebook Ads</h3>
            <ul className="text-muted text-sm list-disc pl-4">
              <li>Funnel completo, CBO/ABO, retargeting, LTV.</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border border-border bg-[#111112]">
            <h3 className="font-serif text-xl mb-2">TikTok Ads</h3>
            <ul className="text-muted text-sm list-disc pl-4">
              <li>Nativos, hooks, whitelisting, Spark Ads.</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border border-border bg-[#111112]">
            <h3 className="font-serif text-xl mb-2">UGC Creatives</h3>
            <ul className="text-muted text-sm list-disc pl-4">
              <li>Guiones, producción y edición.</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border border-border bg-[#111112]">
            <h3 className="font-serif text-xl mb-2">CRO & Landing Optimization</h3>
            <ul className="text-muted text-sm list-disc pl-4">
              <li>Hipótesis, A/B testing y analytics.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}