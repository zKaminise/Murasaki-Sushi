"use client";
import AnimateOnScroll from "./AnimateOnScroll";

const cards = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    title: "Ingredientes selecionados",
    text: "Peixes, cortes e insumos escolhidos com cuidado para entregar sabor e excelência em cada preparo.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
        <path d="M12 3L2 9l10 6 10-6-10-6z" />
        <path d="M2 17l10 6 10-6" />
        <path d="M2 13l10 6 10-6" />
      </svg>
    ),
    title: "Sushi autoral",
    text: "Combinações que respeitam a tradição japonesa, mas exploram novas possibilidades criativas e sensoriais.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9,22 9,12 15,12 15,22" />
      </svg>
    ),
    title: "Ambiente intimista",
    text: "Uma experiência elegante no Fundinho, ideal para encontros, celebrações e momentos especiais.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experiencia" className="relative py-32 px-6" style={{ background: "#FFFFFF" }}>
      <div className="max-w-6xl mx-auto">
        {/* Top label */}
        <AnimateOnScroll>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="gold-line" aria-hidden="true" />
            <span className="font-body text-xs tracking-[0.35em] uppercase" style={{ color: "#A8763E" }}>
              Conceito
            </span>
            <span className="gold-line" aria-hidden="true" />
          </div>

          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2
              className="font-heading mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 400, color: "#1A1410", lineHeight: 1.12 }}
            >
              Murasaki:{" "}
              <em style={{ color: "#A8763E", fontStyle: "italic" }}>a cor da elegância japonesa</em>
            </h2>
            <p
              className="font-body"
              style={{ fontSize: "1.05rem", color: "rgba(26,20,16,0.55)", lineHeight: 1.85, maxWidth: "560px", margin: "0 auto" }}
            >
              Murasaki significa roxo em japonês — historicamente associada à nobreza, ao mistério
              e à sofisticação. Essa inspiração guia a experiência da casa: pratos precisos, ambiente
              elegante e uma gastronomia que une tradição e inovação.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <AnimateOnScroll key={card.title} delay={i * 100}>
              <div
                className="group flex flex-col p-10 cursor-default transition-all duration-400"
                style={{
                  background: "#FAF8F5",
                  border: "1px solid rgba(168,118,62,0.12)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "rgba(168,118,62,0.35)";
                  el.style.boxShadow = "0 12px 40px rgba(168,118,62,0.08)";
                  el.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "rgba(168,118,62,0.12)";
                  el.style.boxShadow = "none";
                  el.style.transform = "translateY(0)";
                }}
              >
                <div className="mb-5" style={{ color: "#A8763E" }}>{card.icon}</div>
                <span
                  className="font-heading mb-3"
                  style={{ fontSize: "3rem", fontWeight: 300, color: "rgba(168,118,62,0.1)", lineHeight: 1 }}
                  aria-hidden="true"
                >
                  0{i + 1}
                </span>
                <h3
                  className="font-heading mb-4"
                  style={{ fontSize: "1.45rem", fontWeight: 500, color: "#1A1410", lineHeight: 1.2 }}
                >
                  {card.title}
                </h3>
                <p className="font-body" style={{ fontSize: "0.9rem", color: "rgba(26,20,16,0.55)", lineHeight: 1.8 }}>
                  {card.text}
                </p>
                <div
                  className="mt-8 h-px transition-all duration-500"
                  style={{ background: "#A8763E", width: "0px" }}
                  ref={(el) => {
                    if (!el) return;
                    const parent = el.closest(".group");
                    if (!parent) return;
                    parent.addEventListener("mouseenter", () => (el.style.width = "40px"));
                    parent.addEventListener("mouseleave", () => (el.style.width = "0px"));
                  }}
                  aria-hidden="true"
                />
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Divider + second copy block */}
        <AnimateOnScroll delay={100}>
          <div
            className="w-full h-px my-24"
            style={{ background: "linear-gradient(90deg, transparent, rgba(168,118,62,0.2), transparent)" }}
            aria-hidden="true"
          />
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="font-heading mb-5"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 400, color: "#1A1410", lineHeight: 1.2 }}
            >
              Tradição, técnica e contemporaneidade
            </h2>
            <p
              className="font-body"
              style={{ fontSize: "1.05rem", color: "rgba(26,20,16,0.55)", lineHeight: 1.85, maxWidth: "560px", margin: "0 auto" }}
            >
              O Murasaki nasce da união entre a delicadeza da culinária japonesa tradicional e a
              criatividade da gastronomia contemporânea. Cada prato é pensado para valorizar textura,
              frescor, equilíbrio e apresentação.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
