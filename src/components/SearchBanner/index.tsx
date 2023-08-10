import React, { useState } from "react";
import { Input, Select, Tabs } from "antd";
import { CaretDownOutlined, SearchOutlined } from "@ant-design/icons";
import { useLocale, useTranslations } from "next-intl";
import {
  FirstTab,
  IconImage,
  SearchWrapper,
  SecondTab,
  SelectWrapper,
  StyledButton,
  StyledInput,
  StyledSelect,
  StyledTabs,
} from "./Styled.searchBanner";
import useCities from "@/hooks/useCities";
import useCategories from "@/hooks/useCategories";
import { useRouter } from "next/router";

const { TabPane } = Tabs;
const { Option } = Select;

const App = ({
  keyWord,
  setKeyWord,
}: {
  keyWord: string | undefined;
  setKeyWord: (value: string) => void;
}) => {
  const router = useRouter();
  const [technicianSearchText, setTechnicianSearchText] = React.useState("");
  const [hospitalSearchText, setHospitalSearchText] = React.useState("");
  // get the cites from the custom hook
  const { cities } = useCities();
  // get the categories from the custom hook
  const { categories } = useCategories();
  // translation
  const t = useTranslations("searchBanner");
  const locale = useLocale();

  const options = cities?.map(city => {
    const name = locale === "en" ? city.name.en : city.name.ar;
    return {
      value: name,
      label: name,
      id: city.id,
    };
  });

  const categoriesOptions = categories?.map(category => {
    const categoryName = locale === "en" ? category.name.en : category.name.ar;
    return {
      value: categoryName,
      label: categoryName,
      id: category.id,
    };
  });

  const handleTechinicanSearch = () => {
    console.log(`Searching for ${technicianSearchText}`);
  };
  const handleHospitalSearch = () => {
    console.log(`Searching for ${hospitalSearchText}`);
  };
  const [categoryId, setCategoryId] = useState<string | number | readonly string[] | undefined>(
    undefined,
  );
  const [cityId, setCityId] = useState<string | number | readonly string[] | undefined>(undefined);

  const handleHospitalSearchForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // collect form data
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    // map the selected city to the city id
    const category = categories?.find(category => {
      const categoryName = locale === "en" ? category.name.en : category.name.ar;
      return categoryName === data.categorylabel;
    })?.id;
    setCategoryId(category);
    // map the selected city to the city id
    const city = cities?.find(city => {
      const name = locale === "en" ? city.name.en : city.name.ar;
      return name === data.citylabel;
    })?.id;

    setCityId(city);
    const search = {
      category: category,
      city: city,
      searchText: data.searchText,
    };
    console.log("%c search.....", "color: #ff0000;", search);

    // route to the ads page with the search query
    router.push({
      pathname: "/ads",
      // send the search query as a query param
      //searchText, city, category
      query: {
        search: JSON.stringify(search),
      },
    });
  };
  const handleTechnicianSearchForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // collect form data
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    setKeyWord(data.keyword as string);
    // scroll to technicians section after search button click
    document.getElementById("technicians")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <StyledTabs type="card" tabBarGutter={0}>
      {/* ---------------------------------------------Technician------------------------------------------------ */}
      <TabPane tab={t("technician")} key="1">
        {/* 4 items in the same row [search-input,select(city),select category and button search] */}
        <form onSubmit={handleTechnicianSearchForm}>
          {/* search and button  */}
          <SecondTab>
            {/* Search Input */}
            <SearchWrapper>
              <StyledInput
                placeholder={t("technicianSearchPlaceholder")}
                value={technicianSearchText}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setTechnicianSearchText(e.target.value)
                }
                onPressEnter={handleTechinicanSearch}
                // add search icon to prefix
                prefix={<SearchOutlined />}
                name="keyword"
              />
            </SearchWrapper>
            {/* Button Search */}
            <StyledButton type="primary" htmlType="submit">
              {t("search")}
            </StyledButton>
          </SecondTab>
        </form>
      </TabPane>
      {/* ---------------------------------------------Hospital------------------------------------------------ */}
      <TabPane tab={`${t("hospital")}`} key="2">
        <form onSubmit={handleHospitalSearchForm}>
          <FirstTab>
            {/* Search Input */}
            <SearchWrapper>
              <StyledInput
                placeholder={t("hospitalSearchPlaceholder")}
                value={hospitalSearchText}
                // i am not implementing it yet but i will
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setHospitalSearchText(e.target.value)
                }
                onPressEnter={handleHospitalSearch}
                // add search icon to prefix
                prefix={<SearchOutlined />}
                name="searchText"
              />
            </SearchWrapper>
            <SelectWrapper>
              {/* icon antd */}
              {/* outlined icone */}
              <IconImage src="/location.svg" />

              {/* Select City */}
              <StyledSelect
                options={options}
                filterOption={(input, option) =>
                  option?.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                style={{ width: 300 }}
              >
                <Input
                  size="large"
                  placeholder={t("selectCity")}
                  suffix={<CaretDownOutlined />}
                  name="citylabel"
                />
              </StyledSelect>
              <input type="hidden" name="city" value={cityId} />
            </SelectWrapper>
            {/* Select Category */}
            <SelectWrapper>
              <IconImage src="/categoryicon.svg" />
              <StyledSelect
                options={categoriesOptions}
                filterOption={(input, option) =>
                  option?.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                style={{ width: 300 }}
              >
                <Input
                  size="large"
                  placeholder={t("selectCategory")}
                  suffix={<CaretDownOutlined />}
                  name="categorylabel"
                />
              </StyledSelect>
              <input type="hidden" name="category" value={categoryId} />
            </SelectWrapper>
            {/* Button Search */}
            <StyledButton htmlType="submit" type="primary">
              {t("search")}
            </StyledButton>
          </FirstTab>
        </form>
      </TabPane>
    </StyledTabs>
  );
};

export default App;
