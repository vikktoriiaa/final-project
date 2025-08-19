import type { FC } from "react"
import { Button } from "./common/Button"
import { Author } from "./common/Author"
import { Post } from "./common/Post"
import { TitleSection } from "./common/TitleSection"

export const Main:FC = () => {
  return (
    <main>
      <section className="relative h-screen bg-[url('../../public/bg.png')] bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative py-40 pl-20 pr-120 text-white">
          <p className="uppercase text-base/5 font-medium tracking-[3px] pb-6">Posted on <span className="font-bold">startup</span></p>
          <h1 className="text-[56px]/16 font-bold pb-6 -tracking-[2px]">Step-by-step guide to choosing great font pairs</h1>
          <p className="font-normal text-base/7 pb-4">By <span className="text-[#FFD050]">James West</span> |  May 23, 2022 </p>
          <p className="font-normal text-base/7 pr-80 pb-12">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          <Button text="Read More >" background="bg-[#FFD050]"/>
        </div>
      </section>
      <section className="flex py-32 px-20">
        <div>
          <TitleSection title="Featured Post" />
          <div>
            <img src="../../public/feature.png"></img>
            <Author date="May 23, 2022" />
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h4>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            <Button text="Read More >" background="bg-[#FFD050]"/>
          </div>
        </div>
        <div>
          <TitleSection title={"All Posts"} />
          <Post title="8 Figma design systems that you can download for free today." date="Aug 23, 2021" />
          <Post title="8 Figma design systems that you can download for free today." date="Aug 23, 2021" bg={"bg-[#FBF6EA]"} />
          <Post title="8 Figma design systems that you can download for free today." date="Aug 23, 2021" />
          <Post title="8 Figma design systems that you can download for free today." date="Aug 23, 2021" />
        </div>
      </section>
    </main>
  )
}
