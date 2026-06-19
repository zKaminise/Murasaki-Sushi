"use client";
import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

const dishes = [
  {
    name: "Black Cod Yaki",
    description: "Bacalhau negro marinado em missô branco, grelhado na brasa com finalização cítrica.",
    image: "/images/blackcodyaki.png",
    tag: "Assinatura",
  },
  {
    name: "Wagyu A5",
    description: "Corte nobre de wagyu grelhado na hora, com flor de sal e emulsão de shoyu trufado.",
    image: "/images/wagyua5.png",
    tag: "Premium",
  },
  {
    name: "Ikura Gunkan",
    description: "Ova de salmão japonesa sobre arroz temperado e alga nori, servido em louça artesanal.",
    image: "/images/ikura.png",
    tag: "Clássico",
  },
  {
    name: "Carpaccio de Atum",
    description: "Lâminas finas de atum fresco com azeite de yuzu, alcaparras e micro ervas.",
    image: "/images/carpaccioatum.png",
    tag: "Entrada",
  },
  {
    name: "Hamachi Niguiri",
    description: "Peixe-limão japonês sobre niguiri, finalizado com raspas de limão siciliano e sal defumado.",
    image: "/images/hamachiniguiri.png",
    tag: "Destaque",
  },
  {
    name: "Hossomaki Uni",
    description: "Ouriço do mar fresco envolto em arroz japonês e alga nori tostada.",
    image: "/images/hossomakiuni.png",
    tag: "Exclusivo",
  },
  {
    name: "Berinjela ao Missô",
    description: "Berinjela assada lentamente com glacê de missô branco, gergelim e cebolinha.",
    image: "/images/beringelaaomisso.png",
    tag: "Vegetal",
  },
  {
    name: "Gunkan Trufa Negra",
    description: "Combinação sofisticada de ouriço e trufa negra sobre arroz de sushi temperado.",
    image: "/images/Gunkan+Trufa+Negra.png",
    tag: "Chef",
  },
];

export default function FeaturedDishes() {
  return (
    <section
      id="pratos"
      className="relative py-32 px-6"
      style={{ background: "#FAF8F5" }}
      aria-labelledby="dishes-heading"
    >
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span
                style={{ display: "block", width: "32px", height: "1px", background: "linear-gradient(to right, transparent, #A8763E)" }}
                aria-hidden="true"
              />
              <span className="font-body text-xs uppercase" style={{ color: "#A8763E", letterSpacing: "0.32em" }}>
                Pratos em destaque
              </span>
              <span
                style={{ display: "block", width: "32px", height: "1px", background: "linear-gradient(to left, transparent, #A8763E)" }}
                aria-hidden="true"
              />
            </div>
            <h2
              id="dishes-heading"
              className="font-heading"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 400, color: "#1A1410", lineHeight: 1.15 }}
            >
              Uma culinária de{" "}
              <em style={{ color: "#A8763E", fontStyle: "italic" }}>autor</em>
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {dishes.map((dish, i) => (
            <AnimateOnScroll key={dish.name} delay={i * 50}>
              <DishCard dish={dish} />
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={100}>
          <div className="text-center mt-14">
            <a
              href="https://wa.me/5534997797979?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20Menu%20Degusta%C3%A7%C3%A3o%20do%20Murasaki."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 font-body text-sm uppercase transition-all duration-300"
              style={{ background: "#A8763E", color: "#FFFFFF", letterSpacing: "0.14em", fontWeight: 500 }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#C49A52")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#A8763E")}
            >
              Ver cardápio completo
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

function DishCard({ dish }: { dish: typeof dishes[0] }) {
  return (
    <article
      className="group relative overflow-hidden flex flex-col"
      style={{ background: "#FFFFFF", border: "1px solid rgba(168,118,62,0.1)" }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "4 / 3" }}>
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Tag */}
        <div
          className="absolute top-3 left-3"
          style={{ background: "rgba(250,248,245,0.9)", backdropFilter: "blur(6px)", padding: "3px 10px" }}
        >
          <span className="font-body" style={{ fontSize: "0.6rem", color: "#A8763E", letterSpacing: "0.18em", textTransform: "uppercase" }}>
            {dish.tag}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Gold top accent on hover */}
        <div
          className="h-px mb-4 transition-all duration-500"
          style={{ background: "linear-gradient(to right, #A8763E, transparent)", opacity: 0.2 }}
          aria-hidden="true"
        />
        <h3
          className="font-heading mb-2"
          style={{ fontSize: "1.1rem", fontWeight: 400, color: "#1A1410", lineHeight: 1.2 }}
        >
          {dish.name}
        </h3>
        <p
          className="font-body"
          style={{ fontSize: "0.82rem", color: "rgba(26,20,16,0.52)", lineHeight: 1.7 }}
        >
          {dish.description}
        </p>
      </div>
    </article>
  );
}
