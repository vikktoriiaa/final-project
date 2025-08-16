import { createContext, useState } from "react";

type ThemeContextType = {
  theme: string,
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type ThemeProviderProps = {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  }
  return (
  <ThemeContext.Provider value={{theme, toggleTheme}}>
    {children}
    </ThemeContext.Provider>
  )
}
