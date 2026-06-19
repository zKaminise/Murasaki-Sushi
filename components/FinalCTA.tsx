"use client";
import AnimateOnScroll from "./AnimateOnScroll";

export default function FinalCTA() {
  return (
    <section
      id="contato"
      className="relative py-24 md:py-40 px-6 overflow-hidden"
      style={{ background: "#1A1410" }}
      aria-labelledby="cta-heading"
    >
      {/* Warm glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at bottom, rgba(168,118,62,0.14) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top right, rgba(59,30,77,0.12) 0%, transparent 65%)" }}
        aria-hidden="true"
      />

      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(168,118,62,0.35), transparent)" }}
        aria-hidden="true"
      />

      {/* Large kanji bg */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="font-heading leading-none"
          style={{ fontSize: "clamp(18rem, 38vw, 42rem)", fontWeight: 300, color: "rgba(168,118,62,0.04)" }}
        >
          紫
        </span>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <AnimateOnScroll>
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="gold-line" aria-hidden="true" />
            <span className="font-body text-xs tracking-[0.35em] uppercase" style={{ color: "#A8763E" }}>
              Reserve sua mesa
            </span>
            <span className="gold-line" aria-hidden="true" />
          </div>

          <h2
            id="cta-heading"
            className="font-heading mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 400, color: "#F5EFE6", lineHeight: 1.05 }}
          >
            Viva o Murasaki.{" "}
            <em style={{ color: "#A8763E", fontStyle: "italic", display: "block" }}>
              Reserve sua mesa.
            </em>
          </h2>

          <p
            className="font-body mb-14"
            style={{
              fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)",
              color: "rgba(245,239,230,0.5)",
              lineHeight: 1.9,
              maxWidth: "500px",
              margin: "0 auto 3.5rem",
            }}
          >
            Entre em contato pelo WhatsApp e descubra uma experiência japonesa feita com técnica,
            cuidado e sofisticação.
          </p>

          <a
            href="https://wa.me/5534997797979?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20fazer%20uma%20reserva%20no%20Murasaki%20Sushi."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-10 py-5 font-body tracking-widest uppercase cursor-pointer transition-all duration-300 text-base"
            style={{ background: "#A8763E", color: "#FAF8F5", letterSpacing: "0.18em", fontWeight: 600 }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#C49A52";
              el.style.boxShadow = "0 8px 40px rgba(168,118,62,0.3)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#A8763E";
              el.style.boxShadow = "none";
            }}
          >
            <WhatsAppIcon />
            Reservar pelo WhatsApp
          </a>
        </AnimateOnScroll>

        <AnimateOnScroll delay={180}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16">
            {["(34) 99779-7979", "Rua Tiradentes, 216 — Fundinho", "@murasakisushi"].map((text, i) => (
              <span key={i} className="flex items-center gap-3">
                {i > 0 && (
                  <span className="hidden sm:block w-1 h-1 rounded-full" style={{ background: "rgba(168,118,62,0.3)" }} aria-hidden="true" />
                )}
                <span className="font-body" style={{ fontSize: "0.78rem", color: "rgba(245,239,230,0.35)", letterSpacing: "0.07em" }}>
                  {text}
                </span>
              </span>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
