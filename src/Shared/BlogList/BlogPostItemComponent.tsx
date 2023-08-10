import { useRouter } from "next/navigation";
import {
  BlogPostItemWrapper,
  BlogPostItemImg,
  BlogPostItemDate,
  BlogPostItemTitle,
  BlogPostItemDescription,
  BlogPostContentWrapper,
} from "./StyledBlogPostItemComponent";

interface BlogPostItemComponentProps {
  image: string;
  date: string;
  title: string;
  description: string;
}

const BlogPostItemComponent = (props: BlogPostItemComponentProps) => {
  const router = useRouter();
  return (
    <BlogPostItemWrapper
      onClick={() => {
        router.push("/blog/1");
      }}
    >
      <BlogPostItemImg src={props.image} alt="blog" />
      <BlogPostContentWrapper>
        <BlogPostItemDate>{props.date}</BlogPostItemDate>
        <BlogPostItemTitle>{props.title}</BlogPostItemTitle>
        <BlogPostItemDescription>{props.description}</BlogPostItemDescription>
      </BlogPostContentWrapper>
    </BlogPostItemWrapper>
  );
};
export default BlogPostItemComponent;
