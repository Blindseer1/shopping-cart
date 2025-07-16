import { BrowserRouter, createBrowserRouter } from "react-router";
import App from './App.jsx'
import ErrorScreen from './Components/ErrorScreen.jsx'
import Homepage from "./Components/Homepage.jsx";
import Shop from "./Components/Shop.jsx"
import Cart from "./Components/Cart.jsx"
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: "homepage", element: <Homepage /> },
      { path: "shop", element: <Shop /> },
      { index: true, element: <Homepage /> },
      {
        path: '/cart',
        element: <Cart />
      },

    ],
    errorElement: <ErrorScreen />,
  },

])
export default router;
