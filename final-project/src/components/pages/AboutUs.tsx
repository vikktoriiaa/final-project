import type { FC } from "react"
import { Header } from "../Header"

export const AboutUs:FC = () => {
  return (
    <div>
      <Header/>
      <h1 className="text-3xl font-bold underline text-center mt-96">About Us</h1>
    </div>
  )
}