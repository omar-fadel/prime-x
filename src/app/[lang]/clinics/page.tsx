import { Container, Stack, Typography } from "animation-ship-components";
import BannerContainer from "../../../components/BannerContainer";
import { Params } from "../../../types/params";
import { getDictionary } from "../dictionaries";
import Logo from "../../../components/Logo";
import ClassesSection from "../../../components/ClassesSection";
import ButtonTextSection from "../../../components/ButtonTextSection";
import ClinicsImages from "../../../components/ClinicsImages";
import ReserveNowButton from "../../../components/ReserveNowButton";

const Clinics: React.FC<Params> = async ({ params }) => {
  const awaitedParams = await params;
  const dictionaries = await getDictionary(awaitedParams.lang);
  return (
    <>
      <BannerContainer backgroundImage="clinics-1" isCentered>
        <Stack className="justify-center items-center gap-[1rem]">
          <Typography variant="h2" color="white" align="center">
            {dictionaries.clinics.banner}
          </Typography>
          <Logo />
        </Stack>
      </BannerContainer>
      <Container backgroundColor="white">
        <Stack className="p-[4rem] gap-[2rem]">
          <div>
            <Typography align="center" variant="h2" color="primary">
              {dictionaries.clinics.title}
            </Typography>
            <Typography align="center" variant="h3" color="black">
              {dictionaries.clinics.subTitle}
            </Typography>
          </div>
          <ClassesSection
            buttonsText={dictionaries.classes.classesButtonText}
            classes={dictionaries.classes.classes.map((item, index) => ({
              ...item,
              backgroundImage: ClinicsImages[index],
            }))}
          />
        </Stack>
      </Container>
      <Container backgroundColor="white" className="py-[4rem]">
        <ButtonTextSection
          buttonText={dictionaries.clinics.moreSubscription}
          destinationPage="classes"
          text={dictionaries.clinics.moreSubscriptionLink}
        />
      </Container>
      <div
        style={{
          backgroundImage: "url(/backgrounds/clinics-2.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Stack className="gap-[1rem] justify-center items-center h-[32rem]">
          <Typography align="center" variant="h1" color="white">
            {dictionaries.classes.reserveNow}
          </Typography>
          <ReserveNowButton
            reserveText={dictionaries.footer.reserveNowButton}
          />
        </Stack>
      </div>
    </>
  );
};

export default Clinics;
