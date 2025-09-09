import type { FC } from "react";

type Props = {
  background?: string;
  icon: string;
  text: string;
  title: string;
};

export const CardCategory: FC<Props> = ({ background, icon, text, title }) => {
  return (
    <div
      className={`flex flex-col gap-2 border border-[#96969a] ${background} p-8 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] transform transition-transform duration-300 ease hover:scale-105`}
    >
      <div className="flex flex-col gap-2">
        <img
          src={`${icon}`}
          alt="icon"
          className="lg:size-12 xxs:size-10 bg-[#FBF6EA] p-3"
        ></img>
        <h4 className="font-bold lg:text-2xl/10 xss:text-xl/8">{title}</h4>
      </div>
      <p className="text-[#6D6E76] font-normal text-base/7 lg:line-clamp-none xxs:line-clamp-2">
        {text}
      </p>
    </div>
  );
};
