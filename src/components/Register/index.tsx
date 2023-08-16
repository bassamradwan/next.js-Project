import Link from "next/link";
import {
  CardContainer,
  CardWrapper,
  CardTitle,
  CardSubtitle,
  CardTitleAndSubtitle,
  AccountTypeWrapper,
  AccountTypeButton,
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
  LineWrapper,
  RadioInput,
  TermsLable,
  ErrorWrapper,
  SubmitBtn,
  PasswordIcon,
  InputWrapperPass,
} from "./Styled.register";
import { useState } from "react";
import { toast } from "react-toastify";

import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useTranslations } from "next-intl";

function Register() {
  const [accountType, setAccountType] = useState("technical");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // translation
  const t = useTranslations("Register");

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleAccountTypeChange = (type: string) => {
    setAccountType(type);
    setValue("accountType", type);
  };
  const router = useRouter();
  const schema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email("Email is invalid").required("Email is required"),
    phone: yup.string().required("Phone number is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: yup
      .string()
      .required("Confirm password is required")
      .oneOf([yup.ref("password")], "Passwords do not match"),
    agreeToTerms: yup.string().required("You must agree to the terms and conditions"),
    accountType: yup.string().required("Account type is required"),
  });
  type FormData = yup.InferType<typeof schema>;
  type APIDATATYPE = {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    password_confirmation: string;
    phone: string;
    type: string;
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const registerMutation = useMutation(
    async (data: APIDATATYPE) => {
      const response = await fetch(`${process.env.REGISTER_URL}`, {
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
      onSuccess: () => {
        setTimeout(() => {
          toast.success("Registration successful", {
            toastId: new Date().getTime().toString() + Math.random(),
          });
          router.push("/login");
        }, 2000);
      },
      onError: error => {
        // convert error... Error:{} this to object
        // error... Error: {"status":false,"message":"validation error","errors":{"phone":["The phone has already been taken."]}}
        // @ts-ignore
        const errorResponse = JSON.parse(error.message);
        toast.error("Something went wrong")
        // convert errorResponse.errors is array of objects to array of strings i want to have array of the keys and values
        const errorsArray = Object.entries(errorResponse.errors).map(([key, value]) => {
          return `${key}: ${value}`;
        });

        // loop through the errorsArray and show each error in toast
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
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      password: data.password,
      password_confirmation: data.confirmPassword,
      phone: data.phone,
      type: data.accountType,
    };
    registerMutation.mutate(mappedData);
  };

  return (
    <CardContainer>
      <CardWrapper>
        <CardTitleAndSubtitle>
          <CardTitle>{t("title")}</CardTitle>
          <CardSubtitle>
            {t("Do you have an account?")}
            <Link
              href="/login"
              style={{
                color: "#00D9C8",
                paddingInlineStart: "7px",
              }}
            >
              {t("login")}
            </Link>
          </CardSubtitle>
        </CardTitleAndSubtitle>
        <AccountTypeWrapper>
          <AccountTypeButton
            selected={accountType === "technical"}
            onClick={() => handleAccountTypeChange("technical")}
            {...register("accountType")}
            value="technical"
          >
            {t("RegisterAsTechnician")}
          </AccountTypeButton>
          <AccountTypeButton
            selected={accountType === "hospital"}
            onClick={() => handleAccountTypeChange("hospital")}
            {...register("accountType")}
            value="hospital"
          >
            {t("RegisterAsHospital")}
          </AccountTypeButton>
          {errors.accountType && <span>{errors.accountType?.message}</span>}
        </AccountTypeWrapper>
        <FormWrapper>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {/* input and label for each input */}
            <InputWrapper>
              <Label>{t("FirstName")}</Label>
              <Input type="text" placeholder={t("FirstName")} {...register("firstName")} />
              {errors.firstName && <ErrorWrapper>{errors.firstName?.message}</ErrorWrapper>}
            </InputWrapper>
            {/* last name */}
            <InputWrapper>
              <Label>{t("LastName")}</Label>
              <Input type="text" placeholder={t("LastName")} {...register("lastName")} />
              {errors.lastName && <ErrorWrapper>{errors.lastName?.message}</ErrorWrapper>}
            </InputWrapper>
            {/* email */}
            <InputWrapper>
              <Label>{t("email")}</Label>
              <Input type="text" placeholder={t("email")} {...register("email")} />
              {errors.email && <ErrorWrapper>{errors.email?.message}</ErrorWrapper>}
            </InputWrapper>
            <InputWrapper>
              <Label>{t("PhoneNumber")}</Label>
              <Input type="text" placeholder={t("PhoneNumber")} {...register("phone")} />
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
            <InputWrapper>
              <Label>{t("confirm")}</Label>
              <InputWrapperPass>
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder={t("confirm")}
                  {...register("confirmPassword")}
                />
                <PasswordIcon onClick={toggleConfirmPasswordVisibility}>
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </PasswordIcon>
              </InputWrapperPass>
              {errors.confirmPassword && (
                <ErrorWrapper>{errors.confirmPassword.message}</ErrorWrapper>
              )}
            </InputWrapper>
            {/* radio for agree to terms and conditions */}
            <LineWrapper>
              <RadioInput type="radio" id="agreeToTerms" {...register("agreeToTerms")} />
              <TermsLable htmlFor="agreeToTerms">{t("terms")}</TermsLable>
            </LineWrapper>
            {errors.agreeToTerms && <ErrorWrapper>{errors.agreeToTerms?.message}</ErrorWrapper>}
            {/* button for submit */}
            <SubmitBtn type="submit" disabled={registerMutation.isLoading}>
              {registerMutation.isLoading ? `${t("title")}...` : `${t("title")}`}
            </SubmitBtn>
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
            <SocialMediaText>Register with Facebook</SocialMediaText>
          </SocialMediaButton>
          <SocialMediaButton>
            <SocialMediaIcon src={googleIcon} />
            <SocialMediaText>Register with Google</SocialMediaText>
          </SocialMediaButton> */}
        </SocialMediaWrapper>
      </CardWrapper>
    </CardContainer>
  );
}

export default Register;
