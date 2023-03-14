import { FC } from "react";
import useUsersListLogic from "../hooks/useUsersListLogic";
import { UserUI } from "../types/User";
import UserTextField from "./UserTextField";

const UsersList: FC = () => {
  const { filteredUsers } = useUsersListLogic();

  return (
    <>
      {filteredUsers.map((user: UserUI) => (
        <UserTextField user={user} key={user.id} />
      ))}
    </>
  );
};
export default UsersList;
