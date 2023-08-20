import { useAppDispatch, useAppSelector } from "@/hooks/index";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { Id } from "@/types";
import { addComments, getAllComments } from "@/store/features/comments/services";
import { addRate, getAllRate, getRate, getRateStatic } from "@/store/features/rete/services";

const useRates = () => {
  const dispatch = useAppDispatch();
  const rates = useAppSelector(state => state.rates);
  const { id } = useRouter().query;

  const getAll = useCallback(async () => {
    try {
      await dispatch(getAllRate(rates)).unwrap();
    } catch (error) {}
  }, [dispatch]);

  const gitRate =useCallback(async ()=>{
    try {
      await dispatch(getRate(id as Id)).unwrap();
    } catch (error) {}
  },[dispatch, id]);

  const getRateStic=useCallback(async ()=>{
    try {
      await dispatch(getRateStatic(id as Id)).unwrap();
    }catch(error) {}
  },[dispatch, id]);

  const add = useCallback(
    async (formData: any) => {
      try {
        await dispatch(addRate(formData)).unwrap();
        await getAll();
      } catch (error) {
        throw new Error("Error adding comment");
      }
    },
    [dispatch, getAll],
  );

  useEffect(() => {
    if (rates.rates.length === 0) {
      getAll();
    }
  }, [getAll, rates.rates.length]);

  return { ...rates, getAll, add,gitRate };
};
export default useRates;
