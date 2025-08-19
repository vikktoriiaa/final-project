import type { FC } from "react"

type Props = {
  title: string
}

export const TitleSection:FC<Props> = ({title}) => {
  return (
    <h3 className="text-4xl/12 font-bold">{title}</h3>
  )
}