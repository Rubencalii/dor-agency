import Beneficios from "../components/Beneficios";
import CTAFinal from "../components/CTAFinal";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* ... */}
      <Beneficios />
      {/* ... */}
      <div className="logos-clientes">
        <Image
          src="/clientes/logo1.png"
          alt="Logo Cliente 1"
          width={150}
          height={50}
        />
        <Image
          src="/clientes/logo2.png"
          alt="Logo Cliente 2"
          width={150}
          height={50}
        />
        <Image
          src="/clientes/logo3.png"
          alt="Logo Cliente 3"
          width={150}
          height={50}
        />
        <Image
          src="/clientes/logo4.png"
          alt="Logo Cliente 4"
          width={150}
          height={50}
        />
      </div>
      <CTAFinal />
      {/* ... */}
    </main>
  );
}