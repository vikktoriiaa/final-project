import { THEME } from "../../../constants/theme"
import { LARG_CARDS_POSTS } from "./LargCardModel"
import { LargCardView } from "./LargCardView"

type Props = {
  theme: string
}
export const LargCardController = ({theme}: Props) => {
  return <>
    {LARG_CARDS_POSTS.map((card) => (
      <LargCardView key={card.id} {...card} theme={theme === THEME.DARK ? 'dark' : 'light'} />
      ))}
  </>
}
