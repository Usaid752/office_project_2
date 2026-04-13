import Button from "@/components/Ui/Button";
import ArrowIcon from "@/components/Icons/ArrowIcon";

type SubmitWaitlistButtonProps = {
  href?: string;
  className?: string;
};

export default function SubmitWaitlistButton({
  href = "/waitlist",
  className,
}: SubmitWaitlistButtonProps) {
  return (
    <Button
      variant="filled"
      href={href}
      icon={<ArrowIcon />}
      className={[
        "w-fit !btn-rounded-md bg-black px-0 py-0 text-sm text-white hover:bg-black/90",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      Submit a Waitlist
    </Button>
  );
}


