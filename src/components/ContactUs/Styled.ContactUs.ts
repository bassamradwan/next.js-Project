import styled from "styled-components";

export const ContactUsWrapper = styled.div`
  padding: 50px 10%;
`;

export const ContactUsSection = styled.div`
  display: flex;
  flex-direction: row;
`;
export const GetInTouch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 50px;
  flex: 1;
`;

export const ContactUsTitleAndSubtitle = styled.div`
  flex-basis: 100%;
  text-align: center;
  margin-bottom: 50px;
`;

export const ContactUsTitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ContactUsSubtitle = styled.p`
  font-size: 18px;
  color: #666;
`;

export const ContactList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
`;

export const ContactItem = styled.li`
  display: flex;
  flex-direction: row;
`;

export const ContactItemIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

export const contactTitleAndSubtitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-basis: 50%;
  margin-right: 50px;
`;

export const ContactTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ContactSubtitle = styled.p`
  font-size: 18px;
  color: #666;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  flex: 2;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
`;

export const FormLine = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 20px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const InputLabel = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 5px;
`;

export const FormInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  font-size: 16px;
`;

export const FormInputTextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  font-size: 16px;
`;

export const SubmitButton = styled.button`
  background-color: #0070f3;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0053a0;
  }
`;
