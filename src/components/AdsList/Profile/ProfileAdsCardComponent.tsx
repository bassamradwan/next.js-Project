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
  StatusBtn,
  StatusTxt,
  StatusWrapper,
} from "./StyledProfileAd";
interface AdsCardComponentProps {
  title: string;
  deviceType: string;
  location: string;
  time: string;
  price: string;
  applicant: string;
  image: string;
  filterBy?: string;
}

const AdsCardComponent = (props: AdsCardComponentProps) => {
  return (
    <AdsCardWrapper>
      <MainSection>
        <AdTitleAndImg>
          <ImageWrapper>
            <AdsCardImage src={props.image} alt={props.title} />
          </ImageWrapper>
          <TitleWrapper>
            <AdsCardTitle title={props.title}>
              {props.title.length > 38 ? props.title.substring(0, 38) + "..." : props.title}
            </AdsCardTitle>
            <AdsSubTitle>{props.deviceType}</AdsSubTitle>
          </TitleWrapper>
        </AdTitleAndImg>
        <StatusWrapper>
          <StatusBtn status={props.filterBy as string}>
            <StatusTxt>{props.filterBy}</StatusTxt>
          </StatusBtn>
        </StatusWrapper>
      </MainSection>
      <InfoSection>
        <LeftSection>
          <AdsCardLocation>
            <LocationSvg src="/location.svg" alt="" />
            {props.location}
          </AdsCardLocation>
          <AdsCardDate>
            <TimeSvg src="/time.svg" alt="" />
            {props.time}
          </AdsCardDate>
          <AdsApplicant>
            <PersonSvg src="/person.svg" alt="" />
            {props.applicant}
          </AdsApplicant>
        </LeftSection>
        <RightSection>
          <AdsCardPrice>{props.price} LE</AdsCardPrice>
        </RightSection>
      </InfoSection>
    </AdsCardWrapper>
  );
};

export default AdsCardComponent;
