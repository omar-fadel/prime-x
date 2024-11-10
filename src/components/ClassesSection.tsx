"use client";
import { Promotion } from "animation-ship-components";
import { usePathname, useRouter } from "next/navigation";

interface ClassesSectionProps {
  classes: {
    id: string;
    title: string;
    backgroundImage: string;
  }[];
  buttonsText: string;
}

const ClassesSection: React.FC<ClassesSectionProps> = ({
  classes,
  buttonsText,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClickButton = () => {
    const locale = pathname.split("/")[1];
    router.push(`/${locale}/contact-us`);
  };

  return (
    <div className="flex gap-[2rem] flex-wrap justify-center">
      {classes.map((item) => (
        <Promotion
          key={item.id}
          backgroundImageUrl={item.backgroundImage}
          id={item.id}
          promotionIcon="Date"
          promotionText={buttonsText}
          title={item.title}
          onPromotion={handleClickButton}
        />
      ))}
    </div>
  );
};

export default ClassesSection;
