"use client";
import { Header, Icons } from "animation-ship-components";
import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";

export interface HeaderContainerProps {
  items?: [];
  currentLanguage: "ar" | "en";
  addressLabel: string;
  classesAndSubsLabel: string;
  clinicsLabel: string;
  contactUsLabel: string;
}

const HeaderContainer: React.FC<HeaderContainerProps> = ({
  currentLanguage,
  addressLabel,
  classesAndSubsLabel,
  clinicsLabel,
  contactUsLabel,
}) => {
  const router = useRouter();
  const path = usePathname();

  const activeItem = useMemo(() => {
    return path.split("/")[2];
  }, [path]);

  const handleClickHeaderItem = (id: string) => {
    if (currentLanguage === "ar") {
      router.push(`/ar/${id}`);
    } else {
      router.push(`/en/${id}`);
    }
  };

  const handleClickLogo = () => {
    if (currentLanguage === "ar") {
      router.push(`/ar`);
    } else {
      router.push(`/en`);
    }
  };

  const handleChangeLanguage = () => {
    if (currentLanguage === "ar") {
      router.push(`/en/${activeItem ?? ""}`);
    } else {
      router.push(`/ar/${activeItem ?? ""}`);
    }
  };
  return (
    <Header
      currentLanguage={currentLanguage}
      onLanguageChange={handleChangeLanguage}
      logo={
        <Icons
          onClick={handleClickLogo}
          width="11.0625rem"
          height={"1.7928rem"}
          iconName="PrimeXLogo"
        />
      }
      headerList={{
        activeItem,
        items: [
          {
            id: "address",
            text: addressLabel,
          },
          {
            id: "classes",
            text: classesAndSubsLabel,
          },
          {
            id: "clinics",
            text: clinicsLabel,
          },
          {
            id: "contact-us",
            text: contactUsLabel,
          },
        ],
        onChangeActiveItem: handleClickHeaderItem,
      }}
    />
  );
};

export default HeaderContainer;
