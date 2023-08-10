import AdsListComponent from "@/components/AdsList/General";
import {
  AdvertiserWrapper,
  AdvertiserDetails,
  HeadingTitle,
  Paragraph,
  Divider,
  AdvertiserCard,
  PrefList,
  PrefItem,
  PrefIcon,
  PrefText,
  PrefValue,
  PrefLabelWrapper,
  AdvertiserContainer,
  ContactButton,
  AdsListComponentWrapper,
} from "./StyledAdvertiser";
const Advertiser: React.FC = () => {
  return (
    <AdvertiserContainer>
      <AdvertiserWrapper>
        <AdvertiserDetails>
          <HeadingTitle>Who we are:</HeadingTitle>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam,
            quia, voluptate quod quos voluptas consequuntur quae voluptatibus doloribus quas.
            Quisquam voluptatum, quibusdam, quia, voluptate quod quos voluptas consequuntur quae
            voluptatibus doloribus quas.
          </Paragraph>
          <Divider />
          <HeadingTitle>Latest Projects:</HeadingTitle>
          {/* Ads Cards i can reuse the Ads in the HomePage */}
          <AdsListComponentWrapper>
            <AdsListComponent $columnsCount={1} />
          </AdsListComponentWrapper>
        </AdvertiserDetails>
        <AdvertiserCard>
          <HeadingTitle>Pref about us</HeadingTitle>
          <PrefList>
            <PrefItem>
              <PrefLabelWrapper>
                <PrefIcon src="/person" />
                <PrefText>Speciality</PrefText>
              </PrefLabelWrapper>
              <PrefValue>diaseases</PrefValue>
            </PrefItem>
            <Divider />
            <PrefItem>
              <PrefLabelWrapper>
                <PrefIcon src="/person" />
                <PrefText>Projects</PrefText>
              </PrefLabelWrapper>
              <PrefValue>250</PrefValue>
            </PrefItem>
            <Divider />
            <PrefItem>
              <PrefLabelWrapper>
                <PrefIcon src="/person" />
                <PrefText>Speciality</PrefText>
              </PrefLabelWrapper>
              <PrefValue>diaseases</PrefValue>
            </PrefItem>
            <Divider />
            <PrefItem>
              <PrefLabelWrapper>
                <PrefIcon src="/person" />
                <PrefText>Speciality</PrefText>
              </PrefLabelWrapper>
              <PrefValue>diaseases</PrefValue>
            </PrefItem>
            <Divider />
            <PrefItem>
              <PrefLabelWrapper>
                <PrefIcon src="/person" />
                <PrefText>Speciality</PrefText>
              </PrefLabelWrapper>
              <PrefValue>diaseases</PrefValue>
            </PrefItem>
            <Divider />
            <PrefItem>
              <PrefLabelWrapper>
                <PrefIcon src="/person" />
                <PrefText>Speciality</PrefText>
              </PrefLabelWrapper>
              <PrefValue>diaseases</PrefValue>
            </PrefItem>
            <ContactButton>contact us</ContactButton>
          </PrefList>
        </AdvertiserCard>
      </AdvertiserWrapper>
    </AdvertiserContainer>
  );
};
export default Advertiser;
