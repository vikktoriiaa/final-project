import type { FC } from "react";

export const Main: FC = () => {
  return (
    <main className="dark:bg-[#2e3040] dark:text-white">
      <section className="bg-light-purple flex flex-col gap-1 py-20 xl:px-[500px] text-center lg:px-[250px] md:px-[100px] dark:text-black">
        <h3 className="font-bold lg:text-5xl/16 md:text-3xl/10 xs:text-2xl/8">Privacy Policy</h3>
        <p className="text-medium-gray font-normal text-base/7">Last Updated  on 27th January 2022</p>
      </section>
      <section className="flex flex-col py-32 xl:px-[330px] gap-8 lg:px-[250px] md:px-[100px] xxs:px-[50px] xxs:py-10">
        <h3 className="font-bold lg:text-5xl/16 md:text-3xl/10 xs:text-2xl/8">How We Collect Information</h3>
        <p className="text-medium-gray font-normal text-base/7 ">We collect information when you interact with our website, register for an account, subscribe to newsletters, or communicate with our support team. Data may include your name, email address, usage patterns, and preferences. This information helps us personalize your experience, improve our services, and keep our platform secure.</p>
        <h4 className="font-bold lg:text-4xl/12 md:text-3xl/10 xs:text-2xl/8">How We Protect Your Data</h4>
        <p className="text-medium-gray font-normal text-base/7">Protecting your information is our highest priority. We implement a variety of security measures, including encryption and regular system monitoring, to safeguard your data against unauthorized access. Our team continuously reviews protocols to ensure your personal details remain confidential and safe throughout your engagement with our company.
        </p>
        <p className="text-medium-gray font-normal text-base/7">We continuously assess and update our security protocols to ensure your personal data remains protected against unauthorized access, loss, or misuse. Our security measures are designed to comply with applicable laws and industry best practices, providing you with confidence that your information is handled with utmost care. By staying vigilant and proactive, we aim to maintain the highest standards of data security at all times.</p>
      </section>
    </main>
  )
}