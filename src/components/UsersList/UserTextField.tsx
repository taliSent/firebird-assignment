import { FC } from "react";
import useUserTextFieldLogic from "src/hooks/UsersList/useUserTextFieldLogic";
import { UserUI } from "src/types/User";
import CrossIcon from "../Shared/CrossIcon";
import Paragraph from "../Shared/Paragraph";

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
      className='mb-6 flex w-auto items-center justify-between bg-white px-6 py-4 shadow-xl'
    >
      <span
        onClick={handleClickUser}
        className='grid w-full grid-cols-1 gap-4 self-start pr-2.5 md:grid-cols-3'
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
