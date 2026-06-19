"use client";
import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

export default function FireSection() {
  return (
    <section
      className="relative py-40 px-6 overflow-hidden"
      aria-labelledby="fire-heading"
    >
      {/* Full background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/img4.png"
          alt="Chef preparando prato com maçarico no Murasaki Sushi"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(15,8,3,0.82) 0%, rgba(26,14,6,0.65) 50%, rgba(15,8,3,0.75) 100%)" }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at bottom, rgba(168,118,62,0.18) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
      </div>

      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(168,118,62,0.4), transparent)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <AnimateOnScroll>
          <div className="flex items-center justify-center gap-4 mb-8">
            <span
              style={{ display: "block", width: "32px", height: "1px", background: "linear-gradient(to right, transparent, rgba(168,118,62,0.6))" }}
              aria-hidden="true"
            />
            <span className="font-body text-xs uppercase" style={{ color: "rgba(168,118,62,0.8)", letterSpacing: "0.32em" }}>
              A técnica em foco
            </span>
            <span
              style={{ display: "block", width: "32px", height: "1px", background: "linear-gradient(to left, transparent, rgba(168,118,62,0.6))" }}
              aria-hidden="true"
            />
          </div>

          <h2
            id="fire-heading"
            className="font-heading mb-7"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
              fontWeight: 400,
              color: "#F5EFE6",
              lineHeight: 1.08,
            }}
          >
            Precisão, fogo e{" "}
            <em style={{ color: "#C49A52", fontStyle: "italic" }}>sabor</em>
          </h2>

          <p
            className="font-body max-w-xl mx-auto mb-14"
            style={{ fontSize: "1.05rem", color: "rgba(245,239,230,0.55)", lineHeight: 1.9 }}
          >
            Cada prato é uma expressão de técnica japonesa aliada à criatividade contemporânea.
            Do maçarico ao prato — um ritual de sabor e elegância.
          </p>

          <a
            href="https://wa.me/5534997797979?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20Menu%20Degusta%C3%A7%C3%A3o%20do%20Murasaki."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 font-body text-sm uppercase transition-all duration-300"
            style={{ border: "1px solid rgba(168,118,62,0.5)", color: "#C49A52", letterSpacing: "0.16em" }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "rgba(168,118,62,0.12)";
              el.style.borderColor = "#C49A52";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "transparent";
              el.style.borderColor = "rgba(168,118,62,0.5)";
            }}
          >
            Conhecer o Menu Degustação
          </a>
        </AnimateOnScroll>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(168,118,62,0.3), transparent)" }}
        aria-hidden="true"
      />
    </section>
  );
}
