import React from 'react';
import { Provider } from 'react-redux'

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import store from './app/store'
import { Navigation } from './app/components/navigation'

import Button from '@material-ui/core/Button'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Navigation />
        Alright, this is content
        <Button variant="contained">Cool</Button>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));

serviceWorker.unregister();
