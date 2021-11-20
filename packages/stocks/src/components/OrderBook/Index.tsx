import React from 'react';
import CardContainer from './Card';
import { OrderBook as OrderBookType } from './type.OrderBook';

function OrderBook(orderBook: OrderBookType) {
  const { name } = orderBook;
  return (
    <div>
      <CardContainer orderBook={{ id: '2390239', name }} queues={[{
        sell: { price: 10, volume: 42424 }, buy: { volume: 354326, price: 7 } 
      }, {
        sell: { price: 11, volume: 24 }, buy: { volume: 4326, price: 6.5 } 
      }, {
        sell: { price: 11.2, volume: 5624 }, buy: { volume: 326, price: 6.2 } 
      }]} />
    </div>
  );
}

export default OrderBook;
