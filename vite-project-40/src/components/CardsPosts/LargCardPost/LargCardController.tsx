import { useState } from "react"
import { THEME } from "../../../constants/theme"
import { LARG_CARDS_POSTS } from "./larg-card-model"
import { LargCardView } from "./LargCardView"

type Props = {
  theme: string
}
export const LargCardController = ({ theme }: Props) => {
  const [likesCount, setLikesCount] = useState(0)
  const [dislikesCount, setDislikesCount] = useState(0)
  
  const increaseLikes = () => setLikesCount(likesCount + 1)
  const increaseDislikes = () => setDislikesCount(dislikesCount + 1)
  return <>
    {LARG_CARDS_POSTS.map((card) => (
      <LargCardView key={card.id} {...card} theme={theme === THEME.DARK ? 'dark' : 'light'} increaseLikes={increaseLikes} increaseDislikes={increaseDislikes} likesCount={likesCount} dislikesCount={dislikesCount} />
      ))}
  </>
}
