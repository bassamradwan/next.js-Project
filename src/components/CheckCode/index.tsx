import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Link from "next/link";

import { FaEnvelope } from "react-icons/fa";

import {
  CardContainer,
  CardWrapper,
  CardTitle,
  CardSubtitle,
  CardTitleAndSubtitle,
  FormWrapper,
  Form,
  InputWrapper,
  Label,
  Input,
  Button,
  DividerWrapper,
  Divider,
  DividerText,
  SocialMediaWrapper,
  SocialMediaButton,
  SocialMediaIcon,
  SocialMediaText,
  ErrorWrapper,
  SubmitBtn,
} from "./Styled.checkCode";
import "react-toastify/dist/ReactToastify.css";
import { Menu } from "antd";
import { useTranslations } from "next-intl";

function CheckCode() {
  const router = useRouter();
  const t = useTranslations("checkCode"); // Use the useTranslations hook to get the translations for the CheckCode component
  const schema = yup.object().shape({
    code: yup.string().required(t("codeRequired")), // Use the t function to translate the error message
    phone: yup.string().required(t("phoneRequired")), // Use the t function to translate the error message
  });
  type FormData = {
    code: string;
    phone: string;
  };
  type APIDATATYPE = {
    code: string;
    phone: string;
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const checkCodeMutation = useMutation(
    async (data: APIDATATYPE) => {
      const response = await fetch(`${process.env.CHECK_CODE_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // prevent 302 error (Found)
          "X-Requested-With": "XMLHttpRequest",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const ErrorResponse = await response.json();
        throw new Error(`${JSON.stringify(ErrorResponse)}`);
      }
      return response.json();
    },
    {
      onSuccess: response => {
        setTimeout(() => {
          toast.success(t("codeValidSuccess"), {
            // Use the t function to translate the success message
            toastId: new Date().getTime().toString() + Math.random(),
          });
          router.push("/reset-password");
        }, 2000);
      },
      onError: error => {
        // @ts-ignore
        const errorResponse = JSON.parse(error.message);
        const errorsArray = Object.entries(errorResponse.errors).map(([key, value]) => {
          return `${key}: ${value}`;
        });

        errorsArray.forEach(error => {
          setTimeout(() => {
            toast.error(error, {
              toastId: new Date().getTime().toString() + Math.random(),
            });
          }, 1000);
        });
      },
    },
  );

  const onSubmit = (data: FormData) => {
    const mappedData = {
      code: data.code,
      phone: data.phone,
    };
    checkCodeMutation.mutate(mappedData);
  };

  return (
    <CardContainer>
      <CardWrapper>
        <CardTitleAndSubtitle>
          <CardTitle>{t("title")}</CardTitle>
        </CardTitleAndSubtitle>
        <FormWrapper>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputWrapper>
              <Label>{t("phone")}</Label>
              <Input type="tel" placeholder={t("phone")} {...register("phone")} />
              {errors.phone && <ErrorWrapper>{errors.phone?.message}</ErrorWrapper>}
            </InputWrapper>
            {/* input and label for each input */}
            <InputWrapper>
              <Label>{t("code")}</Label>
              <Input type="text" placeholder="0000..." {...register("code")} />
              {errors.code && <ErrorWrapper>{errors.code?.message}</ErrorWrapper>}
            </InputWrapper>
            {/* button for submit */}
            <SubmitBtn type="submit" disabled={checkCodeMutation.isLoading}>
              {checkCodeMutation.isLoading ? `${t("submit")}...` : `${t("submit")}`}
            </SubmitBtn>
          </Form>
        </FormWrapper>
      </CardWrapper>
    </CardContainer>
  );
}

export default CheckCode;
