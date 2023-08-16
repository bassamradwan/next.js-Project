import { useAppDispatch, useAppSelector } from "@/hooks/index";
import { useCallback, useEffect } from "react";
import { fetchUserOffers, getProfileInfo, updateProfileInfo } from "@/store/features/user/services";
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

  const getUserById = useCallback(async (id: Id) => {
    try {
      const response = await api.get("/user/show/" + id);
      return response.data.data;
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

  const update = useCallback(
    async (data: any) => {
      try {
        await dispatch(updateProfileInfo(data)).unwrap();
        await getInfo();
      } catch (e: any) {
        throw new Error(e);
      }
    },
    [dispatch, getInfo],
  );

  useEffect(() => {
    if (!user?.user?.id) getInfo();
  }, [getInfo, user.user]);

  return { ...user, getInfo, getUserById, getUserOffers, update };
};

export default useUser;
