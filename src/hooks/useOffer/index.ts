import { useCallback, useEffect } from "react";
import { getAllOffers, OfferQuery, updateOffer } from "@/store/features/offers/services";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Id, OfferStatusCode } from "@/types";

function useOffers(id: Id) {
  const dispatch = useAppDispatch();
  const offers = useAppSelector(state => state.offers);

  const getAll = useCallback(async () => {
    try {
      const query: OfferQuery = {
        id: id,
        limit: 10,
      };
      await dispatch(getAllOffers(query));
    } catch (error) {}
  }, [dispatch, id]);

  const acceptOffer = useCallback(
    async (orderId?: Id, offerId?: Id) => {
      try {
        const data = {
          id: offerId,
          formData: {
            status: OfferStatusCode.ACCEPTED,
            order_id: Number(orderId),
          },
        };

        await dispatch(updateOffer(data)).unwrap();
        await getAll();
      } catch (error: any) {
        throw new Error(error.response.message || "Something went wrong");
      }
    },
    [dispatch, getAll],
  );

  const rejectOffer = useCallback(
    async (orderId?: Id, offerId?: Id) => {
      try {
        const data = {
          id: offerId,
          formData: {
            status: OfferStatusCode.REJECTED,
            order_id: Number(orderId),
          },
        };

        await dispatch(updateOffer(data)).unwrap();
        await getAll();
      } catch (error: any) {
        throw new Error(error.response.message || "Something went wrong");
      }
    },
    [dispatch, getAll],
  );

  const completeOffer = useCallback(
    async (orderId?: Id, offerId?: Id) => {
      try {
        const data = {
          id: offerId,
          formData: {
            status: OfferStatusCode.COMPLETED,
            order_id: Number(orderId),
          },
        };

        await dispatch(updateOffer(data)).unwrap();
        await getAll();
      } catch (error: any) {
        throw new Error(error.response.message || "Something went wrong");
      }
    },
    [dispatch, getAll],
  );

  useEffect(() => {
    if (offers.offers.length === 0) {
      getAll();
    }
  }, [getAll, offers.offers.length]);

  return { ...offers, getAll, acceptOffer, rejectOffer, completeOffer };
}

export default useOffers;
