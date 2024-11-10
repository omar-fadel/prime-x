"use client";
import { Promotion } from "animation-ship-components";
import "../../node_modules/animation-ship-components/dist/style.css";

interface ClinicsSectionProps {
  classes: {
    id: string;
    title: string;
    backgroundImage: string;
  }[];
  buttonsText: string;
}

const ClinicsSection: React.FC<ClinicsSectionProps> = ({
  classes,
  buttonsText,
}) => {
  const handleClickPromotion = (id: string) => {
    console.log("clicked clinics", id);
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

export default ClinicsSection;
