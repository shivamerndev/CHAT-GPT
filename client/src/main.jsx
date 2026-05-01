import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import "./app/global.css"
import AllRoutes from './app/App.routes.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={AllRoutes()} />
  </Provider>
)