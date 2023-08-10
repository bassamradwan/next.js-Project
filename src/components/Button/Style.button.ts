import styled from "styled-components";
export const ButtonShared = styled.button`
  color: #fff;
  border: none;
  border-radius: 8px;
  background: #00d9c8;
  box-shadow: 0px 8.148148536682129px 6.518518447875977px 0px rgba(0, 217, 200, 0.03),
    0px 38.51852035522461px 25.481481552124023px 0px rgba(0, 217, 200, 0.04),
    0px 100px 80px 0px rgba(0, 217, 200, 0.07);
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  width: 340px;

  &:hover {
    background: #00c4b7;
  }

  &:active {
    transform: translateY(2px);
  }
`;