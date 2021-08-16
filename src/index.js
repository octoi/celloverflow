import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import ChakraWrap from './styles/chakraWrapper';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <ChakraWrap>
      <App />
    </ChakraWrap>
  </Provider>,
  document.getElementById('root')
);