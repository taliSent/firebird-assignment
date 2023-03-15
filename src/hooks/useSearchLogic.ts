import { useDispatch } from "react-redux";
import { search } from "../actions/actions";
import { wait } from "../utils/utils";

const useSearchLogic = () => {
  const dispatch = useDispatch();

  const handleChangeSearch = (e: any) => {
    //Debouncing; waiting for user to finish typing
    wait(() => dispatch(search(e.target.value)));
  };

  return {
    handleChangeSearch,
  };
};

export default useSearchLogic;
