import styled from "styled-components";

export const Wrapper = styled.div`
  with: 100%;
  height: 100%;
  background: rgba(128, 236, 228, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  color: #fff;
`;
export const Heading = styled.h1`
  text-align: center;
  font-size: 24px;
  font-family: 'Cairo', sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
  padding: 0;
  color: #1a2d2c;
`;
export const SubHeading = styled.p`
  color: #808b8a;
  text-align: center;
  font-size: 16px;
  font-family: 'Cairo', sans-serif;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin: 0;
  padding: 0;
`;
export const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 50px;
`;
export const StatisticsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const StatisticsItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 300px;
  height: 100%;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
export const StatisticsItemIcon = styled.img`
  width: 77.71px;
  height: 77.71px;
`;
export const StatisticsNumber = styled.p`
  font-size: 24px;
  font-family: 'Cairo', sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
  padding: 0;
  color: #1a2d2c;
`;
export const StatisticsText = styled.p`
  font-size: 16px;
  font-family: 'Cairo', sans-serif;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin: 0;
  padding: 0;
  color: #808b8a;
`;
