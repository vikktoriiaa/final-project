import type { FC } from "react";
import { LastSection } from "../../components/common/LastSection";
import { TitleSection } from "../../components/common/TitleSection";
import { CardCategory } from "../../components/common/CardCategory";
import { Button } from "../../components/common/Button";
import { CategoryPost } from "../../components/common/CategoryPost";
import { useAppSelector } from "../../hooks/storeHooks";

export const Main: FC = () => {
  const { theme } = useAppSelector(state => state.theme)
  return (
    <main className="dark:bg-[#2e3040] dark:text-white">
      <section className="bg-[#F4F0F8] flex lg:flex-row xxs:flex-col items-center xl:gap-30 xxs:gap-8 xl:p-20 xxs:p-5 dark:text-black">
        <div className="flex flex-col gap-2">
          <p className="uppercase text-base/5 font-medium md:tracking-[3px] xxs:tracking-normal">Featured Post</p>
          <h1 className="xl:text-[56px]/16 md:text-2xl/12 xxs:text-xl/10 font-bold pb-4 -tracking-[2px]">Step-by-step guide to choosing great font pairs</h1>
          <p className="font-normal text-base/7 pb-4">By <span className="text-[#592EA9]">John Doe</span> |  May 23, 2022 </p>
          <p className="font-normal text-base/7">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          <Button text="Read More >" background="bg-[#FFD050]" color="text-black"/>
        </div>
        <img src="../../../public/blogPosts-1.png" className="max-w-[515px] w-full"></img>
      </section>
      <section className="flex flex-col gap-10 sm:px-20 xxs:px-5 py-10">
        <TitleSection title="All Posts" />
        <div className="w-full h-[1px] bg-[#6D6E76]"></div>
        <div className="flex flex-col gap-16">
          <CategoryPost img="../../../public/blogPosts-2.png" category="Startup" title="Design tips for designers that cover everything you need" text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident." />
          <CategoryPost img="../../../public/blogPosts-3.png" category="BUSINESS" title="How to build rapport with your web design clients" text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident." />
          <CategoryPost img="../../../public/blogPosts-4.png" category="Startup" title="Logo design trends to avoid in 2022" text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident." />
          <CategoryPost img="../../../public/blogPosts-5.png" category="TECHNOLOGY" title="8 Figma design systems you can download for free today" text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident." />
          <CategoryPost img="../../../public/blogPosts-2.png" category="ECONOMY" title="Font sizes in UI design: The complete guide to follow" text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident." />
        </div>
        <div className="flex gap-4 mx-auto">
          <button className="text-[#6D6E76] hover:text-black sm:text-2xl/8 xxs:text-xl/6 font-bold"> { "<" } Prev </button>
          <button className="text-[#6D6E76] hover:text-black sm:text-2xl/8 xxs:text-xl/6 font-bold"> Next {">"}</button>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center lg:gap-10 xxs:gap-5 mx-auto md:my-20 xxs:my-5 lg:px-20 xxs:px-5">
        <TitleSection title="All Categories" />
        <div className="flex gap-8 md:flex-nowrap xxs:flex-wrap justify-center">
          <CardCategory icon="../../public/icon.svg" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit." title="Business" />
          <CardCategory icon="../../public/shuttle.svg" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit." title="Startup" />
          <CardCategory icon="../../public/economy.svg" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit." title="Economy" />
          <CardCategory icon="../../public/cyborg.svg" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit." title="Technology" />
        </div>
      </section>
      <LastSection />
    </main>
  )
}