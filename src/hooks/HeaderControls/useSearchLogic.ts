import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { search } from "@/state/actions";

const useSearchLogic = () => {
  const dispatch = useDispatch();

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLButtonElement;
    dispatch(search(target.value));
  };

  return {
    handleChangeSearch,
  };
};

export default useSearchLogic;
