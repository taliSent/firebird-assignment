import Modal from "./components/Modal";
import ResetButton from "./components/ResetButton";
import SearchInput from "./components/SearchInput";
import UsersList from "./components/UsersList";

function App() {
  //TODO: add error message
  return (
    <div className='flex justify-center w-full h-full py-16 bg-slate-100'>
      <div className='max-w-md'>
        <div className='flex justify-between gap-6 mb-6'>
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
