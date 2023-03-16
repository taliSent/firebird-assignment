import { FC } from "react";
import { IMG_PATH } from "../../constants";

interface DeleteIconT {
  id?: number;
  size?: number;
  className?: string;
  onDelete: (e: any) => void;
}

const DeleteIcon: FC<DeleteIconT> = ({
  id,
  onDelete,
  className,
  size = 12,
}: DeleteIconT) => {
  return (
    <img
      id={`${id}`}
      src={`${IMG_PATH}/icon-cross.svg`}
      alt='delete user'
      onClick={onDelete}
      width={size}
      height={size}
      className={`h-max ${className}`}
    />
  );
};
export default DeleteIcon;
