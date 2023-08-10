import { useTranslations } from "next-intl";
import {
  FooterLeft,
  FooterRight,
  FooterWebsiteLogo,
  FooterWrapper,
  ContactUsWrapper,
  FooterColumn,
  FooterContactUsPhoneLabel,
  FooterContactUsPhone,
  FooterContactUsEmailLabel,
  FooterContactUsEmail,
  DownloadAppWrapper,
  DownloadAndroidApp,
  DownloadIosApp,
  SocialMediaWrapper,
  SocialMediaIcon,
  FooterColumnHeading,
  EmailInput,
  SubscribeButton,
  FooterRow,
  LinksWrapper,
  FooterLink,
  DownloadHeader,
  EmailInputWrapper,
  SubscribeButtonWrapper,
  FooterLinks,
} from "./StyledFooter";

const Footer = () => {
  const t = useTranslations("footer");
  return (
    <FooterWrapper>
      <FooterLeft>
        <FooterWebsiteLogo src="/websitelogofooter.svg" alt="Website Logo" />
        <ContactUsWrapper>
          <FooterColumn>
            <FooterContactUsPhoneLabel>{t("Phone")}</FooterContactUsPhoneLabel>
            <FooterContactUsPhone>+91 9876543210</FooterContactUsPhone>
          </FooterColumn>
          <FooterColumn>
            <FooterContactUsEmailLabel>{t("Email")}</FooterContactUsEmailLabel>
            <FooterContactUsEmail>test@mailinator.com</FooterContactUsEmail>
          </FooterColumn>
        </ContactUsWrapper>
        <DownloadAppWrapper>
          <FooterColumn>
            <DownloadHeader>{t("DownloadOurApps")}</DownloadHeader>
            <FooterRow>
              <DownloadAndroidApp src="/google-play.svg" alt="Android App" />
              <DownloadIosApp src="/app-store.svg" alt="IOS App" />
            </FooterRow>
          </FooterColumn>
        </DownloadAppWrapper>
        <SocialMediaWrapper>
          <FooterColumn>
            <FooterColumnHeading>{t("FollowUs")}</FooterColumnHeading>
            <FooterRow>
              <SocialMediaIcon src="/facebook.svg" alt="Facebook" />
              <SocialMediaIcon src="/instagram.svg" alt="Instagram" />
              <SocialMediaIcon src="/twitter.svg" alt="Twitter" />
              <SocialMediaIcon src="/linkedin.svg" alt="Linkedin" />
            </FooterRow>
          </FooterColumn>
        </SocialMediaWrapper>
      </FooterLeft>
      <FooterRight>
        <FooterColumn>
          <FooterColumnHeading>{t("subscribeToOurNewsletter")}</FooterColumnHeading>
          <EmailInputWrapper>
            <EmailInput placeholder={t("enterYourEmail")} />
            <SubscribeButtonWrapper>
              <SubscribeButton>{t("subscribe")}</SubscribeButton>
            </SubscribeButtonWrapper>
          </EmailInputWrapper>
        </FooterColumn>
        <FooterLinks>
          <FooterColumn>
            <LinksWrapper>
              <FooterColumnHeading>{t("mostsearched")}</FooterColumnHeading>
              <FooterLink>{t("Medicaldevices")}</FooterLink>
              <FooterLink>{t("technicianjobs")}</FooterLink>
              <FooterLink>{t("Cardiovasculartechnician")}</FooterLink>
              <FooterLink>{t("Installation technician")}</FooterLink>
            </LinksWrapper>
          </FooterColumn>
          <FooterColumn>
            <LinksWrapper>
              <FooterColumnHeading>{t("Quicklinks")}</FooterColumnHeading>
              <FooterLink>{t("Categories")}</FooterLink>
              <FooterLink>{t("WhoWeAre")}</FooterLink>
              <FooterLink>{t("AddYourAd")}</FooterLink>
              <FooterLink>{t("ContactUs")}</FooterLink>
            </LinksWrapper>
          </FooterColumn>
          <FooterColumn>
            <LinksWrapper>
              <FooterColumnHeading>{t("Additionallinks")}</FooterColumnHeading>
              <FooterLink>{t("Here is an additional link")}</FooterLink>
              <FooterLink>{t("ContactUs")}</FooterLink>
            </LinksWrapper>
          </FooterColumn>
        </FooterLinks>
      </FooterRight>
    </FooterWrapper>
  );
};
export default Footer;
