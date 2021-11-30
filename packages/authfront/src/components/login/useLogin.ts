import { useCallback, useState } from "react";
import { publish, pubsubChannels } from '@ksr/pubsub';

function useLogin() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const submitCredential = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    publish(pubsubChannels.loggedIn, {
      user: {
        name: username,
        id: `id${username}`,
        token: password,
        photo: 'https://github.com/easa/private/raw/master/pic/me/70.jpg',
      }
    });
  }, [password, username]);

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
