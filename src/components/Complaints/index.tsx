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
import { useSettings } from './../../hooks/useSettings/index';

const Complaints = () => {
  const router = useRouter();
  const t = useTranslations("Home");
  const { settings } = useSettings();

const contactUs = settings?.contacts;

  return (
    <ComplaintsContainer>
      <img src="frame2.svg" style={{zIndex:"2",position:"absolute",left:"0px",height:"80vh",width:"100%"}}/>
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
           {contactUs?.phone}
        </PhoneCallBtn>
      </ComplaintsBtns>
    </ComplaintsContainer>
  );
};

export default Complaints;
