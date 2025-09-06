import type { FC } from "react"
import { Link } from "react-router-dom"
import { Button } from "./Button"

export const Footer: FC = () => {
  return (
    <footer className="bg-[#232536] lg:py-14 lg:px-20 flex flex-col gap-8 md:px-10 md:py-7" id="footer">
      <div className="flex sm:flex-row justify-between items-center bg-[#232536] p-4 text-white xxs:flex-col gap-2 xxs:items-start">
        <img src="../../public/logo.svg" alt="logo"></img>
        <nav className="flex sm:flex-row sm:gap-6 xxs:flex-col xxs:gap-2 gap-6 cursor-pointer">
          <Link to="/" className=" hover:text-blue-400">Home</Link>
          <Link to="/blog" className=" hover:text-blue-400">Blog</Link>
          <Link to="/about" className=" hover:text-blue-400">About Us</Link>
          <Link to="/contact" className=" hover:text-blue-400">Contact Us</Link>
          <Link to="/policy" className=" hover:text-blue-400">Private Policy</Link>
        </nav>
      </div>
      <div className="bg-[#2e3040] lg:py-20 lg:px-16 flex lg:flex-row justify-around gap-3 xxs:px-8 xxs:py-10 xxs:flex-col">
        <h4 className="font-bold lg:text-4xl/12 text-white md:text-xl/10">Subscribe to our news letter to get latest updates and news</h4>
        <div className="flex gap-2 items-start justify-center xl:flex-row lg:flex-col xs:flex-row xxs:flex-col">
          <input type="email" name="email" placeholder="Enter your email..." className="border border-[#6D6E76] text-[#6D6E76] lg:w-[330px] md:w-[250px] xs:p-4 xxs:p-2"></input>
          <Button text="Subscribe" background="bg-[#FFD050]" color="text-black"/>
        </div>
      </div>
      <div className="flex xs:flex-row xxs:flex-col xxs:gap-4 justify-between items-center p-1 xxs:p-3">
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