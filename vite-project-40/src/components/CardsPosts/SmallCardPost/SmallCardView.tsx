import { useState } from "react"
type Card = {
  id: number,
  image: string,
  date: string,
  title: string,
  imageLike: string,
  imageDislike: string,
  imageSave: string,
  imageDetails: string,
  theme: string
}
type Props = Card & {
  theme: 'light' | 'dark';
}

export const SmallCardView = (props: Props) => {

  const {id, date, title, image, imageLike, imageDislike, imageSave, imageDetails, theme} = props

  const [likesCount, setLikesCount] = useState(0)
  const[dislikesCount, setDislikesCount] = useState(0)
  
  const increaseLikes = () => setLikesCount(likesCount + 1)
  const increaseDislikes = () => setDislikesCount(dislikesCount + 1)
  
  return (
    <div key={id} className={`w-sm h-[187px] shadow-xl p-3 border-1 border-gray-300 box-border ${theme === 'dark' ? 'bg-[#313037] text-white' : 'bg-[#f3f3f3] text-black'}`}>
      <div className="flex gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-[#bfbfbf]">{date}</p>
          <h2 className="text-lg font-bold">{title}</h2>
        </div>
        <img src={image} alt="post photo" className="w-1/3 h-1/3"/>
      </div>
      <div className="flex gap-2 justify-between p-3">
        <div className="flex justify-center align-center gap-4">
          <button onClick={increaseLikes}>
            <img src={imageLike} alt="like" className="size-6" />
          </button>
          <span>{ likesCount}</span>
          <button onClick={increaseDislikes}>
            <img src={imageDislike} alt="dislike" className="size-6" />
          </button>
          <span>{ dislikesCount}</span>
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
  )
}