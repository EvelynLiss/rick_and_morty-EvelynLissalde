import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> {/*esto conecta a la app que es de React con la store de Redux*/}
    <BrowserRouter> {/*esto es necesario para realizar el routing*/}
      <App />
    </BrowserRouter>
  </Provider>
);

