import { useQuery } from "@tanstack/react-query";
import { Ad, Id } from "@/types";
import { useCallback } from "react";
import { setAd } from "@/store/features/order";
import { useAppDispatch } from "@/hooks";

interface ApiResponse {
  status: boolean;
  code: number;
  message: string;
  data: Ad;
}

const useAd = (id: number | string | string[] | undefined) => {
  const dispatch = useAppDispatch();
  const { isLoading, error, data } = useQuery<ApiResponse>(["ad", id], () =>
    fetch(`${process.env.GET_AD_DETAILS_URL}/${id}`).then(res => res.json()),
  );

  const fetchAd = useCallback(async (id: Id) => {
    const response = await fetch(`${process.env.GET_AD_DETAILS_URL}/${id}`).then(res => res.json());

    setAd(response.data);
  }, []);

  // @ts-ignore
  dispatch(setAd(data?.data));


  return {
    isLoading,
    error,
    ad: data?.data,
    fetchAd,
  };
};

export default useAd;
