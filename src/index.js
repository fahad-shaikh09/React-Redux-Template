import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {createStore} from "redux";
import allReducers from "./reducers";


//STORE
let store = createStore(allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
//DISPLAY STORE IN CONSOLE
store.subscribe(() => console.log("Current State is: " + store.getState()));



ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);


