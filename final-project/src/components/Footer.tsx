import type { FC } from "react"
import { Link } from "react-router-dom"
import { Button } from "./common/Button"

export const Footer: FC = () => {
  return (
    <footer className="bg-[#232536] py-15 px-20 flex flex-col gap-11">
      <div className="flex justify-between items-center bg-[#232536] p-4 text-white">
        <img src="../../public/logo.svg" alt="logo"></img>
        <nav className="flex gap-6 cursor-pointer">
          <Link to="/" className=" hover:text-blue-400">Home</Link>
          <Link to="/blog" className=" hover:text-blue-400">Blog</Link>
          <Link to="/about" className=" hover:text-blue-400">About Us</Link>
          <Link to="/contact" className=" hover:text-blue-400">Contact Us</Link>
          <Link to="/policy" className=" hover:text-blue-400">Private Policy</Link>
        </nav>
      </div>
      <div className="bg-[#2e3040] py-20 px-16 flex">
        <h4 className="font-bold text-4xl/12 text-white">Subscribe to our news letter to get latest updates and news</h4>
        <div className="flex gap-2 items-start">
          <input type="email" name="email" placeholder="Enter your email..." className="border border-[#6D6E76] text-[#6D6E76] w-[330px] p-4"></input>
          <Button text="Subscribe" background="bg-[#FFD050]" color="text-black"/>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <p className="text-[#6D6E76]">Finstreet 118 2561 Fintown</p>
          <p className="text-[#6D6E76]">Hello@finsweet.com  020 7993 2905</p>
        </div>
        <div className="flex gap-6">
          <button className="cursor-pointer">
            <img src="../../public/footer-facebook.svg" className="size-4"></img>
          </button>
          <button className="cursor-pointer">
            <img src="../../public/footer-twitter.svg" className="size-4"></img>
          </button>
          <button className="cursor-pointer">
            <img src="../../public/footer-instagram.svg" className="size-4"></img>
          </button>
          <button className="cursor-pointer">
            <img src="../../public/footer-linkedin.svg" className="size-4"></img>
          </button>
        </div>
      </div>
    </footer>
  )
}