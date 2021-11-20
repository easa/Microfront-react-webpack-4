/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { Order } from '../types';

function OrderLine({
  orderId, type, volume, price,
}: Order) {
  const [isLine, setIsLine] = useState<boolean>(false);
  const handleDeleteOrder = (id: string) => {
    let event = new CustomEvent("deleteOrder", { detail: { orderId } });
    dispatchEvent(event);
  };
  return (
    <div className="uk-grid-divider" data-uk-grid key={orderId}>
      <p className={isLine ? 'uk-line-over' : ''}>
        {type}
        <span style={{ paddingLeft: '20px' }}>
          {volume}
        </span>
        <b style={{ paddingLeft: '40px' }}>
          $
          {price}
        </b>
      </p>
      <button
        className="uk-text-danger uk-navbar-right"
        type="button"
        data-uk-close
        onClick={() => { handleDeleteOrder(orderId); }}
      />
    </div>
  );
}

export default OrderLine;
