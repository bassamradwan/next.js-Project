import styled from "styled-components";

export const SingleAdDetailesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 35px 10%;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 30px;
  }
`;

export const AdDetailedInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 20px;
  flex: 2;
`;

export const TitleHeading = styled.h1`
  font-size: 32px;
  margin: 0;
  text-align: center;
`;

export const JobRequirementsList = styled.ul`
  padding-inline-start: 25px;
`;

export const JobRequirementItem = styled.li`
  margin-bottom: 10px;
  color: #667372;
  font-family: "Bahij", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 224.324%;
  white-space: pre-wrap;
`;

export const YearofExperienceHeading = styled.h2`
  color: #1a2d2c;
  text-align: right;
  font-family: "Bahij", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 10px;
  margin-top: 20px;
`;

export const YearofExperienceValue = styled.span`
  font-size: 18px;
  color: #667372;
  text-align: right;
  font-family: "Bahij", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 224.324%;
`;

export const EducationalRequirementsHeading = styled.h2`
  color: #1a2d2c;
  text-align: right;
  font-family: "Bahij", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const EducationalRequirementsValue = styled.span`
  color: #667372;
  text-align: right;
  font-family: "Bahij", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 224.324%;
`;

export const SummaryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
  margin-top: -80px;
  border-radius: 8px;
  background: #fff;
  @media (max-width: 768px) {
    border: 1px solid #e6e8e8;
    margin-top: 20px;
    max-width: 100%;
  }
`;

export const SummaryHeading = styled.h3`
  font-size: 24px;
  margin: 0;
  margin-bottom: 10px;
`;

export const SummaryText = styled.p`
  font-size: 18px;
  margin: 0;
  text-align: center;
`;

export const AdInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: blue;
`;

export const AdvertiseHeading = styled.h3`
  font-size: 24px;
  margin: 0;
  margin-bottom: 10px;
`;

export const AdvertiserName = styled.h4`
  font-size: 20px;
  margin: 0;
`;

export const DateOfInstertion = styled.span`
  font-size: 16px;
  margin-left: 10px;
`;

export const AdvertiserDescriptionMeta = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;
export const AdMetaColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

export const AdMetaLable = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const AdMetaValue = styled.span`
  font-size: 16px;
`;
export const BudgetRange = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 24px;
`;

export const BudgetRangeLabel = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
`;

export const BudgetRangeValue = styled.span`
  font-size: 16px;
`;

export const Variation = styled.span`
  font-size: 16px;
  margin-top: 10px;
`;

export const Divider = styled.hr`
  border: none;
  width: 100%;
  margin: 15px 0;
  height: 1px;
  background: #e6e8e8;
`;

export const ApplyButton = styled.button`
  width: 100%;
  color: #fff;
  border: none;
  border-radius: 8px;
  background: #00d9c8;
  box-shadow: 0px 8.148148536682129px 6.518518447875977px 0px rgba(0, 217, 200, 0.03),
    0px 38.51852035522461px 25.481481552124023px 0px rgba(0, 217, 200, 0.04),
    0px 100px 80px 0px rgba(0, 217, 200, 0.07);
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #00c4b7;
  }

  &:active {
    transform: translateY(2px);
  }
`;

export const AdCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  flex: 1;
  gap: 10px;
`;
export const AdvertiserCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  width: 100%;
  max-width: 600px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    border: 1px solid #e6e8e8;
    margin-top: 20px;
    max-width: 100%;
  }
`;

export const AdvertiserHeader = styled.h3`
  margin: 0;
  margin-bottom: 10px;
  color: #1a2d2c;
  font-family: "Bahij", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media (max-width: 768px) {
    font-size: 20px;
    text-align: center;
    margin: 0;
  }
`;

export const AdvertiserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

export const AdvertiserImage = styled.img`
  margin-right: 20px;
  border-radius: 8px;
  background: #f8f8f8;
  width: 65px;
  height: 65px;
  padding: 7px;
`;

export const TitleSubtitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AdvertiserTitle = styled.h4`
  color: #000;
  font-family: "Bahij", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const AdvertiserSubtitle = styled.span`
  color: #667372;
  font-family: "Bahij", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const AdvertiserMetaInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 0;
  }
`;

export const MetaInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`;

export const MetaInfoItemTitle = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const MetaInfoItemValue = styled.span`
  font-size: 16px;
`;

export const ContactButton = styled(ApplyButton)`
  margin-top: 20px;
  background: #fff;
  color: #00d9c8;
  border: 1px solid #00d9c8;
  &:hover {
    background: #00d9c8;
    color: #fff;
  }
`;
