import { FC } from "react";
import useSearchLogic from "../hooks/useSearchLogic";

const SearchInput: FC = () => {
  const { handleChangeSearch } = useSearchLogic();
  return (
    <input
      aria-label='search'
      type='text'
      placeholder='Search..'
      onChange={handleChangeSearch}
    />
  );
};
export default SearchInput;
