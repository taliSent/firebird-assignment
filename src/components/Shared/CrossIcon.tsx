import { IMG_PATH } from "@/constants";
import { FC, MouseEventHandler } from "react";

interface CrossIconT {
  id?: number;
  size?: number;
  className?: string;
  onClickCross: MouseEventHandler<HTMLImageElement>;
}

const CrossIcon: FC<CrossIconT> = ({
  id,
  onClickCross,
  className,
  size = 12,
}: CrossIconT) => {
  return (
    <img
      id={`${id}`}
      src={`${IMG_PATH}/icon-cross.svg`}
      alt='delete user'
      onClick={onClickCross}
      width={size}
      height={size}
      className={`h-max ${className}`}
    />
  );
};
export default CrossIcon;
