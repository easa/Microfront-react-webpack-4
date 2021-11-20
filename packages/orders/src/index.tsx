import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// @ts-ignore
window.renderOrder = (containerId: string, history: unknown) => {
  ReactDOM.render(
    // @ts-ignore 
    <App history={history} />,
    document.getElementById(containerId),
  );
};

// @ts-ignore
window.unmountOrder = (containerId: string) => {
  const element = document.getElementById(containerId);
  if (element) {
    ReactDOM.unmountComponentAtNode(element);
  }
};

if (!document.getElementById('Order-container')) {
  ReactDOM.render(<App />, document.getElementById('root'));
}
