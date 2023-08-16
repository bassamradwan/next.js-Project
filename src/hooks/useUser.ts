import { useAppDispatch, useAppSelector } from "@/hooks/index";
import { useCallback, useEffect } from "react";
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
    if (!user?.user?.id) getInfo();
  }, [getInfo, user.user]);

  return { ...user, getInfo, getUserById };
};

export default useUser;
