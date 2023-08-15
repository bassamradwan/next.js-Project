import styled from "styled-components";

interface BannerWrapperProps {
  $isHome: boolean;
  $bannerImage?: string;
}

const BannerWrapper = styled.div<BannerWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ $isHome, $bannerImage }: BannerWrapperProps) =>
    $isHome
      ? `
      ${
        $bannerImage !== "none"
          ? `
        background-image: url("${$bannerImage}");
      `
          : `
        background-image: url("bannerimg3.png");
      `
      }
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      height: 75vh;
    `
      : `
      background: #07C2AA;
      height: 220px;
    `}

  width: 100%;
  margin-top: -60px;
  position: relative;
  // z-index: -1;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-color: #000000;
    opacity: 0.6;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    margin-top: 0;
    ${({ $isHome }) =>
      $isHome
        ? `
        height: 70vh;
      `
        : `
        height: 200px;
      `}
  }
`;

const BannerWelcome = styled.h1`
  position: relative;
  z-index: 1;
  color: #ffffff;
  color: #fff;
  font-size: 50px;
  font-family: "Bahij", sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 23px;
  }

  @media (max-width: 576px) {
    font-size: 26px;
  }

  @media (max-width: 375px) {
    font-size: 24px;
  }

  @media (max-width: 320px) {
    font-size: 22px;
  }
`;

const BannerWelcomSubMsg = styled.p`
  z-index: 1;
  color: #fff;
  font-family: "Bahij", sans-serif;
  font-style: normal;
  margin: 0 auto;
  margin-top: 20px;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 5004
  line-height: 0%;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export { BannerWrapper, BannerWelcome, BannerWelcomSubMsg };
