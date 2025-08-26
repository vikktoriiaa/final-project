import { type FC } from "react"
import { Link } from "react-router-dom"
import { Button } from "./common/Button"

type Props = {}

export const Header:FC<Props> = () => {
  return (
    <header className="flex justify-around items-center bg-[#232536] p-4 text-white">
      <img src="../../public/logo.svg" alt="logo"></img>
      <nav className="flex gap-6 cursor-pointer">
        <Link to="/" className=" hover:text-blue-400">Home</Link>
        <Link to="/blog" className=" hover:text-blue-400">Blog</Link>
        <Link to="/about" className=" hover:text-blue-400">About Us</Link>
        <Link to="/contact" className=" hover:text-blue-400">Contact Us</Link>
      </nav>
      <Button text='Subscribe' background="bg-white" color="text-black"/>
    </header>
  )
}