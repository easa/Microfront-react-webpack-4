
import React from 'react';
import Login from './login/login';
import useApp from './useApp';

function App(props: { history?: unknown }) {
  const { user } = useApp();
  return (
    <>
      {!user?.id && <Login />}
    </>
  );
}

export default App;
