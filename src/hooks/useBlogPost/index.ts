import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
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
  created_at: string;
  created_by:string;
}

const BLOG_POST_QUERY_KEY = "blogPost";

export const useBlogPost = (): {
  blogPost: BlogPost | undefined;
  isLoading: boolean;
  isError: boolean;
} => {
  const router = useRouter();
  const { id } = router.query;

  const queryFn = useCallback(() => {
    return fetch(`${process.env.GET_BLOGS_URL}?id=${id}`).then(response => response.json());
  }, [id]);

  const {
    data: { data: [blogPost] = [] } = {},
    isLoading,
    isError,
  } = useQuery<{ data: BlogPost[] }>([BLOG_POST_QUERY_KEY, id], queryFn);

  return {
    blogPost,
    isLoading,
    isError,
  };
};
