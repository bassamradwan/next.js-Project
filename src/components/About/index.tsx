import { Button } from "antd";
import WhyChooseUs from "@/components/WhyChooseUs";
import {
  WhoWeAreSection,
  ImageWrapper,
  FirstImage,
  SecondImage,
  TextSection,
  Title,
  SubTitle,
  Descriptions,
  JoinUsButton,
  WhyChooseUsSection,
  OurAdvantagesSection,
  OurAdvantageLine,
  OurAdvantage,
  OurAdvantageItem,
  OurAdvantageTitle,
  OurAdvantageDescription,
  OperationRoomWrapper,
  OperationRoomImage,
  TitleSubTitleWrapper,
} from "./styled.About";
const AboutComponent = () => {
  return (
    <>
      {/*---------- Who We Are Section-----------*/}
      <WhoWeAreSection>
        <ImageWrapper>
          <FirstImage src="/whoweare-first.png" />
        </ImageWrapper>
        <ImageWrapper>
          <SecondImage src="/whoweare-second.png" />
        </ImageWrapper>
        <TextSection>
          <TitleSubTitleWrapper>
            <Title>Who We Are</Title>
            <SubTitle>Our Mission</SubTitle>
          </TitleSubTitleWrapper>
          <Descriptions>
            orem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, velit vel bibendum
            bibendum, elit elit bibendum elit, vel bibendum elit elit vel. Sed vel bibendum elit.
            Sed vel bibendum elit. Sed vel bibendum elit. Sed vel bibendum elit. Sed vel bibendum
            elit. Sed vel bibendum elit. Sed vel bibendum elit. Sed vel bibendum bibendum elit. Sed
            vel bibendum elit. Sed vel bibendum elit.
          </Descriptions>
          <Button type="primary">Join Us</Button>
        </TextSection>
      </WhoWeAreSection>
      {/*--------------- Why Choose US component ----------------*/}
      <WhyChooseUs />
      {/* ------------ our Advantages ---------- */}
      <OurAdvantagesSection>
        <OurAdvantageLine>
          <OurAdvantage>
            <OurAdvantageItem>
              <OurAdvantageTitle>Our Advantage</OurAdvantageTitle>
              <OurAdvantageDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              </OurAdvantageDescription>
            </OurAdvantageItem>
            <OurAdvantageItem>
              <OurAdvantageTitle>Our Advantage</OurAdvantageTitle>
              <OurAdvantageDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              </OurAdvantageDescription>
            </OurAdvantageItem>

            <OurAdvantageItem>
              <OurAdvantageTitle>Our Advantage</OurAdvantageTitle>
              <OurAdvantageDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              </OurAdvantageDescription>
            </OurAdvantageItem>
          </OurAdvantage>
          <OperationRoomWrapper>
            <OperationRoomImage src="/operation-room.png" />
          </OperationRoomWrapper>
        </OurAdvantageLine>
      </OurAdvantagesSection>
    </>
  );
};
export default AboutComponent;
