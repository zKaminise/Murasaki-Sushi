"use client";
import Image from "next/image";
import MurasakiLogo from "./MurasakiLogo";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden lg:min-h-screen lg:flex lg:items-center"
      style={{ background: "#FAF8F5" }}
    >
      {/* Left — content */}
      <div className="relative z-10 flex flex-col justify-center px-6 md:px-12 lg:px-20 xl:px-24 pt-28 pb-8 lg:pb-20 w-full lg:w-1/2">
        {/* Logo */}
        <div className="animate-float mb-10">
          <MurasakiLogo size="lg" variant="dark" />
        </div>

        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-7">
          <span
            style={{
              display: "block",
              width: "32px",
              height: "1px",
              background: "linear-gradient(to right, #A8763E, transparent)",
            }}
            aria-hidden="true"
          />
          <span
            className="font-body text-xs uppercase"
            style={{ color: "#A8763E", letterSpacing: "0.3em" }}
          >
            Uberlândia · Fundinho · MG
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-heading mb-6"
          style={{
            fontSize: "clamp(2.4rem, 5vw, 5rem)",
            fontWeight: 400,
            color: "#1A1410",
            lineHeight: 1.08,
            letterSpacing: "-0.01em",
          }}
        >
          A tradição japonesa
          <br />
          em uma{" "}
          <em className="gold-shimmer" style={{ fontStyle: "italic" }}>
            experiência contemporânea
          </em>
        </h1>

        {/* Description */}
        <p
          className="font-body mb-12 max-w-md"
          style={{ fontSize: "1rem", color: "rgba(26,20,16,0.52)", lineHeight: 1.9 }}
        >
          Culinária japonesa autoral, ingredientes selecionados e uma atmosfera
          intimista no coração do Fundinho.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://wa.me/5534997797979?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20fazer%20uma%20reserva%20no%20Murasaki%20Sushi."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 font-body text-sm uppercase transition-all duration-300"
            style={{ background: "#A8763E", color: "#FFFFFF", letterSpacing: "0.14em", fontWeight: 500 }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#C49A52")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#A8763E")}
          >
            <WhatsAppIcon />
            Reservar pelo WhatsApp
          </a>

          <a
            href="#experiencia"
            className="inline-flex items-center justify-center px-8 py-4 font-body text-sm uppercase transition-all duration-300"
            style={{ border: "1px solid rgba(168,118,62,0.4)", color: "#6F4A24", letterSpacing: "0.14em" }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "#A8763E";
              el.style.background = "rgba(168,118,62,0.05)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "rgba(168,118,62,0.4)";
              el.style.background = "transparent";
            }}
          >
            Ver experiência
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="hidden lg:flex flex-col items-start gap-2 mt-16" aria-hidden="true">
          <span className="font-body" style={{ fontSize: "9px", color: "rgba(168,118,62,0.5)", letterSpacing: "0.25em", textTransform: "uppercase" }}>
            Scroll
          </span>
          <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, rgba(168,118,62,0.4), transparent)" }} />
        </div>
      </div>

      {/* Image — stacks below on mobile, absolute right panel on desktop */}
      <div className="relative h-72 sm:h-80 lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-[52%] overflow-hidden">
        {/* Gradient fade on left edge (desktop only) */}
        <div
          className="hidden lg:block absolute left-0 top-0 h-full w-32 z-10"
          style={{ background: "linear-gradient(to right, #FAF8F5, transparent)" }}
          aria-hidden="true"
        />
        {/* Gradient fade on top edge (mobile only) */}
        <div
          className="lg:hidden absolute top-0 left-0 right-0 h-12 z-10"
          style={{ background: "linear-gradient(to bottom, #FAF8F5, transparent)" }}
          aria-hidden="true"
        />

        <Image
          src="/images/img6.png"
          alt="Uramaki premium — apresentação artística do Murasaki Sushi"
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 1024px) 100vw, 52vw"
        />

        {/* Bottom gradient */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 lg:h-40"
          style={{ background: "linear-gradient(to top, rgba(250,248,245,0.7), transparent)" }}
          aria-hidden="true"
        />

        {/* Floating label (desktop only) */}
        <div
          className="hidden lg:block absolute bottom-12 right-10 z-20 text-right"
          style={{ background: "rgba(250,248,245,0.88)", backdropFilter: "blur(10px)", padding: "12px 18px", border: "1px solid rgba(168,118,62,0.18)" }}
        >
          <p className="font-body" style={{ fontSize: "0.6rem", color: "#A8763E", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "2px" }}>
            Destaque da casa
          </p>
          <p className="font-heading" style={{ fontSize: "1rem", color: "#1A1410", fontWeight: 400 }}>
            Uramaki Japonês
          </p>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
