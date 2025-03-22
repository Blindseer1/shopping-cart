import { useContext, createContext, useState } from "react";
const CartContext = createContext();
export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider')
  }
  return context
}


export default function CartListProvider({ children }) {
  const [products, setProducts] = useState([{ count: 0, price: 0 },
  { count: 0, price: 0 },
  { count: 0, price: 0 },
  { count: 0, price: 0 },
  { count: 0, price: 0 },
  { count: 0, price: 0 },
  { count: 0, price: 0 },
  { count: 0, price: 0 },
  { count: 0, price: 0 }
  ]);
  return (
    <CartContext.Provider value={{ products, setProducts }}>
      {children}
    </CartContext.Provider>
  )
}
