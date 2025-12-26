import type { FC } from "react";
import { Author } from "./Author";

type Props = {
  title: string;
  date: string;
  bg?: string;
  hidden?: string;
};

export const Post: FC<Props> = ({ title, date, bg, hidden }) => {
  return (
    <div
      className={`flex flex-col xl:gap-4 xs:gap-2 ${bg} xl:py-8 xl:px-12 md:py-2 md:px-3 ${hidden} p-3 dark:bg-[#2e3040] dark:text-white`}
    >
      <Author date={date} />
      <h4 className="xl:text-2xl/8 md:text-sm/6 font-bold">{title}</h4>
    </div>
  );
};
