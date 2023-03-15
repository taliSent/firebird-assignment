import { FC, ReactNode } from "react";

type ParagraphT = {
  title: string;
  content: ReactNode | string;
  order?: boolean;
};

const Paragraph: FC<ParagraphT> = ({ title, content, order }: ParagraphT) => {
  return (
    <>
      <h4
        className={`font-semibold text-indigo-800 ${order ? "md:order-1" : ""}`}
      >
        {`${title}:`}
      </h4>
      <div className={`mb-6 ${order ? "md:order-2" : ""}`}>{content}</div>
    </>
  );
};

export default Paragraph;
