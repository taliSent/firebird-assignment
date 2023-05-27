import { FC, ReactElement, ReactNode } from "react";
import useModalLogic from "src/hooks/Modal/useModalLogic";
import CrossIcon from "src/components/Shared/CrossIcon";
import UserInfo from "./UserInfo";
import ModalHeader from "./ModalHeader";

interface ModalI {
  header?: string;
  children: ReactElement;
}
const Modal: FC<ModalI> = ({ header, children }: ModalI) => {
  const { handleCloseModal, isOpen, visibility, handleBackdrop, ref } =
    useModalLogic();

  return (
    <div
      onClick={handleBackdrop}
      className={`fixed inset-0 flex h-screen w-screen items-center backdrop-blur ${visibility}`}
    >
      <dialog
        open={isOpen}
        ref={ref}
        className='z-10 m-auto flex flex-col bg-white px-10 py-12'
      >
        <ModalHeader title={header} handleCloseModal={handleCloseModal} />
        <div>{children}</div>
      </dialog>
    </div>
  );
};

export default Modal;
