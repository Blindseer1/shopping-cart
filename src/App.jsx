import { useState } from 'react'
import Homepage from './Components/Homepage.jsx'
import { Outlet, Link } from 'react-router-dom'
import styles from "./App.module.css"
function App() {

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link to="homepage">Home</Link>
        <Link to="shop">Shop</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default App
