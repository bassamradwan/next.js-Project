import styled from "styled-components";


export const MainSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const AdTitleAndImg = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  gap: 20px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ImageWrapper = styled.div`

`;

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
  width: 99.825px;
  height: 99.825px;
  border-radius:50px;

`;

export const AdsCardTitle = styled.p`
  color: var(--color-black);
  font-family: Bahij TheSansArabic;
  font-size: 1em;
  font-weight: 500;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;