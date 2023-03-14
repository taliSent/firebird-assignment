import { useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../actions/actions";
import { selectSelectedUserId } from "../selectors/selectors";
import { User } from "../types/User";
import { useGetUsersQuery } from "./useGetUsers";

const useLogic = () => {
  const { data } = useGetUsersQuery();
  const ref = useRef();
  const selectedUserId = useSelector(selectSelectedUserId);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const userInfo = useMemo(() => {
    console.log("userInfo");
    const user = data?.find((item: User) => item.id == selectedUserId);
    return `Adress: ${user?.address.city} ${user?.address.street} ${user?.address.suite},  ${user?.address.zipcode}; 
    Company: ${user?.company.name}`;
  }, [selectedUserId, data]);

  return {
    handleCloseModal,
    userInfo,
    userId: selectedUserId,
    ref,
    isOpen: !!selectedUserId,
  };
};

export default useLogic;
