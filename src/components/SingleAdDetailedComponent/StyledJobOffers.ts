import styled from "styled-components";

export const OfferWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const OfferHeading = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  &::after {
    content: "";
    display: block;
    width: 90%;
    height: 2px;
    background-color: #00bfa5;
    margin-top: 5px;
  }
`;

export const OfferList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const OfferListItem = styled.li`
  margin-bottom: 10px;
`;
