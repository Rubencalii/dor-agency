"use client";
import { useState } from "react";

const faqs = [
  {
    pregunta: "¿Qué tipo de empresas pueden trabajar con D OR Agency?",
    respuesta: "Trabajamos con marcas que buscan crecimiento rentable y valoran la transparencia y el performance.",
  },
  {
    pregunta: "¿Ofrecéis auditoría gratuita?",
    respuesta: "Sí, puedes solicitar una auditoría gratuita desde el formulario o el CTA principal.",
  },
  {
    pregunta: "¿Cómo se realiza el reporting?",
    respuesta: "Enviamos informes claros y periódicos, con métricas clave y recomendaciones.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-12 bg-bg">
      <div className="container mx-auto max-w-[1160px] px-6">
        <h2 className="font-serif text-2xl mb-6 text-accent">Preguntas frecuentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-border rounded-xl bg-[#111112]">
              <button
                className="w-full text-left px-6 py-4 font-medium text-text focus:outline-none"
                onClick={() => setOpen(open === idx ? null : idx)}
                aria-expanded={open === idx}
              >
                {faq.pregunta}
              </button>
              {open === idx && (
                <div className="px-6 pb-4 text-muted">{faq.respuesta}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}