import { CenterChildren, Container } from "animation-ship-components";
import clsx from "clsx";
import { ReactNode } from "react";

interface BannerContainerProps {
  backgroundImage: string;
  children: ReactNode;
  isCentered?: boolean;
}

const BannerContainer: React.FC<BannerContainerProps> = ({
  backgroundImage,
  children,
  isCentered,
}) => {
  return (
    <Container childrenContainerClassName="" backgroundColor="black">
      <div
        style={{
          backgroundImage: `url(/backgrounds/${backgroundImage}.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={clsx("min-h-[48.75rem] ltr:scale-x-[-1]", {
          "grid grid-cols-2": !isCentered,
          "flex justify-center items-center": isCentered,
        })}
      >
        <CenterChildren
          className={clsx("p-[2rem] ltr:scale-x-[-1]", {
            "col-span-2 md:col-span-1 md:col-start-2 ltr:md:col-start-1": !isCentered,
            "pb-[10rem]": isCentered,
          })}
        >
          {children}
        </CenterChildren>
      </div>
    </Container>
  );
};

export default BannerContainer;
