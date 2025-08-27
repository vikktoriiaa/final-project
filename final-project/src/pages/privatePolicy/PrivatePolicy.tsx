import type { FC } from "react"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
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