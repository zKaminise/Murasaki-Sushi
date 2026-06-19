"use client";
import AnimateOnScroll from "./AnimateOnScroll";

export default function DeliverySection() {
  return (
    <section
      id="delivery"
      className="relative py-20 md:py-32 px-6 overflow-hidden"
      style={{ background: "#F2EDE6" }}
      aria-labelledby="delivery-heading"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left */}
        <AnimateOnScroll>
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="gold-line" aria-hidden="true" />
              <span className="font-body text-xs tracking-[0.35em] uppercase" style={{ color: "#A8763E" }}>
                Delivery
              </span>
            </div>

            <h2
              id="delivery-heading"
              className="font-heading mb-6"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)", fontWeight: 400, color: "#1A1410", lineHeight: 1.15 }}
            >
              Murasaki{" "}
              <em style={{ color: "#A8763E", fontStyle: "italic" }}>em casa</em>
            </h2>

            <p className="font-body mb-10" style={{ fontSize: "1.05rem", color: "rgba(26,20,16,0.6)", lineHeight: 1.85 }}>
              Peça seus pratos favoritos e leve a experiência Murasaki para o conforto da sua casa.
              A mesma qualidade, os mesmos ingredientes, o mesmo cuidado — agora até você.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5534997797979?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20pedido%20no%20Murasaki%20Sushi."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-7 py-4 font-body text-sm tracking-widest uppercase cursor-pointer transition-all duration-300 w-full sm:w-auto"
                style={{ background: "#A8763E", color: "#FAF8F5", letterSpacing: "0.14em", fontWeight: 500 }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#C49A52")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#A8763E")}
              >
                <WhatsAppIcon />
                Pedir pelo WhatsApp
              </a>
              <a
                href="https://wa.me/5534997797979?text=Ol%C3%A1%2C%20gostaria%20de%20ver%20as%20op%C3%A7%C3%B5es%20de%20delivery%20do%20Murasaki%20Sushi."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-7 py-4 font-body text-sm tracking-widest uppercase cursor-pointer transition-all duration-300 w-full sm:w-auto"
                style={{ border: "1px solid rgba(168,118,62,0.35)", color: "rgba(26,20,16,0.6)", letterSpacing: "0.14em" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = "#A8763E";
                  el.style.color = "#A8763E";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = "rgba(168,118,62,0.35)";
                  el.style.color = "rgba(26,20,16,0.6)";
                }}
              >
                Ver opções
              </a>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Right: category grid */}
        <AnimateOnScroll delay={130}>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Sushi premium", sub: "Feito na hora", kanji: "寿" },
              { label: "Sashimi", sub: "Corte especial", kanji: "刺" },
              { label: "Temaki", sub: "Entrega rápida", kanji: "手" },
              { label: "Hot rolls", sub: "Na caixinha ideal", kanji: "巻" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col justify-end p-6 relative overflow-hidden transition-all duration-300"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(168,118,62,0.12)",
                  minHeight: "140px",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "rgba(168,118,62,0.3)";
                  el.style.boxShadow = "0 8px 24px rgba(168,118,62,0.07)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "rgba(168,118,62,0.12)";
                  el.style.boxShadow = "none";
                }}
              >
                <span
                  className="absolute top-3 right-3 font-heading leading-none pointer-events-none select-none"
                  style={{ fontSize: "3rem", fontWeight: 300, color: "rgba(168,118,62,0.09)" }}
                  aria-hidden="true"
                >
                  {item.kanji}
                </span>
                <span className="font-heading" style={{ fontSize: "1.1rem", fontWeight: 500, color: "#1A1410" }}>
                  {item.label}
                </span>
                <span className="font-body mt-1" style={{ fontSize: "0.72rem", color: "#A8763E", letterSpacing: "0.1em" }}>
                  {item.sub}
                </span>
              </div>
            ))}
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
