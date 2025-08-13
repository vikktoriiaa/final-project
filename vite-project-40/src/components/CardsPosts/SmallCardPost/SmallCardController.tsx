import { useState } from "react"
import { THEME } from "../../../constants/theme"
import { SMALL_CARDS_POSTS } from "./small-card-model"
import { SmallCardView } from "./SmallCardView"

type Props = {
  theme: string
}
export const SmallCardController = ({ theme }: Props) => {
  const [likesCount, setLikesCount] = useState(0)
  const[dislikesCount, setDislikesCount] = useState(0)
  
  const increaseLikes = () => setLikesCount(likesCount + 1)
  const increaseDislikes = () => setDislikesCount(dislikesCount + 1)
  return <>
    {SMALL_CARDS_POSTS.map((card) => (
      <SmallCardView key={card.id} {...card} theme={theme === THEME.DARK ? 'dark' : 'light'} increaseLikes={increaseLikes} increaseDislikes={increaseDislikes} likesCount={likesCount} dislikesCount={dislikesCount} />
      ))}
  </>
}