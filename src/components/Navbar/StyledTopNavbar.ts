import styled from "styled-components";

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10%;
  background: #fdfdfd;
  @media (max-width: 768px) {
    display: none;
  }
`;
const NavLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.02em;
  border-inline-end: 1px solid var(--color-gainsboro-100);
  gap: 8px;
  padding-inline-end: 15px;
  &:hover {
    cursor: pointer;
  }
`;
const NavRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding-left: 15px;
`;
const RegisterSvg = styled.img`
  position: relative;
  border-radius: 377.23px;
  width: 38px;
  height: 38px;
  overflow: hidden;
  flex-shrink: 0;
`;
const LangWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  border-right: 1px solid var(--color-gainsboro-100);
  padding-right: 15px;
`;
const LangSelect = styled.select`
  border: none;
  background: none;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: var(--color-black-100);
  padding: 0;
  margin: 0;
  &:focus {
    outline: none;
  }
`;
const LangOption = styled.option`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: var(--color-black-100);
`;
const LangLogo = styled.img`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;
const ContactPhoneWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding-right: 15px;
`;
const ContactEmailWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  border-right: 1px solid var(--color-gainsboro-100);
  padding-right: 15px;
`;
const EmailSvg = styled.img`
  width: 38px;
  height: 38px;
  flex-shrink: 0;
`;
const PhoneSvg = styled.img`
  width: 38px;
  height: 38px;
  flex-shrink: 0;
`;
const BurgerIcon = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
    background-image: url("/burger-icon.svg");
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

const MenuLink = styled.a`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: var(--color-black-100);
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 15px;
  margin-inline-start: 10px;
`;
export const UserName = styled.span`
  font-weight: 400;
  font-size: 16px;
`;
export const UserType = styled.span`
  font-size: 13px;
  font-weight: 300;
  color: #808b8a;
`;
export const IconLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding-right: 15px;
`;
export const DropDownIcon = styled.img`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;

export {
  NavWrapper,
  NavLeft,
  NavRight,
  RegisterSvg,
  LangWrapper,
  LangSelect,
  LangOption,
  LangLogo,
  ContactPhoneWrapper,
  ContactEmailWrapper,
  EmailSvg,
  PhoneSvg,
  BurgerIcon,
  MenuLink,
};
