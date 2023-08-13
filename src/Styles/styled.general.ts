import styled from "styled-components";

interface ContentProps {
  padding?: string;
}
export const Content = styled.div<ContentProps>`
  width: 100%;
  flex: 2;
  padding: ${props => `${props.padding}px` || "10px"};
  padding-inline-start: 40px;
  border-radius: 8px;
  border: 1px solid #e1e1e1;
  background: #fff;
  box-shadow: 0px 4px 43px 22px rgba(227, 227, 227, 0.25);
  min-height: 350px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Fallback = styled.div`
  width: 100dvw;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SpinLight = styled.div`
 .ant-spin-dot-item {
     background-color: #fff;
 } 
  width: fit-content;
`;
