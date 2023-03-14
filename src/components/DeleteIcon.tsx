import { FC } from "react";

//add extends
type DeleteIconT = {
  id: number;
  onDelete: (e: any) => void;
};

const DeleteIcon: FC<DeleteIconT> = ({ id, onDelete }: DeleteIconT) => {
  return (
    <img
      id={`${id}`}
      src={`/icon-cross.svg`}
      alt='delete user'
      className='delete-button'
      onClick={onDelete}
      width={12}
      height={12}
      style={{ display: "inline" }}
    />
  );
};
export default DeleteIcon;
