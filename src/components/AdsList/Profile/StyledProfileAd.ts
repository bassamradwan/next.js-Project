import styled from "styled-components";

export const AdsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 35px 10%;
`;
interface AdsContainerProps {
  $columnsCount: number;
}
export const AdsContainer = styled.div<AdsContainerProps>`
  display: grid;
  grid-template-columns: repeat(${props => props.$columnsCount}, 1fr);
  grid-template-rows: auto;
  gap: 20px;
  margin-top: 40px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    margin-bottom: 20px;
  }
`;

export const AdsCardWrapper = styled.div`
  border-radius: var(--br-5xs);
  background-color: var(--color-white);
  border: 1px solid #ccc;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: var(--padding-7xl) var(--padding-2xl);
  align-items: flex-start;
  -webkit-box-pack: start;
  justify-content: flex-start;
`;

export const MainSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const FavouriteBtnIcon = styled.img`
  cursor: pointer;
  width: 59.46px;
  height: 59.46px;
`;

export const AdTitleAndImg = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const ImageWrapper = styled.div``;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;

export const AdsSubTitle = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  color: var(--color-gainsboro-500);
  font-size: 12px;
  font-family: var(--font-family-secondary);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-lg);
  margin: 0;
  padding: 0;
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  @media (max-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 10px;
  }
`;

export const AdsCardImage = styled.img`
  width: 55.4px;
  height: 55.4px;
  object-fit: cover;
`;

export const AdsCardTitle = styled.p`
  color: var(--color-black);
  font-size: 14px;
  font-family: var(--font-family-secondary);
  font-weight: 600;
  line-height: var(--line-height-3xl);
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const AdsCardPrice = styled.span`
  color: var(--color-black);
  font-size: 14px;
  font-family: var(--font-family-secondary);
  font-weight: 600;
  line-height: var(--line-height-3xl);
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const AdsCardLocation = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const AdsCardDate = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: center;
`;

export const AdsApplicant = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const LocationSvg = styled.img`
  width: 20px;
  height: 20px;
`;

export const TimeSvg = styled.img`
  width: 20px;
  height: 20px;
`;

export const PersonSvg = styled.img`
  width: 20px;
  height: 20px;
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const RightSection = styled.div``;

interface StatusBtnProps {
  status: string;
}
export const StatusBtn = styled.div<StatusBtnProps>`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  // based on status, change the color of the button
  // green for "Done", yellow for "In Progress", and red for "Cancelled"
  background-color: ${props => {
    switch (props.status) {
      case "Completed":
        return "var(--color-green-100)";
      case "In Progress":
        return "var(--color-yellow-100)";
      case "cancelled":
        return "var(--color-red-100)";
      default:
        return "var(--color-green-100)";
    }
  }};
  // color and border color are always based on the status
  color: ${props => {
    switch (props.status) {
      case "Completed":
        return "var(--color-green-400)";
      case "In Progress":
        return "var(--color-yellow-400)";
      case "cancelled":
        return "var(--color-red-400)";
      default:
        return "var(--color-green-400)";
    }
  }};
  border: 1px solid
    ${props => {
      switch (props.status) {
        case "Done":
          return "var(--color-green-400)";
        case "In Progress":
          return "var(--color-yellow-400)";
        case "cancelled":
          return "var(--color-red-400)";
        default:
          return "var(--color-green-400)";
      }
    }};
  border-radius: 8px;
  padding: 10px 15px;
  font-size: 12px;
`;
export const StatusTxt = styled.span`
  width: 100%;
  font-size: 12px;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StatusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
