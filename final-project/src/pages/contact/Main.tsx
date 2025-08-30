import type { FC } from "react";
import { Button } from "../../components/common/Button";

export const Main: FC = () => {
  return (
    <main>
      <section className="flex flex-col justify-center items-center xl:py-32 sm:py-15 xl:px-84 sm:px-35 xxs:py-5 xxs:px-5 gap-12">
        <div className="flex flex-col justify-center items-center text-center gap-5">
          <p className="text-[#232536] text-base/5 font-black tracking-[3px]">Contact us</p>
          <h4 className="text-[#232536] sm:text-5xl/16 xxs:text-2xl/10 font-bold">Let’s Start a Conversation</h4>
          <p className="text-[#6D6E76] font-normal text-base/7 p-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
        </div>
        <div className="bg-[#592EA9] lg:py-12 xxs:py-4 lg:px-16 xxs:px-5 flex sm:flex-row xxs:flex-col gap-10 text-white">
          <div className="flex flex-col gap-4">
            <p className="font-normal text-sm/5 opacity-60">Working hours</p>
            <div className="w-[294px] h-[1px] bg-white opacity-60"></div>
            <h5 className="font-bold text-xl/8">Monday To Friday</h5>
            <h5 className="font-bold text-xl/8">9:00 AM to 8:00 PM </h5>
            <p className="font-normal text-base/7 opacity-60">Our Support Team is available 24/7</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-normal text-sm/5 opacity-60">Contact Us</p>
            <div className="w-[294px] h-[1px] bg-white opacity-60"></div>
            <h5 className="font-bold text-xl/8"><a href="tel:020 7993 2905">020 7993 2905</a></h5>
            <p className="font-normal text-base/7 opacity-60"><a href="mailto:hello@finsweet.com">hello@finsweet.com</a></p>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full p-5">
          <input type="text" name="name" placeholder="Full Name" className="text-base/7 sm:p-5 xxs:p-2 font-normal border border-[#6D6E7680] w-full"></input>
          <input type="email" name="email" placeholder="Your Email" className="text-base/7 sm:p-5 xxs:p-2 font-normal border border-[#6D6E7680] w-full"></input>
          <label className="text-base/7 pr-3 w-full">Query Related:</label>
          <select name="queryRelated" id="queryRelated" className="text-base/7 px-2 py-1 border border-[#6D6E7680] w-full">
            <optgroup label="Query Related:">
              <option value="info">Product Information</option>
              <option value="support">Technical Support</option>
              <option value="sales">Sales Inquiry</option>
              <option value="feedback">Feedback & Suggestions</option>
              <option value="partners">Partnership Opportunities</option>
              <option value="other">Other</option>
            </optgroup>
          </select>
          <textarea name="message" placeholder="Message" rows={5} className="text-base/7 sm:p-5 xxs:p-2 font-normal border border-[#6D6E7680] w-full"></textarea>
          <Button text="Send Message" background="bg-[#FFD050]" color="text-black"/>
        </div>
      </section>
    </main>
  )
}