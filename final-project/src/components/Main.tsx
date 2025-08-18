import type { FC } from "react"
import { Button } from "./common/Button"

export const Main:FC = () => {
  return (
    <main>
      <section className="relative h-screen bg-[url('../../public/bg.png')] bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative py-40 pl-20 pr-120 text-white">
          <p className="uppercase text-base/5 font-medium tracking-[3px] pb-6">Posted on <span className="font-bold">startup</span></p>
          <h1 className="text-[56px]/16 font-bold pb-6 -tracking-[2px]">Step-by-step guide to choosing great font pairs</h1>
          <p className="font-normal text-base/7 pb-4">By <span className="text-yellow-300">James West</span> |  May 23, 2022 </p>
          <p className="font-normal text-base/7 pr-80 pb-12">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          <Button text="Read More >" background="bg-[#FFD050]"/>
        </div>
      </section>
      <section className="relative">
        <div>
          <h1>kadbc</h1>
        </div>
      </section>
    </main>
  )
}
