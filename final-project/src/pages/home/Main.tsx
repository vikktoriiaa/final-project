import type { FC } from "react"
import { Button } from "../../components/common/Button"
import { Author } from "../../components/common/Author"
import { Post } from "../../components/common/Post"
import { TitleSection } from "../../components/common/TitleSection"
import { CardCategory } from "../../components/common/CardCategory"
import { AuthorCard } from "../../components/common/AuthorCard"
import { LogoCompany } from "../../components/common/LogoCompany"
import { ReviewPost } from "../../components/common/ReviewPost"
import { LastSection } from "../../components/common/LastSection"
import { useNavigate } from "react-router-dom"

export const Main: FC = () => {
  const navigate = useNavigate()

  const navigateToAboutUs = () => {
  navigate("/about");
  window.scrollTo(0, 0);
  }

  const navigateToBlogPosts = () => {
  navigate("/blogPosts");
  window.scrollTo(0, 0);
  }
  
  return (
    <main className="dark:bg-[#2e3040] dark:text-white">
      <section className="relative h-screen bg-[url('../../bg.png')] bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative xl:py-40 xl:pl-20 xl:pr-120 lg:py-20 lg:pl-10 lg:pr-60 md:py-10 md:pl-10 md:pr-30 xs:py-5 xs:pl-5 xs:pr-15 text-white xxs:p-5">
          <p className="uppercase text-base/5 font-medium md:tracking-[3px] xxs:tracking-normal pb-6">Posted on <span className="font-bold">startup</span></p>
          <h1 className="lg:text-[56px]/16 md:text-4xl/12 xxs:text-xl/10 font-bold pb-6 -tracking-[2px]">Step-by-step guide to choosing great font pairs</h1>
          <p className="font-normal text-base/7 pb-4">By <span className="text-[#FFD050]">James West</span> |  May 23, 2022 </p>
          <p className="font-normal text-base/7 md:pr-80 md:pb-12 xxs:pr-20 xxs:pb-5">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          <Button text="Read More >" background="bg-[#FFD050]" color="text-black" func={navigateToAboutUs}/>
        </div>
      </section>
      <section className="flex md:flex-row xxs:flex-col md:py-32 md:px-20 xxs:py-10 xxs:px-5 gap-8">
        <div>
          <TitleSection title="Featured Post" />
          <div className="mt-8 border border-[#96969a] p-4">
            <img src="../../feature.png" className="mb-8"></img>
            <Author date="May 23, 2022" />
            <h4 className="xl:text-2xl/8 md:text-xl/6 font-bold py-4 pr-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h4>
            <p className="font-normal xl:text-base/7 md:text-normal/5 text-[#6D6E76] pt-4 pb-8 hidden md:block">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            <Button text="Read More >" background="bg-[#FFD050]" color="text-black"/>
          </div>
        </div>
        <div>
          <div className=" flex lg:flex-row justify-between items-center md:flex-col md:gap-4">
            <TitleSection title={"All Posts"} />
            <button className="text-[#592ea9] xl:text-base/7 md:text-normal/5 font-medium hover:text-[#20074f]" onClick={navigateToBlogPosts}>View All</button>
          </div>
          <div className="mt-8 flex flex-col gap-4">
            <Post title="8 Figma design systems that you can download for free today." date="Aug 23, 2021" />
            <Post title="8 Figma design systems that you can download for free today." date="Aug 23, 2021" bg={"bg-[#FBF6EA]"} />
            <Post title="8 Figma design systems that you can download for free today." date="Aug 23, 2021" />
            <Post title="8 Figma design systems that you can download for free today." date="Aug 23, 2021" hidden="hidden lg:block" />
          </div>
        </div>
      </section>
      <section className="relative flex justify-around my-10 xl:mx-20 xss:mx-10 bg-[#F4F0F8] before:content-[''] before:w-[70%] before:h-[5%] before:bg-gradient-to-r before:from-[#592EA9] before:to-[#FFD050] before:absolute before:-top-5 before:right-0 before:-z-10 dark:text-black">
        <div className="flex md:flex-row xxs:flex-col xl:py-20 xl:px-20 lg:py-10 lg:px-10 md:py-5 md:px-5 xxs:py-4 xxs:px-4 xl:gap-20 md:gap-10 xxs:gap-5">
          <div className="flex flex-col gap-6">
            <p className="uppercase text-base/7 font-semibold tracking-[3px]">About us</p>
            <h3 className="xl:text-4xl/12 md:text-2xl/7 font-bold">We are a community of content writers who share their learnings</h3>
            <p className="font-normal text-base/7 text-[#6D6E76]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Button text="Read More >" background="bg-[#F4F0F8]" color='text-[#592EA9]' func={ navigateToAboutUs } />
          </div>
          <div className="flex flex-col gap-5">
            <p className="uppercase text-base/7 font-semibold tracking-[3px]">Our mision</p>
            <h3 className="xl:text-2xl/10 md:text-xl/7 font-bold">Creating valuable content for creatives all around the world</h3>
            <p className="font-normal text-base/7 text-[#6D6E76]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center lg:gap-10 xxs:gap-5 mx-auto md:my-30 xxs:my-15 lg:px-20 xxs:px-5">
        <TitleSection title="Choose A Category" />
        <div className="flex gap-8 md:flex-nowrap xxs:flex-wrap justify-center">
          <CardCategory icon="../../icon.svg" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit." title="Business" />
          <CardCategory background="bg-[#FFD050]" icon="../../shuttle.svg" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit." title="Startup" />
          <CardCategory icon="../../economy.svg" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit." title="Economy" />
          <CardCategory icon="../../cyborg.svg" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit." title="Technology" />
        </div>
      </section>
      <section className="xl:relative hidden bg-[url('../../bg-section.png')] content-[''] w-[949px] h-[705px] xl:flex justify-center items-end mx-30">
        <div className="absolute flex flex-col gap-6 bg-white max-w-[706px] p-22 -mr-75 bottom-0 right-0 z-10 dark:text-black">
            <p className="uppercase text-base/7 font-semibold tracking-[3px]">Why we started</p>
            <h3 className="text-4xl/16 font-bold">It started out as a simple idea and evolved into our passion</h3>
            <p className="font-normal text-base/7 text-[#6D6E76]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <Button text="Discover our story >" background="bg-[#FFD050]" color='text-black'/>
          </div>
      </section>
      <section className="flex flex-col justify-center items-center gap-12 mx-auto md:my-30 xxs:my-10 px-20">
        <TitleSection title="List of Authors" />
        <div className="flex gap-8 lg:flex-nowrap xxs:flex-wrap justify-center">
          <AuthorCard background="bg-[#F4F4F4]" icon="../../floyd.svg" text="Content Writer @Company" title="Floyd Miles" facebook="../../facebook.svg" twitter="../../twitter.svg" instagram="../../instagram.svg" linkedin="../../linkedin.svg" />
          <AuthorCard background="bg-[#FBF6EA]" icon="../../dianne.svg" text="Content Writer @Company" title="Dianne Russell" facebook="../../facebook.svg" twitter="../../twitter.svg" instagram="../../instagram.svg" linkedin="../../linkedin.svg" />
          <AuthorCard background="bg-[#F4F4F4]" icon="../../jenny.svg" text="Content Writer @Company" title="Jenny Wilson" facebook="../../facebook.svg" twitter="../../twitter.svg" instagram="../../instagram.svg" linkedin="../../linkedin.svg" />
          <AuthorCard background="bg-[#F4F4F4]" icon="../../leslie.svg" text="Content Writer @Company" title="Leslie Alexander" facebook="../../facebook.svg" twitter="../../twitter.svg" instagram="../../instagram.svg" linkedin="../../linkedin.svg" />
        </div>
      </section>
      <section className="flex xl:flex-nowrap xxs:flex-wrap justify-center items-center gap-10 px-20 md:py-10 xxs:py-5 dark:bg-[#F4F0F8] mx-20">
        <div className="flex flex-col">
          <p className="text-[#8b8b8b] text-sm/5 font-normal">We are</p>
          <p className="text-[#6D6E76] font-bold text-2xl/8">Featured in</p>
        </div>
        <LogoCompany logo="../../logo-1.svg" />
        <LogoCompany logo="../../logo-2.svg" />
        <LogoCompany logo="../../logo-3.svg" />
        <LogoCompany logo="../../logo-4.svg" />
        <LogoCompany logo="../../logo-5.svg" />
      </section>
      <section className="flex lg:flex-row xxs:flex-col lg:gap-24 xxs:gap-10 bg-[#FBF6EA] md:m-20 xxs:m-5 md:p-20 xxs:p-5 justify-center dark:text-black">
        <div className="flex flex-col gap-4 max-w-[345px]">
          <p className="uppercase text-base/5 font-semibold tracking-[3px]">TESTIMONIALs</p>
          <h3 className="xl:text-4xl/12 md:text-2xl/8 font-bold">What people say about our blog</h3>
          <p className="font-normal text-base/7 text-[#6D6E76]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
        <div className="bg-[#6D6E76] w-[1px] h-[310px] hidden lg:block"></div>
        <div className="flex flex-col xl:gap-30 md:gap-10 max-w-[500px]">
          <p className="font-bold md:text-2xl/8 xxs:text-base/6 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <ReviewPost icon="../../reviewer-1.svg" name="Jonathan Vallem" place="New york, USA" />
        </div>
      </section>
      <LastSection />
    </main>
  )
}
