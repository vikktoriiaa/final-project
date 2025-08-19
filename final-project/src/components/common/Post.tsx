import type { FC } from "react";
import { Author } from "./Author";

type Props = {
  title: string,
  date: string, 
  bg?: string,
}

export const Post:FC<Props> = ({title, date, bg}) => {
  return (
    <div className={`flex flex-col gap-4 ${bg} py-8 px-12`}>
      <Author date={date} />
      <h4 className="text-2xl/8 font-bold">{title}</h4>
    </div>
  )
}