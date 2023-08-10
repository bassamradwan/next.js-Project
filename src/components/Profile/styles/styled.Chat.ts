import { Input } from "antd";
import styled from "styled-components";
import { keyframes } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 20px;
`;
export const ChatNavCard = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px;
  min-height: 100px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #e1e1e1;
  background: #fff;
  box-shadow: 0px 4px 43px 22px rgba(227, 227, 227, 0.25);
  min-height: 350px;
`;

export const DetailedChatCard = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-height: 100px;
  width: 100%;
  padding-inline-start: 40px;
  border-radius: 8px;
  border: 1px solid #e1e1e1;
  background: #fff;
  box-shadow: 0px 4px 43px 22px rgba(227, 227, 227, 0.25);
  min-height: 350px;
  height: 100vh;
`;

export const HospitalSearchInput = styled(Input)`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #e1e1e1;
  padding: 0 10px;
  margin-bottom: 20px;
  outline: none;
  font-size: 14px;
  font-weight: 400;
  color: #000;
  background: #fff;
  box-shadow: 0px 4px 43px 22px rgba(227, 227, 227, 0.25);
`;
export const FilterButton = styled.div<{ active: boolean }>`
  // based on active prop show underline or not
  border-bottom: ${({ active }) => (active ? "2px solid #00d9c8" : "none")};
  margin-right: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;
`;
export const HospitalList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const HospitalListItem = styled.li`
  padding: 8px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #f5f5f5;
  }
`;
export const FilterButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  width: 100%;
`;
export const HospitalLine = styled.div<{ active: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  background-color: ${({ active }) => (active ? "#f5f5f5" : "#fff")};

  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const HospitalImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 8px;
  cursor: pointer;
`;

export const HospitalInfo = styled.div`
  flex: 1;
  cursor: pointer;
`;

export const HospitalTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
  cursor: pointer;
`;

export const HospitalSubtitle = styled.div`
  font-size: 14px;
  color: #999;
  cursor: pointer;
`;

export const HospitalTime = styled.div`
  font-size: 14px;
  color: #999;
  cursor: pointer;
`;