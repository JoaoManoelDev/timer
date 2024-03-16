import { createBrowserRouter } from "react-router-dom"

import { AppLayout } from "./pages/_layouts/app"
import { NotFound } from "./pages/not-found"

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
  }
])
