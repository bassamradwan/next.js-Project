import { useLocale, useTranslations } from "next-intl";
import {
  BlogDetailWrapper,
  BlogTitle,
  BlogMetaLine,
  WritterLogo,
  WritterName,
  BlogDate,
  BlogCategory,
  CoverImage,
  BlogContent,
  CommentsSection,
  CommentWrapper,
  CommentTitle,
  CommentForm,
  CommentInput,
  CommentButton,
  CommentList,
  CommentItem,
  CommentImage,
  CommentContent,
  CommentName,
  CommentDate,
  CommentText,
  CommentReplyButton,
  LeaveComment,
  FormLine,
  InputGroup,
  InputLabel,
  FormInput,
  FormInputTextArea,
} from "./Styled.BlogDetails";
import { Button, Divider } from "antd";

import { useBlogPost } from "@/hooks/useBlogPost";

const BlogDetailComponent = () => {
  const locale = useLocale();
  const { blogPost, isLoading, isError } = useBlogPost();
  const t = useTranslations("BlogDetail");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching blog post</div>;
  }

  return (
    <BlogDetailWrapper>
      <BlogTitle> {blogPost?.name[locale]}</BlogTitle>
      <BlogMetaLine>
        <WritterLogo src={blogPost?.image} />
        <WritterName>by superVisor</WritterName> {/* TODO: it's static now */}
        <BlogDate>April 20, 2021</BlogDate> {/* TODO: it's static now */}
        <BlogCategory>{blogPost?.category.name[locale]}</BlogCategory>
      </BlogMetaLine>
      <CoverImage src={blogPost?.image} />
      {/* TODO: it's static now */}
      <BlogContent>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Quisquam
          voluptatibus, quos, quas quibusdam, voluptatum quia nemo autem quidem asperiores
          voluptates tempora? Quisquam voluptatibus, quos, quas quibusdam, voluptatum quia nemo
          autem quidem asperiores voluptates tempora?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Quisquam
          voluptatibus, quos, quas quibusdam, voluptatum quia nemo autem quidem asperiores
          voluptates tempora? Quisquam voluptatibus, quos, quas quibusdam, voluptatum quia nemo
          autem quidem asperiores voluptates tempora?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Quisquam
          voluptatibus, quos, quas quibusdam, voluptatum quia nemo autem quidem asperiores
          voluptates tempora? Quisquam voluptatibus, quos, quas quibusdam, voluptatum quia nemo
          autem quidem asperiores voluptates tempora?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Quisquam
          voluptatibus, quos, quas quibusdam, voluptatum quia nemo autem quidem asperiores
          voluptates tempora? Quisquam voluptatibus, quos, quas quibusdam, voluptatum quia nemo
          autem quidem asperiores voluptates tempora?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Quisquam
          voluptatibus, quos, quas quibusdam, voluptatum quia nemo autem quidem asperiores
          voluptates tempora? Quisquam voluptatibus, quos, quas quibusdam, voluptatum quia nemo
          autem quidem as
        </p>
      </BlogContent>
      <Divider />
      <CommentsSection>
        <CommentWrapper>
          <CommentTitle>Comments</CommentTitle>
          <CommentForm>
            <LeaveComment>{t("LeaveComment")}</LeaveComment>
            <FormLine>
              <InputGroup>
                <InputLabel>{t("name")}</InputLabel>
                <FormInput type="text" placeholder={t("namePlaceHolder")} />
              </InputGroup>
              <InputGroup>
                <InputLabel>{t("email")}</InputLabel>
                <FormInput type="email" placeholder={t("emailPlaceHolder")} />
              </InputGroup>
            </FormLine>
            <FormLine>
              <InputGroup>
                <InputLabel>{t("message")}</InputLabel>
                {/* @ts-ignore */}
                <FormInputTextArea rows="5" placeholder={t("messagePlaceHolder")} />
              </InputGroup>
            </FormLine>
            <Button type="primary">Send Message</Button>
          </CommentForm>
        </CommentWrapper>
        <CommentList>
          <CommentItem>
            <CommentImage src="https://via.placeholder.com/150" />
            <CommentContent>
              <CommentName>John Doe</CommentName>
              <CommentDate>April 20, 2021</CommentDate>
              <CommentText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
                Quisquam voluptatibus, quos, quas quibusdam, voluptatum quia nemo autem quidem
                asperiores voluptates tempora? Quisquam voluptatibus, quos, quas quibusdam,
                voluptatum quia nemo autem quidem asperiores voluptates tempora?
              </CommentText>
              {/* <CommentReplyButton>Reply</CommentReplyButton> */}
            </CommentContent>
          </CommentItem>
          <CommentItem>
            <CommentImage src="https://via.placeholder.com/150" />
            <CommentContent>
              <CommentName>John Doe</CommentName>
              <CommentDate>April 20, 2021</CommentDate>
              <CommentText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
                Quisquam voluptatibus, quos, quas quibusdam, voluptatum quia nemo autem quidem
                asperiores voluptates tempora? Quisquam voluptatibus, quos, quas quibusdam,
                voluptatum quia nemo autem quidem asperiores voluptates tempora?
              </CommentText>
              {/* <CommentReplyButton>Reply</CommentReplyButton> */}
            </CommentContent>
          </CommentItem>
          <CommentItem>
            <CommentImage src="https://via.placeholder.com/150" />
            <CommentContent>
              <CommentName>John Doe</CommentName>
              <CommentDate>April 20, 2021</CommentDate>
              <CommentText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
                Quisquam voluptatibus, quos, quas quibusdam
              </CommentText>
              {/* <CommentReplyButton>Reply</CommentReplyButton> */}
            </CommentContent>
          </CommentItem>
        </CommentList>
      </CommentsSection>
    </BlogDetailWrapper>
  );
};

export default BlogDetailComponent;
