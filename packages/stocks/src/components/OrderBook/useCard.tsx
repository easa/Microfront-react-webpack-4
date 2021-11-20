import type {
  NI, Order, Position, OrderDepth,
} from './types';

function useCard({
  orderBook, position, orders, queues,
}: {
  position?: Position;
  orderBook: NI;
  queues?: OrderDepth[];
  orders?: Order[];
}) {
  const tableProps = {
    position,
    order: orders ? orders[0] : undefined,
    queue: queues?.slice(0, 2),
  };

  const orderBookName = orderBook.name;

  return {
    tableProps, orderBookName,
  };
}

export default useCard;
