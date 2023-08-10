import styled from "styled-components";

export const AdsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  max-width: 1240px;
  width: 100%;
  margin: 50px auto;
  padding: 0 15px;
  column-gap: 20px;
  position: relative;
  z-index: 1;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
