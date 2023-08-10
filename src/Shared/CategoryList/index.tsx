import { useQuery } from "@tanstack/react-query";
import CategoryCardComponent from "./CategoryCardComponent";
import { CategoriesListWrapper } from "./StyledCategoriesBrowse";
import { useLocale } from "next-intl";

interface Category {
  id: number;
  name: {
    [key: string]: string;
  };
  description: {
    [key: string]: string;
  };
  image: string;
}

interface CategoriesListComponentProps {
  // for styling the card component
  $bordercolor?: string;
}

const CATEGORIES_QUERY_KEY = ["categories", "browse"];

const CategoriesListComponent = (props: CategoriesListComponentProps) => {
  const locale = useLocale();
  const {
    data: categories,
    isLoading,
    isError,
  } = useQuery<{ data: Category[] }>(CATEGORIES_QUERY_KEY, () =>
    fetch(`${process.env.GET_CATEGORIES_URL}?pagination=true&limit=8`).then(response =>
      response.json(),
    ),
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching categories</div>;
  }

  return (
    <CategoriesListWrapper>
      {categories?.data?.map(category => (
        <CategoryCardComponent
          key={category.id}
          title={category.name[locale]}
          image={category.image}
          AdsCount="22"
          $bordercolor={props.$bordercolor}
        />
      ))}
    </CategoriesListWrapper>
  );
};

export default CategoriesListComponent;
