interface Props {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
}

export default function MurasakiLogo({ className = "", size = "md", variant = "dark" }: Props) {
  const sizes = { sm: 32, md: 44, lg: 60 };
  const px = sizes[size];
  const goldColor = "#A8763E";
  const textColor = variant === "dark" ? "#1A1410" : "#FAF8F5";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={px}
        height={px}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M30 4L50 14V46L30 56L10 46V14L30 4Z" stroke={goldColor} strokeWidth="0.7" fill="none" opacity="0.5" />
        <circle cx="30" cy="30" r="10" stroke={goldColor} strokeWidth="0.5" fill="none" opacity="0.35" />
        <ellipse cx="30" cy="20" rx="3.5" ry="7" fill={goldColor} opacity="0.9" />
        <ellipse cx="30" cy="40" rx="3.5" ry="7" fill={goldColor} opacity="0.9" />
        <ellipse cx="20" cy="30" rx="7" ry="3.5" fill={goldColor} opacity="0.9" />
        <ellipse cx="40" cy="30" rx="7" ry="3.5" fill={goldColor} opacity="0.9" />
        <ellipse cx="30" cy="30" rx="3.5" ry="7" fill={goldColor} opacity="0.6" transform="rotate(45 30 30)" />
        <ellipse cx="30" cy="30" rx="3.5" ry="7" fill={goldColor} opacity="0.6" transform="rotate(-45 30 30)" />
        <circle cx="30" cy="30" r="3.5" fill={goldColor} />
        <circle cx="30" cy="7" r="1" fill={goldColor} opacity="0.45" />
        <circle cx="30" cy="53" r="1" fill={goldColor} opacity="0.45" />
        <circle cx="7" cy="30" r="1" fill={goldColor} opacity="0.45" />
        <circle cx="53" cy="30" r="1" fill={goldColor} opacity="0.45" />
      </svg>

      <div className="flex flex-col leading-none">
        <span
          className="font-heading tracking-[0.2em] uppercase"
          style={{
            color: goldColor,
            fontSize: size === "sm" ? "13px" : size === "md" ? "16px" : "22px",
            fontWeight: 600,
            letterSpacing: "0.22em",
          }}
        >
          Murasaki
        </span>
        <span
          className="font-body tracking-[0.4em] uppercase"
          style={{
            color: textColor,
            fontSize: size === "sm" ? "8px" : size === "md" ? "9px" : "12px",
            fontWeight: 300,
            opacity: 0.6,
          }}
        >
          Sushi
        </span>
      </div>
    </div>
  );
}
