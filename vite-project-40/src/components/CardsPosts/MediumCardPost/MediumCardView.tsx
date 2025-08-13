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
  likesCount: number;
  dislikesCount: number;
  increaseLikes: () => void;
  increaseDislikes: () => void;
}

export const MediumCardView = (props: Props) => {
  
  const {id, date, title, image, imageLike, imageDislike, imageSave, imageDetails, theme,likesCount, dislikesCount, increaseLikes, increaseDislikes} = props
  
  return (
    <div key={id} className={`flex flex-col w-sm shadow-xl p-3 gap-2 border-1 border-gray-300 box-border ${theme === 'dark' ? 'bg-[#313037] text-white' : 'bg-[#f3f3f3] text-black'}`}>
      <img src={image} alt="post photo"/>
      <p className="text-xs text-[#bfbfbf]">{ date }</p>
      <h2 className="text-lg font-bold">{ title }</h2>
      <div className="flex gap-2 justify-between p-3">
        <div className="flex justify-center align-center gap-3">
          <button onClick={increaseLikes}>
            <img src={ imageLike } alt="like" className="size-6" />
          </button>
          <span>{ likesCount }</span>
          <button onClick={increaseDislikes}>
            <img src={ imageDislike } alt="dislike" className="size-6" />
          </button>
          <span>{ dislikesCount }</span>
        </div>
        <div className="flex justify-center align-center gap-3">
          <button>
            <img src={ imageSave } alt="save" className="size-6" />
          </button>
          <button>
            <img src={ imageDetails } alt="details" className="size-6" />
          </button>
        </div>
      </div>
    </div>
  )
}