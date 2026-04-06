import Link from "next/link";
import { type ReactNode } from "react";

const variantStyles = {
  outlined: {
    base: "border border-neutral-300 text-foreground hover:border-neutral-400 hover:bg-neutral-50 font-medium",
    iconContainer: "bg-white",
  },
  filled: {
    base: "bg-primary text-white hover:bg-primary-light font-medium",
    iconContainer: "bg-[#76BA1B]",
  },
  tabActive: {
    base: "!h-11 !rounded-xl !bg-[#4C9A2A] !px-4 !py-0 text-sm !text-white shadow-[0_8px_20px_rgba(91,170,55,0.28)] hover:!bg-[#539D31] sm:!px-5",
    iconContainer: "bg-[#76BA1B]",
  },
  tabInactive: {
    base: "!h-11 !rounded-xl !border-transparent !bg-transparent !px-4 !py-0 text-sm !font-medium !text-[#7A7A76] hover:!bg-white sm:!px-5",
    iconContainer: "bg-white",
  },
} as const;

type ButtonProps = {
  variant?: "filled" | "outlined" | "tabActive" | "tabInactive";
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  variant = "filled",
  icon,
  children,
  className,
  href,
  onClick,
  type = "button",
}: ButtonProps) {
  const styles = variantStyles[variant];

  const classes = [
    "btn-rounded-md text-sm transition-colors flex items-center gap-2",
    styles.base,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {children}
      {icon && (
        <span
          className={`flex items-center justify-center w-7 h-7 rounded-md ${styles.iconContainer}`}
        >
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {content}
    </button>
  );
}
