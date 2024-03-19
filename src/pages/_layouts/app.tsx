import { Outlet } from "react-router-dom"

import { Header } from "../../components/header"
import { ToggleTheme } from "../../components/toggle-theme"

import { LayoutContainer, Toggle } from "./styles"

export const AppLayout = () => {
  return (
    <LayoutContainer >
      <Header />

      <div>
        <Outlet />
      </div>

      <Toggle>
        <ToggleTheme />
      </Toggle>
    </LayoutContainer>
  )
}
