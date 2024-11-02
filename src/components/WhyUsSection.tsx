"use client";
import {
  CenterChildren,
  Container,
  IconBox,
  SpaceBetween,
  Stack,
  Typography,
} from "animation-ship-components";
import Image from "next/image";

interface WhyUseSectionProps {
  title: string;
  subTitle: string;
  items: {
    icon: string;
    text: string;
  }[];
}

const WhyUsSection: React.FC<WhyUseSectionProps> = ({
  title,
  subTitle,
  items,
}) => {
  return (
    <Container>
      <CenterChildren className="h-[32.5rem]">
        <Stack className="max-w-[52rem] w-full">
          <Typography className="w-full" align="center" color="primary" variant="h1">
            {title}
          </Typography>
          <Typography className="w-full" align="center" color="black" variant="body1">
            {subTitle}
          </Typography>
          <SpaceBetween className="bg-grey-light p-6 w-full rounded-2xl">
            {items.map((item) => (
              <IconBox
                key={item.text}
                color="secondary"
                text={item.text}
                icon={
                  <Image
                    width={36}
                    height={36}
                    src={`/icons/${item.icon}.svg`}
                    alt={item.text}
                  />
                }
              />
            ))}
          </SpaceBetween>
        </Stack>
      </CenterChildren>
    </Container>
  );
};

export default WhyUsSection;
