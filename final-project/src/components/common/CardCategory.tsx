import type { FC } from "react"

type Props = {
  background?: string,
  icon: string,
  text: string,
  title: string,
}

export const CardCategory:FC<Props> = ({ background, icon, text, title }) => {
  return (
    <div className={`flex flex-col gap-2 border border-[#96969a] ${background} p-8`}>
      <img src={`${icon}`} alt='icon' className="size-12 bg-[#FBF6EA] p-3"></img>
      <h4 className="font-bold text-2xl/10">{ title }</h4>
      <p className="text-[#6D6E76] font-normal text-base/7">{ text }</p>
    </div>
  )
}