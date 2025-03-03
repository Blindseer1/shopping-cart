
import styles from './styles/Homepage.module.css'
import bunnies from '/group-funny-rabbits-sunglasses-black-background.webp'
export default function Homepage() {
  return <div className={styles.container}>
    <h1>CONMEN FASHION</h1>
    <img src={bunnies} alt="" className={styles.banner} />
  </div>
}
