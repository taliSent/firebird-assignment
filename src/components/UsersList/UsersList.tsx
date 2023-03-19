import { FC } from "react";
import { ClipLoader } from "react-spinners";
import useUsersListLogic from "src/hooks/UsersList/useUsersListLogic";
import { UserUI } from "src/types/User";
import ErrorMessage from "../shared/ErrorMessage";
import UserTextField from "./UserTextField";

const UsersList: FC = () => {
  const { filteredUsers, isLoading, isSuccess, isError } = useUsersListLogic();

  return (
    <>
      <div className='flex justify-center'>
        <ClipLoader size={15} loading={isLoading} color='#312e81' />
      </div>
      <ErrorMessage isError={isError} />
      {isSuccess && (
        <ul>
          {filteredUsers.map((user: UserUI) => (
            <UserTextField user={user} key={user.id} />
          ))}
        </ul>
      )}
    </>
  );
};
export default UsersList;
