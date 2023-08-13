import styled from "styled-components";

export const ContentWrapper = styled.div`
  padding: 35px 10%;
  // background: blue;
`;
export const ContainerWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: 20px;
  // background: yellow;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const BasicInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-right: 1px solid #f0f0f0;
`;

export const PersonAvatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`;

export const Title = styled.h4`
  color: #000;
  font-family: "Bahij", sans-serif;
  font-size: 19.305px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 7px;
  margin-bottom: 0;
`;

export const SubTitle = styled.p`
  color: #808b8a;
  text-align: center;
  font-family: "Bahij", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
interface NavcardProp {
  MobileShowStatus: boolean;
}
export const NavCard = styled.div<NavcardProp>`
  min-height: 100px;
  max-height: 100vh;
  min-width: 300px;
  border-radius: 8px;
  border: 1px solid #e1e1e1;
  background: #fff;
  box-shadow: 0px 4px 43px 22px rgba(227, 227, 227, 0.25);
  padding: 15px 0px;
  @media (max-width: 768px) {
    display: ${props => (props.MobileShowStatus ? "block" : "none")};
  }
`;

export const ContentMobileNavRef = styled.div`
  position: relative;
  flex: 1;
`;
export const MobileNavIcon = styled.img`
  display: none;
  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    left: -36px;
    background: #fff;
    display: block;
    cursor: pointer;
    width: 38.46px;
    height: 39.46px;
    border: 2px solid #4da92b;
    border-radius: 3px;
  }
`;
export const NavCardMenu = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  width: 100%;
`;

export const NavCardMenuItem = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;

  background-color: ${({ selected }) => (selected ? "var(--e-6-fbfa, #E6FBFA)" : "transparent")};
  border-right: ${({ selected }) => (selected ? "2px solid var(--00-d-9-c-8, #00D9C8)" : "none")};
  border-top: 1px solid #e6e6e6;

  &:hover {
    background-color: #e1e1e1;
  }
`;

export const NavCardMenuItemIcon = styled.div`
  margin-right: 16px;
`;

export const NavCardMenuItemLabel = styled.div`
  font-size: 16px;
`;
