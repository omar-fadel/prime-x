import { Params } from "../../types/params";
import { getDictionary } from "./dictionaries";
import { Section } from "../../components/Section";
import TextImageSection from "../../components/TextImageSection";

const Page: React.FC<Params> = async ({ params }) => {
  const awaitedParams = await params;
  const dictionaries = await getDictionary(awaitedParams.lang);
  return (
    <>
      <Section
        title={dictionaries.home.firstSection.title}
        subTitle={dictionaries.home.firstSection.subTitle}
      />
      <TextImageSection
        description={dictionaries.home.secondSection.subTitle}
        title={dictionaries.home.secondSection.title}
        image={"home-1"}
      />
      <TextImageSection
        isReversed
        isGrey
        description={dictionaries.home.thirdSection.subTitle}
        title={dictionaries.home.thirdSection.title}
        image={"home-1"}
      />
    </>
  );
};
export default Page;
