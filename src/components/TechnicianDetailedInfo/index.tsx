import AdsListComponent from "@/components/AdsList/General";
import {
  TechnicianWrapper,
  TechnicianDetails,
  HeadingTitle,
  Paragraph,
  Divider,
  TechnicianCard,
  PrefList,
  PrefItem,
  PrefIcon,
  PrefText,
  PrefValue,
  PrefLabelWrapper,
  TechnicianContainer,
  ContactButton,
  AdsListComponentWrapper,
} from "./StyledTechnicianDetailedInfo";
const Technician: React.FC = () => {
  return (
    <TechnicianContainer>
      <TechnicianWrapper>
        <TechnicianDetails>
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
        </TechnicianDetails>
        <TechnicianCard>
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
        </TechnicianCard>
      </TechnicianWrapper>
    </TechnicianContainer>
  );
};
export default Technician;
