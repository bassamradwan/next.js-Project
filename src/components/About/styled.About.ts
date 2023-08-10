import styled from "styled-components";

export const WhoWeAreSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  margin: 100px 0;
  padding: 0px 10%;
  width: 100%;
  gap: 20px;
`;

export const ImageWrapper = styled.div`
  flex: 1;
`;

export const FirstImage = styled.img`
  width: 90%;
  height: 240px;
`;

export const SecondImage = styled.img`
  width: 100%;
  height: auto;
`;

export const TextSection = styled.div`
  flex: 3;
  padding: 0px 10px;
`;
export const TitleSubTitleWrapper = styled.div`
  margin-bottom: 24px;
`;

export const Title = styled.h1`
  color: var(--001614, #001614);
  font-family: 'Cairo', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const SubTitle = styled.h2`
  color: var(--4-d-5-c-5-b, #4d5c5b);
  font-family: 'Cairo', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  
`;

export const Descriptions = styled.p`
  color: var(--4-d-5-c-5-b, #4d5c5b);
  font-family: 'Cairo', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-bottom: 24px;
`;

export const JoinUsButton = styled.button`
  background-color: #1890ff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 12px 24px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #40a9ff;
  }
`;

export const WhyChooseUsSection = styled.section`
  margin: 100px 0;
`;

export const OurAdvantagesSection = styled.section`
  padding: 35px 10%;
`;

export const OurAdvantageLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 50px;
`;

export const OurAdvantage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
`;

export const OurAdvantageItem = styled.div`
  margin-bottom: 24px;
`;

export const OurAdvantageTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const OurAdvantageDescription = styled.p`
  font-size: 18px;
  margin-bottom: 16px;
`;

export const OperationRoomWrapper = styled.div`
  flex: 1;
  margin-left: 50px;
`;

export const OperationRoomImage = styled.img`
  width: 100%;
  height: auto;
`;
