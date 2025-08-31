import { type FC } from "react";
import { LastSection } from "../../components/common/LastSection";
import { Quantity } from "../../components/common/Quantity";
import { TitleSection } from "../../components/common/TitleSection";
import { AuthorCard } from "../../components/common/AuthorCard";

export const Main: FC = () => {
  return (
    <main className="dark:bg-[#2e3040] dark:text-white">
      <section className="flex lg:flex-row xxs:flex-col justify-center items-center gap-8 xl:px-38 xl:pt-20 sm:px-10 sm:pt-10">
        <div className="flex flex-col lg:p-16 xxs:p-3 bg-white dark:bg-[#2e3040] gap-4">
          <p className="uppercase text-base/5 font-medium tracking-[3px]">ABOUT US</p>
          <h4 className="xl:text-5xl/16 sm:text-2xl/10 font-bold">We are a team of content writers who share their learnings</h4>
        </div>
        <div className="mb-4">
          <p className="text-[#4C4C4C] font-normal lg:text-base/7 sm:text-xs/5 xxs:p-3 lg:p-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </section>
      <section className="sm:px-20 xxs:px-5 relative">
        <img src="../../../public/about-img.png"></img>
        <div className="absolute hidden bg-[#FFD050] sm:flex gap-4 -bottom-5 left-30 p-6">
          <Quantity text="Blogs Published" number="12+" />
          <Quantity number="18K+" text="Views on Finsweet" />
          <Quantity number="30K+" text="Total active Users" />
        </div>
      </section>
      <section className="flex justify-around my-10 sm:mx-20 xxs:mx-5 bg-[#F4F0F8] dark:text-black">
        <div className="flex lg:flex-row xxs:flex-col sm:py-20 xxs:py-5 sm:px-20 xxs:px-5 gap-15">
          <div className="flex flex-col gap-6">
            <p className="uppercase text-base/7 font-semibold tracking-[3px]">Our mision</p>
            <h3 className="text-2xl/10 font-bold">Creating valuable content for creatives all around the world</h3>
            <p className="font-normal text-base/7 text-[#6D6E76] xl:line-clamp-none xxs:line-clamp-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="uppercase text-base/7 font-semibold tracking-[3px]">Our Vision</p>
            <h3 className="text-2xl/10 font-bold">A platform that empowers individuals to improve</h3>
            <p className="font-normal text-base/7 text-[#6D6E76] xl:line-clamp-none xxs:line-clamp-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
          </div>
        </div>
      </section>
      <section className="flex lg:flex-row xxs:flex-col justify-center items-center xl:gap-20 sm:gap-10 xl:px-20 xl:py-16 sm:px-10 sm:py-10 xxs:px-5 xxs:py-4">
        <div className="flex flex-col gap-4 pb-2">
          <h4 className="xl:text-4xl/12 sm:text-3xl/8 font-bold text-[#232536] dark:text-[#6D6E76]">Our team of creatives</h4>
          <p className="font-bold text-[#232536] xl:text-2xl/8 sm:text-xl/8 dark:text-[#6D6E76]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          <p className="font-normal xl:text-base/7 sm:text-xs/5 text-[#6D6E76] sm:line-clamp-none xxs:line-clamp-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
        </div>
        <img src="../../../public/postSectionimg-1.png"></img>
      </section>
      <section className="flex lg:flex-row xxs:flex-col justify-center items-center xl:gap-20 sm:gap-10 xl:px-20 xl:py-16 sm:px-10 sm:py-10 xxs:px-5 xxs:py-4">
        <img src="../../../public/postSectionimg-2.png"></img>
        <div className="flex flex-col gap-4 pt-2">
          <h4 className="xl:text-4xl/12 sm:text-3xl/8 font-bold text-[#232536] dark:text-[#6D6E76]">Why we started this Blog</h4>
          <p className="font-bold text-[#232536] xl:text-2xl/8 sm:text-xl/8 dark:text-[#6D6E76]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          <p className="font-normal xl:text-base/7 sm:text-xs/5 text-[#6D6E76] sm:line-clamp-none xxs:line-clamp-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center gap-12 px-20 lg:py-16 xxs:py-5">
        <TitleSection title="List of Authors" />
        <div className="flex flex-wrap gap-8 justify-center items-stretch">
          <AuthorCard background="bg-[#F4F4F4]" icon="../../public/floyd.svg" text="Content Writer @Company" title="Floyd Miles" facebook="../../public/facebook.svg" twitter="../../public/twitter.svg" instagram="../../public/instagram.svg" linkedin="../../public/linkedin.svg" />
          <AuthorCard background="bg-[#FBF6EA]" icon="../../public/dianne.svg" text="Content Writer @Company" title="Dianne Russell" facebook="../../public/facebook.svg" twitter="../../public/twitter.svg" instagram="../../public/instagram.svg" linkedin="../../public/linkedin.svg" />
          <AuthorCard background="bg-[#F4F4F4]" icon="../../public/jenny.svg" text="Content Writer @Company" title="Jenny Wilson" facebook="../../public/facebook.svg" twitter="../../public/twitter.svg" instagram="../../public/instagram.svg" linkedin="../../public/linkedin.svg" />
          <AuthorCard background="bg-[#F4F4F4]" icon="../../public/leslie.svg" text="Content Writer @Company" title="Leslie Alexander" facebook="../../public/facebook.svg" twitter="../../public/twitter.svg" instagram="../../public/instagram.svg" linkedin="../../public/linkedin.svg" />
          <AuthorCard background="bg-[#F4F4F4]" icon="../../public/guy.svg" text="Content Writer @Company" title="Guy Hawkins" facebook="../../public/facebook.svg" twitter="../../public/twitter.svg" instagram="../../public/instagram.svg" linkedin="../../public/linkedin.svg" />
          <AuthorCard background="bg-[#F4F4F4]" icon="../../public/eleanor.svg" text="Content Writer @Company" title="Eleanor Pena" facebook="../../public/facebook.svg" twitter="../../public/twitter.svg" instagram="../../public/instagram.svg" linkedin="../../public/linkedin.svg" />
          <AuthorCard background="bg-[#F4F4F4]" icon="../../public/robert.svg" text="Content Writer @Company" title="Robert Fox" facebook="../../public/facebook.svg" twitter="../../public/twitter.svg" instagram="../../public/instagram.svg" linkedin="../../public/linkedin.svg" />
          <AuthorCard background="bg-[#F4F4F4]" icon="../../public/jacob.svg" text="Content Writer @Company" title="Jacob Jones" facebook="../../public/facebook.svg" twitter="../../public/twitter.svg" instagram="../../public/instagram.svg" linkedin="../../public/linkedin.svg"/>
        </div>
      </section>
      <LastSection />
    </main>
  )
}