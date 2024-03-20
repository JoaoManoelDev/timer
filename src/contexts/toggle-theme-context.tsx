import { createContext, useContext, useEffect, useState } from "react"

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
  const [activeTheme, setActiveTheme] = useState(() => {
    const storageStateAsJSON = localStorage.getItem(
      "@ignite-timer:theme-state-1.0.0",
    )

    if (storageStateAsJSON
       !== null
       && storageStateAsJSON
       && Object.keys(storageStateAsJSON).length !== 0
     ) {
      return JSON.parse(storageStateAsJSON)
    }

    return "light"
  })

  const toggleTheme = () => {
    if (activeTheme === "light") setActiveTheme("dark")
    if (activeTheme === "dark") setActiveTheme("light")
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(activeTheme)

    localStorage.setItem('@ignite-timer:theme-state-1.0.0', stateJSON)
  }, [activeTheme])

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