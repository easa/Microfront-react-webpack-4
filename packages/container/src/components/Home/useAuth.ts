import { useEffect, useState } from "react";
import { subscriber, pubsubChannels } from '@ksr/pubsub';

type User = { id: string; token: string; };

function useAuth() {
  const [userState, setUser] = useState<undefined | User>(undefined)
  useEffect(() => {
    const unsubscribe = subscriber(pubsubChannels.loggedIn, (data: { user: User }) => {
      console.log({ data })
      setUser(data.user)
    })
    return unsubscribe;
  }, []);

  return { user: userState }
}

export default useAuth;