import React from 'react';
import useLogin from './useLogin';

function Login(props: { history?: unknown }) {
  const { username,
    password,
    submitCredential,
    onChangeUsername,
    onChangePassword,
  } = useLogin();
  return (
    <div>
      login
      <input type="text" placeholder="username" value={username} onChange={onChangeUsername} />
      <input type="password" placeholder="password" value={password} onChange={onChangePassword} />
      <button onClick={submitCredential}> submit </button>
    </div>
  );
}

export default Login;
