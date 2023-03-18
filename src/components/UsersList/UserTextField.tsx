import { FC } from "react";
import useUserTextFieldLogic from "@/hooks/UsersList/useUserTextFieldLogic";
import { UserUI } from "@/types/User";
import CrossIcon from "../shared/CrossIcon";
import Paragraph from "../shared/Paragraph";

type UserTextFieldT = {
  user: UserUI;
};

const UserTextField: FC<UserTextFieldT> = ({ user }: UserTextFieldT) => {
  const { id, name, username, email } = user;
  const { highlight, handleClickUser, handleDeleteUser } =
    useUserTextFieldLogic();

  return (
    <li
      id={`${id}`}
      className='flex justify-between items-center shadow-xl px-6 py-4 mb-6 w-auto bg-white'
    >
      <span
        onClick={handleClickUser}
        className='grid grid-cols-1 md:grid-cols-3 gap-4 w-full pr-2.5 self-start'
      >
        <Paragraph title='Name' content={highlight(name)} order />
        <Paragraph title='Username' content={highlight(username)} order />
        <Paragraph title='email' content={highlight(email)} order />
      </span>
      <CrossIcon
        id={id}
        onClickCross={handleDeleteUser}
        className='self-start'
      />
    </li>
  );
};
export default UserTextField;
