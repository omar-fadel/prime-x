"use client";
import {
  Container,
  ReservationForm,
  Stack,
  Typography,
} from "animation-ship-components";
import { ReservationData } from "animation-ship-components/dist/components/Organisms/ReservationInfo";

interface SubmissionFormProps {
  calendarTitle: string;
  language: "ar" | "en";
  emailLabel: string;
  firstNameLabel: string;
  formTitle: string;
  lastNameLabel: string;
  phoneLabel: string;
  timeHeader: string;
  times: string[];
  yearOfBirthLabel: string;
  submitText: string;
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
}) => {
  const handleSubmitData = (data: ReservationData) => {
    console.log(data);
  };
  return (
    <Container backgroundColor="grey">
      <Stack className="gap-[2rem] p-[2rem]">
        <Typography align="center" variant="h2">
          {formTitle}
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
