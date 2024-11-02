"use client";
import {
  Container,
  Stack,
  TwoHalf,
  Typography,
} from "animation-ship-components";
import Image from "next/image";
import { useMemo } from "react";

interface TextImageSectionProps {
  title: string;
  description: string;
  image: string;
  isGrey?: boolean;
  isReversed?: boolean;
}

const TextImageSection: React.FC<TextImageSectionProps> = ({
  title,
  description,
  image,
  isGrey,
  isReversed,
}) => {
  const componentOne = useMemo(
    () => (
      <Stack className="p-[4rem]">
        <Typography color="primary" variant="h3">
          {title}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </Stack>
    ),
    [description, title]
  );
  const componentTwo = useMemo(
    () => (
      <Image width={512} height={512} src={`/images/${image}.png`} alt="home" />
    ),
    [image]
  );

  return (
    <Container backgroundColor={isGrey ? "grey" : "white"}>
      <TwoHalf
        startComponent={isReversed ? componentTwo : componentOne}
        endComponent={isReversed ? componentOne : componentTwo}
      />
    </Container>
  );
};

export default TextImageSection;
