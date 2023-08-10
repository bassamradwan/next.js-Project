import { useQuery } from "@tanstack/react-query";

interface Offer {
  id: number;
  hours_number: number;
  price: number;
  message: string;
  status: string;
  technical: {
    id: number;
    name: string;
    last_name: string | null;
    email: string;
    phone: string;
    specialization: string | null;
    type: string;
    rate: number;
    accomplish_tasks: number;
    about: string | null;
    image: string;
    average_cost: number | null;
    skills: string[] | null;
    certificates: string[] | null;
    university: string | null;
    graduation_year: number | null;
    experiences: string[] | null;
    address: string | null;
    city: string;
  };
}

export interface Ad {
  id: number;
  name: string;
  description: string;
  expected_cost: number;
  expected_hours: number;
  currency_code: string;
  qualification: string;
  experience_years: number;
  category: {
    [key: string]: string;
  };
  city: {
    [key: string]: string;
  };
  hospital: {
    id: number;
    name: string;
    last_name: string | null;
    email: string;
    phone: string;
    specialization: string | null;
    type: string;
    rate: number;
    accomplish_tasks: number;
    about: string | null;
    image: string;
    average_cost: number | null;
    skills: string[] | null;
    certificates: string[] | null;
    university: string | null;
    graduation_year: number | null;
    experiences: string[] | null;
    address: string | null;
    city: string;
  };
  offer: Offer[];
  offer_count: number;
  image: string;
}

interface ApiResponse {
  status: boolean;
  code: number;
  message: string;
  data: Ad;
}

const useAd = (id: number | string | string[] | undefined) => {
  const { isLoading, error, data } = useQuery<ApiResponse>(["ad", id], () =>
    fetch(`${process.env.GET_AD_DETAILS_URL}/${id}`).then(res => res.json()),
  );

  return {
    isLoading,
    error,
    ad: data?.data,
  };
};

export default useAd;
