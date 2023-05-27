import { FC, ReactElement, ReactNode } from "react";
import useModalLogic from "src/hooks/Modal/useModalLogic";
import CrossIcon from "src/components/Shared/CrossIcon";
import UserInfo from "./UserInfo";

interface ModalI {
  children: ReactElement;
}
const Modal: FC<ModalI> = ({ children }: ModalI) => {
  const { handleCloseModal, isOpen, visibility, handleBackdrop, ref } =
    useModalLogic();

  return (
    <div
      onClick={handleBackdrop}
      className={`fixed h-screen w-screen flex items-center inset-0 backdrop-blur ${visibility}`}
    >
      <dialog
        open={isOpen}
        ref={ref}
        className='flex flex-col m-auto z-10 px-10 py-12 bg-white'
      >
        <CrossIcon
          onClickCross={handleCloseModal}
          size={15}
          className='place-self-end'
        />
        {children}
      </dialog>
    </div>
  );
};

export default Modal;
