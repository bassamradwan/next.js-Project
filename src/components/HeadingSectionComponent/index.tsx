import {
  BackSvg,
  HeadingWrapper,
  HeadingSectionBtn,
  SectionHeading,
  SectionHeadingSubTxt,
  SectionHeadingTxt,
} from "./StyledHeading";
import { useLocale } from "next-intl";
import { useRouter } from "next/router";

interface HeadingSeactionComponentProps {
  BtnTxt: string;
  HeadingTxt: string;
  SubHeadingTxt: string;
  route?: string;
}

const HeadingSectionComponent = ({
  BtnTxt,
  HeadingTxt,
  SubHeadingTxt,
  route = "/ads",
}: HeadingSeactionComponentProps) => {
  // get the locale from the context here
  const locale = useLocale();
  const router = useRouter();

  return (
    <HeadingWrapper>
      <SectionHeading>
        
        <SectionHeadingTxt>{HeadingTxt}</SectionHeadingTxt>
        <SectionHeadingSubTxt>{SubHeadingTxt}</SectionHeadingSubTxt>
      </SectionHeading>

      <HeadingSectionBtn>
        {locale === "ar" ? (
          <div
            onClick={() => {
              // if the route not "" then push to the route
              if (route !== "") router.push(`/${route}`);
            }}
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {BtnTxt}
            <BackSvg src="/back.svg" alt="" />
            
          </div>
        ) : (
          <div
            onClick={() => {
              if (route !== "") router.push(`/${route}`);
            }}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <BackSvg src="/back.svg" alt="" />
            {BtnTxt}
          </div>
        )}
      </HeadingSectionBtn>
    </HeadingWrapper>
  );
};
export default HeadingSectionComponent;
