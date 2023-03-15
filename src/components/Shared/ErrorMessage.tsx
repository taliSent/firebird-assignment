import { FC } from "react";

type ErrorMessageT = {
  isError: boolean;
  errorText?: string;
};

//TODO: make proper error handling
const ErrorMessage: FC<ErrorMessageT> = ({
  isError,
  errorText,
}: ErrorMessageT) => {
  return (
    <>
      {isError && (
        <div className='w-full bg-red-50 px-8 py-6 text-red-500'>
          <div>Something went wrong</div>
          <div>{errorText}</div>
        </div>
      )}
    </>
  );
};
export default ErrorMessage;
