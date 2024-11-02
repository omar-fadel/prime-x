"use client";

import {
  Stack,
  TwoHalf,
  Typography,
  Container,
} from "animation-ship-components";

interface SectionProps {
  title: string;
  subTitle;
}

export const Section: React.FC<SectionProps> = ({
  title,
  subTitle,
}: SectionProps) => {
  return (
    <section>
      <Container
        className="h-[48.75rem]"
        backgroundColor="white"
        // backgroundImage="/backgrounds/home-1.png"
      >
        <TwoHalf
          startComponent={<div />}
          endComponent={
            <Stack className="p-[2rem] h-full justify-center">
              <Typography color="white" variant="h2">
                {title}
              </Typography>
              <Typography color="white" variant="body1">
                {subTitle}
              </Typography>
            </Stack>
          }
        />
      </Container>
    </section>
  );
};
