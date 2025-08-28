import type { FC } from "react";
import { TitleSection } from "../../components/common/TitleSection";
import { BlogPost } from "../../components/common/BlogPost";
import { LastSection } from "../../components/common/LastSection";

export const Main: FC = () => {
  return (
    <main>
      <section className="pt-32 px-[330px] pb-8 flex flex-col gap-8">
        <div className="flex gap-2 items-center">
          <img src="../../../public/reviewer-1.svg" alt='reviewer' className="size-12"></img>
          <div className="flex flex-col">
            <p className="font-bold text-3xl/10 text-[#592EA9]">Andrew Jonson</p>
            <p className="font-normal text-base/7">Posted on 27th January 2022</p> 
          </div>
        </div>
        <h4 className="text-5xl/16 font-bold">Step-by-step guide to choosing great font pairs</h4>
        <div className="flex gap-3 items-center">
          <img src="../../../public/shuttle.svg" className="size-6"></img>
          <p className="font-bold text-2xl/8">Startup</p>
        </div>
      </section>
      <section className="px-20 py-8">
        <img src="../../../public/blog-img.png"></img>
      </section>
      <section className="flex flex-col py-8 xl:px-[330px] gap-8 lg:px-[250px] md:px-[100px] xxs:px-[50px] xxs:py-10">
        <h4 className="font-bold lg:text-4xl/12 md:text-2xl/10 xs:text-xl/8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h4>
        <p className="text-[#6D6E76] font-normal text-base/7 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <h4 className="font-bold lg:text-4xl/12 md:text-2xl/10 xs:text-xl/8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h4>
        <p className="text-[#6D6E76] font-normal text-base/7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
        </p>
        <p className="text-[#6D6E76] font-normal text-base/7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <ul className="font-bold text-2xl/8 opacity-78 flex flex-col list-disc pl-5">
          <li>Lorem ipsum dolor sit amet</li>
          <li>Non blandit massa enim nec scelerisque</li>
          <li>Neque egestas congue quisque egestas</li>
        </ul>
        <p className="text-[#6D6E76] font-normal text-base/7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <h4 className="font-bold lg:text-4xl/12 md:text-2xl/10 xs:text-xl/8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h4>
        <p className="text-[#6D6E76] font-normal text-base/7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
      </section>
      <section className="flex flex-col gap-8 pt-24 px-20">
        <TitleSection title="What to read next" />
        <div className="flex gap-8">
          <BlogPost img="../../../public/blogPost-1.png" title="A UX Case Study Creating a Studious Environment for Students:" text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident." />
          <BlogPost img="../../../public/blogPost-2.png" title="A UX Case Study Creating a Studious Environment for Students:" text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident." />
          <BlogPost img="../../../public/blogPost-3.png" title="A UX Case Study Creating a Studious Environment for Students:" text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident." />
        </div>
        <div className="w-[1280px] h-[1px] bg-[#6D6E76]"></div>
      </section>
      <LastSection />
    </main>
  )
}