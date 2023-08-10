import { AdsListWrapper } from "./StyledAdsListComponent";
import PaginationComponet from "./Pagination";
import AdListComponent from "@/components/AdsList/General";
import { Ad } from "@/hooks/useAds";
interface AdsListComponentProps {
  isMobileFilter?: boolean;
  handleShowFilter?: () => void;
  ads?: Ad[];
  pagination?: any;
}
const AdsListComponent = (props: AdsListComponentProps) => {
  return (
    <AdsListWrapper>
      {/* <PaginationComponet
        isMobileFilter={props.isMobileFilter}
        handleShowFilter={props.handleShowFilter}
        pagination={props.pagination}
        ads={props.ads}
      /> */}
      <AdListComponent $columnsCount={1} ads={props.ads} />
    </AdsListWrapper>
  );
};
export default AdsListComponent;
