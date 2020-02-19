import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import App from './components/App';
// import reducer from './reducers';

const initialState = {
  count: 0,
  items: [],
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'COUNTER':
      return {
        count: state.count + 1,
        items: state.items,
      };
    case 'ADD_ITEM':
      return {
        count: state.count,
        items: state.items.concat(action.value),
      };
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(logger));

render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('app'),
);
