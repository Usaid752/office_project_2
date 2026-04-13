import Image from "next/image";

const BOX: Record<"green" | "lime" | "dark", string> = {
  green: "",
  lime: "",
  dark: "bg-neutral-900",
};

type IconStyle = keyof typeof BOX;

export default function AdminFeatureIcon({
  iconSrc,
  iconStyle,
}: {
  iconSrc: string;
  iconStyle: IconStyle;
}) {
  return (
    <span
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${BOX[iconStyle]}`}
      aria-hidden
    >
      <Image
        src={iconSrc}
        alt=""
        width={28}
        height={28}
        className="h-15 w-15 object-contain"
      />
    </span>
  );
}
