import { FC } from "react";
import UserInfo from "./UserInfo";

const ModalContent: FC = () => {
  return (
    <>
      <h2 className='flex justify-between items-center text-3xl font-serif tracking-normal mb-6'>
        User info
      </h2>
      <UserInfo />
    </>
  );
};

export default ModalContent;
