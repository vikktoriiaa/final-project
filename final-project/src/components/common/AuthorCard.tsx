import type { FC } from "react"

type Props = {
  background: string,
  icon: string,
  text: string,
  title: string,
  facebook: string,
  twitter: string,
  instagram: string,
  linkedin: string
}

export const AuthorCard:FC<Props> = ({background, icon, text, title, facebook, twitter, instagram, linkedin}) => {
  return (
     <div className={`flex flex-col gap-2 ${ background } p-8 items-center justify-center`}>
      <img src={`${icon}`} alt='icon' className="size-32 p-3"></img>
      <h4 className="font-bold text-2xl/10 text-[#232536]">{ title }</h4>
      <p className="text-[#6D6E76] font-normal text-sm/5">{ text }</p>
      <div className="flex gap-4">
        <button className="cursor-pointer">
          <img src={`${facebook}`} alt='facebook' className="size-4"></img>
        </button>
        <button className="cursor-pointer">
          <img src={`${twitter}`} alt='twitter' className="size-4"></img>
        </button>
        <button className="cursor-pointer">
          <img src={`${instagram}`} alt='instagram' className="size-4"></img>
        </button>
        <button className="cursor-pointer">
          <img src={`${linkedin}`} alt='linkedin' className="size-4"></img>
        </button>
      </div>
    </div>
  )
}