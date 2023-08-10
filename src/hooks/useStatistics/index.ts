import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { useCallback, useEffect, useState } from "react";
// import { getStatistics } from "@/store/features/user/services";

function useStatistics() {
  // const dispatch = useDispatch();
  // const statistics = useSelector((state: RootState) => state.user.statistics);
  // const [loading, setLoading] = useState(false);

  // const getAll = useCallback(async () => {
  //   try {
  //     setLoading(true);
  //     await dispatch<any>(getStatistics());
  //     setLoading(false);
  //   } catch (error) {}
  // }, [dispatch]);

  // useEffect(() => {
  //   getAll();
  // }, [getAll]);

  // return { statistics, loading, getAll };
}

export default useStatistics;
