import React from 'react'
import { createBrowserRouter } from "react-router-dom"
import Login from '../pages/Login'
import App from '../App'

const AllRoutes = () => {

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <App />
    },
    {
      path: "/login",
      element: <Login />
    }
  ])

  return routes
}

export default AllRoutes