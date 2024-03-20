import styled from "styled-components"

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;

  background: ${(props) => props.theme["gray-800"]};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  position: relative;
`

export const Toggle = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: end;
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
`
