"use client";
import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

const posts = [
  { src: "/images/img1.png",         label: "Frutos do mar premium" },
  { src: "/images/img2.png",         label: "Tartare sobre nori" },
  { src: "/images/ikura.png",        label: "Ikura Gunkan" },
  { src: "/images/img5.png",         label: "Uramaki de salmão" },
  { src: "/images/wagyua5.png",      label: "Wagyu A5" },
  { src: "/images/blackcodyaki.png", label: "Black Cod Yaki" },
  { src: "/images/hossomakiuni.png", label: "Hossomaki Uni" },
  { src: "/images/img6.png",         label: "Uramaki — apresentação artística" },
  { src: "/images/negroni.png",      label: "Negroni japonês" },
];

export default function InstagramSection() {
  return (
    <section
      className="relative py-20 md:py-32 px-6"
      style={{ background: "#FFFFFF" }}
      aria-labelledby="instagram-heading"
    >
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span
                style={{ display: "block", width: "32px", height: "1px", background: "linear-gradient(to right, transparent, #A8763E)" }}
                aria-hidden="true"
              />
              <span className="font-body text-xs uppercase" style={{ color: "#A8763E", letterSpacing: "0.32em" }}>
                Instagram
              </span>
              <span
                style={{ display: "block", width: "32px", height: "1px", background: "linear-gradient(to left, transparent, #A8763E)" }}
                aria-hidden="true"
              />
            </div>
            <h2
              id="instagram-heading"
              className="font-heading mb-4"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 400, color: "#1A1410", lineHeight: 1.2 }}
            >
              Acompanhe a experiência Murasaki
            </h2>
            <p
              className="font-body"
              style={{ fontSize: "1rem", color: "rgba(26,20,16,0.5)", lineHeight: 1.75, maxWidth: "460px", margin: "0 auto" }}
            >
              Novos pratos, bastidores e experiências gastronômicas compartilhadas diariamente.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={80}>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-1.5">
            {posts.map((post, i) => (
              <a
                key={i}
                href="https://instagram.com/murasakisushi"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden block"
                style={{ aspectRatio: "1 / 1" }}
                aria-label={`${post.label} — ver no Instagram`}
              >
                <Image
                  src={post.src}
                  alt={post.label}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 33vw, 20vw"
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{ background: "rgba(26,20,16,0.55)", backdropFilter: "blur(2px)" }}
                >
                  <InstagramIcon />
                  <span
                    className="font-body mt-3 text-center px-3"
                    style={{ fontSize: "0.68rem", color: "#FAF8F5", letterSpacing: "0.08em" }}
                  >
                    {post.label}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={120}>
          <div className="text-center mt-10">
            <a
              href="https://instagram.com/murasakisushi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 font-body text-sm uppercase transition-all duration-300"
              style={{ border: "1px solid rgba(168,118,62,0.3)", color: "rgba(26,20,16,0.55)", letterSpacing: "0.14em" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "#A8763E";
                el.style.color = "#A8763E";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "rgba(168,118,62,0.3)";
                el.style.color = "rgba(26,20,16,0.55)";
              }}
            >
              <InstagramIcon small />
              Ver Instagram @murasakisushi
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

function InstagramIcon({ small = false }: { small?: boolean }) {
  const size = small ? 14 : 18;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="white" />
    </svg>
  );
}
