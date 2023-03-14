import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearFilter } from "../actions/actions";
import { selectFilteredAdaptedUsers } from "../selectors/selectors";
import { useGetUsersQuery } from "./useGetUsers";

const useUsersListLogic = () => {
  const { data } = useGetUsersQuery();
  const filteredUsers = useSelector(selectFilteredAdaptedUsers);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearFilter(data));
  }, [dispatch, data]);

  return {
    filteredUsers,
  };
};

export default useUsersListLogic;
