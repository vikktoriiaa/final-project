import { THEME } from "../../../constants/theme"
import { MEDIUM_CARDS_POSTS } from "./MediumCardModel"
import { MediumCardView } from "./MediumCardView"

type Props = {
  theme: string
}
export const MediumCardController = ({theme}: Props) => {
  return <>
    {MEDIUM_CARDS_POSTS.map((card) => (
      <MediumCardView key={card.id} {...card} theme={theme === THEME.DARK ? 'dark' : 'light'} />
      ))}
  </>
}