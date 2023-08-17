import { Type } from "@/components/Profile/styles/styled.offersTable";
import { Share } from "next/font/google";
import { 
  BannerWrapper ,
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
} from "../AdBanner/StyledAdBanner";

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
}: UserInfoBannerProps) => {
  return (
    <BannerWrapper>
      <AdInfoContainer>
        <AdInfoHeader>
          <AdInfoImage src={UserInfoBannerImage} />
          <AdInfoSubHeader>
            <AdTitle>{name}</AdTitle>
            <Type>{type}</Type>
            <AdMetaInfo>
              <AdMetaInfoItem>
                <AdIcon src="/briefcase.svg" />
                {type}
              </AdMetaInfoItem>
              <AdMetaInfoItem>
                <AdIcon src="/locationWhite.svg" />
                {address}
              </AdMetaInfoItem>
              <AdMetaInfoItem>
                <AdIcon src="/clock.svg" />
                {date}
              </AdMetaInfoItem>
              {/* <AdMetaInfoItem noborder={+true}>
                <AdIcon src="/wallet.svg" />
                {budget} {currency}
              </AdMetaInfoItem> */}
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
