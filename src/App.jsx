import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import styles from "./App.module.css"
import cart from "/cart-2-svgrepo-com.svg"
function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link to="homepage">Home</Link>
        <Link to="shop">Shop</Link>
        <div className={styles.imgContainer}>
          <Link to="cart"><img src={cart} alt="" className={styles.cart} /></Link>
          <div className={styles.counter}>{counter}</div>
        </div>
      </nav>
      <Outlet context={setCounter} />
    </div>
  )
}

export default App
