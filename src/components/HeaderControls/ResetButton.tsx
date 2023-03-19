import { ButtonHTMLAttributes, FC } from "react";
import useResetLogic from "src/hooks/HeaderControls/useResetLogic";

const ResetButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  ...props
}) => {
  const { handleClearFilter } = useResetLogic();

  return (
    <button
      aria-label='reset filter'
      onClick={handleClearFilter}
      className='bg-indigo-700 px-6 py-4 text-white tracking-wider hover:bg-indigo-600'
      {...props}
    >
      Reset
    </button>
  );
};
export default ResetButton;
