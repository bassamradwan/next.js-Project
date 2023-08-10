import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 35px;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 500px;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #e1e1e1;
  box-shadow: 0px 4px 43px 22px rgba(227, 227, 227, 0.25);
  padding: 35px;
`;
export const CardTitleAndSubtitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const CardTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const CardSubtitle = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;

  a {
    color: #0077ff;
    text-decoration: none;
  }
`;

export const AccountTypeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

export const AccountTypeButton = styled.button<{ selected: boolean }>`
  width: 48%;
  height: 40px;
  background-color: ${({ selected }) => (selected ? "#00d9c8" : "#f5f5f5")};
  border: none;
  border-radius: 5px;
  font-size: 14px;
  color: ${({ selected }) => (selected ? "#fff" : "#666")};
  cursor: pointer;
  &:hover {
    background-color: ${({ selected }) => (selected ? "#00c4b3" : "#00d9c86b")};
    color: #fff;
  }

  &:focus {
    outline: none;
  }

  &:first-child {
    margin-right: 4%;
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  position: relative;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  color: #333;

  &:focus {
    outline: none;
    border-color: #0077ff;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  background-color: #0077ff;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0066cc;
  }

  &:focus {
    outline: none;
  }
`;

export const DividerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const Divider = styled.div`
  width: 40%;
  height: 1px;
  background-color: #ccc;
`;

export const DividerText = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0 10px;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SocialMediaButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  color: #666;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }

  &:focus {
    outline: none;
  }
`;

export const SocialMediaIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const SocialMediaText = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
`;

export const LineWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  flex-direction: row;
`;

export const RadioInput = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;
export const TermsLable = styled.label`
  font-size: 14px;
  color: #666;
  cursor: pointer;
`;

export const ErrorWrapper = styled.span`
  color: red;
  font-size: 12px;
  margin: 5px 0;
`;
export const SubmitBtn = styled.button`
  width: 100%;
  height: 40px;
  background-color: #00d9c8;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #00c4b3;
  }

  &:focus {
    outline: none;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
export const PasswordIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
`;
export const InputWrapperPass = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;
export const ForgetWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 20px 0;
  gap: 10px;
`;
