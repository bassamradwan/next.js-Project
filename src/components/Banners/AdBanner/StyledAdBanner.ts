import styled from "styled-components";

export const BannerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: #07c2aa;
  margin-top: -80px;
  padding: 110px;
  z-index: -1;
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 0;
    padding: 25px;
  }
`;

export const AdInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-left: 0;
  }
`;

export const AdInfoHeader = styled.div`
  display: flex;
  align-items: flex-start;
  flex: 2;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0px;
  }
`;

export const AdInfoImage = styled.img`
  width: 75px;
  height: 75px;
  object-fit: cover;
  border-radius: 8px;
  background: #fff;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const AdInfoSubHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
  row-gap: 15px;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

export const AdTitle = styled.h2`
  font-size: 24px;
  margin: 0;
`;

export const AdMetaInfo = styled.div`
  display: flex;
  align-items: center;
`;

interface AddMetaInfoItemProps {
  noborder?: any;
}
export const AdMetaInfoItem = styled.span<AddMetaInfoItemProps>`
  font-size: 16px;
  display: flex;
  align-items: center;
  column-gap: 8px;
  justify-content: center;
  border-right: ${({ noborder }) => (noborder ? "none" : "1px solid #fff")};
  padding-right: ${({ noborder }) => (noborder ? "0" : "10px")};
  padding-left: 10px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const AdIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const ActionBtnsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  flex: 1;

  @media (max-width: 768px) {
    margin-top: 20px;
    justify-content: center;
  }
`;

export const ActionBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const ShareBtn = styled(ActionBtn)``;
export const SaveBtn = styled(ActionBtn)``;
export const ReportBtn = styled(ActionBtn)``;

export const ActionBtnIcon = styled.img`
  width: 33px;
  height: 33px;
  margin-right: 8px;
  border: 1px solid #fff;
  border-radius: 50%;
  padding: 4px;
`;
