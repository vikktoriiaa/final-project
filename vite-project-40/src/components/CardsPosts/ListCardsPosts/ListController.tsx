import { ListView } from "./ListView"

type Props = {
  theme: string
}

export const ListController = ({theme}: Props) => {
  return <ListView theme={theme } />
}