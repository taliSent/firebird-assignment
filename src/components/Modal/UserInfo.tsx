import { FC } from "react";
import useUserInfoLogic from "../../hooks/Modal/useUserInfoLogic";
import Paragraph from "../Shared/Paragraph";

const UserInfo: FC = () => {
  const { addressStr, companyStr } = useUserInfoLogic();
  return (
    <>
      <Paragraph title='Adress' content={addressStr} />
      <Paragraph title='Company' content={companyStr} />
    </>
  );
};
export default UserInfo;
