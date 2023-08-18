import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

type ApiResponse = {
  status: boolean;
  code: number;
  message: string;
  data: UserData[];
  pagination: {
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
    from: number;
    to: number;
  };
};

type UserData = {
  id: number;
  name: string;
  email: string | null;
  phone: string | null;
  specialization: string | null;
  title: string;
  rate: number;
  accomplish_tasks: number;
  scale: string;
  average_cost: string;
  city: string;
};

const useTechnicians = (keyword?: string) => {
  const queryKey = ["technicians", keyword];
  const [technicals, setTechnicals] = useState<UserData[]>([]);

  const { data, isLoading, error } = useQuery<ApiResponse>(queryKey, async () => {
    const url = keyword
      ? `${process.env.TECHNICIAN_SEARCH_URL}?keyword=${keyword}`
      : `${process.env.TECHNICIAN_SEARCH_URL}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const responseData = await response.json();
    return responseData;
  });

  useEffect(() => {
    if (data && data?.data?.length > 0) {
      setTechnicals(data.data);
    }
  }, [data]);

  return { data: technicals, isLoading, error };
};

export { useTechnicians };
