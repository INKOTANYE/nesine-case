import React, { createContext, useState } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const values = { cart, setCart };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
}

export default CartContext;
