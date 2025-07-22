import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './router.jsx'
import { RouterProvider } from 'react-router'
import CartList from './Components/MyContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartList>
      <RouterProvider router={router} />
    </CartList>
  </StrictMode>,
)
