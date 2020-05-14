import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux';
import todoReducer from "./reducer/todoReducer";

const rootReducer = combineReducers({
  todoReducer
})

const store = createStore(rootReducer)



ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
