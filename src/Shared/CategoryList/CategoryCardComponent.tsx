import {
  CategoryCardAdsCount,
  CategoryCardImage,
  CategoryCardTitle,
  CategoryCardWrapper,
  TitleCountWrapper,
} from "./StyledCategoriesBrowse";

interface categoryCardProps {
  title: string;
  image: string;
  AdsCount: string;
  // for styling in different pages like home page and helpCenter page
  $bordercolor?: string;
}
const CategoryCardComponent = ({ title, image, AdsCount, $bordercolor }: categoryCardProps) => {
  return (
    <CategoryCardWrapper $bordercolor={$bordercolor}>
      <CategoryCardImage src={image} alt={title} />
      <TitleCountWrapper>
        <CategoryCardTitle>{title}</CategoryCardTitle>
        <CategoryCardAdsCount>{AdsCount} اعلان</CategoryCardAdsCount>
      </TitleCountWrapper>
    </CategoryCardWrapper>
  );
};
export default CategoryCardComponent;
