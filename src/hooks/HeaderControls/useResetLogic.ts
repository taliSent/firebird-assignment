import { useDispatch } from "react-redux";
import { clearFilter } from "src/state/actions";
import { useGetUsersQuery } from "src/api/useGetUsers";

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
