import HeadingSectionComponent from "../HeadingSectionComponent";
import AdsListComponent from "@/components/AdsList/General";
import { AdsWrapper } from "./StyledAdsBrowse";
import { BackSvg, SectionBtn } from "../HeadingSectionComponent/StyledHeading";
import { useLocale, useTranslations } from "next-intl";
import  {useAds} from "@/hooks/useAds";
import { useRouter } from "next/router";


const AdsBrowse = () => {

  const {ads}=  useAds({});

  const t = useTranslations("Home");

  return (
    
    <AdsWrapper>
      <HeadingSectionComponent
        BtnTxt={t("showAllAds")}
        HeadingTxt={t("browseAds")}
        SubHeadingTxt={t("newAdsForMaintenance")}
      />
      <>
      <AdsListComponent ads={ads}/>
     
      <SectionBtn>
        <BackSvg src="/back.svg" alt="" />
        {t("showAllAds")}
      </SectionBtn>
      </>
    </AdsWrapper>
  );
};
export default AdsBrowse;
