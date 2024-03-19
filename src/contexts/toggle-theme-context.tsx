import { createContext, useContext, useState } from "react"

interface ToggleThemeContextType {
  activeTheme: string
  toggleTheme: () => void
}

const ToggleThemeContext = createContext({} as ToggleThemeContextType)

interface ToggleThemeContextProviderProps {
  children: React.ReactNode
}

export const ToggleThemeContextProvider = ({
  children
}: ToggleThemeContextProviderProps) => {
  const [activeTheme, setActiveTheme] = useState("light")

  const toggleTheme = () => {
    if (activeTheme === "light") setActiveTheme("dark")
    if (activeTheme === "dark") setActiveTheme("light")
  }

  return (
    <ToggleThemeContext.Provider
      value={{
        activeTheme,
        toggleTheme
      }}
    >
      {children}
    </ToggleThemeContext.Provider>
  )
}

export const useToggleThemeContext = () => {
  const context = useContext(ToggleThemeContext)

  return context
}