import { NavLink } from "react-router-dom"
import { Scroll, Timer } from "phosphor-react"

import { HeaderContainer } from "./styles"
import logo from "../../assets/logo.svg"

export const Header = () => {
  return (
    <HeaderContainer>
      <span>
        <img src={logo} alt="" />
      </span>

      <nav>
        <NavLink to="/">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
