import { FC } from "react";
import useResetLogic from "../hooks/useResetLogic";

//add extends
type ResetButtonT = {};

const ResetButton: FC<ResetButtonT> = ({}: ResetButtonT) => {
  const { handleClearFilter } = useResetLogic();

  return (
    <button
      aria-label='reset filter'
      className='delete-button'
      onClick={handleClearFilter}
    >
      Reset
    </button>
  );
};
export default ResetButton;
