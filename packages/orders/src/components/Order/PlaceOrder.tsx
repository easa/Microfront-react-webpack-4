import React from 'react';

function AddOrder({ price, volume }: { price: number; volume: number; }) {
  return (
    <div className="uk-margin Modal">
      <input value={price} />
      <input value={volume} />
    </div>
  );
}

export default AddOrder;
