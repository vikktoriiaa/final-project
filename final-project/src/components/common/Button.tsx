import type { FC } from "react"

type Props = {
  text: string
  background: string
}
export const Button:FC<Props> = ({text, background}) => {
  return (
    <button className={`py-4 px-8 ${background} text-black font-bold cursor-pointer`}>{text}</button>
  )
}