import Image from "next/image";

const logos = [
  { src: "/clientes/logo1.png", alt: "Cliente 1" },
  { src: "/clientes/logo2.png", alt: "Cliente 2" },
  { src: "/clientes/logo3.png", alt: "Cliente 3" },
  { src: "/clientes/logo4.png", alt: "Cliente 4" },
];

export default function LogosEmpresas() {
  return (
    <section className="py-12 bg-bg">
      <div className="container mx-auto max-w-[1160px] px-6">
        <h2 className="font-serif text-2xl mb-6 text-center text-accent">Empresas con las que trabajamos</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {logos.map((logo, idx) => (
            <Image
              key={idx}
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={60}
              className="object-contain grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
}