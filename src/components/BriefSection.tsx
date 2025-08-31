export default function BriefSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-bg px-4 relative overflow-hidden">
      {/* Esquinas decorativas */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 pointer-events-none">
        <svg width="100%" height="100%">
          <path
            d="M100,0 Q100,100 0,100"
            stroke="#C9A227"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 pointer-events-none">
        <svg width="100%" height="100%">
          <path
            d="M0,0 Q0,100 100,100"
            stroke="#C9A227"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
      {/* Título principal */}
      <h1 className="font-serif text-accent text-5xl md:text-7xl text-center mb-6 tracking-wide drop-shadow-lg">
        BRIEF WEB<br />D OR AGENCY
      </h1>
      {/* Subtítulo */}
      <h2 className="text-muted text-xl md:text-2xl text-center mb-8 font-sans">
        Agencia de Social Media Marketing<br />
        especializada en Facebook & TikTok Ads
      </h2>
      {/* Iconos dorados simulados */}
      <div className="flex gap-6 mb-8">
        <span className="text-accent text-3xl">
          <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="14" stroke="#C9A227" strokeWidth="2" />
            <text x="16" y="21" textAnchor="middle" fontSize="16" fill="#C9A227" fontFamily="Arial">f</text>
          </svg>
        </span>
        <span className="text-accent text-3xl">
          <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="14" stroke="#C9A227" strokeWidth="2" />
            <text x="16" y="21" textAnchor="middle" fontSize="16" fill="#C9A227" fontFamily="Arial">d</text>
          </svg>
        </span>
        <span className="text-accent text-3xl">
          <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="14" stroke="#C9A227" strokeWidth="2" />
            <text x="16" y="21" textAnchor="middle" fontSize="16" fill="#C9A227" fontFamily="Arial">©</text>
          </svg>
        </span>
      </div>
      {/* Objetivo */}
      <div className="mb-8 max-w-xl w-full bg-[#111112] rounded-xl border border-border p-6 shadow-lg">
        <h3 className="text-accent text-lg font-semibold text-center mb-2 tracking-wide">OBJETIVO</h3>
        <p className="text-text text-xl text-center">
          Crear una web elegante, moderna<br />
          y persuasiva para D OR Agency
        </p>
      </div>
      {/* KPIs */}
      <div className="max-w-xl w-full bg-[#111112] rounded-xl border border-border p-6 shadow-lg">
        <h3 className="text-accent text-lg font-semibold text-center mb-2 tracking-wide">KPIs</h3>
        <p className="text-text text-xl text-center">
          ratio de conversión a lead<br />
          tasa de clic en CTA
        </p>
      </div>
    </section>
  );
}