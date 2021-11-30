import { useEffect, useState } from "react";
import { subscriber, pubsubChannels } from '@ksr/pubsub';
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/slices/user.slice";

type User = { id: string; token: string; };

function useAuth() {
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = subscriber(pubsubChannels.loggedIn, (data: { user: User }) => {
      console.log({ data })
      dispatch(registerUser(data));
    })
    return unsubscribe;
  }, [dispatch]);
}

export default useAuth;