/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import React from 'react';
import CardTable from './CardTable';
import {
  NI, Order, Position, OrderDepth,
} from './types';
import useCard from './useCard';
import CardTableSimple from './CardTableSimple';
import OrderLine from './MyOrder/OrderLine';
import { useDispatch } from 'react-redux';
import { createAction } from '@reduxjs/toolkit';

function CardContainer({
  orderBook, strategy = undefined, position, orders, queues,
}: {
  position?: Position;
  orderBook: NI;
  strategy?: NI;
  queues?: OrderDepth[];
  orders?: Order[];
}) {
  const act = createAction('sub', (st) => {
    return st
  })
  const dispatch = useDispatch()
  const { tableProps, orderBookName } = useCard({
    orderBook, queues, orders, position,
  });
  const handleStop = (id: string) => {
    dispatch(act);
  };
  return (
    <div data-orderbookid={orderBook.id}>
      <div className="uk-card uk-card-small uk-width-350">
        <div className="uk-card-header" uk-tooltip={orderBookName}>
          <h3 className="uk-card-title uk-text-truncate uk-text-center">{orderBookName}</h3>
        </div>
        <div className="uk-card-body uk-text-center">
          <div style={{ marginTop: '-25px' }}>
            <div style={{ display: 'inline-block', width: '100px', float: 'left' }}>
            </div>
            <div style={{ display: 'inline-block', width: '100px', float: 'right' }}>
              <button
                type="button"
                className="uk-button small uk-button-default uk-text-danger"
                style={{ borderRadius: '50px' }}
                onClick={() => { handleStop(orderBook.id); }}
              >
                stop
              </button>
            </div>
            <div style={{ clear: 'both' }} />
          </div>

          {tableProps.queue
            && (
              <CardTable
                queue={tableProps.queue}
                position={tableProps.position}
                order={tableProps.order}
              />
            )}
          {(!queues || queues.length < 1)
            && <CardTableSimple {...tableProps} />}
        </div>
        {(orders && orders.length > 0)
          && (
            <div className="uk-card-footer">
              {orders?.map((order) => (
                <OrderLine key={order.orderId} {...order} />
              ))}
            </div>
          )}
      </div>
    </div>

  );
}

export default CardContainer;
