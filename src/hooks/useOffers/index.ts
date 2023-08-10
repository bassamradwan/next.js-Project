import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { useCallback, useEffect } from "react";
import { getAllOffers, OfferQuery } from "@/store/features/offers/services";
import { useAppDispatch, useAppSelector } from "@/hooks";

function useOffers(id: number) {
  const dispatch = useAppDispatch();
  const offers = useAppSelector((state) => state.offers);

  const getAll = useCallback(async () => {
    try {
      const query: OfferQuery = {
        id: id,
        limit: 10,
      };
      await dispatch(getAllOffers(query));
    } catch (error) {}
  }, [dispatch, id]);

  useEffect(() => {
    getAll();
  }, [getAll]);

  return { ...offers, getAll };
}

export default useOffers;
