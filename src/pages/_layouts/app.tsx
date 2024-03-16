import { Outlet } from "react-router-dom"

import { Header } from "../../components/header"
import { LayoutContainer } from "./styles"

export const AppLayout = () => {
  return (
    <LayoutContainer >
      <Header />

      <div>
        <Outlet />
      </div>
    </LayoutContainer>
    )
}
