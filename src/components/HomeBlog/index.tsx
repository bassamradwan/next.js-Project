import HeadingSectionComponent from "../HeadingSectionComponent";
import { BlogWrapper } from "./StyledBlog";
import BlogListComponent from "@/Shared/BlogList";
import { SectionBtn, BackSvg } from "../HeadingSectionComponent/StyledHeading";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
const Blog = () => {
  const t = useTranslations("Home");
  const router = useRouter();
  return (
    <BlogWrapper>
      <HeadingSectionComponent
        BtnTxt={t("showAllBlogs")}
        HeadingTxt={t("latestBlogs")}
        SubHeadingTxt={t("ourBlog")}
        route="/blog"
      />
      <BlogListComponent limit={6} />
      <SectionBtn
        onClick={() => {
          router.push("/blog");
        }}
      >
        <BackSvg src="/back.svg" alt="" />
        {t("showAllBlogs")}
      </SectionBtn>
    </BlogWrapper>
  );
};
export default Blog;
