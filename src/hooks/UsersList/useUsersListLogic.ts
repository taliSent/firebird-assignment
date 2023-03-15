import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearFilter } from "../../state/actions";
import { selectFilteredAdaptedUsers } from "../../state/selectors";
import { useGetUsersQuery } from "../../api/useGetUsers";

const useUsersListLogic = () => {
  const { data, isLoading, isSuccess, isError } = useGetUsersQuery();
  const filteredUsers = useSelector(selectFilteredAdaptedUsers);

  //TODO: fix that
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearFilter(data));
  }, [dispatch, data]);

  return {
    filteredUsers,
    isLoading,
    isSuccess,
    isError,
  };
};

export default useUsersListLogic;
