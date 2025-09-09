import type { FC } from "react";

type Props = {
  title: string;
};

export const TitleSection: FC<Props> = ({ title }) => {
  return (
    <h3 className="xl:text-4xl/12 lg:text-3xl/10 md:text-2xl/8 xxs:text-2xl/8 font-bold">
      {title}
    </h3>
  );
};
