import { FC, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { selectSelectedUserId } from "../selectors/selectors";
import { findUserInfoById } from "../utils/utils";
import { useGetUsersQuery } from "./useGetUsers";

const useUserInfoLogic = () => {
  const selectedUserId = useSelector(selectSelectedUserId);
  const { data } = useGetUsersQuery();
  const info = findUserInfoById(data, selectedUserId);

  return { addressStr: info?.addressStr, companyStr: info?.companyStr };
};
export default useUserInfoLogic;
