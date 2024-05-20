import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { init } from '@module-federation/enhanced/runtime';

init({
  name: 'host',
  remotes: [
    {
      name: 'remote1',
      alias: 'remote1',
      entry: 'http://localhost:3001/mf-manifest.json',
    },
  ],
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
