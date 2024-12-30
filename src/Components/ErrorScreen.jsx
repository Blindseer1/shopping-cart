import styles from './styles/ErrorScreen.module.css'
import rabbit from './funny-rabbits-sunglasses.jpg'
export default function ErrorScreen() {
  return (
    <div className={styles.container}>
      <div className={styles.rabbits}>
        <img src={rabbit} alt="" className={styles.img} />
        <h1 >Wrong path, bud</h1>
      </div>
    </div>
  )
}
