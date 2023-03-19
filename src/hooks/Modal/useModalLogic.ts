import { MouseEvent, RefObject, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "src/state/actions";
import { selectSelectedUserId } from "src/state/selectors";

const useModalLogic = () => {
  const ref = useRef() as RefObject<HTMLDivElement>;
  const selectedUserId = useSelector(selectSelectedUserId);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handleBackdrop = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (!ref.current?.contains(target)) {
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
