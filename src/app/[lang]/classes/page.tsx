import { Container, Stack, Typography } from "animation-ship-components";
import BannerContainer from "../../../components/BannerContainer";
import { Params } from "../../../types/params";
import { getDictionary } from "../dictionaries";
import Logo from "../../../components/Logo";
import SubscriptionSection from "../../../components/SubscriptionSection";
import Images from "../../../components/SubscriptionImages";
import ClassesSection from "../../../components/ClassesSection";
import ClassesImages from "../../../components/ClassesImages";
import ButtonTextSection from "../../../components/ButtonTextSection";
import ReserveNowButton from "../../../components/ReserveNowButton";

const Contact: React.FC<Params> = async ({ params }) => {
  const awaitedParams = await params;
  const dictionaries = await getDictionary(awaitedParams.lang);
  return (
    <>
      <BannerContainer isCentered backgroundImage="classes-1">
        <Stack className="justify-center items-center gap-[1rem]">
          <Typography variant="h2" color="white">
            {dictionaries.classes.bannerTitle}
          </Typography>
          <Logo />
        </Stack>
      </BannerContainer>
      <Container backgroundColor="white">
        <Stack className="p-[4rem] gap-[2rem]">
          <div>
            <Typography align="center" variant="h2" color="primary">
              {dictionaries.classes.subscriptionsTitle}
            </Typography>
            <Typography align="center" variant="h3" color="black">
              {dictionaries.classes.subscriptionsSubtitle}
            </Typography>
          </div>
          <SubscriptionSection
            buttonsText={dictionaries.classes.subscriptionButtonText}
            subscriptionCards={dictionaries.classes.subscriptionCards.map(
              (card, index) => ({
                ...card,
                image: Images[index],
              })
            )}
          />
        </Stack>
      </Container>
      <Container backgroundColor="grey">
        <Stack className="p-[4rem] gap-[2rem]">
          <div>
            <Typography align="center" variant="h2" color="primary">
              {dictionaries.classes.classesTitle}
            </Typography>
            <Typography align="center" variant="h3" color="black">
              {dictionaries.classes.classesSubtitle}
            </Typography>
          </div>
          <ClassesSection
            buttonsText={dictionaries.classes.classesButtonText}
            classes={dictionaries.classes.classes.map((item, index) => ({
              ...item,
              backgroundImage: ClassesImages[index],
            }))}
          />
        </Stack>
      </Container>
      <Container backgroundColor="white">
        <ButtonTextSection
          buttonText={dictionaries.classes.moreServicesLink}
          destinationPage="clinics"
          text={dictionaries.classes.moreServices}
        />
      </Container>
      <div
        style={{
          backgroundImage: "url(/backgrounds/classes-2.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Stack className="gap-[1rem] justify-center items-center h-[32rem]">
          <Typography align="center" variant="h1" color="white">
            {dictionaries.classes.reserveNow}
          </Typography>
          <Typography align="center" variant="h5" color="white">
            {dictionaries.classes.reserveNowDescription}
          </Typography>
          <ReserveNowButton
            reserveText={dictionaries.footer.reserveNowButton}
          />
        </Stack>
      </div>
    </>
  );
};

export default Contact;
