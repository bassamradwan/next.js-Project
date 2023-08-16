import { useAppDispatch, useAppSelector } from "@/hooks/index";
import { useCallback, useEffect } from "react";
import { fetchUserOffers, getProfileInfo } from "@/store/features/user/services";
import api from "@/api/axios";
import { Id } from "@/types";

const useUser = () => {
  const user = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  const getInfo = useCallback(async () => {
    try {
      await dispatch(getProfileInfo()).unwrap();
    } catch (e) {}
  }, [dispatch]);

  const getUserById = useCallback(async (id: string) => {
    try {
      return await api.get("/user/show/" + id).then(res => res.data.data);
    } catch (error: any) {
      throw new Error(error);
    }
  }, []);

  const getUserOffers = useCallback(
    async (id: Id) => {
      try {
        await dispatch(fetchUserOffers({ id })).unwrap();
      } catch (error: any) {
        throw new Error(error);
      }
    },
    [dispatch],
  );

  useEffect(() => {
    if (!user?.user?.id) getInfo();
  }, [getInfo, user.user]);

  return { ...user, getInfo, getUserById, getUserOffers };
};

export default useUser;
