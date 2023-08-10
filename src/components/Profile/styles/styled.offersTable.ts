import styled from "styled-components";

export const AdWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const AdTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`;

export const Type = styled.p`
  font-size: 14px;
  margin: 0;
`;

export const AdLine = styled.div`
  display: flex;
  //   justify-content: space-between;
  gap: 10px;
  align-items: center;
  margin-top: 8px;
`;

export const LocationLine = styled.div`
  display: flex;
  align-items: center;
  //   border to right
  border-right: 1px solid #ccc;
  padding-right: 8px;
`;

export const LocationIcon = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ccc;
  margin-right: 4px;
`;

export const LocationText = styled.p`
  font-size: 12px;
  margin: 0;
`;

export const DateLine = styled.div`
  display: flex;
  align-items: center;
`;

export const DateIcon = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ccc;
  margin-right: 4px;
`;

export const DateText = styled.p`
  font-size: 12px;
  margin: 0;
`;

export const CursorPointer = styled.div`
  cursor: pointer;
`;
