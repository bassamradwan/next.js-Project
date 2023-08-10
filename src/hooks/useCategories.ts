import { useAppDispatch, useAppSelector } from "@/hooks/index";
import { useCallback, useEffect } from "react";
import { getAllCategories } from "@/store/features/categories/services";

const useCategories = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(state => state.categories);

  const getAll = useCallback(async () => {
    try {
      await dispatch(getAllCategories());
    } catch (error) {}
  }, [dispatch]);

  useEffect(() => {
    getAll();
  }, [getAll]);

  return { ...categories, getAll };
};

export default useCategories;
