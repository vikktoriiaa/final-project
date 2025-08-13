import { useState } from "react"
import { THEME } from "../../../constants/theme"
import { MEDIUM_CARDS_POSTS } from "./medium-card-model"
import { MediumCardView } from "./MediumCardView"

type Props = {
  theme: string
}
export const MediumCardController = ({ theme }: Props) => {
  const [likesCount, setLikesCount] = useState(0)
  const[dislikesCount, setDislikesCount] = useState(0)
  
  const increaseLikes = () => {
    setLikesCount(likesCount + 1)
  }

  const increaseDislikes = () => {
    setDislikesCount(dislikesCount + 1)
  }
  return <>
    {MEDIUM_CARDS_POSTS.map((card) => (
      <MediumCardView key={card.id} {...card} theme={theme === THEME.DARK ? 'dark' : 'light'} increaseLikes={increaseLikes} increaseDislikes={increaseDislikes} likesCount={likesCount} dislikesCount={dislikesCount} />
      ))}
  </>
}