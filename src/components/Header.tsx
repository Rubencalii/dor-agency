export default function Header() {
  return (
    <header className="bg-bg border-b border-border py-6">
      <div className="container mx-auto max-w-[1160px] px-6 flex justify-between items-center">
        <span className="font-serif text-accent text-2xl">D'OR Agency</span>
        <nav className="flex gap-6">
          <a href="/" className="hover:text-accent">Home</a>
          <a href="/servicios/facebook-ads" className="hover:text-accent">Servicios</a>
          <a href="/casos-de-exito" className="hover:text-accent">Casos de éxito</a>
          <a href="/sobre-nosotros" className="hover:text-accent">Sobre nosotros</a>
          <a href="/contacto" className="hover:text-accent">Contacto</a>
        </nav>
      </div>
    </header>
  );
}