import { useEffect, useState } from "react";
import { publish, subscriber, pubsubChannels } from "@ksr/pubsub";

interface Order { type: 'BUY' | 'SELL'; volume: number; price: number };
interface UserAuth { id: string; token: string };
type Status = 'registered' | 'unregistered' | 'initial';
type LoginState = {
  user?: UserAuth;
  status: Status;
}

function usePubSub() {
  const [auth, setAuth] = useState<LoginState>(() => ({ status: 'initial' }));
  const [state, setState] = useState<Order[]>(() => ([]));
  useEffect(() => {
    const subscribers = [
      subscriber(pubsubChannels.loggedIn, ({ id, token }: UserAuth) => {
        const status: Status = 'registered';
        const authValue = { user: { id, token }, status };
        setAuth(authValue);
        publish(pubsubChannels.mainAuth, authValue);
      }),
      subscriber(pubsubChannels.loggedOut, () => {
        const status: Status = 'unregistered';
        const authValue = { user: undefined, status };
        setAuth(authValue);
        publish(pubsubChannels.mainAuth, authValue);
      }),
      subscriber(pubsubChannels.reqLogin, () => {
        publish(pubsubChannels.mainAuth, auth);
      }),
      subscriber(pubsubChannels.reqState, () => {
        publish(pubsubChannels.mainState, state);
      }),
      subscriber(pubsubChannels.addStock, ({ message, order }: { message: string; order: Order }) => {
        setState(st => ([...st, order]));
      })
    ];
    return () => { subscribers.forEach(unsubscribe => unsubscribe()) }
  }, [auth, state]);
}

export default usePubSub;