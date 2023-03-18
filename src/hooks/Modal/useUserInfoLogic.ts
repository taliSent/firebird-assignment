import { useSelector } from "react-redux";
import { selectSelectedUserId } from "@/state/selectors";
import { findUserInfoById } from "@/utils/utils";
import { useGetUsersQuery } from "@/api/useGetUsers";

const useUserInfoLogic = () => {
  const selectedUserId = useSelector(selectSelectedUserId);
  const { data } = useGetUsersQuery();
  const info = findUserInfoById(data, selectedUserId);

  return { addressStr: info?.addressStr, companyStr: info?.companyStr };
};
export default useUserInfoLogic;
