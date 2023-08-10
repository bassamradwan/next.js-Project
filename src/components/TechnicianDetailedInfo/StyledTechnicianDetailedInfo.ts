import styled from "styled-components";

export const TechnicianContainer = styled.div`
  //   background: red;
  padding: 35px 10%;
  @media (max-width: 768px) {
    padding: 35px 5%;
  }
`;
export const TechnicianWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TechnicianDetails = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 20px;
`;

export const HeadingTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  //   margin-bottom: 20px;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

export const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #ccc;
  margin-bottom: 20px;
`;

export const TechnicianCard = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 30px 20px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-top: -80px;
  @media (max-width: 768px) {
    margin-top: -40px;
  }
`;

export const PrefList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const PrefItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  //   background: blue;
`;

export const PrefLabelWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const PrefIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const PrefText = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const PrefValue = styled.span`
  font-size: 16px;
`;
export const ContactButton = styled.button`
  width: 100%;
  color: #fff;
  border: none;
  border-radius: 8px;
  color: #00d9c8;
  background: #fff;
  border: 1px solid #00d9c8;
  margin-top: 20px;
  box-shadow: 0px 8.148148536682129px 6.518518447875977px 0px rgba(0, 217, 200, 0.03),
    0px 38.51852035522461px 25.481481552124023px 0px rgba(0, 217, 200, 0.04),
    0px 100px 80px 0px rgba(0, 217, 200, 0.07);
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #00c4b7;
    color: #fff;
  }

  &:active {
    transform: translateY(2px);
  }
`;
export const AdsListComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  //   background: yellow;
`;
