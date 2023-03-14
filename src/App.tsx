import { PulseLoader } from "react-spinners";
import Modal from "./components/Modal";
import ResetButton from "./components/ResetButton";
import UsersList from "./components/UsersList";
import SearchInput from "./components/useSearchLogic";
import { useGetUsersQuery } from "./hooks/useGetUsers";
import "./App.css";

function App() {
  const { isLoading, isSuccess } = useGetUsersQuery();

  return (
    <div className='App'>
      <div>
        <SearchInput />
        <ResetButton />
      </div>
      <PulseLoader size={15} loading={isLoading} color='black' />
      {isSuccess && <UsersList />}
      <Modal />
    </div>
  );
}

export default App;
