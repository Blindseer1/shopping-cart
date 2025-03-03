import { BrowserRouter, createBrowserRouter } from "react-router";
import App from './App.jsx'
import ErrorScreen from './Components/ErrorScreen.jsx'
import Homepage from "./Components/Homepage.jsx";
import Shop from "./Components/Shop.jsx"
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: "homepage", element: <Homepage /> },
      { path: "shop", element: <Shop /> },
      { index: true, element: <Homepage /> }
    ],
    errorElement: <ErrorScreen />,
  },

])
export default router;
