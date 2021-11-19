import { orderResult } from 'avanza';
import avanza from './avanza';
import { logger } from '../../logger';

let Today = '2021-10-10';
Today = '2021-10-11';

interface GeneralParams {
  accountId: string;
  orderbookId: string;
}
type ReturnValue = (options: { volume: number; price: number; }) => Promise<orderResult>;
type PlaceOrder = (options: GeneralParams) => ReturnValue;

export const createBuy: PlaceOrder = ({ accountId, orderbookId }) => {
  const orderType = 'BUY';
  return ({ volume, price }) => {
    const validUntil = Today;
    logger('going to place order :: ', {
      accountId, volume, orderType, orderbookId, price, validUntil,
    });
    return avanza.placeOrder({
      accountId, volume, orderType, orderbookId, price, validUntil,
    }).then((res) => {
      logger(`#${res.orderId} BUY on [${orderbookId}] --${res.status}-- $${price}[${volume}] (${res.status}) (${validUntil}) ${res.messages.join(' ')}`);
      return res;
    }).catch(() => {
      logger(`ERROR BUY on [${orderbookId}] $${price}[${volume}]`);
      const result = { status: 'ERROR' } as orderResult;
      return result;
    });
  };
};

export const createSell: PlaceOrder = ({ accountId, orderbookId }) => {
  const orderType = 'SELL';
  return ({ volume, price }) => {
    const validUntil = Today;
    logger('going to place order :: ', {
      accountId, volume, orderType, orderbookId, price, validUntil,
    });
    return avanza.placeOrder({
      accountId, volume, orderType, orderbookId, price, validUntil,
    }).then((res) => {
      logger(`#${res.orderId} SELL on [${orderbookId}] --${res.status}-- $${price}[${volume}] (${res.status}) (${validUntil}) ${res.messages.join(' ')}`);
      return res;
    }).catch(() => {
      logger(`ERROR SELL on [${orderbookId}] $${price}[${volume}]`);
      const result = { status: 'ERROR' } as orderResult;
      return result;
    });
  };
};

type DeleteReturnValue = (orderId: string) => Promise<orderResult>;
type DeleteType = (accountId: string) => DeleteReturnValue;

export const createDelete: DeleteType = (accountId) => (orderId) => avanza
  .deleteOrder(accountId, orderId)
  .then((res) => {
    logger(`#${res.orderId} DELETE --${res.status}-- ${res.messages.join(' ')}`);
    // if status === error ?
    // same goes for the rest of these functions
    // what to do if error happens?
    return res;
  }).catch(() => {
    logger(`ERROR DELETE [${orderId}]`);
    const result = { status: 'ERROR' } as orderResult;
    return result;
  });

export const createEdit = ({ accountId, orderbookId }: {
  accountId: string
  orderbookId: string;
}) => ({
  editBuy: ({ orderId, price, volume }: {
    orderId: string;
    price: number;
    volume: number;
  }) => avanza.editOrder('stock', orderId, {
    price, volume, accountId, orderType: 'BUY', orderbookId, validUntil: Today,
  }).then((res) => {
    logger(`#${res.orderId} BUY on [${orderbookId}] --EDIT --${res.status}-- $${price}[${volume}] (${res.status}) ${res.messages.join(' ')}`);
    return res;
  }).catch(() => {
    logger(`ERROR BUY on [${orderbookId}] --EDIT #${orderId} $${price}[${volume}]`);
    return { status: 'ERROR' };
  }),
  editSell: ({ orderId, price, volume }: {
    orderId: string;
    price: number;
    volume: number;
  }) => avanza.editOrder('stock', orderId, {
    price, volume, accountId, orderType: 'SELL', orderbookId, validUntil: Today,
  }).then((res) => {
    logger(`#${res.orderId} SELL on [${orderbookId}] --EDIT --${res.status}-- $${price}[${volume}] (${res.status}) ${res.messages.join(' ')}`);
    return res;
  }).catch(() => {
    logger(`ERROR SELL on [${orderbookId}] --EDIT #${orderId} $${price}[${volume}]`);
    return { status: 'ERROR' };
  }),
});

export const createGetOrder = ({ orderbookId, accountId }: GeneralParams) => (orderId: string) => avanza.getOrder('stock', accountId, orderId)
  .then((res) => {
    logger({ level: 'error', title: 'get order result (check)', res });
    return res;
  })
  .catch(() => {
    logger(`ERROR get order #${orderId} on [${orderbookId}]`);
    return undefined;
  });
