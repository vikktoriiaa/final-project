import type { FC } from "react";

type Props = {
  date: string;
};

export const Author: FC<Props> = ({ date }) => {
  return (
    <p className="text-[#6D6E76] xl:text-sm/5 xs:text-[10px]/4 font-medium">
      By <span className="text-[#592ea9]">John Doe</span> l {date}
    </p>
  );
};
