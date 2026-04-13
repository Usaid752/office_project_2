import ArrowIcon from "../Icons/ArrowIcon";
import Button from "./Button";

type SubmitButtonProps = {
    href?: string;
    className?: string;
  };

export function SubmitButton({
    href = "/waitlist",
    className,
  }: SubmitButtonProps) {
    return (
      <Button
        variant="filled"
        href={href}
        icon={<ArrowIcon className="text-white " />}
        iconClassName="!h-8 !w-8 !rounded-[10px] "
        className={[
          "w-fit !btn-rounded-md !bg-white px-5 py-2 text-sm font-medium !text-[#000000]  hover:!bg-white",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        Submit a Waitlist
      </Button>
    );
  }