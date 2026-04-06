import Button from "@/components/Button";
import LearnMoreIcon from "@/components/icons/LearnMoreIcon";

type LearnMoreButtonProps = {
  href?: string;
  className?: string;
};

export default function LearnMoreButton({
  href = "/learn-more",
  className,
}: LearnMoreButtonProps) {
  return (
    <Button
      variant="outlined"
      href={href}
      icon={<LearnMoreIcon />}
      className={[
        "w-fit !btn-rounded-md border-[#D8D8D3] bg-white px-0 py-0 text-sm text-black shadow-[0_10px_24px_rgba(15,23,42,0.05)] hover:bg-[#FAFAF7]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      Learn More
    </Button>
  );
}
