import type { FC } from "react"

type Props = {
  text: string
  background: string
  color?: string
}
export const Button:FC<Props> = ({text, background, color}) => {
  return (
    <button className={`py-4 px-8 ${background} ${color} font-bold cursor-pointer max-w-max`}>{text}</button>
  )
}