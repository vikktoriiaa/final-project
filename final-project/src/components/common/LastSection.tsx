import type { FC } from "react";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

export const LastSection: FC = () => {
  const navigate = useNavigate();
  const navigateToContact = () => {
    navigate("/contact");
    window.scrollTo(0, 0);
  };
  return (
    <section className="flex justify-center items-center p-20">
      <div className="flex flex-col gap-4 justify-center items-center max-w-[410px] text-center">
        <h4 className="md:text-4xl/12 xxs:text-2xl/8 font-bold">
          Join our team to be a part of our story
        </h4>
        <p className="font-normal text-base/7 text-medium-gray mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
        <Button
          text="Join Now"
          background="bg-yellow"
          color="text-black"
          func={navigateToContact}
        />
      </div>
    </section>
  );
};
