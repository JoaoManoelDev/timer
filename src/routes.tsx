import { createBrowserRouter } from "react-router-dom"

import { History } from "./pages/history"
import { Home } from "./pages/home"
import { NotFound } from "./pages/not-found"
import { AppLayout } from "./pages/_layouts/app"

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/history",
        element: <History />
      },
    ]
  },
])
