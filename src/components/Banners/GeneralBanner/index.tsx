import { BannerWrapper, BannerWelcome, BannerWelcomSubMsg } from "./StyledBanner";
import SearchBannerComponent from "@/components/SearchBanner";
import styled from "styled-components";
interface BannerProps {
  title?: string;
  subtitle?: string;
  $isHome?: boolean;
  $bannerImage?: string;
  keyWord?: string;
  setKeyWord?: any;
}

const SearchBannerWrapper = styled.div`
  margin-top: 30px;
  z-index: 10;
  position: relative;
  width: 65%;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const Banner = ({
  title,
  subtitle,
  $isHome = false,
  $bannerImage,
  keyWord,
  setKeyWord,
}: BannerProps) => {
  return (
    <>
      <BannerWrapper $isHome={$isHome} $bannerImage={$isHome ? $bannerImage : "none"}>
      <img  src="/frame1.svg" style={{zIndex:"2",position:"absolute",left:"0px",height:"80vh",width:"50%"}}/>
        <BannerWelcome>{title}</BannerWelcome>
        <BannerWelcomSubMsg>{subtitle}</BannerWelcomSubMsg>
        {$isHome && (<>
          <SearchBannerWrapper>
            <SearchBannerComponent keyWord={keyWord} setKeyWord={setKeyWord} />
          </SearchBannerWrapper>
          <img  src="/frame1.svg" style={{zIndex:"2",position:"absolute",left:"0px",height:"80vh",width:"50%"}}/>

          </>
 )}
      </BannerWrapper>
    </>
  );
};

export default Banner;
