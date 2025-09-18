import type { FC } from "react";
import { TitleSection } from "../../components/common/TitleSection";
import { BlogPost } from "../../components/common/BlogPost";
import { LastSection } from "../../components/common/LastSection";


export const Main: FC = () => {

  return (
    <main className="dark:bg-[#2e3040] dark:text-white">
      <section className="sm:pt-32 xxs:pt-10 lg:px-[300px] sm:px-16 xxs:px-3 pb-8 flex flex-col gap-8">
        <div className="flex gap-2 items-center">
          <img src="../../../reviewer-1.svg" alt='reviewer' className="sm:size-12 xxs:size-10"></img>
          <div className="flex flex-col">
            <p className="font-bold sm:text-3xl/10 xxs:text-xl/8 text-purple">Andrew Jonson</p>
            <p className="font-normal text-base/7">Posted on 27th January 2022</p> 
          </div>
        </div>
        <h4 className="sm:text-5xl/16 xxs:text-2xl/12 font-bold">Step-by-step guide to choosing great font pairs</h4>
        <div className="flex gap-3 items-center">
          <img src="../../../shuttle.svg" className="size-6"></img>
          <p className="font-bold sm:text-2xl/8 xxs:text-xl/6">Startup</p>
        </div>
      </section>
      <section className="sm:px-20 xxs:px-3  py-8">
        <img src="../../../blog-img.png"></img>
      </section>
      <section className="flex flex-col py-8 xl:px-[330px] gap-8 lg:px-[250px] md:px-[100px] xxs:px-10 xxs:py-10">
        <h4 className="font-bold lg:text-4xl/12 md:text-2xl/10 xs:text-xl/8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h4>
        <p className="text-medium-gray font-normal text-base/7 md:line-clamp-none xxs:line-clamp-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <h4 className="font-bold lg:text-4xl/12 md:text-2xl/10 xs:text-xl/8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h4>
        <p className="text-medium-gray font-normal text-base/7 md:line-clamp-none xxs:line-clamp-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
        </p>
        <p className="text-medium-gray font-normal text-base/7 md:line-clamp-none xxs:line-clamp-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <ul className="font-bold sm:text-2xl/8 xxs:text-xl/6 opacity-78 flex flex-col list-disc pl-5">
          <li>Lorem ipsum dolor sit amet</li>
          <li>Non blandit massa enim nec scelerisque</li>
          <li>Neque egestas congue quisque egestas</li>
        </ul>
        <p className="text-medium-gray font-normal text-base/7 md:line-clamp-none xxs:line-clamp-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        <h4 className="font-bold lg:text-4xl/12 md:text-2xl/10 xs:text-xl/8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h4>
        <p className="text-medium-gray font-normal text-base/7 md:line-clamp-none xxs:line-clamp-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
      </section>
      <section className="flex flex-col gap-8 pt-24 px-20">
        <TitleSection title="What to read next" />
        <div className="flex sm:flex-row xxs:flex-col gap-8">
          <BlogPost img="../../../blogPost-1.png" title="A UX Case Study Creating a Studious Environment for Students:" text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident." />
          <BlogPost img="../../../blogPost-2.png" title="A UX Case Study Creating a Studious Environment for Students:" text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident." />
          <BlogPost img="../../../blogPost-3.png" title="A UX Case Study Creating a Studious Environment for Students:" text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident." />
        </div>
        <div className="w-full h-[1px] bg-medium-gray"></div>
      </section>
      <LastSection />
    </main>
  )
}