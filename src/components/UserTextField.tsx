import { FC } from "react";
import useUserTextFieldLogic from "../hooks/useUserTextFieldLogic";
import { UserUI } from "../types/User";
import DeleteIcon from "./DeleteIcon";

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
      className='flex justify-between items-center shadow-xl px-6 py-4 max-w-prose mb-6 bg-white'
    >
      <span onClick={handleClickUser} className='pr-2'>
        {highlight(name)} {highlight(username)} {highlight(email)}
      </span>
      <DeleteIcon id={id} onDelete={handleDeleteUser} />
    </li>
  );
};
export default UserTextField;
