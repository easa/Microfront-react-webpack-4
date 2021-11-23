import React, { useEffect } from 'react';
import './App.css';

const auth = {
  changeState: (callback: (auth: unknown) => void) => {
    if (true) {
      callback(true);
    }
  }
}

function App() {
  useEffect(() => {
    auth.changeState((auth) => {
      const event = new CustomEvent('authStateChange', { detail: { auth } })
    })
  }, []);
  return (
    <div>
      login
    </div>
  );
}

export default App;
