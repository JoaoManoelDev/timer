import { ThemeProvider } from "styled-components"
import { RouterProvider } from "react-router-dom"

import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { dark } from "./styles/themes/dark"
import { useToggleThemeContext } from "./contexts/toggle-theme-context"
import { routes } from "./routes"

export const App = () => {
  const { activeTheme } = useToggleThemeContext()

  const theme = activeTheme === "light" ? defaultTheme : dark

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={routes} />
      <GlobalStyle />
    </ThemeProvider>
  )
}
