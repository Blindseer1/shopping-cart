import { useEffect, useState } from 'react'
import styles from './styles/Card.module.css'
export default function Card({ imgId, }) {

  const [imageSource, setImageSource] = useState('')
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setImageSource(data[imgId + 1].image)
    })
  return (
    <div className={styles.items}>
      <img src={imageSource} alt="an item should be here" />
      <div className={styles.container}>
        <div className={styles.miniContainer}>
          <label htmlFor="itemCount">Count</label>
          <input type="number" id="itemCount" className={styles.inputStyle} defaultValue='1' />
        </div>
        <button className={styles.buttonStyle}>Add</button>

      </div>
    </div>
  )
}
