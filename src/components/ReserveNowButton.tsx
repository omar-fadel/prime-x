"use client";
import { Button } from "animation-ship-components";
import { usePathname, useRouter } from "next/navigation";

interface ReserveNowButtonProps {
  reserveText: string;
}
const ReserveNowButton: React.FC<ReserveNowButtonProps> = ({ reserveText }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClickButton = () => {
    const locale = pathname.split("/")[1];
    router.push(`/${locale}/contact-us`);
  };

  return (
    <Button
      color="white"
      className="px-[3rem] rounded-1xl"
      text={reserveText}
      onClick={handleClickButton}
    />
  );
};

export default ReserveNowButton;
