import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'
import { login } from './util/session_api_util';
import { fetchBenches, RECEIVE_BENCHES, receiveBenches } from './actions/bench_actions';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.fetchBenches = fetchBenches;

  ReactDOM.render(<Root store={ store }/>, root);
});
