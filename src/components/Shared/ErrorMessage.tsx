import { FC } from "react";

const ErrorMessage: FC = () => {
  return (
    <div className='w-full bg-red-50 px-8 py-6 text-red-500'>
      <p>Can't fetch data</p>
    </div>
  );
};
export default ErrorMessage;
