import styled from "styled-components";

export const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
export const SectionBtn = styled.button`
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 10px;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid var(--00-c-3-b-4, #00c3b4);
  color: #00c3b4;
  background-color: #fff;
  cursor: pointer;
  @media (max-width: 768px) {
    display: flex;
  }
`;
export const HeadingSectionBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 10px;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid var(--00-c-3-b-4, #00c3b4);
  color: #00c3b4;
  background-color: #fff;
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SectionHeading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
`;
export const SectionHeadingTxt = styled.h4`
  color: #1a2d2c;
  text-align: center;
  font-size: 24px;
  font-family: 'Cairo', sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
  padding: 0;
`;

export const SectionHeadingSubTxt = styled.span`
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

export const BackSvg = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
