import { Link } from "react-router-dom"

import { NotFoundContainer } from "./styles"

export const NotFound = () => {
  return (
    <NotFoundContainer>
      <h1>Página não encontrada</h1>
      <p>
        Voltar para o{" "}
        <Link to="/">
          menu inicial
        </Link>
      </p>
    </NotFoundContainer>
  )
}
