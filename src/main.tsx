import React from "react"
import ReactDOM from "react-dom/client"

import { App } from "./app"
import { ToggleThemeContextProvider } from "./contexts/toggle-theme-context"
import { CyclesContextProvider } from "./contexts/cycles-context"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CyclesContextProvider>
      <ToggleThemeContextProvider>
        <App />
      </ToggleThemeContextProvider>
    </CyclesContextProvider>
  </React.StrictMode>,
)
