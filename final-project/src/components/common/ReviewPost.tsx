import type { FC } from "react"
import { NextButton } from "../svg/NextButton"
import { BackButton } from "../svg/BackButton"

type Props = {
  icon: string,
  name: string,
  place: string,
}

export const ReviewPost:FC<Props> = ({icon, name, place}) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <img src={`${icon}`} alt='reviewer' className="size-12"></img>
        <div className="flex flex-col">
          <p className="font-bold text-lg/8">{ name }</p>
          <p className="font-normal text-base/7">{place}</p> 
        </div>
      </div>
      <div className="flex gap-2">
        <button className="group p-2 rounded-full bg-white hover:bg-[#232536] transition-colors cursor-pointer">
          <BackButton
            classNameCircle="fill-white group-hover:fill-[#232536] transition-colors"
            classNamePath="fill-[#232536] group-hover:fill-white transition-colors"
          />
        </button>
        <button className="group p-2 rounded-full bg-white hover:bg-[#232536] transition-colors cursor-pointer">
          <NextButton
            classNameCircle="fill-white group-hover:fill-[#232536] transition-colors"
            classNamePath="fill-[#232536] group-hover:fill-white transition-colors" />
        </button>
      </div>
    </div>
  )
}