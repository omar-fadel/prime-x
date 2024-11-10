import Image from "next/image";
import TextImageSection from "../../components/TextImageSection";
import { Params } from "../../types/params";
import { getDictionary } from "./dictionaries";
import BannerContainer from "../../components/BannerContainer";
import {
  CenterChildren,
  Container,
  Stack,
  Typography,
} from "animation-ship-components";
import IconText from "../../components/IconText";
import SubmissionForm from "../../components/SubmissionForm";
import ReserveNowButton from "../../components/ReserveNowButton";

const Page: React.FC<Params> = async ({ params }) => {
  const awaitedParams = await params;
  const dictionaries = await getDictionary(awaitedParams.lang);
  return (
    <>
      <BannerContainer backgroundImage="home-1">
        <Stack className="gap-[2rem]">
          <Typography
            className="text-center md:text-start"
            variant="h2"
            color="white"
          >
            {dictionaries.home.firstSection.title}
          </Typography>
          <Typography
            className="text-center md:text-start"
            variant="body1"
            color="white"
          >
            {dictionaries.home.firstSection.subTitle}
          </Typography>
        </Stack>
      </BannerContainer>
      <TextImageSection
        header={dictionaries.home.secondSection.title}
        text={dictionaries.home.secondSection.subTitle}
        image={
          <Image
            src={"/images/home-1.png"}
            width={512}
            height={509}
            alt="home1"
            className="ltr:scale-x-[-1]"
          />
        }
      />
      <TextImageSection
        header={dictionaries.home.thirdSection.title}
        text={dictionaries.home.thirdSection.subTitle}
        isReversed
        backgroundColor="grey"
        image={
          <CenterChildren className="grid">
            <Image
              src={"/images/home-2.png"}
              width={356}
              height={467}
              alt="home2"
              className="col-start-1 row-start-1 z-10 ltr:scale-x-[-1]"
            />
            <div className="size-[25rem] rounded-full bg-primary-main col-start-1 row-start-1" />
          </CenterChildren>
        }
      />
      <Container className="bg-white">
        <Stack className="gap-[1rem]  justify-center items-center min-h-[48rem] w-full">
          <Typography align="center" variant="h1" color="primary">
            {dictionaries.home.fourthSection.title}
          </Typography>
          <Typography align="center" variant="body1" color="black">
            {dictionaries.home.fourthSection.subTitle}
          </Typography>
          <div className="flex justify-between max-w-[50rem] w-full gap-[2rem] p-[2rem] bg-grey-light rounded-3xl">
            <IconText
              iconName="Heart"
              text={dictionaries.home.fourthSection.items[0]}
            />
            <IconText
              iconName="Fist"
              text={dictionaries.home.fourthSection.items[1]}
            />
            <IconText
              iconName="Cup"
              text={dictionaries.home.fourthSection.items[2]}
            />
            <IconText
              iconName="Face"
              text={dictionaries.home.fourthSection.items[3]}
            />
          </div>
        </Stack>
      </Container>
      <SubmissionForm {...dictionaries.form} language={awaitedParams.lang} />
      <Container backgroundColor="black">
        <div
          style={{
            backgroundImage: "url(/backgrounds/home-2.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Stack className="gap-[4rem] justify-center items-center h-[32rem]">
            <Typography align="center" variant="h1" color="white">
              {dictionaries.home.end}
            </Typography>
            <ReserveNowButton
              reserveText={dictionaries.footer.reserveNowButton}
            />
          </Stack>
        </div>
      </Container>
    </>
  );
};
export default Page;
