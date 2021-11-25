import { useEffect, useState } from "react";
import { subscriber, pubsubChannels } from '@ksr/pubsub';

type User = { id: string; token: string; };

function useAuth() {
  const [user, setUser] = useState<undefined | User>(undefined)
  useEffect(() => {
    subscriber(pubsubChannels.loggedIn, (data: User) => {
      setUser(data)
    })
  }, [])
  return { user }
}

export default useAuth;