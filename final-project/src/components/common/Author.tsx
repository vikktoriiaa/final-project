import type { FC } from "react"

type Props = {
  date: string
}

export const Author:FC<Props> = ({date}) => {
  return (
    <p className="text-[#4C4C4C] text-sm/5 font-medium">By <span className="text-[#592ea9]">John Doe</span>   l   {date}</p>
  )
}