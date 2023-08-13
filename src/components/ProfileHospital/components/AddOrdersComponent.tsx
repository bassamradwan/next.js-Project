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
import { Content } from "@/Styles/styled.general";
import { AddOrderDataType, CurrencyCode, DefaultLocation } from "@/types";
import useOrders from "@/hooks/useOrders";
import { toast } from "react-toastify";
import useCategories from "@/hooks/useCategories";
import useCities from "@/hooks/useCities";
import MyButtonComponent from "@/components/ButtonComponent";
import { Spin } from "antd";

const CATEGORIES_QUERY_KEY = ["categories", "browse"];

const OrdersComponent = () => {
  const { categories } = useCategories();
  const { cities } = useCities();
  const { add } = useOrders();
  const [loading, setLoading] = useState(false);

  const [isLoadingData, setIsLoadingData] = useState(true);
  const [formData, setFormData] = useState<AddOrderDataType>({
    title: "",
    expected_cost: "",
    expected_hours: "",
    experience_years: "",
    currency_code: CurrencyCode.EGP,
    qualification: "",
    category_id: "",
    city_id: "",
    description: "",
    latitude: DefaultLocation.LATITUDE,
    longitude: DefaultLocation.LONGITUDE,
  });

  const locale = useLocale();
  const spinner = Spin;
  //Add Order
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSaveChanges = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await add(formData);
      toast.success("Order Added Successfully");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
      }
    };
    console.log(formData);

    return (
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
        onSubmit={handleSaveChanges}
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
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                />
              </EditInputGroup>
              <EditInputGroup>
                <EditInputTitle>Expected Cost</EditInputTitle>
                <EditInput
                  type="number"
                  placeholder="Enter Your expected_cost EGP"
                  name="expected_cost"
                  value={formData.expected_cost}
                  onChange={handleInputChange}
                />
                {/* currency-code */}
                <span>EGP</span>
              </EditInputGroup>
            </EditInputLine>
            {/* Address,phone */}
            <EditInputLine>
              <EditInputGroup>
                <EditInputTitle>Expected Hours</EditInputTitle>
                <EditInput
                  type="text"
                  placeholder="Enter your Expected Hours"
                  name="expected_hours"
                  value={formData.expected_hours}
                  onChange={handleInputChange}
                />
              </EditInputGroup>
              <EditInputGroup>
                <EditInputTitle>Experience Years</EditInputTitle>
                {/* textArea */}
                <EditInput
                  type="text"
                  placeholder="Enter your Experience Years"
                  name="experience_years"
                  value={formData.experience_years}
                  onChange={handleInputChange}
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
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleInputChange}
                />
              </EditInputGroup>
            </EditInputLine>
            {/* Description */}
            <EditInputLine>
              <EditInputGroup>
                <EditInputTitle>Category ID</EditInputTitle>
                <EditSelect
                  name="category_id"
                  value={formData.category_id}
                  onChange={handleInputChange}
                >
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
                <EditSelect name="city_id" value={formData.city_id} onChange={handleInputChange}>
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
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </EditInputGroup>
            </EditInputLine>
          </EditInfoWrapper>
        </Content>
        {/* button for save changes */}
        {/* <MyButtonComponent title={'Send Order'}/> */}
        <EditInfoButton disabled={loading}>
        {loading ? <Spin /> : "Send Order"}
          </EditInfoButton>
      </form>
    );
  };

  export default OrdersComponent;
