import Modal from "./components/Modal/Modal";
import ResetButton from "./components/HeaderControls/ResetButton";
import UsersList from "./components/UsersList/UsersList";
import SearchInput from "./components/HeaderControls/SearchInput";

function App() {
  return (
    <div className='flex justify-center w-full h-full py-16 bg-slate-100'>
      <div className='max-w-full'>
        <h1 className='font-serif text-4xl text-indigo-800 mb-10'>
          List of users
        </h1>
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
