"use client";
import { Button, Typography } from "animation-ship-components";
import { usePathname, useRouter } from "next/navigation";

interface ButtonTextSection {
  text: string;
  buttonText: string;
  destinationPage: string;
}

const ButtonTextSection: React.FC<ButtonTextSection> = ({
  text,
  buttonText,
  destinationPage,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const handleClickButton = () => {
    const locale = pathname.split("/")[1];
    router.push(`/${locale}/${destinationPage}`);
  };

  return (
    <section className="flex justify-between items-center p-[2rem] flex-wrap gap-[2rem] bg-white">
      <Typography align="center" variant="h1" color="black">
        {text}
      </Typography>
      <button
        className="min-w-[14rem] font-bold py-[0.75rem] border-[0.15rem] rounded-1xl hover:text-white hover:bg-black border-black"
        color="white"
        onClick={handleClickButton}
      >
        {buttonText}
      </button>
    </section>
  );
};

export default ButtonTextSection;
