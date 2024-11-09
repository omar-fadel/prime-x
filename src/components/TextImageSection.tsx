import {
  CenterChildren,
  Container,
  Stack,
  Typography,
} from "animation-ship-components";
import clsx from "clsx";
import { ReactNode } from "react";

export interface TextImageSectionProps {
  isReversed?: boolean;
  image: ReactNode;
  header: string;
  text: string;
  backgroundColor?: "white" | "grey";
}

const Text: React.FC<Pick<TextImageSectionProps, "header" | "text">> = ({
  header,
  text,
}) => {
  return (
    <Stack className="gap-[2rem]">
      <Typography
        className="text-center md:text-start"
        color="primary"
        variant="h2"
      >
        {header}
      </Typography>
      <Typography
        className="text-center md:text-start"
        color="black"
        variant="body1"
      >
        {text}
      </Typography>
    </Stack>
  );
};

const TextImageSection: React.FC<TextImageSectionProps> = ({
  isReversed,
  header,
  text,
  image,
  backgroundColor = "white",
}) => {
  return (
    <Container
      className={clsx({
        "bg-white": backgroundColor === "white",
        "bg-grey-light": backgroundColor === "grey",
      })}
    >
      <section className={"grid grid-cols-2 p-[2rem]"}>
        <CenterChildren
          className={clsx("col-span-2 md:col-span-1 md:row-start-1", {
            "md:col-start-2": isReversed,
            "md:col-start-1": !isReversed,
          })}
        >
          <Text header={header} text={text} />
        </CenterChildren>
        <CenterChildren
          className={clsx("col-span-2 md:col-span-1 md:row-start-1", {
            "md:col-start-1": isReversed,
            "md:col-start-2": !isReversed,
          })}
        >
          {image}
        </CenterChildren>
      </section>
    </Container>
  );
};

export default TextImageSection;
