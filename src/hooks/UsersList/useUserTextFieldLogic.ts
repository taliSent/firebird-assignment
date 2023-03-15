import { useDispatch, useSelector } from "react-redux";
import { deleteUser, openModal } from "../../state/actions";
import withHighlight from "../../components/UsersList/withHighlight";
import { selectSearchString } from "../../state/selectors";

const useUserTextFieldLogic = () => {
  const searchString = useSelector(selectSearchString);
  const highlight = withHighlight(searchString);
  const dispatch = useDispatch();

  const handleDeleteUser = (e: any) => {
    dispatch(deleteUser(e.target.id));
  };

  const handleClickUser = (e: any) => {
    dispatch(openModal(e.currentTarget.parentNode.id));
  };

  return {
    handleClickUser,
    handleDeleteUser,
    highlight,
  };
};

export default useUserTextFieldLogic;
