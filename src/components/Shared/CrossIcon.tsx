import { FC, MouseEventHandler } from "react";
import iconCross from "src/img/icon-cross.svg";

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
      src={iconCross}
      alt='delete user'
      onClick={onClickCross}
      width={size}
      height={size}
      className={`h-max ${className}`}
    />
  );
};
export default CrossIcon;
