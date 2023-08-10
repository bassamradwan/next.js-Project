import { useRouter } from "next/navigation";
import {
  AdsCardWrapper,
  AdsCardImage,
  AdsCardTitle,
  AdsCardPrice,
  AdsCardLocation,
  AdsCardDate,
  MainSection,
  InfoSection,
  AdTitleAndImg,
  ImageWrapper,
  TitleWrapper,
  AdsSubTitle,
  FavouriteBtnIcon,
  AdsApplicant,
  LocationSvg,
  LeftSection,
  RightSection,
  TimeSvg,
  PersonSvg,
} from "./StyledGeneralAds";
import { useTranslations } from "next-intl";
interface AdsCardComponentProps {
  title: string;
  category: string;
  location: string;
  time: string | number;
  price: string | number;
  applicant: string | number;
  image: string;
  favourate?: boolean;
  currency_code?: string;
  id?: string | number;
}

const AdsCardComponent = (props: AdsCardComponentProps) => {
  const router = useRouter();
  const t = useTranslations("ads");
  return (
    <AdsCardWrapper
      onClick={() => {
        router.push(`/ads/${props.id}`);
      }}
    >
      <MainSection>
        <AdTitleAndImg>
          <ImageWrapper>
            <AdsCardImage src={props.image} alt={props.title} />
          </ImageWrapper>
          <TitleWrapper>
            <AdsCardTitle title={props.title}>
              {props.title.length > 38 ? props.title.substring(0, 38) + "..." : props.title}
            </AdsCardTitle>
            <AdsSubTitle>{props.category}</AdsSubTitle>
          </TitleWrapper>
        </AdTitleAndImg>
        {
          // if favourate is true then show the icon with green color ..this is for my favourates page in  profile
          props.favourate ? (
            <FavouriteBtnIcon src="/activelovebtn.svg" alt="" />
          ) : (
            <FavouriteBtnIcon src="/lovebtn.svg" />
          )
        }
      </MainSection>
      <InfoSection>
        <LeftSection>
          <AdsCardLocation>
            <LocationSvg src="/location.svg" alt="" />
            {props.location}
          </AdsCardLocation>
          <AdsCardDate>
            <TimeSvg src="/time.svg" alt="" />
            {props.time} {t("hour")}
          </AdsCardDate>
          <AdsApplicant>
            <PersonSvg src="/person.svg" alt="" />
            {props.applicant}
          </AdsApplicant>
        </LeftSection>
        <RightSection>
          <AdsCardPrice>
            {props.price} {props.currency_code}
          </AdsCardPrice>
        </RightSection>
      </InfoSection>
    </AdsCardWrapper>
  );
};

export default AdsCardComponent;
