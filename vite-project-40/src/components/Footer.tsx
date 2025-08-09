import { THEME } from "../constants/theme"

type Props = {
  theme: string
}
export const Footer = ({theme}: Props) => {
  return (
   <footer className={`w-full flex justify-between border-t-gray-300 border-t-solid border-t-1 p-5 ${theme === THEME.DARK ? 'text-white bg-[#313037]' : 'text-black bg-[#f3f3f3]'}`}>
    <span className="copyright text-gray-400">@{new Date().getFullYear()} copyright </span>
    <span className="rights text text-gray-400">All rights reserved</span>
   </footer>
  )
}