import { Share } from "next/font/google";
import {
  BannerWrapper,
  AdInfoContainer,
  AdInfoHeader,
  AdInfoImage,
  AdInfoSubHeader,
  AdTitle,
  AdMetaInfo,
  AdMetaInfoItem,
  AdIcon,
  ActionBtnsWrapper,
  ShareBtn,
  SaveBtn,
  ReportBtn,
  ActionBtnIcon,
} from "./StyledAdBanner";
interface AdBannerProps {
  title: string | undefined;
  category: string | undefined;
  city: string | undefined;
  date: string | undefined;
  budget: string | undefined | number;
  adBannerImage: string | undefined;
  currency?: string | undefined;
}
const AdBanner = ({
  title,
  category,
  city,
  date,
  budget,
  adBannerImage,
  currency,
}: AdBannerProps) => {
  return (
    <BannerWrapper>
      <AdInfoContainer>
        <AdInfoHeader>
          <AdInfoImage src={adBannerImage} />
          <AdInfoSubHeader>
            <AdTitle>{title}</AdTitle>
            <AdMetaInfo>
              <AdMetaInfoItem>
                <AdIcon src="/briefcase.svg" />
                {category}
              </AdMetaInfoItem>
              <AdMetaInfoItem>
                <AdIcon src="/locationWhite.svg" />
                {city}
              </AdMetaInfoItem>
              <AdMetaInfoItem>
                <AdIcon src="/clock.svg" />
                {date}
              </AdMetaInfoItem>
              <AdMetaInfoItem noBorder>
                <AdIcon src="/wallet.svg" />
                {budget} {currency}
              </AdMetaInfoItem>
            </AdMetaInfo>
          </AdInfoSubHeader>
        </AdInfoHeader>
        <ActionBtnsWrapper>
          <ShareBtn>
            <ActionBtnIcon src="/share.svg" />
            Share
          </ShareBtn>
          <SaveBtn>
            <ActionBtnIcon src="/heart.svg" />
            Save
          </SaveBtn>
          <ReportBtn>
            <ActionBtnIcon src="/report.svg" />
            Report
          </ReportBtn>
        </ActionBtnsWrapper>
      </AdInfoContainer>
    </BannerWrapper>
  );
};
export default AdBanner;