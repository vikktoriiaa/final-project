import type { FC } from "react"
import { Button } from "./common/Button"
import { Author } from "./common/Author"
import { Post } from "./common/Post"
import { TitleSection } from "./common/TitleSection"
import { CardCategory } from "./common/CardCategory"
import { AuthorCard } from "./common/AuthorCard"
import { LogoCompany } from "./common/LogoCompany"
import { ReviewPost } from "./common/ReviewPost"
import { LastSection } from "./common/LastSection"

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
          <Button text="Read More >" background="bg-[#FFD050]" color="text-black"/>
        </div>
      </section>
      <section className="flex py-32 px-20 gap-8">
        <div>
          <TitleSection title="Featured Post" />
          <div className="mt-8 border border-[#96969a] p-4">
            <img src="../../public/feature.png" className="mb-8"></img>
            <Author date="May 23, 2022" />
            <h4 className="text-2xl/8 font-bold py-4 pr-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h4>
            <p className="font-normal text-base/7 text-[#6D6E76] pt-4 pb-8">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            <Button text="Read More >" background="bg-[#FFD050]" color="text-black"/>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <TitleSection title={"All Posts"} />
            <p className="text-[#592ea9] text-base/7 font-medium hover:text-[#20074f]">View All</p>
          </div>
          <div className="mt-8">
            <Post title="8 Figma design systems that you can download for free today." date="Aug 23, 2021" />
            <Post title="8 Figma design systems that you can download for free today." date="Aug 23, 2021" bg={"bg-[#FBF6EA]"} />
            <Post title="8 Figma design systems that you can download for free today." date="Aug 23, 2021" />
            <Post title="8 Figma design systems that you can download for free today." date="Aug 23, 2021" />
          </div>
        </div>
      </section>
      <section className="relative flex justify-around my-10 mx-20 bg-[#F4F0F8] before:content-[''] before:w-[1000px] before:h-[23px] before:bg-gradient-to-r before:from-[#592EA9] before:to-[#FFD050] before:absolute before:-top-5 before:right-0 before:-z-10 ">
        <div className="flex py-20 pr-20 pl-20 gap-20">
          <div className="flex flex-col gap-6">
            <p className="uppercase text-base/7 font-semibold tracking-[3px]">About us</p>
            <h3 className="text-4xl/12 font-bold">We are a community of content writers who share their learnings</h3>
            <p className="font-normal text-base/7 text-[#6D6E76]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Button text="Read More >" background="bg-[#F4F0F8]" color='text-[#592EA9]'/>
          </div>
          <div className="flex flex-col gap-5">
            <p className="uppercase text-base/7 font-semibold tracking-[3px]">Our mision</p>
            <h3 className="text-2xl/10 font-bold">Creating valuable content for creatives all around the world</h3>
            <p className="font-normal text-base/7 text-[#6D6E76]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center gap-12 mx-auto my-30 px-20">
        <TitleSection title="Choose A Category" />
        <div className="flex gap-8">
          <CardCategory icon="../../public/icon.svg" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit." title="Business" />
          <CardCategory background="bg-[#FFD050]" icon="../../public/shuttle.svg" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit." title="Startup" />
          <CardCategory icon="../../public/economy.svg" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit." title="Economy" />
          <CardCategory icon="../../public/cyborg.svg" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit." title="Technology" />
        </div>
      </section>
      <section className="relative bg-[url('../../public/bg-section.png')] content-[''] w-[949px] h-[705px] flex justify-center items-end mx-30">
        <div className="absolute flex flex-col gap-6 bg-white max-w-[706px] p-22 -mr-75 bottom-0 right-0 z-10">
            <p className="uppercase text-base/7 font-semibold tracking-[3px]">Why we started</p>
            <h3 className="text-4xl/16 font-bold">It started out as a simple idea and evolved into our passion</h3>
            <p className="font-normal text-base/7 text-[#6D6E76]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <Button text="Discover our story >" background="bg-[#FFD050]" color='text-black'/>
          </div>
      </section>
      <section className="flex flex-col justify-center items-center gap-12 mx-auto my-30 px-20">
        <TitleSection title="List of Authors" />
        <div className="flex gap-8">
          <AuthorCard background="bg-[#F4F4F4]" icon="../../public/floyd.svg" text="Content Writer @Company" title="Floyd Miles" facebook="../../public/facebook.svg" twitter="../../public/twitter.svg" instagram="../../public/instagram.svg" linkedin="../../public/linkedin.svg" />
          <AuthorCard background="bg-[#FBF6EA]" icon="../../public/dianne.svg" text="Content Writer @Company" title="Dianne Russell" facebook="../../public/facebook.svg" twitter="../../public/twitter.svg" instagram="../../public/instagram.svg" linkedin="../../public/linkedin.svg" />
          <AuthorCard background="bg-[#F4F4F4]" icon="../../public/jenny.svg" text="Content Writer @Company" title="Jenny Wilson" facebook="../../public/facebook.svg" twitter="../../public/twitter.svg" instagram="../../public/instagram.svg" linkedin="../../public/linkedin.svg" />
          <AuthorCard background="bg-[#F4F4F4]" icon="../../public/leslie.svg" text="Content Writer @Company" title="Leslie Alexander" facebook="../../public/facebook.svg" twitter="../../public/twitter.svg" instagram="../../public/instagram.svg" linkedin="../../public/linkedin.svg"/>
        </div>
      </section>
      <section className="flex justify-center items-center gap-10 px-20 py-10">
        <div className="flex flex-col">
          <p className="text-[#8b8b8b] text-sm/5 font-normal">We are</p>
          <p className="text-[#6D6E76] font-bold text-2xl/8">Featured in</p>
        </div>
        <LogoCompany logo="../../public/logo-1.svg" />
        <LogoCompany logo="../../public/logo-2.svg" />
        <LogoCompany logo="../../public/logo-3.svg" />
        <LogoCompany logo="../../public/logo-4.svg" />
        <LogoCompany logo="../../public/logo-5.svg" />
      </section>
      <section className="flex gap-24 bg-[#FBF6EA] m-20 p-20">
        <div className="flex flex-col gap-4 max-w-[345px]">
          <p className="uppercase text-base/5 font-semibold tracking-[3px]">TESTIMONIALs</p>
          <h3 className="text-4xl/12 font-bold">What people say about our blog</h3>
          <p className="font-normal text-base/7 text-[#6D6E76]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
        <div className="bg-[#6D6E76] w-[1px] h-[310px]"></div>
        <div className="flex flex-col gap-30 max-w-[500px]">
          <p className="font-bold text-2xl/8 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <ReviewPost icon="../../public/reviewer-1.svg" name="Jonathan Vallem" place="New york, USA" />
        </div>
      </section>
      <LastSection />
    </main>
  )
}
