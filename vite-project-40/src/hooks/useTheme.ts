import { ThemeContext } from "@/contexts/ThemeContexts"
import { useContext } from "react"

export const useTheme = () => {
  const themeContext = useContext(ThemeContext)

  if (themeContext === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return themeContext
}