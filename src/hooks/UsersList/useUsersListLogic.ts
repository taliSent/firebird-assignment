import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearFilter } from "src/state/actions";
import { selectFilteredAdaptedUsers } from "src/state/selectors";
import { useGetUsersQuery } from "src/api/useGetUsers";

const useUsersListLogic = () => {
  const { data, isLoading, isError, error } = useGetUsersQuery();
  const filteredUsers = useSelector(selectFilteredAdaptedUsers);

  //TODO: fix that
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearFilter(data));
  }, [dispatch, data]);

  if (isError) throw error;

  return {
    filteredUsers,
    isLoading,
  };
};

export default useUsersListLogic;
