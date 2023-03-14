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
  //list
  return (
    <div className=''>
      <div id={`${id}`} className='list-item'>
        <span onClick={handleClickUser}>
          {highlight(name)} {highlight(username)} {highlight(email)}
        </span>
        <DeleteIcon id={id} onDelete={handleDeleteUser} />
      </div>
    </div>
  );
};
export default UserTextField;
