import { useState } from "react";
import BlogListComponent from "@/Shared/BlogList";
import { BlogContainer, FilterNav, FilterItem, FilterLink } from "./Styled.AboutBlogs";
import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";

interface BlogCategory {
  id: string;
  name: {
    [key: string]: string;
  };
  description: {
    [key: string]: string;
  };
  image: string;
}

interface BlogCategoriesResponse {
  status: boolean;
  code: number;
  message: string;
  data: BlogCategory[];
  pagination: {
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
    from: number;
    to: number;
  };
}

const BLOG_CATEGORIES_QUERY_KEY = ["blogCategories"];

const AboutBlogs = () => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const locale = useLocale();

  const handleFilterClick = (filter: string) => {
    const selectedCategory = response?.data.find(category => category?.name[locale] === filter);
    setSelectedFilter(selectedCategory ? selectedCategory?.id : "");
  };

  const {
    data: response,
    isLoading,
    isError,
  } = useQuery<BlogCategoriesResponse>(BLOG_CATEGORIES_QUERY_KEY, async () => {
    const response = await fetch(`${process.env.GET_BLOG_CATEGORIES_URL}`);
    if (!response.ok) {
      throw new Error("Failed to fetch blog categories");
    }
    return response.json();
  });

  if (isLoading) {
    return <div>Loading categories...</div>;
  }

  if (isError) {
    return <div>Error fetching blog categories</div>;
  }

  return (
    <BlogContainer>
      <FilterNav>
        <FilterItem>
          <FilterLink active={selectedFilter === ""} onClick={() => handleFilterClick("")}>
            All
          </FilterLink>
        </FilterItem>
        {response.data.map(category => (
          <FilterItem key={category.id}>
            <FilterLink
              active={selectedFilter === category.id}
              onClick={() => handleFilterClick(category.name[locale])}
            >
              {category.name[locale]}
            </FilterLink>
          </FilterItem>
        ))}
      </FilterNav>
      <BlogListComponent category={selectedFilter} />
    </BlogContainer>
  );
};

export default AboutBlogs;
