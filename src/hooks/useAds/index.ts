import { useQuery } from "@tanstack/react-query";

type Offer = {
  id: number;
  hours_number: number;
  price: number;
  message: string;
  status: string;
  technical: {
    id: number;
    name: string;
    email: string;
    phone: string;
    specialization: string;
    title: string;
    rate: number;
    accomplish_tasks: number;
    skills: string | string[];
    average_cost: string;
    city: string;
  };
};

type Hospital = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

type Category = {
  [key: string]: string;
};

type City = {
  [key: string]: string;
};

export type Ad = {
  id: number;
  name: string;
  description: string;
  expected_cost: number;
  expected_hours: number;
  currency_code: string;
  qualification: string;
  experience_years: string;
  category: Category;
  city: City;
  hospital: Hospital;
  offer: Offer[];
  offer_count: number;
  image: string;
};

type ApiResponse = {
  status: boolean;
  code: number;
  message: string;
  data: Ad[];
  pagination: {
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
    from: number;
    to: number;
  };
};

interface SearchParams {
  searchText?: string | string[];
  city?: string | string[];
  category?: string | string[];
  priceRange?: string | string[];
  selectedYears?: string | string[];
  orderBy?: string | string[];
}

const useAds = (searchParams: SearchParams) => {
  const { isLoading, error, data } = useQuery<ApiResponse>(["ads", searchParams], async () => {
    const queryParams: Record<string, string> = {};

    if (searchParams.searchText) {
      queryParams.title = Array.isArray(searchParams.searchText)
        ? searchParams.searchText.join(",")
        : searchParams.searchText;
    }
    if (searchParams.city) {
      queryParams.city = Array.isArray(searchParams.city)
        ? searchParams.city.join(",")
        : searchParams.city;
    }
    if (searchParams.category) {
      queryParams.category = Array.isArray(searchParams.category)
        ? searchParams.category.join(",")
        : searchParams.category;
    }
    if (searchParams.priceRange) {
      queryParams.price_range = Array.isArray(searchParams.priceRange)
        ? searchParams.priceRange.join(",")
        : searchParams.priceRange;
    }
    if (searchParams.selectedYears) {
      queryParams.experience_years = Array.isArray(searchParams.selectedYears)
        ? searchParams.selectedYears.join(",")
        : searchParams.selectedYears;
    }
    if (searchParams.orderBy) {
      queryParams.order_by = Array.isArray(searchParams.orderBy)
        ? searchParams.orderBy.join(",")
        : searchParams.orderBy;
    }
    const queryString = new URLSearchParams(queryParams).toString();
    const response = await fetch(
      `${process.env.GET_ADS_URL}?pagination=true&limit=6&${queryString}&status=1`,
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });

  return {
    ads: data?.data,
    pagination: data?.pagination,
    isLoading,
    error,
  };
};
export { useAds };
