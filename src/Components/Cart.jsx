import Card from './Card.jsx'
import { useCart } from './MyContext.jsx'
import { useContext, useState, useEffect } from "react"
import styles from './styles/Cart.module.css'
export default function Cart() {
  const { products, setProducts } = useCart()
  const [total, setTotal] = useState(0)
  console.log(Array.from(products))
  useEffect(() => {
    const newTotal = products.reduce((acc, product) => acc + product.count * product.price, 0);
    setTotal(newTotal);
  }, [products]);
  return (
    <div className={styles.pseudoBody}>
      <div className={styles.container}>
        <div>Products:</div>
        {Array.from(products).filter((product, index) => product.count > 0).map((product) => {
          const index = Array.from(products).indexOf(product)
          console.log(index)
          return <Card imgId={index} defaultCount={product.count} key={index} buttonOption={false} />
        })
        }
        <div>Total:{total}</div>
      </div>
    </div>
  )
}
