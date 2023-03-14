import { useDispatch } from "react-redux";
import { clearFilter } from "../actions/actions";
import { useGetUsersQuery } from "./useGetUsers";

const useResetLogic = () => {
  const { data } = useGetUsersQuery();
  const dispatch = useDispatch();
  const handleClearFilter = () => {
    dispatch(clearFilter(data));
  };

  return {
    handleClearFilter,
  };
};

export default useResetLogic;
