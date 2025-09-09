import type { FC } from "react";

type Props = {
  logo: string;
};

export const LogoCompany: FC<Props> = ({ logo }) => {
  return <img src={`${logo}`} className="xxs:w-[160px] xxs:h-[32px]"></img>;
};
