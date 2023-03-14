import { FC, useRef } from "react";
import useModalLogic from "../hooks/useModalLogic";

const Modal: FC = () => {
  const { handleCloseModal, userInfo, isOpen, ref } = useModalLogic();

  return (
    <div>
      <div
        className='modal'
        style={{ visibility: isOpen ? "visible" : "hidden" }}
        ref={ref?.current}
      >
        <div>
          <h2>
            User info <span onClick={handleCloseModal}>x</span>
          </h2>
          <p>{userInfo}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
