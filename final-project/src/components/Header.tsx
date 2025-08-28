import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./common/Button"; 

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-[#232536] relative p-4 text-white flex justify-between items-center w-full lg:gap-10">
      <img src="../../public/logo.svg" alt="logo" />
      {/* Меню для больших экранов */}
      <nav className="hidden sm:flex gap-6 cursor-pointer items-center">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/blog" className="hover:text-blue-400">Blog</Link>
        <Link to="/about" className="hover:text-blue-400">About Us</Link>
        <Link to="/contact" className="hover:text-blue-400">Contact Us</Link>
        <Button text="Subscribe" background="bg-white" color="text-black" />
      </nav>

      {/* Кнопка бургер-меню для мобильных */}
      <button onClick={toggleMenu} className="sm:hidden focus:outline-none">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
        </svg>
      </button>

      {/* Мобильное меню при открытии */}
      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-[#232536] flex flex-col items-center gap-4 py-4 sm:hidden z-10">
          <Link to="/" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/blog" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link to="/about" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/contact" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Contact Us</Link>
          <Button text="Subscribe" background="bg-white" color="text-black" />
        </nav>
      )}
    </header>
  );
};
