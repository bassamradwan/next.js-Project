import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Link from "next/link";
import Cookies from "js-cookie";

import { FaEye, FaEyeSlash } from "react-icons/fa";

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
  PasswordIcon,
  InputWrapperPass,
} from "./Styled.resetPassword";
import "react-toastify/dist/ReactToastify.css";
import { Menu } from "antd";
import { useTranslations } from "next-intl";

function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const router = useRouter();
  const t = useTranslations("resetPassword"); // Use the useTranslations hook to get the translations for the ResetPassword component
  const schema = yup.object().shape({
    password: yup.string().required(t("passwordRequired")), // Use the t function to translate the error message
    confirmPassword: yup
      .string()
      .required("Confirm password is required")
      .oneOf([yup.ref("password")], "Passwords do not match"),
    code: yup.string().required(t("codeRequired")), // New validation rule for code input
  });
  type FormData = yup.InferType<typeof schema>;
  type APIDATATYPE = {
    password: string;
    password_confirmation: string;
    code: string; // Add code property to API data type
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const resetPasswordMutation = useMutation(
    async (data: APIDATATYPE) => {
      const response = await fetch(`${process.env.PASSWORD_RESET_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // prevent 302 redirect
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
          toast.success(t("resetPasswordSuccess"), {
            // Use the t function to translate the success message
            toastId: new Date().getTime().toString() + Math.random(),
          });
          Cookies.set("medtich-token", response.access_token);

          router.push("/login");
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
      password: data.password,
      password_confirmation: data.confirmPassword,
      code: data.code, // Add code property to mapped data
    };
    resetPasswordMutation.mutate(mappedData);
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
              <Label>{t("password")}</Label>
              <InputWrapperPass>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder={t("password")}
                  {...register("password")}
                />
                <PasswordIcon onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </PasswordIcon>
              </InputWrapperPass>

              {errors.password && <ErrorWrapper>{errors.password?.message}</ErrorWrapper>}
            </InputWrapper>
            <InputWrapper>
              <Label>{t("title")}</Label> {/* Use the t function to translate the label */}
              <InputWrapperPass>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder={t("confirm")}
                  {...register("confirmPassword")}
                />
                <PasswordIcon onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </PasswordIcon>
              </InputWrapperPass>
              {errors.confirmPassword && (
                <ErrorWrapper>{errors.confirmPassword?.message}</ErrorWrapper>
              )}
            </InputWrapper>
            {/* code input */}
            <InputWrapper>
              <Label>{t("code")}</Label>
              <Input placeholder={t("code")} {...register("code")} />
              {errors.code && <ErrorWrapper>{errors.code?.message}</ErrorWrapper>}
            </InputWrapper>
            {/* button for submit */}
            <SubmitBtn type="submit" disabled={resetPasswordMutation.isLoading}>
              {resetPasswordMutation.isLoading ? `${t("reset")}...` : t("reset")}{" "}
              {/* Use the t function to translate the button text */}
            </SubmitBtn>
          </Form>
        </FormWrapper>
      </CardWrapper>
    </CardContainer>
  );
}

export default ResetPassword;
