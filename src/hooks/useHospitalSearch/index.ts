import { useQuery } from "@tanstack/react-query";

type Technical = {
  id: number;
  name: string;
  email: string;
  phone: string;
  specialization: string;
  title: string;
  rate: number;
  accomplish_tasks: number;
  scale: string;
  average_cost: string;
  city: string;
};

type Hospital = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

type Category = {
  en: string;
  ar: string;
};

type City = {
  en: string;
  ar: string;
};

type AdData = {
  id: number;
  name: string;
  description: string;
  expected_cost: number;
  currency_code: string;
  qualification: string;
  experience_years: string;
  category: Category;
  city: City;
  hospital: Hospital;
  ad: {
    id: number;
    hours_number: number;
    price: number;
    message: string;
    status: string;
    technical: Technical;
  }[];
};

type AdResponse = {
  status: boolean;
  code: number;
  message: string;
  data: AdData[];
};

type AdQueryParams = {
  desc?: string;
  pagination?: boolean;
  limit?: number;
  category?: string;
};

const useAdData = (params?: AdQueryParams) => {
  const queryParams = new URLSearchParams({
    q: params?.desc || "",
    pagination: params?.pagination ? "true" : "false",
    limit: params?.limit?.toString() || "10",
    category: params?.category || "",
  }).toString();

  return useQuery<AdResponse>(["ads", queryParams], async () => {
    const response = await fetch(`${process.env.HOSPITAL_SEARCH_URL}?${queryParams}`);
    const data: AdResponse = await response.json();
    if (!data.status) {
      throw new Error(data.message);
    }
    return data;
  });
};

export default useAdData;
