import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { search } from "@/state/actions";
import { wait } from "@/utils/utils";

const useSearchLogic = () => {
  const dispatch = useDispatch();

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLButtonElement;
    //Debouncing; waiting for user to finish typing
    wait(() => dispatch(search(target.value)));
  };

  return {
    handleChangeSearch,
  };
};

export default useSearchLogic;
