import { FC } from "react";

//add extends
type DeleteIconT = {
  id?: number;
  size?: number;
  onDelete: (e: any) => void;
};

const DeleteIcon: FC<DeleteIconT> = ({
  id,
  onDelete,
  size = 12,
}: DeleteIconT) => {
  return (
    <img
      id={`${id}`}
      src={`/icon-cross.svg`}
      alt='delete user'
      onClick={onDelete}
      width={size}
      height={size}
      className='h-max'
    />
  );
};
export default DeleteIcon;
