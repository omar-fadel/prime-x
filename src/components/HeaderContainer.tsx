"use client";

import { Header } from "animation-ship-components";
import Logo from "../icons/logo.svg";
import { usePathname } from "next/navigation";

interface HeaderContainerProps {
  items: {
    id: string;
    text: string;
  }[];
  language: "ar" | "en";
}

const HeaderContainer: React.FC<HeaderContainerProps> = ({
  items,
  language,
}) => {
  const pathname = usePathname();
  const currentRoute = pathname.split("/").pop();

  const handleLanguageChange = () => {
    console.log("Language changed");
  };
  return (
    <Header
      currentLanguage={language}
      logo={<Logo style={{ width: "11rem", height: "1.7875rem" }} />}
      onLanguageChange={handleLanguageChange}
      headerList={{
        activeItem: currentRoute!,
        items,
        onChangeActiveItem(id) {
          console.log("Active item changed to:", id);
        },
      }}
    />
  );
};

export default HeaderContainer;
