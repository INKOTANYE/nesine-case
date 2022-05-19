import React from 'react';
import '../style/main.scss';
import Container from './Container';
import { CartProvider } from './content/CartContext';
import { BultenProvider } from './content/BultenContext';

function App() {
  return (
    <div>
      <CartProvider>
        <BultenProvider>
          <Container />
        </BultenProvider>
      </CartProvider>
    </div>
  );
}

export default App;
