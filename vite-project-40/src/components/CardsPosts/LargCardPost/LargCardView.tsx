import { Link } from "react-router-dom";

type Card = {
  id: number;
  image: string;
  date: string;
  title: string;
  description?: string;
  imageLike: string;
  imageDislike: string;
  imageSave: string;
  imageDetails: string;
  likesCount: number;
  dislikesCount: number;
  increaseLikes: () => void;
  increaseDislikes: () => void;
};
type Props = Card & {
  theme: "light" | "dark";
};
export const LargCardView = ({
  id,
  date,
  title,
  description,
  image,
  imageLike,
  imageDislike,
  imageSave,
  imageDetails,
  theme,
  likesCount,
  dislikesCount,
  increaseLikes,
  increaseDislikes,
}: Props) => {

  return (
    <div
      key={id}
      className={`w-3xl shadow-xl p-4 box-border
        ${
          theme === "dark"
            ? "bg-[#313037] text-white"
            : "bg-[#f3f3f3] text-black"
        }`}
    >
      <div className="flex gap-3">
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#bfbfbf]">{date}</p>
          <Link to={`/post/${id}`} className="text-2xl font-bold">{title}</Link>
          {description && (
            <p className="text-sm text-[#bfbfbf]">{description}</p>
          )}
        </div>
        <img src={image} alt="post photo" className="w-1/2 h-1/2" />
      </div>
      <div className="flex gap-2 justify-between p-5">
        <div className="flex justify-center align-center gap-3">
          <button onClick={increaseLikes}>
            <img src={imageLike} alt="like" className="size-6" />
          </button>
          <span>{likesCount}</span>
          <button onClick={increaseDislikes}>
            <img src={imageDislike} alt="dislike" className="size-6" />
          </button>
          <span>{dislikesCount}</span>
        </div>
        <div className="flex justify-center align-center gap-3">
          <button>
            <img src={imageSave} alt="save" className="size-6" />
          </button>
          <button>
            <img src={imageDetails} alt="details" className="size-6" />
          </button>
        </div>
      </div>
    </div>
  );
};
