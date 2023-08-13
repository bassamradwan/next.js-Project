import styled from "styled-components";

export const BlogPostItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
  width: 100%;
  max-width: 345px;

  &:hover {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

export const BlogPostContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  padding-top: 10px;
  width: 100%;
`;

export const BlogPostItemImg = styled.img`
  width: 100%;
  max-height: 270px;
  margin-bottom: 16px;
`;

export const BlogPostItemDate = styled.p`
  font-size: 14px;
  color: #999;
  margin-bottom: 8px;
  display: flex;
  width: 100%;
`;

export const BlogPostItemTitle = styled.h2`
  color: #1a2d2c;
  font-family: "Bahij", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const BlogPostItemDescription = styled.p`
  color: #808b8a;
  font-family: "Bahij", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
`;
