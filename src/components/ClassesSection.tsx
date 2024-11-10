"use client";
import { Promotion } from "animation-ship-components";

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
  const handleClickPromotion = (id: string) => {
    console.log("clicked promotion", id);
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
          onPromotion={handleClickPromotion}
        />
      ))}
    </div>
  );
};

export default ClassesSection;
