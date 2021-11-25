import { useEffect, useState } from "react";
import { pubsubChannels, subscriber } from '@ksr/pubsub';

function useApp() {
  const [user, setUser] = useState<{ id: string } | undefined>(undefined);

  useEffect(() => {
    const unsubscribe = subscriber(pubsubChannels.loggedIn, ({ user, status }: { user: any, status: string }) => {
      if (user.id) {
        setUser({ id: user.id });
      } else {
        console.log('in login app', user, status)
      }
    })
    return unsubscribe;
  }, []);

  return {
    user,
  }
}

export default useApp;
