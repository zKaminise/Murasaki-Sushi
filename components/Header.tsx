"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import MurasakiLogo from "./MurasakiLogo";

const navLinks = [
  { label: "Experiência", href: "#experiencia" },
  { label: "Menu", href: "#menu" },
  { label: "Delivery", href: "#delivery" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(250,248,245,0.95)" : "rgba(250,248,245,0.6)",
        backdropFilter: scrolled ? "blur(20px)" : "blur(4px)",
        borderBottom: scrolled ? "1px solid rgba(168,118,62,0.15)" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link href="#hero" aria-label="Murasaki Sushi — voltar ao topo">
          <MurasakiLogo size="sm" variant="dark" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-xs tracking-widest uppercase transition-colors duration-200 cursor-pointer"
              style={{ color: "rgba(26,20,16,0.5)", letterSpacing: "0.12em" }}
              onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#A8763E")}
              onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "rgba(26,20,16,0.5)")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="https://wa.me/5534997797979?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20fazer%20uma%20reserva%20no%20Murasaki%20Sushi."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 px-5 py-2.5 text-xs tracking-widest uppercase cursor-pointer transition-all duration-300 font-body"
          style={{ background: "#A8763E", color: "#FAF8F5", letterSpacing: "0.14em" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#C49A52")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#A8763E")}
        >
          <WhatsAppIcon />
          Reservar
        </a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden cursor-pointer p-2"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          <span
            className="block w-6 h-px transition-all duration-300"
            style={{ background: "#A8763E", transform: open ? "rotate(45deg) translateY(4px)" : "none" }}
          />
          <span
            className="block w-6 h-px mt-1.5 transition-all duration-300"
            style={{ background: "#A8763E", opacity: open ? 0 : 1 }}
          />
          <span
            className="block w-6 h-px mt-1.5 transition-all duration-300"
            style={{ background: "#A8763E", transform: open ? "rotate(-45deg) translateY(-4px)" : "none" }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-500"
        style={{
          maxHeight: open ? "400px" : "0",
          background: "rgba(250,248,245,0.98)",
          borderTop: open ? "1px solid rgba(168,118,62,0.12)" : "none",
        }}
      >
        <nav className="px-6 py-6 flex flex-col gap-5" aria-label="Menu mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-body text-xs tracking-widest uppercase cursor-pointer"
              style={{ color: "rgba(26,20,16,0.6)", letterSpacing: "0.12em" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5534997797979?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20fazer%20uma%20reserva%20no%20Murasaki%20Sushi."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center gap-2 px-5 py-3 text-xs tracking-widest uppercase cursor-pointer font-body w-fit"
            style={{ background: "#A8763E", color: "#FAF8F5" }}
          >
            <WhatsAppIcon /> Reservar
          </a>
        </nav>
      </div>
    </header>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
