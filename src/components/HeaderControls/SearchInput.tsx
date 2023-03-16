import { FC } from "react";
import { IMG_PATH } from "../../constants";
import useSearchLogic from "../../hooks/HeaderControls/useSearchLogic";

const SearchInput: FC = () => {
  const { handleChangeSearch } = useSearchLogic();
  return (
    <div className='flex grow items-center px-4 py-2 bg-white'>
      <img
        src={`${IMG_PATH}/icon-search.svg`}
        alt='search user icon'
        width={17}
        height={17}
        className={`mr-4 text-red-400`}
      />
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
