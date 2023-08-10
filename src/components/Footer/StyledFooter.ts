import styled from "styled-components";

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(24, 26, 32);
  padding: 0px;
  color: #ffffff;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 35px 10%;
  }
`;

const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  align-items: flex-start;
  padding: 10px 20px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: center;
    align-items: flex-start;
    padding: 0;
  }
`;

const FooterWebsiteLogo = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 24px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    margin-right: 0;
    margin-bottom: 0;
  }
`;

const ContactUsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 100%;
`;
const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 100%;
  @media (min-width: 768px) {
    margin-bottom: 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const FooterContactUsPhoneLabel = styled.p`
  font-size: 14px;
  color: #999;
  margin-bottom: 8px;
`;

const FooterContactUsPhone = styled.p`
  font-size: 16px;
  margin-top: 0;
`;

const FooterContactUsEmailLabel = styled.p`
  font-size: 14px;
  color: #999;
  margin-bottom: 8px;
`;

const FooterContactUsEmail = styled.p`
  font-size: 16px;
  margin-top: 0;
`;

const DownloadAppWrapper = styled.div`
  display: flex;
  margin-right: 24px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const DownloadAndroidApp = styled.img`
  width: 146px;
  height: 48px;
  margin-right: 8px;
`;

const DownloadIosApp = styled.img`
  width: 146px;
  height: 48px;
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const SocialMediaIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  padding: 10px;

  @media (min-width: 768px) {
    align-items: flex-start;
    padding: 0;
  }
`;

const FooterRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 16px;
  width: 100%;
`;

const FooterColumnHeading = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 18px 0;
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 24px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const FooterLink = styled.a`
  font-size: 16px;
  color: #b5b5b5;
  margin-bottom: 8px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const SubscribeButton = styled.button`
  background-color: #212329;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  margin-bottom: 16px;

  &:hover {
    background-color: #555;
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const DownloadHeader = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
`;

const EmailInputWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const EmailInput = styled.input`
  width: 100%;
  height: 32px;
  padding: 18px;
  border: none;
  border-radius: 4px;
  background: #212329;
`;

const SubscribeButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export {
  FooterWrapper,
  FooterLeft,
  FooterWebsiteLogo,
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
  FooterRight,
  FooterRow,
  FooterColumnHeading,
  LinksWrapper,
  FooterLink,
  EmailInput,
  SubscribeButton,
  DownloadHeader,
  EmailInputWrapper,
  SubscribeButtonWrapper,
  FooterLinks,
};
