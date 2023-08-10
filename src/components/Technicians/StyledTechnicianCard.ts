import styled from "styled-components";

export const TechnicianCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  margin: 3px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  position: relative;
`;
export const TechnicianRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const TechnicianColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SaveTechnicianBtn = styled.img`
  width: 59.4px;
  height: 59.4px;
  margin-left: 8px;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
`;

export const TechnicianCardImage = styled.img`
  width: 81.5px;
  height: 81.5px;
  border-radius: 50%;
`;

export const TechnicianCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TechnicianCardName = styled.h3`
  font-size: 18px;
  font-weight: 500;
  margin-top: 8px;
`;

export const TechnicianCardRate = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #1890ff;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const TechnicianCardJob = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 4px;
`;

export const TechnicianCardSkills = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const TechnicianCardSkill = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #666;
  border-radius: 38px;
  background-color: #ccf7f4;
  padding: 4px 8px;
`;

export const TechnicianCardCity = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 4px;
`;

export const TechnicianCardBudget = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #1890ff;
`;
export const HorizontalDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e1e1e1;
  margin: 18px 0;
`;

export const PersonalProfileBtn = styled.button`
  margin-top: 16px;
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #e6fbfa;
  background-color: #e6fbfa;
  color: #00ada0;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #00ada0;
    color: #fff;
  }
`;
