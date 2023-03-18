import { MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, openModal } from "@/state/actions";
import highlightSearch from "@/components/UsersList/highlightSearch";
import { selectSearchString } from "@/state/selectors";

const useUserTextFieldLogic = () => {
  const searchString = useSelector(selectSearchString);
  const highlight = highlightSearch(searchString);
  const dispatch = useDispatch();

  const handleDeleteUser = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    dispatch(deleteUser(+target.id));
  };

  const handleClickUser = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget as HTMLDivElement;
    const parent = target.parentNode as HTMLElement;
    dispatch(openModal(+parent?.id));
  };

  return {
    handleClickUser,
    handleDeleteUser,
    highlight,
  };
};

export default useUserTextFieldLogic;
