import styled from "styled-components";

export const OfferCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 0;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  border: 1px solid #e0e0e0;
  &:hover {
    cursor: pointer;
  }
`;

export const TechnicianImage = styled.img`
  width: 57.262px;
  height: 57.262px;
  border-radius: 50%;
  margin-right: 20px;
`;

export const TechnicianColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TechnicianName = styled.h3`
  font-size: 24px;
  margin: 0;
`;

export const TechnicianTitle = styled.p`
  font-size: 16px;
  margin: 0;
`;

export const TechnicianWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const TechnicainMeta = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  font-size: 16px;
`;

export const MetaIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const MetaDescription = styled.p`
  font-size: 16px;
  margin: 0;
`;

export const OfferPrice = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin: 20px 0;
`;
export const TechnicianInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 100%;
`;
