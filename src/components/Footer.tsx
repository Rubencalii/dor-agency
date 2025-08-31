export default function Footer() {
  return (
    <footer className="bg-[#111112] text-muted py-8 mt-12 border-t border-border">
      <div className="container mx-auto max-w-[1160px] px-6 flex flex-col md:flex-row justify-between items-center">
        <span>&copy; {new Date().getFullYear()} D OR Agency</span>
        <nav className="flex gap-6 mt-4 md:mt-0">
          <a href="/legal/aviso-legal" className="hover:text-accent">Aviso Legal</a>
          <a href="/legal/privacidad" className="hover:text-accent">Privacidad</a>
          <a href="/legal/cookies" className="hover:text-accent">Cookies</a>
        </nav>
      </div>
    </footer>
  );
}