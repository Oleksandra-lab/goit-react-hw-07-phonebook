import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from 'components/App';

import { store, persistor } from 'redux/store';

import './index.css';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/goit-react-hw-06-phonebook">
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <App />
      </PersistGate>
      
    </Provider>
  </BrowserRouter>
);
