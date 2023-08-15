import styled from "styled-components";

interface ContentProps {
  padding?: string;
  width?: string;
  alignItems?: string;
  justifyContent?: string;
  myMessage?: boolean;
  gap?: string;
}

interface StickyProps {
  top?: string;
  zIndex?: string;
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
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SpinLight = styled.div`
  .ant-spin-dot-item {
    background-color: #fff;
  }

  width: fit-content;
`;

export const Flex = styled.div<ContentProps>`
  display: flex;
  align-items: ${props => props.alignItems || "center"};
  justify-content: ${props => props.justifyContent || "center"};
  gap: ${props => props.gap || 0};
`;

export const FlexColumn = styled.div<ContentProps>`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.alignItems || "center"};
  justify-content: ${props => props.justifyContent || "center"};
`;

export const SendButton = styled.button<ContentProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 36px;
  height: 2rem;
  border-radius: 8px;
  background: #00d9c8;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease-in-out;

  &:disabled {
    background: #e1e1e1;
  }

  &:hover:not(:disabled) {
    background: #01c9ba;
  }
`;

export const Message = styled.div<ContentProps>`
  backdrop-filter: blur(12px);
  width: fit-content;
  word-wrap: break-word;
  padding: 0 10px;
  border-radius:  5px 5px 5px 5px;
  color: ${props => props.myMessage ? "#00D9C8" : "#000"};
  background-color: ${props =>
    props.myMessage ? "rgba(0, 217, 200, 0.10)" : "rgba(246, 245, 245, 0.85)"};
`;

export const Sticky = styled.div<StickyProps>`
  position: sticky;
  top: ${props => props.top || 0};
  z-index: ${props => props.zIndex || 1};
  width: inherit;
`;

export const BackgroundBlur = styled.div`
  //background: linear-gradient(180deg, rgba(255,255,255, 1) 0, rgba(255,255,255,0) 100%);;
  //backdrop-filter: blur(12px);
`;

