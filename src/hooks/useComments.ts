import { useAppDispatch, useAppSelector } from "@/hooks/index";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { Id } from "@/types";
import { addComments, getAllComments } from "@/store/features/comments/services";

const useComments = () => {
  const dispatch = useAppDispatch();
  const comments = useAppSelector(state => state.comments);
  const { id } = useRouter().query;

  const getAll = useCallback(async () => {
    try {
      await dispatch(getAllComments(id as Id)).unwrap();
    } catch (error) {}
  }, [dispatch, id]);

  const add = useCallback(
    async (formData: any) => {
      try {
        await dispatch(addComments(formData)).unwrap();
        await getAll();
      } catch (error) {
        throw new Error("Error adding comment");
      }
    },
    [dispatch, getAll],
  );

  useEffect(() => {
    if (comments.comments.length === 0) {
      getAll();
    }
  }, [getAll, comments.comments.length]);

  return { ...comments, getAll, add };
};
export default useComments;
