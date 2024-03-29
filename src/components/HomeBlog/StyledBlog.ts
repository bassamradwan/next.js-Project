import styled from "styled-components";

export const BlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
    margin:0px 6%;
  padding: 35px 10%;

`;

export const BlogListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:center;
  gap: 20px;
  margin-top: 30px;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    margin-bottom: 30px;
  }
`;
