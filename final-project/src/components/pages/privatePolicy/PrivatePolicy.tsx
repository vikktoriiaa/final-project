import type { FC } from "react"
import { Header } from "../../Header"
import { Footer } from "../../Footer"
import { Main } from "./Main"

export const PrivatePolicy:FC = () => {
  return (
    <>
      <Header />
      <Main/>
      <Footer/>
    </>
  )
}