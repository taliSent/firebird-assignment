import { FC, ReactNode } from "react";

type ParagraphT = {
  title: string;
  content: ReactNode | string;
  order?: boolean;
};

const Paragraph: FC<ParagraphT> = ({ title, content, order }: ParagraphT) => {
  const orderStyle = (num: number) => `${order ? `md:order-${num}` : ""}`;
  return (
    <>
      <h4 className={`font-semibold text-indigo-800 ${orderStyle(1)}`}>
        {`${title}:`}
      </h4>
      <div className={`mb-6 ${orderStyle(2)}`}>{content}</div>
    </>
  );
};

export default Paragraph;
