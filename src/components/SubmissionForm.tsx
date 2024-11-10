"use client";
import {
  Container,
  ReservationForm,
  Stack,
  Typography,
} from "animation-ship-components";
import { ReservationData } from "animation-ship-components/dist/components/Organisms/ReservationInfo";
import dayjs from "dayjs";
import "dayjs/locale/ar-sa";
import "dayjs/locale/en";

dayjs.locale("ar-sa");

interface SubmissionFormProps {
  calendarTitle: string;
  language: "ar" | "en";
  emailLabel: string;
  firstNameLabel: string;
  formTitle: string;
  lastNameLabel: string;
  phoneLabel: string;
  timeHeader: string;
  formHeader: string;
  times: string[];
  yearOfBirthLabel: string;
  submitText: string;
  prefixComponent?: React.ReactNode;
}

const SubmissionForm: React.FC<SubmissionFormProps> = ({
  calendarTitle,
  emailLabel,
  firstNameLabel,
  formTitle,
  lastNameLabel,
  phoneLabel,
  timeHeader,
  times,
  yearOfBirthLabel,
  submitText,
  language,
  formHeader,
  prefixComponent,
}) => {
  const handleSubmitData = (data: ReservationData) => {
    console.log(data);
  };
  return (
    <Container backgroundColor="grey">
      <Stack className="gap-[2rem] px-[2rem] py-[6rem]">
        {prefixComponent}
        <Typography align="center" color="primary" variant="h3">
          {formHeader}
        </Typography>
        <ReservationForm
          calendarTitle={calendarTitle}
          emailLabel={emailLabel}
          firstNameLabel={firstNameLabel}
          formTitle={formTitle}
          lastNameLabel={lastNameLabel}
          phoneLabel={phoneLabel}
          timeHeader={timeHeader}
          times={times}
          locale={language === "ar" ? "ar-sa" : "en-us"}
          yearOfBirthLabel={yearOfBirthLabel}
          submitText={submitText}
          onSubmit={handleSubmitData}
        />
      </Stack>
    </Container>
  );
};

export default SubmissionForm;
