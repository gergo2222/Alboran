import React from 'react';
import { Provider } from 'react-redux'

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import store from './configuration/store'
import NavBar from './containers/navbar'
import { Content } from './components/content'

import * as serviceWorker from './serviceWorker';
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <NavBar />
        <Content />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));

serviceWorker.unregister();
