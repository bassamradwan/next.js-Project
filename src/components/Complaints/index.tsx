import { useRouter } from "next/navigation";
import {
  ComplaintsContainer,
  ComplaintsColumn,
  QuestionTxt,
  QuestionAnsTxt,
  ComplaintsBtns,
  ContactUsBtn,
  PhoneCallBtn,
  CallIcon,
} from "./StyledComplaints";
import { useTranslations } from "next-intl";

const Complaints = () => {
  const router = useRouter();
  const t = useTranslations("Home");
  return (
    <ComplaintsContainer>
      <ComplaintsColumn>
        <QuestionTxt>{t("complaintsOrQuestions")}</QuestionTxt>
        <QuestionAnsTxt>{t("contactUsByPhoneOrSocial")}</QuestionAnsTxt>
      </ComplaintsColumn>
      <ComplaintsBtns>
        <ContactUsBtn
          onClick={() => {
            router.push("/contact");
          }}
        >
          {t("contactUs")}
        </ContactUsBtn>
        <PhoneCallBtn>
          <CallIcon src="/call.svg" />
          920 851 9087
        </PhoneCallBtn>
      </ComplaintsBtns>
    </ComplaintsContainer>
  );
};

export default Complaints;
