import React, { useState } from "react";
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
import { toast } from "react-toastify";
import { useBlogPost } from "@/hooks/useBlogPost";
import useComments from "@/hooks/useComments";
import { Spin } from "antd";
import { SpinLight } from "@/Styles/styled.general";

const BlogDetailComponent = () => {
  const locale = useLocale();
  const { blogPost, isLoading, isError } = useBlogPost();
  const t = useTranslations("BlogDetail");
const {comments,add} =useComments()
const [loading, setLoading] = useState(false);
 const [formData, setFormData] = useState({ name: "", email: "", message: "",blog_id:blogPost?.id });

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await add(formData);
      toast.success("Comment added successfully");
    } catch (error:any) {
      toast.error(error.message);
    }
    setLoading(false);
  };
  console.log(blogPost);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching blog post</div>;
  }

// const handleSubmit =async(formdata:comment)=>{
// try{
// await add(formdata);

// }catch(error:any){
//   toast.error(error.message)
// };

// };  

  return (
    <BlogDetailWrapper>
      <BlogTitle> {blogPost?.name[locale]}</BlogTitle>
      <BlogMetaLine>
        <WritterLogo src={blogPost?.image} />
        <WritterName>{blogPost?.created_by}</WritterName> {/* TODO: it's static now */}
        <BlogDate>{blogPost?.created_at}</BlogDate> {/* TODO: it's static now */}
        <BlogCategory>{blogPost?.category.name[locale]}</BlogCategory>
      </BlogMetaLine>
      <CoverImage src={blogPost?.image} />
      {/* TODO: it's static now */}
      <BlogContent>
        {blogPost?.description[locale]}
      </BlogContent>
      <Divider />
      <CommentsSection>
        <CommentWrapper>
          <CommentTitle>Comments</CommentTitle>
          <CommentForm >
            <LeaveComment>{t("LeaveComment")}</LeaveComment>
            <FormLine>
              <InputGroup>
                <InputLabel>{t("name")}</InputLabel>
                <FormInput
                 type="text" placeholder={t("namePlaceHolder")} 
                 name="name"
                 value={formData.name}
                 onChange={handleInputChange}
                 />
              </InputGroup>
              <InputGroup>
                <InputLabel>{t("email")}</InputLabel>
                <FormInput 
                type="email"
                 placeholder={t("emailPlaceHolder")}
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                 />
              </InputGroup>
            </FormLine>
            <FormLine>
              <InputGroup>
                <InputLabel>{t("message")}</InputLabel>
                {/* @ts-ignore */}
                <FormInputTextArea rows="5" 
                 placeholder={t("messagePlaceHolder")} 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                 />
              </InputGroup>
            </FormLine>
              <SpinLight>
               <Spin spinning={loading}>
                 <Button  type="primary" onClick={handleSubmit} >Send Message</Button>
               </Spin>
              </SpinLight>
          </CommentForm>
        </CommentWrapper>
        <CommentList>
          {comments.map(commet=>(
            <CommentItem key={commet.id}>
              <CommentImage src={commet.image} />
              <CommentContent>
                <CommentName>{commet.name}</CommentName>
                <CommentDate>{commet.created_at}</CommentDate>
                <CommentText>{commet.message}</CommentText>
              </CommentContent>
            </CommentItem>
          ))}
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
        </CommentList>
      </CommentsSection>
    </BlogDetailWrapper>
  );
};

export default BlogDetailComponent;
