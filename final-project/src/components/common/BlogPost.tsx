import type { FC } from "react";
import { Author } from "./Author";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

type Props = {
  img: string;
  title: string;
  text: string;
};

export const BlogPost: FC<Props> = ({ img, title, text }) => {
  return (
    <div className="flex flex-col gap-4 p-1 transform transition-transform duration-300 ease hover:scale-105">
      <LazyLoadImage
        alt={"photo-blog"}
        effect="blur"
        wrapperProps={{
        style: {transitionDelay: "0.5s"},
        }}
        src={img}
      />
      <Author date="Aug 23, 2021 " />
      <h4 className="lg:text-3xl/10 sm:text-xl/8 font-bold">{title}</h4>
      <p className="text-medium-gray font-normal text-base/7 hidden lg:block">
        {text}
      </p>
    </div>
  );
};
