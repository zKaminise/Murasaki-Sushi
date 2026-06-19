"use client";
import AnimateOnScroll from "./AnimateOnScroll";

export default function MenuDegustacaoSection() {
  return (
    <section
      id="menu"
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: "#F2EDE6" }}
    >
      {/* Purple hint accent top-right */}
      <div
        className="absolute top-0 right-0 w-80 h-80 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top right, rgba(59,30,77,0.05) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">
        {/* Left: visual blocks */}
        <AnimateOnScroll>
          <div className="relative">
            {/* Kanji watermark */}
            <div
              className="absolute -top-6 -left-4 font-heading leading-none pointer-events-none select-none"
              style={{ fontSize: "clamp(7rem, 14vw, 13rem)", fontWeight: 300, color: "rgba(168,118,62,0.07)" }}
              aria-hidden="true"
            >
              懐
            </div>

            {/* Days grid */}
            <div className="relative z-10 grid grid-cols-3 gap-3 mb-3">
              {["Segunda", "Terça", "Quarta"].map((day) => (
                <div
                  key={day}
                  className="flex flex-col items-center justify-center py-8 px-3"
                  style={{ background: "#FFFFFF", border: "1px solid rgba(168,118,62,0.15)" }}
                >
                  <span className="font-heading mb-1" style={{ fontSize: "1.15rem", fontWeight: 500, color: "#1A1410" }}>
                    {day}
                  </span>
                  <span className="font-body" style={{ fontSize: "0.65rem", color: "#A8763E", letterSpacing: "0.1em" }}>
                    Disponível
                  </span>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div
              className="relative z-10 p-8"
              style={{ background: "#FFFFFF", border: "1px solid rgba(168,118,62,0.15)", borderLeft: "3px solid #A8763E" }}
            >
              <p
                className="font-heading italic"
                style={{ fontSize: "1.05rem", color: "rgba(26,20,16,0.65)", lineHeight: 1.7 }}
              >
                "Uma jornada para explorar o melhor da casa — pratos marcantes em doses menores,
                pensados para compartilhar."
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Right: content */}
        <AnimateOnScroll delay={140}>
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="gold-line" aria-hidden="true" />
              <span className="font-body text-xs tracking-[0.35em] uppercase" style={{ color: "#A8763E" }}>
                Exclusivo
              </span>
            </div>

            <h2
              className="font-heading mb-6"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 400, color: "#1A1410", lineHeight: 1.15 }}
            >
              Menu Degustação
            </h2>

            <p className="font-body mb-5" style={{ fontSize: "1rem", color: "rgba(26,20,16,0.6)", lineHeight: 1.85 }}>
              Uma experiência pensada para quem deseja conhecer o melhor do Murasaki em uma jornada completa.
            </p>
            <p className="font-body mb-10" style={{ fontSize: "1rem", color: "rgba(26,20,16,0.6)", lineHeight: 1.85 }}>
              Disponível às segundas, terças e quartas, o Menu Degustação reúne porções menores dos pratos
              mais pedidos da casa, permitindo explorar sabores, técnicas e combinações com qualidade e autenticidade.
            </p>

            <ul className="flex flex-col gap-3 mb-10" role="list">
              {[
                "Seleção dos pratos mais marcantes",
                "Porções para explorar e compartilhar",
                "Disponível de segunda a quarta",
                "Experiência guiada pelos sabores",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#A8763E" strokeWidth="2" className="mt-0.5 shrink-0" aria-hidden="true">
                    <polyline points="20,6 9,17 4,12" />
                  </svg>
                  <span className="font-body" style={{ fontSize: "0.9rem", color: "rgba(26,20,16,0.65)" }}>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/5534997797979?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20Menu%20Degusta%C3%A7%C3%A3o%20do%20Murasaki."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 font-body text-sm tracking-widest uppercase cursor-pointer transition-all duration-300"
              style={{ background: "#A8763E", color: "#FAF8F5", letterSpacing: "0.14em", fontWeight: 500 }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#C49A52")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#A8763E")}
            >
              <WhatsAppIcon />
              Consultar disponibilidade
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
