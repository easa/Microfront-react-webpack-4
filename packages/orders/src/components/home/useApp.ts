import { useEffect, useState } from "react";

const useOrder = () => {

  const [orders, setOrders] = useState<{ price: number; volume: number }[]>([])

  useEffect(() => {
    const eventHandler = (args: unknown) => {
      const { detail: { price, volume } } = args as {
        detail: {
          price: number;
          volume: number;
        }
      };
      setOrders(state => [...state, { price, volume }])
    };

    window.addEventListener('addOrder', eventHandler, false);
    return () => {
      window.removeEventListener('addOrder', eventHandler, false);
    }
  }, []);
  return {
    orders
  }
}

export default useOrder;