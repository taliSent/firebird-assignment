import { useSelector } from "react-redux";
import { selectSelectedUserId } from "src/state/selectors";
import { findUserInfoById } from "src/utils/utils";
import { useGetUsersQuery } from "src/api/useGetUsers";

const useUserInfoLogic = () => {
  const selectedUserId = useSelector(selectSelectedUserId);
  const { data } = useGetUsersQuery();
  const info = findUserInfoById(data, selectedUserId);

  return { addressStr: info?.addressStr, companyStr: info?.companyStr };
};
export default useUserInfoLogic;
