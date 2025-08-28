import type { FC } from "react";
import { LastSection } from "../../components/common/LastSection";
import { Quantity } from "../../components/common/Quantity";
import { TitleSection } from "../../components/common/TitleSection";
import { AuthorCard } from "../../components/common/AuthorCard";

export const Main: FC = () => {
  return (
    <main>
      <section className="flex justify-center items-center gap-8 px-38 pt-20">
        <div className="flex flex-col p-16 bg-white gap-4">
          <p className="uppercase text-base/5 font-medium tracking-[3px]">ABOUT US</p>
          <h4 className="text-5xl/16 font-bold">We are a team of content writers who share their learnings</h4>
        </div>
        <div>
          <p className="text-[#4C4C4C] font-normal text-base/7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </section>
      <section className="px-20 relative">
        <img src="../../../public/about-img.png"></img>
        <div className="absolute bg-[#FFD050] flex gap-4 -bottom-5 left-30 p-8">
          <Quantity text="Blogs Published" number="12+" />
          <Quantity number="18K+" text="Views on Finsweet" />
          <Quantity number="30K+" text="Total active Users" />
        </div>
      </section>
      <section className="flex justify-around my-10 mx-20 bg-[#F4F0F8]">
        <div className="flex py-20 pr-20 pl-20 gap-20">
          <div className="flex flex-col gap-6">
            <p className="uppercase text-base/7 font-semibold tracking-[3px]">Our mision</p>
            <h3 className="text-2xl/10 font-bold">Creating valuable content for creatives all around the world</h3>
            <p className="font-normal text-base/7 text-[#6D6E76]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="uppercase text-base/7 font-semibold tracking-[3px]">Our Vision</p>
            <h3 className="text-2xl/10 font-bold">A platform that empowers individuals to improve</h3>
            <p className="font-normal text-base/7 text-[#6D6E76]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center gap-20 px-20 py-16">
        <div className="flex flex-col gap-4">
          <h4 className="text-4xl/12 font-bold text-[#232536]">Our team of creatives</h4>
          <p className="font-bold text-[#232536] text-2xl/8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          <p className="font-normal text-base/7 text-[#6D6E76]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
        </div>
        <img src="../../../public/postSectionimg-1.png"></img>
      </section>
      <section className="flex justify-center items-center gap-20 px-20 py-16">
        <img src="../../../public/postSectionimg-2.png"></img>
        <div className="flex flex-col gap-4">
          <h4 className="text-4xl/12 font-bold text-[#232536]">Why we started this Blog</h4>
          <p className="font-bold text-[#232536] text-2xl/8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          <p className="font-normal text-base/7 text-[#6D6E76]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center gap-12 px-20 py-16">
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