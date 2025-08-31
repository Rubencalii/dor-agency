import Image from "next/image";
import Hero from "../components/Hero";
// Make sure the file exists at src/components/LogosEmpresas.tsx
// Make sure the file exists at src/components/LogosEmpresas.tsx
import LogosEmpresas from "../components/LogosEmpresas";
import Servicios from "../components/Servicios";
import Beneficios from "@/components/Beneficios";
import CTAFinal from "@/components/CTAFinal";
// import Beneficios from "../components/Beneficios";
// import CasosExito from "../components/CasosExito";
// import Testimonios from "../components/Testimonios";
// import Proceso from "../components/Proceso";
// import FAQ from "../components/FAQ";
// import CTAFinal from "../components/CTAFinal";

export default function Home() {
  return (
    <main className="bg-bg min-h-screen text-text font-sans">
      <section className="flex flex-col items-center justify-center min-h-screen bg-bg px-4">
        <h1 className="font-serif text-accent text-5xl md:text-7xl text-center mb-6 tracking-wide">
          BRIEF WEB
          <br />D OR AGENCY
        </h1>
        <h2 className="text-muted text-xl md:text-2xl text-center mb-8 font-sans">
          Agencia de Social Media Marketing
          <br />
          especializada en Facebook & TikTok Ads
        </h2>
        <div className="flex gap-6 mb-8">
          {/* Iconos de redes sociales, puedes usar react-icons o imágenes */}
          <span className="text-accent text-2xl">🌐</span>
          <span className="text-accent text-2xl">📱</span>
          <span className="text-accent text-2xl">💼</span>
        </div>
        <div className="mb-8 max-w-xl w-full bg-[#111112] rounded-xl border border-border p-6 shadow-lg">
          <h3 className="text-accent text-lg font-semibold text-center mb-2">
            OBJETIVO
          </h3>
          <p className="text-text text-xl text-center">
            Crear una web elegante, moderna
            <br />
            y persuasiva para D OR Agency
          </p>
        </div>
        <div className="max-w-xl w-full bg-[#111112] rounded-xl border border-border p-6 shadow-lg">
          <h3 className="text-accent text-lg font-semibold text-center mb-2">
            KPIs
          </h3>
          <p className="text-text text-xl text-center">
            ratio de conversión a lead
            <br />
            tasa de clic en CTA
          </p>
        </div>
      </section>
      <Hero />
      <LogosEmpresas />
      <Servicios />
      <Beneficios />
      {/* <CasosExito /> */}
      {/* <Testimonios /> */}
      {/* <Proceso /> */}
      {/* <FAQ /> */}
      <CTAFinal />
    </main>
  );
}