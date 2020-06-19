import React, { useState } from 'react';
import { Cart } from './cart';
import  './App.css';

// Simple counter with Using Hooks.

export default function App() {

  let [Count, setCount] = useState(0);
  let [ischartFull, setCharFull] = useState(true)


  return (
    <div className="header ">
      <div>
        <h3>Cart is: {ischartFull ? 'Full' : 'Empty'}</h3>

        <button onClick={() => setCharFull(!ischartFull)}>Check Cart</button>

      </div>

      <Cart counter={Count} />

      <div>
        <button onClick={() => setCount(++Count)}>Increase Quantity</button>
        <button onClick={() => setCount(--Count)}>Decrease Quantity</button>
      </div>

    </div>

  );
}

// export default App;
