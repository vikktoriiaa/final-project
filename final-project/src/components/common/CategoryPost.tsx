import type { FC } from "react";

type Props = {
  img: string;
  category: string;
  title: string;
  text: string;
};

export const CategoryPost: FC<Props> = ({ img, category, title, text }) => {
  return (
    <div className="flex lg:flex-row xxs:flex-col gap-8 justify-center items-center">
      <img src={img}></img>
      <div className="flex flex-col gap-4 sm:px-12 xxs:px-3">
        <p className="uppercase text-base/5 font-semibold tracking-[3px] text-purple">
          {category}
        </p>
        <h4 className="xl:text-4xl/10 sm:text-2xl/8 font-bold">{title}</h4>
        <p className="text-medium-gray font-normal text-base/7 sm:line-clamp-none xxs:line-clamp-3">
          {text}
        </p>
      </div>
    </div>
  );
};
