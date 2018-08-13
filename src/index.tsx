import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './app/App';
import './index.css';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

/* eslint-disable no-underscore-dangle */
  const store = createStore(
   reducer, /* preloadedState, */
   (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  );
/* eslint-enable */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
