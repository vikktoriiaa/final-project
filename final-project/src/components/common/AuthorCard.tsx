import { type FC, useState } from "react";

type Props = {
  background: string;
  icon: string;
  text: string;
  title: string;
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
  about: string;
};

export const AuthorCard: FC<Props> = ({
  background,
  icon,
  text,
  title,
  facebook,
  twitter,
  instagram,
  linkedin,
  about,
}) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className="relative w-[260px] h-[300px]"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      style={{ perspective: 1000 }}
    >
      <div
        className={`transition-transform duration-500 w-full h-full ${
          flipped ? "rotate-y-180" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div
          className={`absolute backface-hidden flex flex-col gap-2 ${background} p-8 items-center justify-center`}
        >
          <img src={icon} alt="icon" className="sm:size-32 xxs:size-24 p-3" />
          <h4 className="font-bold text-2xl/10 text-[#232536]">{title}</h4>
          <p className="text-[#6D6E76] font-normal text-sm/5">{text}</p>
          <div className="flex gap-4">
            <button className="cursor-pointer">
              <img src={`${facebook}`} alt="facebook" className="size-4"></img>
            </button>
            <button className="cursor-pointer">
              <img src={`${twitter}`} alt="twitter" className="size-4"></img>
            </button>
            <button className="cursor-pointer">
              <img
                src={`${instagram}`}
                alt="instagram"
                className="size-4"
              ></img>
            </button>
            <button className="cursor-pointer">
              <img src={`${linkedin}`} alt="linkedin" className="size-4"></img>
            </button>
          </div>
        </div>
        {/* Back Side */}
        <div className="absolute top-0 left-0 w-[250px] h-[300px] flex items-center justify-center backface-hidden bg-[#F4F4F4] p-4 rotate-y-180">
          <p className="text-black text-base">{about}</p>
        </div>
      </div>
    </div>
  );
};
