import type { FC } from "react"

type Props = {
  logo: string,
}

export const LogoCompany:FC<Props> = ({logo}) => {
  return (
    <img src={`${logo}`}></img>
  )
}