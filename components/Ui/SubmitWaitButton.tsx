import Button from "@/components/Ui/Button";
import ArrowIcon from "@/components/Icons/ArrowIcon";
type SubmitWaitButtonProps = {
    href?: string;
    className?: string;
  };

export function SubmitWaitButton({
  href = "/waitlist",
  className,
}: SubmitWaitButtonProps) {
  return (
    <Button
      variant="filled"
      href={href}
      icon={<ArrowIcon className="text-white" />}
      iconClassName="!h-8 !w-8 !rounded-[10px] !bg-black"
      className={[
        "w-fit !btn-rounded-md !bg-white px-5 py-2 text-sm font-medium !text-black  hover:!bg-white",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      Submit a Waitlist
    </Button>
  );
}

