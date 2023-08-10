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
  const locale = useLocale();
  const Ads = ads?.map(ad => ({
    id: ad.id,
    title: ad.name,
    category: ad?.category?.[locale] || "",
    location: ad.city[locale],
    time: ad.expected_hours,
    price: ad.expected_cost,
    applicant: ad.offer_count,
    image: ad.image,
    currency_code: ad.currency_code,
  }));
  console.log(Ads,"her home")

  return (
    
    <AdsWrapper>
      <HeadingSectionComponent
        BtnTxt={t("showAllAds")}
        HeadingTxt={t("browseAds")}
        SubHeadingTxt={t("newAdsForMaintenance")}
      />
      <>
      <AdsListComponent ads={ads}/>
      {/* {Ads?.map(item => {
        <AdsListComponent
          key={item?.id}
          id={item?.id}
          title={item?.title}
          category={item?.category}
          location={item?.location}
          time={item?.time}
          price={item?.price}
          applicant={item?.applicant}
          image={item?.image}
          currency_code={item?.currency_code}
        />
      })} */}
      <SectionBtn>
        <BackSvg src="/back.svg" alt="" />
        {t("showAllAds")}
      </SectionBtn>
      </>
    </AdsWrapper>
  );
};
export default AdsBrowse;
