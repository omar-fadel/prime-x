import { CenterChildren, Container } from "animation-ship-components";
import { ReactNode } from "react";

interface BannerContainerProps {
  backgroundImage: string;
  children: ReactNode;
}

const BannerContainer: React.FC<BannerContainerProps> = ({
  backgroundImage,
  children,
}) => {
  return (
    <Container childrenContainerClassName="" backgroundColor="black">
      <div
        style={{
          backgroundImage: `url(/backgrounds/${backgroundImage}.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="grid grid-cols-2 min-h-[48.75rem]"
      >
        <CenterChildren className="col-span-2 md:col-span-1 md:col-start-2 p-[2rem]">
          {children}
        </CenterChildren>
      </div>
    </Container>
  );
};

export default BannerContainer;
