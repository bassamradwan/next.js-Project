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
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: white;
  border: 1px solid #ccc;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 21px 12px;
  align-items: flex-start;
  cursor: pointer;

  -webkit-box-pack: start;
  justify-content: flex-start;
  &:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    cursor: pointer;
    border: 1px solid #00c3b4;
  }
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
  color: var(--00-d-9-c-8, #00D9C8);
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
  justify-content: space-around;
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
  border-radius: 727.34px;
  `;

export const AdsCardTitle = styled.p`
  color:#1A2D2C;
  font-size: 18px;
  font-family: Bahij TheSansArabic;
  font-weight: 500;
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
  padding: 0;
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--00-d-9-c-8, #00D9C8);
`;

export const AdsCardLocation = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 8px;
  color: #808B8A;

`;

export const AdsCardDate = styled.span`
  display: flex;
  align-items: center;
  column-gap: 8px;
  justify-content: center;
  border-left:1px solid #E1E1E1;
  color: #808B8A;
  padding-left:10px;
  padding-right:10px;
`;

export const AdsApplicant = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 8px;
  justify-content: center;
  border-left:1px solid #E1E1E1;
  color: #808B8A;
  padding-left:10px;
  padding-right:10px;

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
 justify-content:space-between;
 
`;

export const RightSection = styled.div`
display: flex;
justify-content:flex-end;
`;
