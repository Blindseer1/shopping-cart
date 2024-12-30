import { BrowserRouter, createBrowserRouter } from "react-router";
import App from './App.jsx'
import ErrorScreen from './Components/ErrorScreen.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorScreen />
  },

])
export default router;
