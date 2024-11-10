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
      <Button
        className="min-w-[14rem] border-[0.25rem] border-black"
        color="white"
        text={buttonText}
        onClick={handleClickButton}
      />
    </section>
  );
};

export default ButtonTextSection;
