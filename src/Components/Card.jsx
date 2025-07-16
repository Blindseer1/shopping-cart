import { useState } from 'react'
import styles from './styles/Card.module.css'
import { useCart } from './MyContext.jsx'
import { useEffect } from 'react';
export default function Card({ imgId,counter, setCounter, defaultCount, buttonOption }) {

  const [imageSource, setImageSource] = useState('');
  const [price, setPrice] = useState(0);
  const [inputValue, setInputValue] = useState(1) 
  const [changeButton,setChangeButton]=useState(buttonOption);
  const [totalCount,setTotalCount]=useState(0);
  const { products, setProducts } = useCart();

 useEffect(()=>{ 
  if(defaultCount)
    setTotalCount(defaultCount)
  },[defaultCount])

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
          {changeButton?<input type="number" id="itemCount" className={styles.inputStyle} defaultValue={1} disabled={!changeButton} onChange={(e) => setInputValue(Number(e.target.value))} />:<span>{totalCount}</span>}
          
        </div>
        <div className={styles.miniContainer}>
        {changeButton == true ? <button className={styles.addStyle} onClick={() => {
          console.log(typeof setCounter)
          setCounter((c) => c + inputValue);
          setTotalCount(t=>t+inputValue)
          setProducts(products.map((product, index) =>
            index === imgId ? { count: product.count + inputValue, price: price } : product
          ));
          console.log(imgId)
          console.log(inputValue + products[imgId].count)
          console.log(products[imgId])
          console.log(typeof (products[imgId].count)) 
          setChangeButton(false);
        }

        }>Add</button> : 
        changeButton == false ? <button className={styles.editStyle} onClick={() =>{setChangeButton(true); setInputValue(1)} }>Edit</button> : null}
        </div>
      </div>
    </div >
  )
}
