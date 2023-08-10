import styled from "styled-components";

export const OfferFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 0;
  background: #fff;
  border-radius: 10px;
  width: 100%;
`;

export const OfferFormHeading = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const OfferPriceAndHoursContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

export const OfferPriceInput = styled.input`
  width: 48%;
  padding: 10px;
  //   border: none;
  //   border-radius: 5px;
  border-radius: 8px;
  border: 1px solid #e1e1e1;
  background-color: #fff;
  //   box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const OfferHoursInput = styled.input`
  width: 48%;
  padding: 10px;
  //   border: none;
  //   border-radius: 5px;
  border-radius: 8px;
  border: 1px solid #e1e1e1;
  background-color: #fff;
  //   box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const OfferMessageInput = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  //   border: none;
  //   border-radius: 5px;
  border-radius: 8px;
  border: 1px solid #e1e1e1;
  background-color: #fff;
  //   box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const OfferFormSubmitBtn = styled.button`
  color: #fff;
  border: none;
  border-radius: 8px;
  background: #00d9c8;
  box-shadow: 0px 8.148148536682129px 6.518518447875977px 0px rgba(0, 217, 200, 0.03),
    0px 38.51852035522461px 25.481481552124023px 0px rgba(0, 217, 200, 0.04),
    0px 100px 80px 0px rgba(0, 217, 200, 0.07);
  padding: 10px 50px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #00c4b7;
  }

  &:active {
    transform: translateY(2px);
  }
`;
