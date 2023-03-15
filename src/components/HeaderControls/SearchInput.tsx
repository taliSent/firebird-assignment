import { FC } from "react";
import useSearchLogic from "../../hooks/HeaderControls/useSearchLogic";

const SearchInput: FC = () => {
  const { handleChangeSearch } = useSearchLogic();
  return (
    <div className='flex grow items-center px-4 py-2 bg-white'>
      <input
        aria-label='search input'
        type='text'
        placeholder='Search..'
        className='outline-none grow h-max'
        onChange={handleChangeSearch}
      />
    </div>
  );
};
export default SearchInput;
