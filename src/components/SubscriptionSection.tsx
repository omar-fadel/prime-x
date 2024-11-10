"use client";

import { TwoColumnsLgOneColumnMd } from "animation-ship-components";
import { SubscriptionCard } from "animation-ship-components";
import { SubscriptionCardProps } from "animation-ship-components/dist/components/Organisms/SubscriptionCard";
interface SubscriptionSectionProps {
  buttonsText: string;
  subscriptionCards: Omit<
    SubscriptionCardProps,
    "buttonText" | "onSubscribe"
  >[];
}

const SubscriptionSection: React.FC<SubscriptionSectionProps> = ({
  buttonsText,
  subscriptionCards,
}) => {
  const handleSubscribe = (id: string) => {
    console.log("subscribed to", id);
  };
  return (
    <TwoColumnsLgOneColumnMd className="gap-[6rem]">
      {subscriptionCards.map((card) => (
        <SubscriptionCard
          key={card.id}
          {...card}
          onSubscribe={handleSubscribe}
          buttonText={buttonsText}
        />
      ))}
    </TwoColumnsLgOneColumnMd>
  );
};

export default SubscriptionSection;
