"use client";
import { Footer } from "animation-ship-components";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

interface FooterContainerProps {
  contactUsLabel: string;
  followUsLabel: string;
  reserveButtonLabel: string;
  reservationDescription: string;
  reserveNow: string;
  linkedInLink: string;
  facebookLink: string;
  instagramLink: string;
  xLink: string;
  snapchatLink: string;
  address: string;
  email: string;
  phone: string;
  mapUrl: string;
}

const FooterContainer: React.FC<FooterContainerProps> = ({
  contactUsLabel,
  followUsLabel,
  reserveButtonLabel,
  reservationDescription,
  reserveNow,
  linkedInLink,
  facebookLink,
  instagramLink,
  snapchatLink,
  xLink,
  address,
  email,
  phone,
  mapUrl,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClickButton = () => {
    const locale = pathname.split("/")[1];
    router.push(`/${locale}/contact-us`);
  };

  return (
    <Footer
      logo={
        <Image
          src={"/icons/footer-logo.svg"}
          width={133}
          height={96}
          alt="footer-logo"
        />
      }
      contactUs={contactUsLabel}
      followUs={followUsLabel}
      reserveButton={reserveButtonLabel}
      reserveDescription={reservationDescription}
      reserveNow={reserveNow}
      address={address}
      email={email}
      mapHref={mapUrl}
      number={phone}
      onReserveClick={handleClickButton}
      socialMedia={[
        {
          href: linkedInLink,
          socialMedia: "linkedin",
        },
        {
          href: snapchatLink,
          socialMedia: "snapchat",
        },
        {
          href: xLink,
          socialMedia: "x",
        },
        {
          href: facebookLink,
          socialMedia: "facebook",
        },
        {
          href: instagramLink,
          socialMedia: "instagram",
        },
      ]}
    />
  );
};

export default FooterContainer;
