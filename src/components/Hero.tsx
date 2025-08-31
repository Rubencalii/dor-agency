import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-bg text-text">
      <div className="mx-auto max-w-[1160px] px-6 py-24 flex flex-col items-center">
        <Image
          src="/dor-agency-logo.png"
          alt="D'OR Agency Logo"
          width={180}
          height={180}
          className="mb-8"
          priority
        />
        <h1 className="font-serif text-4xl md:text-6xl leading-tight text-center">
          Escala tu adquisición con anuncios que convierten.
        </h1>
        <p className="mt-4 text-lg text-muted max-w-2xl text-center">
          En D OR Agency planificamos, ejecutamos y optimizamos campañas de Facebook Ads y TikTok Ads para marcas que buscan crecimiento rentable.
        </p>
        <div className="mt-8 flex gap-3">
          <a
            href="#agenda"
            className="px-5 py-3 rounded-xl bg-accent text-bg font-medium shadow-gold transition hover:scale-105"
          >
            Agenda una llamada
          </a>
          <a
            href="#auditoria"
            className="px-5 py-3 rounded-xl border border-border text-text transition hover:bg-border"
          >
            Auditoría gratuita
          </a>
        </div>
      </div>
    </section>
  );
}