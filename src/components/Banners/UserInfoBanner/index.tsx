import { 
  BannerWrapper ,
  AdInfoContainer,
  AdInfoHeader,
  AdInfoSubHeader,
  AdMetaInfo,
  AdMetaInfoItem,
  AdIcon,
  ActionBtnsWrapper,
  ShareBtn,
  SaveBtn,
  ReportBtn,
  ActionBtnIcon,
} from "../AdBanner/StyledAdBanner";
import {
   MainSection,
   AdTitleAndImg,
   ImageWrapper,
   AdsCardImage,
   TitleWrapper,
   AdsCardTitle,
   AdsSubTitle,
  } from "./styledBanner";

interface UserInfoBannerProps {
  name: string | undefined;
  type: string | undefined|null;
  address: string | undefined;
  date: string | undefined;
  UserInfoBannerImage: string | undefined;
  rate: number|undefined;
}
const UserInfoBanner = ({
  name,
  type,
  address,
  date,
  UserInfoBannerImage,
  rate
}: UserInfoBannerProps) => {
  return (
    <BannerWrapper>
      <AdInfoContainer>
        <AdInfoHeader>
          <AdInfoSubHeader>
             <MainSection>
            <AdTitleAndImg>
              <ImageWrapper>
                <AdsCardImage src={UserInfoBannerImage} />
              </ImageWrapper>
              <TitleWrapper>
                <AdsCardTitle>{name}</AdsCardTitle>
                <AdsSubTitle>{type}</AdsSubTitle>
              </TitleWrapper>
            </AdTitleAndImg>
           </MainSection>
            <AdMetaInfo>
              <AdMetaInfoItem>
                <AdIcon src="/icon-16star-filled1.svg" />
                التقيمات {rate}
              </AdMetaInfoItem>
              <AdMetaInfoItem>
                <AdIcon src="/locationWhite.svg" />
                {address}
              </AdMetaInfoItem>
              <AdMetaInfoItem/>
                <AdIcon src="/clock.svg" />
                {date}
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
export default UserInfoBanner;
