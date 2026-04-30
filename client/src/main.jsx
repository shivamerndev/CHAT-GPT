import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import "./app/global.css"
import AllRoutes from './app/App.routes.jsx'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={AllRoutes()}/>
)