import styled from "styled-components";

export const EditInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`;
export const HeadingTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 20px;
`;
export const EditInputLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;
`;

export const EditInputGroup = styled.div`
  flex: 1;
  margin-right: 20px;
`;

export const EditInputTitle = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const EditInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 14px;
  padding: 10px;
  width: 100%;

  &:focus {
    border-color: #0077ff;
    outline: none;
  }
`;

export const EditTextArea = styled.textarea`
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 14px;
  padding: 10px;
  resize: vertical;
  width: 100%;

  &:focus {
    border-color: #0077ff;
    outline: none;
  }
`;
export const EditSelect=styled.select`
border: 1px solid #ccc;
border-radius: 4px;
box-sizing: border-box;
font-size: 14px;
padding: 10px;
width: 100%;

&:focus {
  border-color: #0077ff;
  outline: none;
}
`;
export const EditOption=styled.option`
border: 1px solid #ccc;
border-radius: 4px;
box-sizing: border-box;
font-size: 14px;
padding: 10px;
width: 100%;

&:focus {
  border-color: #0077ff;
  outline: none;
}
`;
export const EditInfoButton = styled.button`
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
