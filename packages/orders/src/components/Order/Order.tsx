import React from 'react';

function AddOrder({ price, volume }: { price: number; volume: number; }) {
  return (
    <div className="uk-margin">
      <div uk-form-custom="target: true" className="uk-form-custom uk-first-column">
        <span>{volume}</span> on
        {' '}
        $
        <span style={{ color: 'blue' }}>{price}</span>
      </div>
    </div>
  );
}

export default AddOrder;
