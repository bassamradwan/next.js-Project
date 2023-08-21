import HeadingSectionComponent from "../HeadingSectionComponent";
import { BackSvg, SectionBtn } from "../HeadingSectionComponent/StyledHeading";
import CategoiesListComponent from "@/Shared/CategoryList";
import { CategoriesWrapper } from "@/Shared/CategoryList/StyledCategoriesBrowse";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

const   CategoriesBrowse = () => {
  const t = useTranslations("Home");
  const router = useRouter();


  return (
    <CategoriesWrapper>
      <HeadingSectionComponent
        BtnTxt={t("showAllCategories")}
        HeadingTxt={t("browseCategories")}
        SubHeadingTxt={t("allSectionsAndCategories")}
      />
      <CategoiesListComponent $bordercolor="#F4F4F4" />
      <SectionBtn>
        <BackSvg src="/back.svg" alt="" />
        {t("showAllAds")}
      </SectionBtn>
    
    </CategoriesWrapper>
  );
};
export default CategoriesBrowse;
