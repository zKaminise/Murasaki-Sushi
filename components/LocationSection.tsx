"use client";
import AnimateOnScroll from "./AnimateOnScroll";

export default function LocationSection() {
  return (
    <section
      id="localizacao"
      className="relative py-20 md:py-32 px-6"
      style={{ background: "#FAF8F5" }}
      aria-labelledby="location-heading"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* Left */}
        <AnimateOnScroll>
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="gold-line" aria-hidden="true" />
              <span className="font-body text-xs tracking-[0.35em] uppercase" style={{ color: "#A8763E" }}>
                Onde estamos
              </span>
            </div>

            <h2
              id="location-heading"
              className="font-heading mb-4"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 400, color: "#1A1410", lineHeight: 1.15 }}
            >
              No coração do{" "}
              <em style={{ color: "#A8763E", fontStyle: "italic" }}>Fundinho</em>
            </h2>

            <p className="font-body mb-10" style={{ fontSize: "1rem", color: "rgba(26,20,16,0.55)", lineHeight: 1.85, maxWidth: "420px" }}>
              Um ambiente intimista e sofisticado para viver a culinária japonesa com calma,
              atenção aos detalhes e excelência.
            </p>

            <div className="flex flex-col gap-6 mb-10">
              {[
                { icon: <LocationIcon />, label: "Endereço", value: "Rua Tiradentes, 216", sub: "Fundinho, Uberlândia - MG, 38400-200" },
                { icon: <PhoneIcon />, label: "WhatsApp", value: "(34) 99779-7979", sub: "Reservas e delivery", href: "https://wa.me/5534997797979" },
                { icon: <InstagramIcon />, label: "Instagram", value: "@murasakisushi", sub: "Novidades e cardápio", href: "https://instagram.com/murasakisushi" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div
                    className="w-9 h-9 flex items-center justify-center shrink-0 mt-0.5"
                    style={{ border: "1px solid rgba(168,118,62,0.2)", color: "#A8763E", background: "#FFFFFF" }}
                    aria-hidden="true"
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-body" style={{ fontSize: "0.65rem", color: "#A8763E", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body cursor-pointer transition-colors duration-200"
                        style={{ fontSize: "0.95rem", color: "#1A1410", display: "block", lineHeight: 1.4 }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#A8763E")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#1A1410")}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-body" style={{ fontSize: "0.95rem", color: "#1A1410", lineHeight: 1.4 }}>{item.value}</p>
                    )}
                    <p className="font-body" style={{ fontSize: "0.78rem", color: "rgba(26,20,16,0.4)", lineHeight: 1.4 }}>{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Rua%20Tiradentes%20216%20Fundinho%20Uberlândia%20MG%2038400-200"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-4 font-body text-sm tracking-widest uppercase cursor-pointer transition-all duration-300"
              style={{ background: "#A8763E", color: "#FAF8F5", letterSpacing: "0.14em", fontWeight: 500 }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#C49A52")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#A8763E")}
            >
              <LocationIcon light />
              Como chegar
            </a>
          </div>
        </AnimateOnScroll>

        {/* Right: Map */}
        <AnimateOnScroll delay={140}>
          <div
            className="relative overflow-hidden"
            style={{ border: "1px solid rgba(168,118,62,0.18)", boxShadow: "0 8px 40px rgba(168,118,62,0.06)" }}
          >
            <iframe
              title="Murasaki Sushi no Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.8!2d-48.2794!3d-18.9192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a445b2a5555555%3A0x0!2sRua%20Tiradentes%2C%20216%20-%20Fundinho%2C%20Uberl%C3%A2ndia%20-%20MG%2C%2038400-200!5e0!3m2!1spt-BR!2sbr!4v1000000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="320"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Corner accents */}
            {(["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"] as const).map((pos) => (
              <div
                key={pos}
                className={`absolute w-4 h-4 ${pos}`}
                style={{
                  borderTop: pos.includes("top") ? "2px solid #A8763E" : "none",
                  borderBottom: pos.includes("bottom") ? "2px solid #A8763E" : "none",
                  borderLeft: pos.includes("left") ? "2px solid #A8763E" : "none",
                  borderRight: pos.includes("right") ? "2px solid #A8763E" : "none",
                }}
                aria-hidden="true"
              />
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

function LocationIcon({ light = false }: { light?: boolean }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={light ? "#FAF8F5" : "currentColor"} strokeWidth="1.5" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .82h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}
