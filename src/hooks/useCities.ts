import { useAppDispatch, useAppSelector } from "@/hooks/index";
import { useCallback, useEffect } from "react";
import { getAllCities } from "@/store/features/cities/services";

const useCities = () => {
  const dispatch = useAppDispatch();
  const cities = useAppSelector(state => state.cities);

  const getAll = useCallback(async () => {
    try {
      await dispatch(getAllCities());
    } catch (error) {}
  }, [dispatch]);

  useEffect(() => {
    getAll();
  }, [getAll]);

  return { ...cities, getAll };
};

export default useCities;
