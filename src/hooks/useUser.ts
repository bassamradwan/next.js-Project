import { useAppDispatch, useAppSelector } from "@/hooks/index";
import { useCallback, useEffect, useMemo } from "react";
import { getProfileInfo } from "@/store/features/user/services";
import api from "@/api/axios";


const useUser = () => {
  const user = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  const getInfo = useCallback(async () => {
    try {
      await dispatch(getProfileInfo());
    } catch (e) {}
  }, [dispatch]);

  const getUserById = useCallback(async (id: string) => {
    try {
      return await api.get("/user/show/" + id).then(res => res.data.data);

    } catch (error: any) {
      throw new Error(error);
    }
  }, []);

  useEffect(() => {
    getInfo();
  }, [getInfo]);

  return { ...user, getInfo, getUserById };
};

export default useUser;
