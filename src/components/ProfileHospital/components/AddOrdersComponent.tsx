import React, { useState } from "react";
import { useLocale } from "next-intl";
import {
  EditInfoButton,
  EditInfoWrapper,
  EditInput,
  EditInputGroup,
  EditInputLine,
  EditInputTitle,
  EditOption,
  EditSelect,
  HeadingTitle,
} from "../../Profile/styles/styled.ChangeInfo";
import { Content, SpinLight } from "@/Styles/styled.general";
import { AddOrderDataType, CurrencyCode, DefaultLocation } from "@/types";
import useOrders from "@/hooks/useOrders";
import { toast } from "react-toastify";
import useCategories from "@/hooks/useCategories";
import useCities from "@/hooks/useCities";
import { useForm } from "react-hook-form";
import { Spin } from "antd";

const CATEGORIES_QUERY_KEY = ["categories", "browse"];

const OrdersComponent = () => {
  const { categories } = useCategories();
  const { cities } = useCities();
  const { add } = useOrders();
  const { register, reset, handleSubmit } = useForm();

  const [loading, setLoading] = useState(false);

  const locale = useLocale();

  const handleSaveChanges = async (formData: any) => {
    setLoading(true);
    try {
      formData.currency_code = CurrencyCode.EGP;
      formData.latitude = DefaultLocation.LATITUDE;
      formData.longitude = DefaultLocation.LONGITUDE;

      await add(formData);
      reset();
      toast.success("Order Added Successfully");
    } catch (error: any) {
      toast.error(error.message);
    }
    setLoading(false);
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
      onSubmit={handleSubmit(handleSaveChanges)}
    >
      <Content>
        <EditInfoWrapper>
          <HeadingTitle> Profile Hospital</HeadingTitle>
          {/* full Name , Last Name */}
          <EditInputLine>
            <EditInputGroup>
              <EditInputTitle>Title</EditInputTitle>
              <EditInput
                type="text"
                placeholder="Enter your title"
                {...register("title", { required: true })}
              />
            </EditInputGroup>
            <EditInputGroup>
              <EditInputTitle>Expected Cost</EditInputTitle>
              <EditInput
                type="number"
                placeholder="Enter Your EGP"
                {...register("expected_cost", { required: true })}
              />
            </EditInputGroup>
          </EditInputLine>
          {/* Address,phone */}
          <EditInputLine>
            <EditInputGroup>
              <EditInputTitle>Expected Hours</EditInputTitle>
              <EditInput
                type="text"
                placeholder="Enter your Expected Hours"
                {...register("expected_hours", { required: true })}
              />
            </EditInputGroup>
            <EditInputGroup>
              <EditInputTitle>Experience Years</EditInputTitle>
              {/* textArea */}
              <EditInput
                type="text"
                placeholder="Enter your Experience Years"
                {...register("experience_years", { required: true })}
              />
            </EditInputGroup>
          </EditInputLine>
          {/* Email, hourly price rate */}
          <EditInputLine>
            <EditInputGroup>
              <EditInputTitle>Qualification</EditInputTitle>
              <EditInput
                type="text"
                placeholder="Enter your Qualification"
                {...register("qualification", { required: true })}
              />
            </EditInputGroup>
          </EditInputLine>
          {/* Description */}
          <EditInputLine>
            <EditInputGroup>
              <EditInputTitle>Category ID</EditInputTitle>
              <EditSelect defaultValue="" {...register("category_id", { required: true })}>
                <EditOption value="" disabled>
                  Select Category
                </EditOption>
                {categories?.map(category => (
                  <EditOption key={category.id} value={category.id}>
                    {locale === "en" ? category.name.en : category.name.ar}
                  </EditOption>
                ))}
              </EditSelect>
            </EditInputGroup>
            {/* University */}
            <EditInputGroup>
              <EditInputTitle>City ID</EditInputTitle>
              <EditSelect defaultValue="" {...register("city_id", { required: true })}>
                <EditOption value="" disabled>
                  Select City
                </EditOption>
                {cities?.map(city => (
                  <EditOption key={city.id} value={city.id}>
                    {locale === "en" ? city.name.en : city.name.ar}
                  </EditOption>
                ))}
              </EditSelect>
            </EditInputGroup>
          </EditInputLine>
        </EditInfoWrapper>
      </Content>
      {/* second card Education and skills */}
      <Content>
        <EditInfoWrapper>
          <HeadingTitle> Profile Hospital</HeadingTitle>
          {/* Certifications */}
          <EditInputLine>
            <EditInputGroup>
              <EditInputTitle>Description</EditInputTitle>
              <EditInput
                type="textarea"
                placeholder="Enter your description"
                {...register("description", { required: true })}
              />
            </EditInputGroup>
          </EditInputLine>
        </EditInfoWrapper>
      </Content>
      <SpinLight>
        <Spin spinning={loading}>
          <EditInfoButton>Send Order</EditInfoButton>
        </Spin>
      </SpinLight>
      {/* button for save changes */}
    </form>
  );
};

export default OrdersComponent;
