import { LegacyRef, RefObject, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../state/actions";
import { selectSelectedUserId } from "../../state/selectors";

const useModalLogic = () => {
  const ref = useRef() as RefObject<HTMLDivElement>;
  const selectedUserId = useSelector(selectSelectedUserId);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handleBackdrop = (e: any) => {
    if (!ref.current?.contains(e.target)) {
      handleCloseModal();
    }
  };

  return {
    handleCloseModal,
    handleBackdrop,
    userId: selectedUserId,
    isOpen: !!selectedUserId,
    ref,
  };
};

export default useModalLogic;
