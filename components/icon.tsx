import { type ReactNode } from "react";

type IconButtonProps = {
  children: ReactNode;
  size?: number;
  href?: string;
  className?: string;
  ariaLabel?: string;
};

export default function IconButton({
  children,
  size = 36,
  href,
  className = "",
  ariaLabel,
}: IconButtonProps) {
  const content = (
    <span
      className={`group relative inline-flex items-center justify-center rounded-lg transition-colors hover:bg-[#4C9A2A] ${className}`}
      style={{ width: size, height: size }}
    >
      <span className="[&_svg_path]:fill-black [&_svg_path]:transition-colors group-hover:[&_svg_path]:fill-white">
        {children}
      </span>
    </span>
  );

  if (href) {
    return (
      <a href={href} aria-label={ariaLabel}>
        {content}
      </a>
    );
  }

  return content;
}
