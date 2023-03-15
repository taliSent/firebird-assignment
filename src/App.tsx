import Modal from "./components/Modal/Modal";
import ResetButton from "./components/HeaderControls/ResetButton";
import UsersList from "./components/UsersList/UsersList";
import SearchInput from "./components/HeaderControls/SearchInput";

function App() {
  return (
    <div className='flex justify-center w-full h-full py-16 bg-slate-100'>
      <div className='max-w-full'>
        <div className='flex justify-between flex-wrap-reverse gap-6 mb-6'>
          <SearchInput />
          <ResetButton />
        </div>
        <UsersList />
        <Modal />
      </div>
    </div>
  );
}

export default App;
