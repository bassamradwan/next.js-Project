import styled from "styled-components";

export const StatisticsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;
export const StatisticsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  background: #fff;
`;
export const StatisticsTitle = styled.h4`
  margin: 0;
  padding: 20px;
  font-family: "Bahij", sans-serif;
  font-size: 19.305px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: #000;
`;
export const ControlPanelCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
`;

export const ControlPanelCard = styled.div`
  margin: 12px;
  padding: 24px;
  border-radius: 8px;
  background: #f5f5f5;
  box-shadow: 0px 4px 43px 22px rgba(227, 227, 227, 0.25);
  flex: 1;
`;

export const ControlCardLine = styled.div`
  display: flex;
  align-items: space-between;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const ControlCardLineTitle = styled.h4`
  margin: 0;
  margin-right: 16px;
`;

export const ControlCardIcon = styled.img`
  width: 24px;
  height: 24px;
`;
