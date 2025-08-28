import type { FC } from "react"

type Props = {
  text: string,
  number: string,
}

export const Quantity:FC<Props> = ({text, number}) => {
  return (
    <div className="flex flex-col">
      <p className="font-bold text-6xl/16">{number}</p>
      <p className="text-base/7 font-normal">{text}</p>
    </div>
   
  )
}