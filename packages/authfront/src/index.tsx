import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

declare namespace window {
  function renderAuth(containerId: string, history: unknown): void;
  function unmountAuth(containerId: string): void;
}

window.renderAuth = (containerId: string, history: unknown) => {
  ReactDOM.render(
    <App />,
    document.getElementById(containerId),
  );
};

window.unmountAuth = (containerId: string) => {
  const element = document.getElementById(containerId);
  if (element) {
    ReactDOM.unmountComponentAtNode(element);
  }
};

if (!document.getElementById('Auth-container')) {
  ReactDOM.render(<App />, document.getElementById('root'));
}
