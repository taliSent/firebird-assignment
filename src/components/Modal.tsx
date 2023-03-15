import { FC } from "react";
import useModalLogic from "../hooks/useModalLogic";
import DeleteIcon from "./DeleteIcon";
import UserInfo from "./UserInfo";

const Modal: FC = () => {
  const { handleCloseModal, isOpen, handleBackdrop, ref } = useModalLogic();

  return (
    <div
      onClick={handleBackdrop}
      className={`fixed h-screen w-screen flex justify-center items-center inset-0 backdrop-blur ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      <div ref={ref} className='flex flex-col z-10 px-10 py-12 bg-white'>
        <h2 className='flex justify-between items-center text-3xl font-serif tracking-normal mb-6'>
          User info <DeleteIcon onDelete={handleCloseModal} size={15} />
        </h2>
        <UserInfo />
      </div>
    </div>
  );
};

export default Modal;
