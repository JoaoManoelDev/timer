import { ThemeProvider } from 'styled-components'
import { RouterProvider } from 'react-router-dom'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { routes } from './routes'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RouterProvider router={routes} />
      <GlobalStyle />
    </ThemeProvider>
  )
}
