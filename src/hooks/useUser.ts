import { useAppDispatch, useAppSelector } from "@/hooks/index";
import { useCallback, useEffect } from "react";
import { getProfileInfo } from "@/store/features/user/services";

const useUser = () => {
  const user = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  const getInfo = useCallback(async () => {
    try {
      await dispatch(getProfileInfo());
    } catch (e) {}
  }, [dispatch]);

  useEffect(() => {
    getInfo();
  }, [getInfo]);

  return { ...user, getInfo };
};

export default useUser;
