import React, { useState, useEffect, useContext } from 'react';
import CartContext from './content/CartContext';

function Cart() {
  const { cart } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const [sessionCart, setSessionCart] = useState([]);

  useEffect(() => {
    const totalPrice = cart.map((q) => q.price);
    let sum = 0;
    for (let i = 0; i < totalPrice.length; i++) {
      sum += +totalPrice[i];
    }
    setTotal(sum);
    sessionStorage.cart = JSON.stringify(cart);
    const newCart = JSON.parse(sessionStorage.cart);
    setSessionCart(newCart);
  }, [cart]);

  return (
    <div className="cart">
      <span className="cart-detail">
        Toplam:
        {total.toFixed(2)}
      </span>
      {
            sessionCart.map((item, index) => (
              <div key={index} className="cart-detail">
                <span>
                  {' '}
                  Kod:
                  {item.code}
                </span>
                <span>
                  {' '}
                  Maç :
                  {item.mac}
                </span>
                <span>
                  {' '}
                  Oran :
                  {item.price}
                </span>
                <span>
                  {' '}
                  Mbs :
                  {item.mbs}
                </span>
              </div>
            ))
        }
    </div>
  );
}

export default Cart;
