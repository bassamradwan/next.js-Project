import { Carousel } from "antd";
import styled from "styled-components";

export const TechniciansContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 35px 10%;
`;
export const CarousalContainer = styled.div`
  margin-top: 30px;
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;
export const TabWrapper = styled.div`
  display: flex !important;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`;
export const StyledCarousel = styled(Carousel)`
  .slick-dots {
    bottom: -30px;
  }

  .slick-dots li button {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #d9d9d9;
    opacity: 0.5;
  }

  .slick-dots li.slick-active button {
    opacity: 1;
    background-color: #005750;
  }
`;
