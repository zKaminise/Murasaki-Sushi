"use client";
import MurasakiLogo from "./MurasakiLogo";

const links = [
  { label: "Experiência", href: "#experiencia" },
  { label: "Menu", href: "#menu" },
  { label: "Delivery", href: "#delivery" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer
      className="relative px-6 py-16"
      style={{ background: "#F2EDE6", borderTop: "1px solid rgba(168,118,62,0.15)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <MurasakiLogo size="md" variant="dark" className="mb-5" />
            <p className="font-body" style={{ fontSize: "0.85rem", color: "rgba(26,20,16,0.45)", lineHeight: 1.8, maxWidth: "280px" }}>
              Culinária japonesa contemporânea em Uberlândia/MG. Experiência gastronômica intimista
              no coração do Fundinho.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h3 className="font-body mb-5" style={{ fontSize: "0.65rem", color: "#A8763E", letterSpacing: "0.22em", textTransform: "uppercase" }}>
              Navegação
            </h3>
            <nav aria-label="Links do rodapé">
              <ul className="flex flex-col gap-3" role="list">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-body transition-colors duration-200 cursor-pointer"
                      style={{ fontSize: "0.88rem", color: "rgba(26,20,16,0.45)" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#A8763E")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(26,20,16,0.45)")}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-body mb-5" style={{ fontSize: "0.65rem", color: "#A8763E", letterSpacing: "0.22em", textTransform: "uppercase" }}>
              Contato
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/5534997797979"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body transition-colors duration-200 cursor-pointer"
                style={{ fontSize: "0.88rem", color: "rgba(26,20,16,0.45)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#A8763E")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(26,20,16,0.45)")}
              >
                (34) 99779-7979
              </a>
              <a
                href="https://instagram.com/murasakisushi"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body transition-colors duration-200 cursor-pointer"
                style={{ fontSize: "0.88rem", color: "rgba(26,20,16,0.45)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#A8763E")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(26,20,16,0.45)")}
              >
                @murasakisushi
              </a>
              <p className="font-body" style={{ fontSize: "0.82rem", color: "rgba(26,20,16,0.35)", lineHeight: 1.55 }}>
                Rua Tiradentes, 216<br />Fundinho, Uberlândia - MG<br />38400-200
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(168,118,62,0.12)" }}
        >
          <p className="font-body" style={{ fontSize: "0.7rem", color: "rgba(26,20,16,0.28)", letterSpacing: "0.05em" }}>
            © {new Date().getFullYear()} Murasaki Sushi. Todos os direitos reservados.
          </p>
          <p className="font-body" style={{ fontSize: "0.7rem", color: "rgba(26,20,16,0.22)", letterSpacing: "0.04em" }}>
            Uberlândia · MG · Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
