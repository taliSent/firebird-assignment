import { IMG_PATH } from "@/constants";
import { FC, MouseEventHandler } from "react";

interface CrossIconT {
  id?: number;
  size?: number;
  className?: string;
  onClickCrossIcon: MouseEventHandler<HTMLImageElement>;
}

const CrossIcon: FC<CrossIconT> = ({
  id,
  onClickCrossIcon,
  className,
  size = 12,
}: CrossIconT) => {
  return (
    <img
      id={`${id}`}
      src={`${IMG_PATH}/icon-cross.svg`}
      alt='delete user'
      onClick={onClickCrossIcon}
      width={size}
      height={size}
      className={`h-max ${className}`}
    />
  );
};
export default CrossIcon;
