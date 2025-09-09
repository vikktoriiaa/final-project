import type { FC } from "react";

type Props = {
  text: string;
  background: string;
  color?: string;
  func?: () => void;
};
export const Button: FC<Props> = ({ text, background, color, func }) => {
  return (
    <button
      className={`xs:py-4 xs:px-8 xxs:py-2 xxs:px-4 ${background} ${color} font-bold md:text-[18px]/6 sm:text-base/5 cursor-pointer hover:bg-[#c49515]`}
      onClick={func}
    >
      {text}
    </button>
  );
};
