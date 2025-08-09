import { THEME } from "../../../constants/theme"
import { SMALL_CARDS_POSTS } from "./SmallCardModel"
import { SmallCardView } from "./SmallCardView"

type Props = {
  theme: string
}
export const SmallCardController = ({theme}: Props) => {
  return <>
    {SMALL_CARDS_POSTS.map((card) => (
      <SmallCardView key={card.id} {...card} theme={theme === THEME.DARK ? 'dark' : 'light'} />
      ))}
  </>
}