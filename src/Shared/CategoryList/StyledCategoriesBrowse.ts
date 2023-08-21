import styled from "styled-components";

export const CategoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
 margin:0px 6%;
  padding: 35px 10%;
`;

export const CategoriesListWrapper = styled.div`
  // grid with two rows and 4 columns each one is a card
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  margin-top: 20px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    margin-bottom: 20px;
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(8, 1fr);
    margin-bottom: 20px;
  }
`;
interface CategoryCardWrapperProps {
  $bordercolor?: string;
}

export const CategoryCardWrapper = styled.div<CategoryCardWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 50px;
  padding: 40px;
  margin-top: 20px;
  border-radius: 8px;
  border: 1px solid var(--00-c-3-b-4, #00c3b4);
  border-color: ${props => props.$bordercolor ?? "var(--00-c-3-b-4, #00c3b4)"};
  background-color: #f4f4f4;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.05);
    border-color: var(--00-c-3-b-4, #00c3b4);
    background-color: var(--00-d-9-c-8, #00D9C8);
    .svg{
      display:block;
    }
  }
`;
export const CategoryCardImage = styled.img`
  width: 69px;
  height: 69px;
  border-radius: 50%;
  object-fit: cover;
  background: #fff;
`;
export const TitleCountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 5px;
`;

export const CategoryCardTitle = styled.h4`
  color: #1a2d2c;
  text-align: center;
  font-size: 16px;
  font-family: "Bahij", sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
  padding: 0;
`;
export const CategoryCardAdsCount = styled.span`
  color: #808b8a;
  text-align: center;
  font-size: 14px;
  font-family: "Bahij", sans-serif;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin: 0;
  padding: 0;
`;
