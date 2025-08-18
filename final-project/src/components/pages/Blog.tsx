import type { FC } from "react"
import { Header } from "../Header"

export const Blog:FC = () => {
  return (
    <div>
      <Header />
      <h1 className="text-3xl font-bold underline text-center mt-96">Blog</h1>
    </div>
  )
}