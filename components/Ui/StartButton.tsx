import ArrowIcon from "../Icons/ArrowIcon";
import Button from "./Button";

type StartforFreeButtonProps = {
    href?: string;
    className?: string;
  };

export function StartforFreeButton({
    href = "/waitlist",
    className,
  }: StartforFreeButtonProps) {
    return (
      <Button
        variant="filled"
        href={href}
        icon={<ArrowIcon className="text-black " />}
        iconClassName="!h-8 !w-8 !rounded-[10px] !bg-[#76BA1B]"
        className={[
          "!btn-rounded-md !bg-[#000000] text-sm font-medium !text-[#FFFFFF] hover:!bg-white scale-[1.2] mt-3 mr-5 ",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        Start for free
      </Button>
    );
  }