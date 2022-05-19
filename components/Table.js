import React, { useState, useEffect, useContext } from 'react';
import CartContext from './content/CartContext';
import BultenContext from './content/BultenContext';

function Table() {
  const { cart, setCart } = useContext(CartContext);
  const { bulten } = useContext(BultenContext);
  const [page, setPage] = useState([]);

  useEffect(() => {
    setPage(bulten.slice(0, 30));
    window.addEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    sessionStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleScroll = () => {
    const userScrollHeight = window.innerHeight + window.scrollY;
    const windowBottomHeight = document.documentElement.offsetHeight;
    if (userScrollHeight >= windowBottomHeight) {
      const k = windowBottomHeight / 1000;
      const n = Math.ceil(k) * 30;
      setPage(bulten.slice(0, n));
    }
  };

  const handleCart = (price, e, item) => {
    const uniqueId = item.id.concat(price);
    const data = cart.some((q) => q.id === uniqueId);
    data
      ? deleteFromCart(e, uniqueId)
      : addCart(price, e, uniqueId, item.mac, item.id, item.mbs);
  };

  const addCart = (price, e, uniqueId, mac, code, mbs) => {
    const item = {
      id: uniqueId,
      code,
      mbs,
      mac,
      price,
    };
    e.target.className = 'selected';
    setCart([...cart, item]);
  };

  const deleteFromCart = (e, uniqueId) => {
    const newCart = cart.filter((q) => q.id !== uniqueId);
    e.target.className = '';
    setCart(newCart);
  };

  return (
    <div>
      <table className="header">
        <thead>
          <tr>
            <th className="mac">
              {' '}
              Event Count
              {bulten.length}
            </th>
            <th className="cell"> MBS</th>
            <th style={{ width: '15%' }}>Mac Sonucu</th>
            <th style={{ width: '10%' }}>2,5 Gol</th>
            <th style={{ width: '20%' }}>Handikaplı Mac Sonucu</th>
            <th style={{ width: '15%' }}>Çifte Şans</th>
            <th style={{ width: '10%' }}>Karş. Gol</th>
          </tr>
        </thead>
      </table>

      <table>
        { page.map((item, index) => (
          <tbody key={index} style={{ borderColor: 'black' }}>
            <tr style={{ backgroundColor: 'blue' }}>
              <th className="mac">
                {' '}
                {index}
                {' '}
                {item.date}
                {' '}
                {item.day}
                {' '}
                {item.lig}
              </th>
              <th className="cell"> Bugün</th>

              <th className="cell">1</th>
              <th className="cell">X</th>
              <th className="cell">2</th>

              <th className="cell">Alt</th>
              <th className="cell">Üst</th>

              <th className="cell">HND</th>
              <th className="cell">1</th>
              <th className="cell">X</th>
              <th className="cell">2</th>

              <th className="cell">1-X</th>
              <th className="cell">1-2</th>
              <th className="cell">X-2</th>

              <th className="cell">Var</th>
              <th className="cell">Yok</th>
            </tr>
            <tr>
              <th className="td mac">
                {item.id}
                {' '}
                {item.time}
                {' '}
                {item.mac}
              </th>
              <th className="td">
                {' '}
                {item.mbs}
              </th>

              <td onClick={(e) => handleCart(item.mc1, e, item)}>{item.mc1}</td>
              <td> - </td>
              <td onClick={(e) => handleCart(item.mc2, e, item)}>{item.mc2}</td>

              <td onClick={(e) => handleCart(item.ikiBucukAlt, e, item)}>{item.ikiBucukAlt}</td>
              <td onClick={(e) => handleCart(item.ikiBucukUst, e, item)}>{item.ikiBucukUst}</td>

              <td> - </td>
              <td> - </td>
              <td> - </td>
              <td> - </td>

              <td onClick={(e) => handleCart(item.cifteSans1X, e, item)}>{item.cifteSans1X}</td>
              <td onClick={(e) => handleCart(item.cifteSans12, e, item.id)}>{item.cifteSans12}</td>
              <td onClick={(e) => handleCart(item.cifteSansX2, e, item)}>{item.cifteSansX2}</td>

              <td> - </td>
              <td> - </td>

            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default Table;
