/* eslint-disable react/require-default-props */
import React from 'react';
import { Order, OrderDepth, Position } from './types';

function CardTable(props: {
  position?: Position;
  queue: OrderDepth[];
  order?: Order;
}) {
  const { position, queue, order } = props;
  const myVolume = (orderPrice: number) => {
    if (order && orderPrice === order.price) {
      return order.volume;
    }
    return '';
  };
  return (
    <table className="uk-table uk-table-tiny">
      <tbody>
        <tr>
          <td>
            <b className={position && position.profit > 0 ? 'uk-text-success' : 'uk-text-danger'}>
              {position ? `${position.profit}%` : ''}
            </b>
          </td>
          <td>
            {myVolume(queue[1].sell.price)}
          </td>
          <td>
            <button className="uk-button uk-button-default text uk-text-success" type="button">
              $
              {queue[1].sell.price}
            </button>
          </td>
          <td>
            {queue[1].sell.volume}
          </td>
        </tr>
        <tr>
          <td>
            {position && position.volume}
          </td>
          <td>
            {myVolume(queue[0].sell.price)}
          </td>
          <td>
            <button className="uk-button uk-button-default text uk-text-success" type="button">
              $
              {queue[0].sell.price}
            </button>
          </td>
          <td>
            {queue[0].sell.volume}
          </td>
        </tr>
        <tr>
          <td>
            {position && `$${position.price}`}
          </td>
          <td>
            {myVolume(queue[0].buy.price)}
          </td>
          <td>
            <button className="uk-button uk-button-default text uk-text-danger" type="button">
              $
              {queue[0].buy.price}
            </button>
          </td>
          <td>
            {queue[0].buy.volume}
          </td>
        </tr>
        <tr>
          <td> </td>
          <td>
            {myVolume(queue[1].buy.price)}
          </td>
          <td>
            <button className="uk-button uk-button-default text uk-text-danger" type="button">
              $
              {queue[1].buy.price}
            </button>
          </td>
          <td>
            {queue[1].buy.volume}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default CardTable;
