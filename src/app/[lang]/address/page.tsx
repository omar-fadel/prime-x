import {
  CenterChildren,
  Container,
  Stack,
  Typography,
} from "animation-ship-components";
import { Params } from "../../../types/params";
import { getDictionary } from "../dictionaries";
import BannerContainer from "../../../components/BannerContainer";
import Image from "next/image";
import ReserveNowButton from "../../../components/ReserveNowButton";

const Address: React.FC<Params> = async ({ params }) => {
  const awaitedParams = await params;
  const dictionaries = await getDictionary(awaitedParams.lang);
  return (
    <>
      <BannerContainer backgroundImage="address-1">
        <Stack className="gap-[2rem]">
          <Stack>
            <Image
              src="/icons/banner-logo.svg"
              width={382}
              height={69}
              alt="logo"
            />
            <Typography variant="h1" color="white">
              {dictionaries.address.title}
            </Typography>
          </Stack>
          <Stack>
            <Typography align="center" color="white" variant="h4">
              {dictionaries.address.address}
            </Typography>
            <Typography align="center" color="white" variant="body1">
              {dictionaries.address.addressDetails}
            </Typography>
          </Stack>
        </Stack>
      </BannerContainer>
      <Container backgroundColor="grey">
        <CenterChildren className="h-[30rem]">
          <div className="grid gap-[4rem] grid-cols-4">
            <Typography
              align="center"
              className="col-span-4"
              variant="h1"
              color="primary"
            >
              {dictionaries.address.workTime}
            </Typography>
            <Stack className="col-span-2 items-center justify-center">
              <Typography variant="body1" color="secondary">
                {dictionaries.address.weekDaysWorkTime}
              </Typography>
              <Typography variant="body1" color="secondary">
                {dictionaries.address.weekDaysWorkTimeDetails}
              </Typography>
            </Stack>
            <Stack className="col-span-2 items-center justify-center">
              <Typography variant="body1" color="secondary">
                {dictionaries.address.weekEndWorkTime}
              </Typography>
              <Typography variant="body1" color="secondary">
                {dictionaries.address.weekEndWorkTimeDetails}
              </Typography>
            </Stack>
          </div>
        </CenterChildren>
      </Container>
      <Container backgroundColor="black">
        <div
          style={{
            backgroundImage: "url(/backgrounds/address-2.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Stack className="gap-[1rem] justify-center items-center h-[32rem]">
            <Typography align="center" variant="h1" color="white">
              {dictionaries.address.reserveText}
            </Typography>
            <Typography align="center" variant="h5" color="white">
              {dictionaries.address.reserveSubtext}
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

export default Address;
