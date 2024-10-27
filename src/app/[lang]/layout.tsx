import { getDictionary } from "./dictionaries";
import HeaderContainer from "../../components/HeaderContainer";

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
    <main>
      <HeaderContainer
        language={awaitedParams.lang}
        items={[
          {
            id: "/address",
            text: dictionaries.header.address,
          },
          {
            id: "/classes",
            text: dictionaries.header.classesAndSubs,
          },
          {
            id: "/clinics",
            text: dictionaries.header.clinics,
          },
          {
            id: "/contact",
            text: dictionaries.header.contactUs,
          },
        ]}
      />
      {children}
    </main>
  );
}
