import { FC } from "react";
import { useGetUsersQuery } from "../hooks/useGetUsers";
import useUserInfoLogic from "../hooks/useUserInfoLogic";
import { findUserInfoById } from "../utils/utils";

const UserInfo: FC = () => {
  const { addressStr, companyStr } = useUserInfoLogic();
  return (
    <div>
      <h4 className='font-semibold text-indigo-800'>Adress:</h4>
      <div className='mb-6'>{addressStr}</div>
      <h4 className='font-semibold text-indigo-800'>Company:</h4>
      <div>{companyStr}</div>
    </div>
  );
};
export default UserInfo;
