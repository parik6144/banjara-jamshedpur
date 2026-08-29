import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "gold" | "cream";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-maroon text-cream hover:bg-maroon-deep border border-maroon",
  secondary:
    "bg-transparent text-cream border border-cream/70 hover:bg-cream/10",
  gold: "bg-transparent text-gold border border-gold/80 hover:bg-gold/10",
  cream:
    "bg-cream text-maroon hover:bg-cream-dark border border-cream",
};

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const isInternal = href.startsWith("#") || href.startsWith("/");
  const isHttp = href.startsWith("http");

  const classes = `inline-flex min-h-12 min-w-12 items-center justify-center px-7 text-[11px] font-medium uppercase tracking-[0.22em] transition-colors duration-500 ${variants[variant]} ${className}`;

  if (isInternal) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      {...(isHttp
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
}
