import type { FC } from "react";
import { Author } from "./Author";

type Props = {
  img: string;
  title: string;
  text: string;
};

export const BlogPost: FC<Props> = ({ img, title, text }) => {
  return (
    <div className="flex flex-col gap-4 p-1 transform transition-transform duration-300 ease hover:scale-105">
      <img src={img}></img>
      <Author date="Aug 23, 2021 " />
      <h4 className="lg:text-3xl/10 sm:text-xl/8 font-bold">{title}</h4>
      <p className="text-[#6D6E76] font-normal text-base/7 hidden lg:block">
        {text}
      </p>
    </div>
  );
};
