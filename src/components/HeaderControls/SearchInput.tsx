import { FC, InputHTMLAttributes } from "react";
import useSearchLogic from "src/hooks/HeaderControls/useSearchLogic";
import iconSearch from "src/img/icon-search.svg";

const SearchInput: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  ...props
}) => {
  const { handleChangeSearch } = useSearchLogic();
  return (
    <div className='flex grow items-center px-4 py-2 bg-white'>
      <img
        src={iconSearch}
        alt='search user icon'
        width={17}
        height={17}
        className={`mr-4`}
      />
      <input
        aria-label='search input'
        type='text'
        placeholder='Search..'
        className='outline-transparent grow h-max'
        onChange={handleChangeSearch}
        {...props}
      />
    </div>
  );
};
export default SearchInput;
