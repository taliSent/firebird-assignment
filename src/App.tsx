import { ErrorBoundary } from "react-error-boundary";
import ResetButton from "./components/HeaderControls/ResetButton";
import SearchInput from "./components/HeaderControls/SearchInput";
import Modal from "./components/Modal/Modal";
import UserInfo from "./components/Modal/UserInfo";
import ErrorMessage from "./components/Shared/ErrorMessage";
import UsersList from "./components/UsersList/UsersList";

function App() {
  return (
    <div className='flex h-full w-full justify-center bg-slate-100 py-16'>
      <div className='max-w-full'>
        <h1 className='mb-10 font-serif text-4xl text-indigo-800'>
          List of users
        </h1>
        <div className='mb-6 flex flex-wrap-reverse justify-between gap-6'>
          <SearchInput />
          <ResetButton />
        </div>
        <ErrorBoundary
          fallback={<ErrorMessage />}
          onError={(error: Error, info: { componentStack: string }) =>
            console.error(error)
          }
        >
          <UsersList />
        </ErrorBoundary>
      </div>
      <Modal header='User Info'>
        <UserInfo />
      </Modal>
    </div>
  );
}

export default App;
