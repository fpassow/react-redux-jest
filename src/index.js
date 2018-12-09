import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import state0 from './state0'
import rootReducer from './rootReducer'

/*
function rootReducer(state = state0, action) {
  switch (action.type) {
    case 'FETCHING_DUCKS':
      return Object.assign({}, state, {loading:true})
    case 'DUCKS_RECEIVED':
      return Object.assign({}, state, {loading:false, ducks:state.ducks.concat(action.ducks)});
    default:
      return state;
  }
}
*/

const store = createStore(rootReducer, state0, applyMiddleware(thunkMiddleware))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
