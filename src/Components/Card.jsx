import { useState } from 'react'
import styles from './styles/Card.module.css'
import { useCart } from './MyContext.jsx'
export default function Card({ imgId, setCounter, defaultCount, buttonOption }) {

  const [imageSource, setImageSource] = useState('');
  const [price, setPrice] = useState(0);
  const [inputValue, setInputValue] = useState(1)
  const { products, setProducts } = useCart();
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
      setImageSource(data[imgId + 1].image)
      setPrice(data[imgId + 1].price)
    })
  return (
    <div className={styles.items}>
      <img src={imageSource} alt="an item should be here" className={styles.products} />

      <div>${price}</div>
      <div className={styles.container}>
        <div className={styles.miniContainer}>
          <label htmlFor="itemCount">Count</label>
          <input type="number" id="itemCount" className={styles.inputStyle} defaultValue={defaultCount} onChange={(e) => setInputValue(Number(e.target.value))} />
        </div>
        {buttonOption == true ? <button className={styles.buttonStyle} onClick={() => {
          setCounter((c) => c + inputValue);
          setProducts(products.map((product, index) =>
            index === imgId ? { count: product.count + inputValue, price: price } : product
          ));
          console.log(imgId)
          console.log(inputValue + products[imgId].count)
          console.log(products[imgId])
          console.log(typeof (products[imgId].count))
        }

        }>Add</button> : null}

      </div>
    </div >
  )
}
