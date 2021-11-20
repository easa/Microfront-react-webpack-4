import React from 'react';
import Order from '../Order/Order';
import useOrder from './useApp';

function App() {
  const { orders } = useOrder()
  return (
    <div className="App">
      {orders.map(({ price, volume }) => (
        <Order price={price} volume={volume} />
      ))}
      order
    </div>
  );
}

export default App;
