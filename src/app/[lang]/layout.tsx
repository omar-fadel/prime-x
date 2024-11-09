import { getDictionary } from "./dictionaries";
import { Container } from "animation-ship-components";
import HeaderContainer from "../../components/HeaderContainer";
import FooterContainer from "../../components/FooterContainer";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: "en" | "ar" };
}>) {
  const awaitedParams = await params;
  const dictionaries = await getDictionary(awaitedParams.lang);

  return (
    <main dir={awaitedParams.lang === "ar" ? "rtl" : "ltr"}>
      <Container>
        <HeaderContainer
          addressLabel={dictionaries.header.address}
          classesAndSubsLabel={dictionaries.header.classesAndSubs}
          clinicsLabel={dictionaries.header.clinics}
          contactUsLabel={dictionaries.header.contactUs}
          currentLanguage={awaitedParams.lang}
        />
      </Container>
      {children}
      <FooterContainer
        address={dictionaries.footer.address}
        contactUsLabel={dictionaries.footer.contactUs}
        email={dictionaries.footer.email}
        facebookLink={dictionaries.footer.facebookLink}
        instagramLink={dictionaries.footer.instagramLink}
        linkedInLink={dictionaries.footer.linkedInLink}
        phone={dictionaries.footer.phone}
        xLink={dictionaries.footer.xLink}
        followUsLabel={dictionaries.footer.followUs}
        mapUrl={dictionaries.footer.mapLink}
        reservationDescription={dictionaries.footer.reservationDescription}
        reserveButtonLabel={dictionaries.footer.reserveNowButton}
        reserveNow={dictionaries.footer.reserveNow}
        snapchatLink=""
      />
    </main>
  );
}
