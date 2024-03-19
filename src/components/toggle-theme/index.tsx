import { Sun, Moon } from "phosphor-react"

import { Container, Bull, Icon } from "./styles"
import { useToggleThemeContext } from "../../contexts/toggle-theme-context"

export const ToggleTheme = () => {
  const { activeTheme, toggleTheme } = useToggleThemeContext()

  return (
    <Container>
      <Bull />
      <Icon onClick={() => toggleTheme()}>
        {activeTheme === "light" ? <Sun /> : <Moon />}
      </Icon>
    </Container>
  )
}
