import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Link from "next/link";
import Cookies from "js-cookie";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { setUser } from "@/store/features/user/userSlice";

import {
  CardContainer,
  CardSubtitle,
  CardTitle,
  CardTitleAndSubtitle,
  CardWrapper,
  ErrorWrapper,
  ForgetWrapper,
  Form,
  FormWrapper,
  Input,
  InputWrapper,
  InputWrapperPass,
  Label,
  PasswordIcon,
  SocialMediaWrapper,
  SubmitBtn,
} from "./Styled.login";
import { useDispatch } from "react-redux";
import { useTranslations } from "next-intl";

function Login() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  // translation
  const t = useTranslations("Login");

  const router = useRouter();
  const schema = yup.object().shape({
    phone: yup.string().required("Phone is required"),
    password: yup.string().required("Password is required"),
  });
  type FormData = yup.InferType<typeof schema>;
  type APIDATATYPE = {
    phone: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const loginMutation = useMutation(
    async (data: APIDATATYPE) => {
      const response = await fetch(`${process.env.LOGIN_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
          toast.success("Login successful", {
            toastId: new Date().getTime().toString() + Math.random(),
          });
          Cookies.set("medtich-token", response.access_token);
          console.log(response, "Response");

          dispatch(setUser(response.data)); // Dispatch the setUser action with the user data

          router.push("/");
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
      password: data.password,
    };
    loginMutation.mutate(mappedData);
  };

  return (
    <CardContainer>
      <CardWrapper>
        <CardTitleAndSubtitle>
          <CardTitle>{t("title")}</CardTitle>
          <CardSubtitle>
            {t("dontHaveAccount")}{" "}
            <Link
              href="/register"
              style={{
                color: "#00D9C8",
                paddingInlineStart: "5px",
              }}
            >
              {t("register")}
            </Link>
          </CardSubtitle>
        </CardTitleAndSubtitle>
        <FormWrapper>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {/* input and label for each input */}
            <InputWrapper>
              <Label>{t("phone")}</Label>
              <Input type="tel" placeholder={t("phone")} {...register("phone")} />
              {errors.phone && <ErrorWrapper>{errors.phone?.message}</ErrorWrapper>}
            </InputWrapper>
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
            {/* button for submit */}
            <SubmitBtn type="submit" disabled={loginMutation.isLoading}>
              {loginMutation.isLoading ? `${t("title")}...` : `${t("title")}`}
            </SubmitBtn>
            {/* forget password , reset password */}
            <ForgetWrapper>
              {t("forgetPassword")}{" "}
              <Link
                href="/forget-password"
                style={{
                  color: "#00D9C8",
                }}
              >
                {t("resetPassword")}
              </Link>
            </ForgetWrapper>
          </Form>
        </FormWrapper>
        {/* divider with OR work in the middle of the divider */}
        {/* <DividerWrapper>
          <Divider />
          <DividerText>OR</DividerText>
          <Divider />
        </DividerWrapper> */}
        {/* social media buttons */}
        <SocialMediaWrapper>
          {/* <SocialMediaButton>
            <SocialMediaIcon src={facebookIcon} />
            <SocialMediaText>Login with Facebook</SocialMediaText>
          </SocialMediaButton>
          <SocialMediaButton>
            <SocialMediaIcon src={googleIcon} />
            <SocialMediaText>Login with Google</SocialMediaText>
          </SocialMediaButton> */}
        </SocialMediaWrapper>
      </CardWrapper>
    </CardContainer>
  );
}

export default Login;
