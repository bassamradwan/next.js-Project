import { useState } from "react";
import {
  FilterWrapper,
  IconImage,
  PriceRangeHeadingWrapper,
  SelectWrapper,
  StyledInput,
  StyledSelect
} from "./StyledFilterComponent";
import { Button, Input, Slider, Switch } from "antd";
import useCities from "@/hooks/useCities";
import { useLocale, useTranslations } from "next-intl";
import { CaretDownOutlined, SearchOutlined } from "@ant-design/icons";
import useCategories from "@/hooks/useCategories";
import { useRouter } from "next/router";
import { Ad } from "@/hooks/useAds";

// const citiesOfEgypt = [
//   "Cairo",
//   "Alexandria",
//   "Giza",
//   "Shubra El-Kheima",
//   "Port Said",
//   "Suez",
//   "Luxor",
//   "Mansoura",
//   "El-Mahalla El-Kubra",
//   "Tanta",
//   "Asyut",
//   "Ismailia",
//   "Fayyum",
//   "Zagazig",
//   "Aswan",
//   "Damietta",
//   "Damanhur",
//   "Minya",
//   "Beni Suef",
//   "Hurghada",
//   "Qena",
//   "Sohag",
//   "Shibin El Kom",
//   "Banha",
//   "Arish",
//   "Mallawi",
//   "Kafr El Sheikh",
//   "New Cairo City",
//   "10th of Ramadan City",
//   "Desouk",
//   "Abu Kabir",
//   "Bilbais",
//   "Marsa Matruh",
//   "Idfu",
//   "Mit Ghamr",
//   "Al-Hamidiyya",
//   "Zifta",
//   "Samalut",
//   "Kafr El Dawwar",
//   "Talkha",
//   "Qalyub",
//   "Abnub",
//   "Dahab",
//   "Al-Fashn",
//   "Al-Qanayat",
//   "Al-Qantara",
//   "Al-Qusiyah",
//   "Armant",
//   "Ashmoun",
//   "El Badari",
//   "El Matareya",
//   "El Senbellawein",
//   "El-Tor",
//   "El-Qoseir",
//   "Esna",
//   "Girga",
//   "Hihya",
//   "Ibsheway",
//   "Kafr Saad",
//   "Kharga",
//   "Marsa Alam",
//   "Nag Hammadi",
//   "Rafah",
//   "Ras El Bar",
//   "Rosetta",
//   "Siwa Oasis",
//   "Safaga",
//   "Saint Catherine",
//   "Sharm El Sheikh",
//   "Sheikh Zuweid",
//   "Tamiya",
//   "Zeitoun",
//   "El-Arish",
// ];

const categoriesOfMedicalMaintenanceEquipment = [
  "Anesthesia Machines",
  "Defibrillators",
  "Electrosurgical Units",
  "Infusion Pumps",
  "Patient Monitors",
  "Surgical Lights",
  "Surgical Tables",
  "Ultrasound Machines",
  "Ventilators",
  "X-Ray Machines",
  "Blood Gas Analyzers",
  "Blood Pressure Monitors",
  "CT Scanners",
  "Dental Equipment",
  "Dialysis Machines",
  "ECG Machines",
  "Endoscopes",
  "Fetal Monitors",
  "Holter Monitors",
  "MRI Machines",
  "Ophthalmic Equipment",
  "Pulse Oximeters",
  "Radiography Systems",
  "Spirometers",
  "Stress Test Systems",
  "Syringe Pumps",
  "Thermometers",
  "Ultrasonic Cleaners",
  "Vital Signs Monitors",
];

const jobTypes = ["Full Time", "Part Time", "Contract", "Freelance", "Internship", "Temporary"];
const AdDate = ["last 24 hours", "last 3 days", "last 7 days", "last 14 days"];

const ExperienceYears = [
  "1 year",
  "2 years",
  "3 years",
  "4 years",
  "5 years",
  "6 years",
  "7 years",
  "8 years",
  "9 years",
  "10 years",
];

interface FilterComponentProps {
  isMobileFilter?: boolean;
  ads?: Ad[];
  pagination?: any;
}

const FilterComponent = (props: FilterComponentProps) => {
  const { Search } = Input;
  const [priceRange, setPriceRange] = useState(500);
  const [Datevalue, setDateValue] = useState("last 24 hours");
  const [showMore, setShowMore] = useState(false);
  const [selectedYears, setSelectedYears] = useState<(number | string)[]>([]);
  const router = useRouter();
  const locale = useLocale();

  const handleShowMore = () => {
    setShowMore(true);
  };

  const handlePriceRangeChange = (value: number) => {
    setPriceRange(value);
  };
  const onChangeDate = (e: any) => {
    setDateValue(e.target.value);
  };
  const AdsSearchForm = (e: any) => {
    e.preventDefault();
    // collect the data from the form
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const city = cities?.find(city => {
      const name = locale === "en" ? city.name.en : city.name.ar;
      return name === data.citylabel;
    })?.id;
    setCityId(city);
    // map the selected city to the city id
    const category = categories?.find(category => {
      const name = locale === "en" ? category.name.en : category.name.ar;
      return name === data.categorylabel;
    })?.id;
    setCategoryId(category);
    // get the []numbers from the years object with true value get only the integers from the keys
    const selectedYears = Object.entries(data)
      .filter(([key, value]) => key.includes("year") && value === "true")
      .map(([key, value]) => parseInt(key.split("-")[1]));

    const search = {
      searchText: data.searchText,
      city: city,
      priceRange: priceRange,
      category: category,
      selectedYears: selectedYears,
    };
    // push the search params to the url
    router.push({
      pathname: "/ads",
      query: { search: JSON.stringify(search) },
    });
  };

  const [hospitalSearchText, setHospitalSearchText] = useState("");
  const handleHospitalSearch = () => {
  };

  const [cityId, setCityId] = useState<string | number | readonly string[] | undefined>(undefined);
  const [categoryId, setCategoryId] = useState<string | number | readonly string[] | undefined>(
    undefined,
  );

  // get the cities from the the custom hook
  const { cities } = useCities();
  // get the categories from the custom hook
  const { categories } = useCategories();
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

  const handleYearChange = (year: number | string, checked: boolean) => {
    const newSelectedYears = checked
      ? [...selectedYears, year]
      : selectedYears.filter(y => y !== year);
    setSelectedYears(newSelectedYears);
  };

  const t = useTranslations("searchBanner");

  return (
    <FilterWrapper isMobileFilter={!!props.isMobileFilter} onSubmit={AdsSearchForm}>
      {/* antd search with label above it  */}
      <label>Search</label>
      <StyledInput
        placeholder={t("hospitalSearchPlaceholder")}
        value={hospitalSearchText}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setHospitalSearchText(e.target.value)}
        onPressEnter={handleHospitalSearch}
        // add search icon to prefix
        prefix={<SearchOutlined />}
        name="searchText"
      />
      <label>City</label>
      {/* antd select with label above it  */}
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
      {/* price Rang antd */}
      <PriceRangeHeadingWrapper>
        <label>Price Range</label>
        <span>{priceRange}</span>
      </PriceRangeHeadingWrapper>
      <Slider
        min={0}
        max={1000}
        defaultValue={50}
        value={priceRange}
        onChange={handlePriceRangeChange}
      />
      {/* category of medical maintance equipments select with search*/}
      <label>Category</label>
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

      {/* Experience years */}
      <label>Experience Years</label>
      {/* group of antd switchs */}
      {ExperienceYears.slice(0, showMore ? ExperienceYears.length : 5).map(year => (
        <div key={year}>
          <Switch
            onChange={checked => handleYearChange(year, checked)}
            checked={selectedYears.includes(year)}
          />
          <input
            type="hidden"
            name={`year-${year}`}
            value={selectedYears.includes(year) ? "true" : "false"}
          />
          {year}
        </div>
      ))}
      {/* antd button to show more switches */}
      {!showMore && (
        <Button type="link" onClick={handleShowMore}>
          Show More
        </Button>
      )}

      {/* show all results btn */}
      <Button type="primary" block htmlType="submit">
        Show All Results
      </Button>
    </FilterWrapper>
  );
};
export default FilterComponent;
