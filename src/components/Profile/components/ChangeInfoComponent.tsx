import React, { useEffect, useState } from "react";
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
} from "../styles/styled.ChangeInfo";

import { Content, SpinLight } from "@/Styles/styled.general";
import { useForm } from "react-hook-form";
import useCities from "@/hooks/useCities";
import { toast } from "react-toastify";
import { Spin } from "antd";
import useUser from "@/hooks/useUser";
import { useLocale } from "next-intl";

const ChangeInfoComponent = () => {
  const [loading, setLoading] = useState(false);
  const locale = useLocale();

  const { register, setValue, handleSubmit, control } = useForm();
  const { cities } = useCities();
  const { profile, update } = useUser();

  useEffect(() => {
    if (profile) {
      for (let key in profile) {
        if (key === "image") continue;
        if (key === "experiences" && profile?.experiences?.length) {
          setValue("experiences", profile?.experiences[0]?.title);
          continue;
        }
        if (key === "certificates" && profile?.certificates?.length) {
          setValue("certificates", profile?.certificates[0]?.title);
          continue;
        }
        if (key === "city") {
          const city = cities.filter(city => city.name.en === profile.city);
          setValue("city_id", city[0]?.id);
          continue;
        }

        setValue(key, profile[key]);
      }
    }
  }, [cities, profile, setValue]);

  // دالة لمعالجة حدث النقر (onClick) للزر "Save Changes"
  const handleSaveChanges = async (data: any) => {
    const info: { [key: string]: any } = {};
    const infoKeys = [
      "address",
      "certificates",
      "graduation_year",
      "experiences",
      "university",
      "skills",
    ];
    const profileKeys = [
      "name",
      "last_name",
      "phone",
      "city_id",
      "email",
      "hour_rate",
      "specialization",
      "about",
      "age",
    ];
    const formData: { [key: string]: any } = {};

    for (let key in data) {
      if (infoKeys.includes(key)) {
        if (key === "experiences" || key === "certificates") {
          info[key] = [{ title: data[key] }];
          continue;
        }
        info[key] = data[key];
        continue;
      }
      if (!profileKeys.includes(key)) continue;
      formData[key] = data[key];
    }
    delete formData?.id;

    setLoading(true);
    try {
      await update({ ...formData, info });
      toast.success("Profile info updated successfully");
    } catch (error) {
      toast.error("Error updating profile info");
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(handleSaveChanges)}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Content>
        <EditInfoWrapper>
          <HeadingTitle>Change Info</HeadingTitle>

          {/* full Name, Last Name */}
          <EditInputLine>
            <EditInputGroup>
              <EditInputTitle>Full Name</EditInputTitle>
              <EditInput type="text" placeholder="Enter your full name" {...register("name")} />
            </EditInputGroup>
            <EditInputGroup>
              <EditInputTitle>Last Name</EditInputTitle>
              <EditInput
                type="text"
                placeholder="Enter your last name"
                {...register("last_name")}
              />
            </EditInputGroup>
          </EditInputLine>

          {/* Address,phone */}
          <EditInputLine>
            <EditInputGroup>
              <EditInputTitle>Address</EditInputTitle>
              <EditInput type="text" placeholder="Enter Your address" {...register("address")} />
              <EditInputTitle>City</EditInputTitle>
              <EditSelect {...register("city_id")}>
                {cities?.map(city => (
                  <EditOption key={city.id} value={city.id}>
                    {locale === "en" ? city.name.en : city.name.ar}
                  </EditOption>
                ))}
              </EditSelect>
            </EditInputGroup>
            <EditInputGroup>
              <EditInputTitle>Phone</EditInputTitle>
              <EditInput type="text" placeholder="Enter your Phone" {...register("phone")} />
            </EditInputGroup>
          </EditInputLine>

          <EditInputLine>
            <EditInputGroup>
              <EditInputTitle>Specialization</EditInputTitle>
              <EditInput
                type="text"
                placeholder="Enter your full name"
                {...register("specialization")}
              />
            </EditInputGroup>
            <EditInputGroup>
              <EditInputTitle>Your Age</EditInputTitle>
              <EditInput type="text" placeholder="Enter your Age" {...register("age")} />
            </EditInputGroup>
          </EditInputLine>
          {/* Email, hourly price rate */}
          <EditInputLine>
            <EditInputGroup>
              <EditInputTitle>Email</EditInputTitle>
              <EditInput type="text" placeholder="Enter your email" {...register("email")} />
            </EditInputGroup>
            <EditInputGroup>
              <EditInputTitle>Hourly Price Rate</EditInputTitle>
              <EditInput
                type="text"
                placeholder="Enter your hourly price rate"
                {...register("hour_rate")}
              />
            </EditInputGroup>
          </EditInputLine>
          {/* Description */}
          <EditInputLine>
            <EditInputGroup>
              <EditInputTitle>About</EditInputTitle>
              {/* textArea */}
              <EditInput
                as="textarea"
                rows={5}
                placeholder="Enter your description"
                {...register("about")}
              />
            </EditInputGroup>
          </EditInputLine>
        </EditInfoWrapper>
      </Content>
      {/* second card Education and skills */}

      <Content>
        <EditInfoWrapper>
          <HeadingTitle>Change Info</HeadingTitle>
          {/* Certifications */}
          <EditInputLine>
            <EditInputGroup>
              <EditInputTitle>Certificate</EditInputTitle>
              <EditInput
                type="text"
                placeholder="Enter your certifications"
                {...register("certificates")}
              />
            </EditInputGroup>
          </EditInputLine>

          {/* University */}
          <EditInputLine>
            <EditInputGroup>
              <EditInputTitle>University</EditInputTitle>
              <EditInput
                type="text"
                placeholder="Enter your university name"
                {...register("university")}
              />
            </EditInputGroup>

            {/* Year of graduation */}
            <EditInputGroup>
              <EditInputTitle>Year of graduation</EditInputTitle>
              <EditInput
                type="text"
                placeholder="Enter your year of graduation"
                {...register("graduation_year")}
              />
            </EditInputGroup>
          </EditInputLine>

          {/* Previous experience */}

          <EditInputLine>
            <EditInputGroup>
              <EditInputTitle>Experience</EditInputTitle>
              <EditInput
                type="text"
                placeholder="Enter your previous experience"
                {...register("experiences")}
              />
            </EditInputGroup>
          </EditInputLine>

          {/* Skills */}
          <EditInputLine>
            <EditInputGroup>
              <EditInputTitle>Skills</EditInputTitle>
              <EditInput type="text" placeholder="Enter your skills" {...register("skills")} />
            </EditInputGroup>
          </EditInputLine>
        </EditInfoWrapper>
      </Content>

      {/* third card Change password [old password, new password, email] */}
      <Content>
        <EditInfoWrapper>
          <HeadingTitle>Change Password</HeadingTitle>
          {/* old password */}
          <EditInputLine>
            <EditInputGroup>
              <EditInputTitle>Old Password</EditInputTitle>
              <EditInput type="password" placeholder="Enter your old password" />
            </EditInputGroup>
          </EditInputLine>
          {/* new password */}
          <EditInputLine>
            <EditInputGroup>
              <EditInputTitle>New Password</EditInputTitle>
              <EditInput type="password" placeholder="Enter your new password" />
            </EditInputGroup>
            <EditInputGroup>
              {/* email */}
              <EditInputTitle>Email</EditInputTitle>
              <EditInput type="text" placeholder="Enter your email" />
            </EditInputGroup>
          </EditInputLine>
        </EditInfoWrapper>
      </Content>
      {/* button for save changes */}
      <SpinLight>
        <Spin spinning={loading}>
          <EditInfoButton type={"submit"}>Save Changes</EditInfoButton>
        </Spin>
      </SpinLight>
    </form>
  );
};

export default ChangeInfoComponent;
