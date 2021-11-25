import { useState } from "react";
import { publish, pubsubChannels } from '@ksr/pubsub';

function useLogin() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const submitCredential = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    publish(pubsubChannels.loggedIn, { user: { id: '123', token: '123' } });
    // fetch('') // TODO
    //   .then(i => i.json())
    //   .then((user) => {
    //     publish(pubsubChannels.loggedIn, { user })
    //   })
  };

  const onChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newUsername = event.target.value;
    setUsername(newUsername)
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setPassword(newPassword)
  };

  return {
    username,
    password,
    submitCredential,
    onChangeUsername,
    onChangePassword,
  }
}

export default useLogin;
