import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import rootReducer from './reducers';

const store = createStore(rootReducer);

const wrappedApp = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  wrappedApp,
  document.getElementById('root'),
);
