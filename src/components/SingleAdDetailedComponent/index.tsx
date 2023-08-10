import { SingleAdDetailesWrapper } from "./StyledSingleAdDetailed";
import JobCards from "./JobCards";
import JobRequirements from "./JobRequirements";
import { Ad } from "@/hooks/useAd";
interface singleAdDetailedComponentProps {
  ad: Ad | undefined;
}
const SingleAdDetailedComponent = (props: singleAdDetailedComponentProps) => {
  return (
    <SingleAdDetailesWrapper>
      <JobRequirements ad={props?.ad} />
      <JobCards ad={props?.ad} />
    </SingleAdDetailesWrapper>
  );
};
export default SingleAdDetailedComponent;
