import styled from "styled-components";

export const BlogDetailWrapper = styled.div`
  padding: 35px 10%;

  @media (max-width: 768px) {
    padding: 35px 5%;
  }
`;

export const BlogTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const BlogMetaLine = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const WritterLogo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  border-radius: 50%;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const WritterName = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const BlogDate = styled.span`
  font-size: 16px;
  margin-right: 10px;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

export const BlogCategory = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const CoverImage = styled.img`
  width: 100%;
  margin-bottom: 20px;
  max-height: 436px;

  @media (max-width: 768px) {
    max-height: 300px;
  }
`;

export const BlogContent = styled.div`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;

  & > p {
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const CommentsSection = styled.section`
  margin-top: 40px;
`;

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 40px;
`;

export const CommentTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const CommentInput = styled.input`
  width: 100%;
  max-width: 600px;
  height: 40px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #00d9c8;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const CommentButton = styled.button`
  width: 200px;
  height: 40px;
  background-color: #0070f3;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0060df;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const CommentList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const CommentItem = styled.li`
  display: flex;
  margin-bottom: 40px;
`;

export const CommentImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 20px;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

export const CommentContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommentName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const CommentDate = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const CommentText = styled.p`
  font-size: 16px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const CommentReplyButton = styled.button`
  background-color: transparent;
  border: none;
  color: #0070f3;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const FormLine = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
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

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const FormInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #00d9c8;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const FormInputTextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #00d9c8;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
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

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;

export const LeaveComment = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
`;
