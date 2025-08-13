import { THEME } from "../constants/theme"
import { FormController } from "./form/FormController"
import { FormWithFocus } from "./FormWithFocus"

type Props = {
  theme: string,
  onBackToHome: () => void
}
export const Main = ({theme, onBackToHome}: Props) => {
  return (
    <main className={`flex-1 flex flex-col gap-4 ${theme === THEME.DARK ? 'text-white bg-[#313037]' : 'text-black bg-[#f3f3f3]'}`}>
      <button className="border-1 border-gray-300 mt-10 mb-5 mx-auto p-3 rounded-xl" onClick={onBackToHome}>Back to home</button>
      <FormController />
      <FormWithFocus />
    </main>
  )
}