import { FC } from "react";
import CrossIcon from "../Shared/CrossIcon";

type ModalHeaderT = {
  handleCloseModal: () => void;
  title?: string;
};
const ModalHeader: FC<ModalHeaderT> = ({
  handleCloseModal,
  title,
}: ModalHeaderT) => {
  return (
    <h2 className='mb-6 flex items-center justify-between font-serif text-3xl tracking-normal'>
      {title}
      <CrossIcon onClickCross={handleCloseModal} size={15} />
    </h2>
  );
};

export default ModalHeader;
