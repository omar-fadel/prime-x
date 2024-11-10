import { Stack, Typography } from "animation-ship-components";
import BannerContainer from "../../../components/BannerContainer";
import { Params } from "../../../types/params";
import { getDictionary } from "../dictionaries";
import SubmissionForm from "../../../components/SubmissionForm";

const ContactUs: React.FC<Params> = async ({ params }) => {
  const awaitedParams = await params;
  const dictionaries = await getDictionary(awaitedParams.lang);
  return (
    <>
      <BannerContainer backgroundImage="contact-us-1">
        <Stack className="gap-[2rem]">
          <Typography align="center" variant="h2" color="white">
            {dictionaries.contactUs.bannerTitle}
          </Typography>
          <div>
            <Typography align="center" variant="h3" color="white">
              {dictionaries.contactUs.bannerWorkTime}
            </Typography>
            <Typography align="center" variant="h4" color="white">
              {dictionaries.contactUs.bannerWorkTimeDetails}
            </Typography>
          </div>
          <div>
            <Typography align="center" variant="h3" color="white">
              {dictionaries.contactUs.bannerPhoneNumberTitle}
            </Typography>
            <Typography align="center" variant="h4" color="white">
              {dictionaries.footer.phone}
            </Typography>
          </div>
        </Stack>
      </BannerContainer>
      <SubmissionForm
        prefixComponent={
          <Typography variant="h1" color="black" align="center">
            {dictionaries.contactUs.gift}
          </Typography>
        }
        {...dictionaries.form}
        language={awaitedParams.lang}
      />
    </>
  );
};

export default ContactUs;
