import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './components/AppRouter'
import { store } from './redux/redux-store';
import 'bootstrap/dist/css/bootstrap.min.css'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App/>
    </Provider>
    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

