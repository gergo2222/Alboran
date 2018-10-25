import React from 'react';
import { Provider } from 'react-redux'

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import store from './redux/store'
import { Navigation } from './components/navigation'
import { Content } from './components/content/content'

import * as serviceWorker from './serviceWorker';
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Navigation />
        <Content />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));

serviceWorker.unregister();
