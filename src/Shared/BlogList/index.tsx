import { useQuery, useQueryClient } from "@tanstack/react-query";
import { BlogListWrapper } from "../../components/HomeBlog/StyledBlog";
import BlogPostItemComponent from "./BlogPostItemComponent";
import { useLocale } from "next-intl";
import { useCallback } from "react";

interface BlogPost {
  id: number;
  name: {
    [key: string]: string;
  };
  description: {
    [key: string]: string;
  };
  category: {
    id: number;
    name: {
      [key: string]: string;
    };
    description: {
      [key: string]: string;
    };
    image: string;
  };
  image: string;
}

interface BlogListComponentProps {
  category?: string;
}
const BlogListComponent = ({ category = "" }: BlogListComponentProps) => {
  const locale = useLocale();
  const BLOG_POSTS_QUERY_KEY = ["blogPosts", category];
  const queryFn = useCallback(() => {
    return fetch(`${process.env.GET_BLOGS_URL}?pagination=true&limit=3&category=${category}`).then(
      response => response.json(),
    );
  }, [category]);

  const {
    data: blogPosts,
    isLoading,
    isError,
  } = useQuery<{ data: BlogPost[] }>([BLOG_POSTS_QUERY_KEY, category], queryFn);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching blog posts</div>;
  }

  return (
    <BlogListWrapper>
      {blogPosts?.data?.map(blogPost => (
        <BlogPostItemComponent
          key={blogPost.id}
          image={blogPost.image}
          date={new Date().toLocaleDateString(locale)}
          title={blogPost.name[locale]}
          description={blogPost.description[locale]}
        />
      ))}
    </BlogListWrapper>
  );
};

export default BlogListComponent;
