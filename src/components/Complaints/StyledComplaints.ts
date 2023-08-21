import styled from "styled-components";

export const ComplaintsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 76px 48px;
  background: #07c2aa;
  width: 80%;
  position: relative;
  z-index:-4;
  margin: 0 auto;
  border-radius: 12px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 48px 24px;
    width: 100%;
    border-radius: 0;
    gap: 24px;

  }
`;
export const ComplaintsColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const QuestionTxt = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #fff;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const QuestionAnsTxt = styled.p`
  font-size: 16px;
  margin-top: 0;
  color: #fff;
  font-size: 16px;
  font-family: "Bahij", sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media (max-width: 768px) {
    font-size: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ComplaintsBtns = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const ContactUsBtn = styled.button`
  background-color: transparent;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
`;

export const PhoneCallBtn = styled.button`
  background-color: #fff;
  color: #00d9c8;
  border: 1px solid #00d9c8;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CallIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;
