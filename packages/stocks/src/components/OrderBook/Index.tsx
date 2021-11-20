import React from 'react';
import type { OrderBook as OrderBookType } from './type.OrderBook';

function OrderBook(orderBook: OrderBookType) {
  const { name } = orderBook;
  return (
    <div>
      Order Book:
      {' '}
      {name}
    </div>
  );
}

export default OrderBook;
