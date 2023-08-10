import {
  AdDetailedInfo,
  TitleHeading,
  JobRequirementsList,
  JobRequirementItem,
  YearofExperienceHeading,
  YearofExperienceValue,
  EducationalRequirementsHeading,
  EducationalRequirementsValue,
  Divider,
} from "./StyledSingleAdDetailed";
import JobOffers from "./JobOffers";
import OfferForm from "./OfferForm";
import { Ad } from "@/hooks/useAd";
import { useTranslations } from "next-intl";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Button } from "antd";
import { useRouter } from "next/router";

interface JobRequirementsProp {
  ad: Ad | undefined;
}
const JobRequirements = (props: JobRequirementsProp) => {
  const t = useTranslations("SingleAdDetailed");
  const user = useSelector((state: RootState) => state.user.user);
  const router = useRouter();

  return (
    <AdDetailedInfo>
      <TitleHeading>{t("jobRequirements")}</TitleHeading>
      <JobRequirementsList>
        <JobRequirementItem>{props?.ad?.description}</JobRequirementItem>
      </JobRequirementsList>
      <YearofExperienceHeading>{t("yearsOfExperience")}</YearofExperienceHeading>
      <YearofExperienceValue>
        {props?.ad?.experience_years} {t("years")}
      </YearofExperienceValue>
      <EducationalRequirementsHeading>{t("educationRequirement")}</EducationalRequirementsHeading>
      <EducationalRequirementsValue>{props?.ad?.qualification}</EducationalRequirementsValue>
      {/* Divider */}
      <Divider />
      <JobOffers ad={props.ad} />

      {user ? (
        <OfferForm ad={props.ad} />
      ) : (
        // login to apply for this job with a button to login
        <div>
          <p>login to apply for this job</p>
          <Button
            type="primary"
            onClick={() => {
              router.push("/login");
            }}
          >
            login
          </Button>
        </div>
      )}
    </AdDetailedInfo>
  );
};
export default JobRequirements;
