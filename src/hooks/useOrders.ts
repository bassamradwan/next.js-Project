import { useAppDispatch, useAppSelector } from "@/hooks/index";
import { useCallback, useEffect } from "react";
import { addOrder, deleteOrder, getAllOrders } from "@/store/features/orders/services";
import { useRouter } from "next/router";
import { AddOrderDataType, Id } from "@/types";

const useOrders = () => {
  const dispatch = useAppDispatch();
  const orders = useAppSelector(state => state.orders);
  const { id } = useRouter().query;

  const getAll = useCallback(async () => {
    try {
      await dispatch(getAllOrders(id as Id));
    } catch (error) {}
  }, [dispatch, id]);

  const remove = useCallback(
    async (orderId: Id) => {
      try {
        await dispatch(deleteOrder(orderId)).unwrap();
        await getAll();
      } catch (error) {
        throw new Error("Error deleting order");
      }
    },
    [dispatch, getAll],
  );

  const add = useCallback( async (formData: AddOrderDataType) => {
      try {
        await dispatch(addOrder(formData)).unwrap();
        await getAll();
      } catch (error) {
        throw new Error("Error adding order");
      }
    },
    [dispatch, getAll],
  );

  useEffect(() => {
    getAll();
  }, [getAll]);

  return { ...orders, getAll, remove, add };
};
export default useOrders;
