import type { FC } from "react"
import { Author } from "./Author"

type Props = {
  img: string,
  title: string,
  text: string,
}

export const BlogPost:FC<Props> = ({img, title, text}) => {
  return (
    <div className="flex flex-col gap-4 p-1">
      <img src={ img }></img>
      <Author date="Aug 23, 2021 " />
      <h4 className="text-3xl/10 font-bold">{ title }</h4>
      <p className="text-[#6D6E76] font-normal text-base/7">{ text }</p>
    </div>
  )
}