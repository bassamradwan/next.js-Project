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
} from "./Styled.forgetPassword";
import "react-toastify/dist/ReactToastify.css";
import { Menu } from "antd";
import { useTranslations } from "next-intl";

function ForgetPassword() {
  const router = useRouter();
  const t = useTranslations("forgetPassword"); // Use the useTranslations hook to get the translations for the ForgetPassword component
  const schema = yup.object().shape({
    phone: yup.string().required(t("phoneRequired")), // Use the t function to translate the error message
  });
  type FormData = {
    phone: string;
  };
  type APIDATATYPE = {
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

  const forgetPasswordMutation = useMutation(
    async (data: APIDATATYPE) => {
      const response = await fetch(`${process.env.FORGET_PASSWORD_URL}`, {
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
          toast.success(t("resetLinkSent"), {
            // Use the t function to translate the success message
            toastId: new Date().getTime().toString() + Math.random(),
          });
          router.push("/checkCode");
        }, 2000);
      },
      onError: error => {
        console.log("error...", error);
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
      phone: data.phone,
    };
    forgetPasswordMutation.mutate(mappedData);
  };

  return (
    <CardContainer>
      <CardWrapper>
        <CardTitleAndSubtitle>
          <CardTitle>{t("title")}</CardTitle>
        </CardTitleAndSubtitle>
        <FormWrapper>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {/* input and label for each input */}
            <InputWrapper>
              <Label>{t("phone")}</Label>
              <Input type="tel" placeholder={t("phone")} {...register("phone")} />
              {errors.phone && <ErrorWrapper>{errors.phone?.message}</ErrorWrapper>}
            </InputWrapper>
            {/* button for submit */}
            <SubmitBtn type="submit" disabled={forgetPasswordMutation.isLoading}>
              {forgetPasswordMutation.isLoading ? `${t("submit")}...` : `${t("submit")}`}
            </SubmitBtn>
          </Form>
        </FormWrapper>
      </CardWrapper>
    </CardContainer>
  );
}

export default ForgetPassword;
