import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { createInjectorsEnhancer } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';

function defaultReducer(state = {}) {
  return state;
}

const staticReducers = {
  default: defaultReducer,
};

function createReducer(injectedReducers = {}) {
  return combineReducers({
    ...staticReducers,
    ...injectedReducers,
  });
}

const composeStore = (): EnhancedStore => {
  const sagaMiddleware = createSagaMiddleware();
  const runSaga = sagaMiddleware.run;

  const injectorsEnhancer = createInjectorsEnhancer({
    createReducer,
    runSaga,
  });

  const reducer = createReducer();

  return configureStore({
    reducer,
    middleware: [sagaMiddleware],
    devTools: process.env.NODE_ENV !== 'production',
    enhancers: [injectorsEnhancer],
  });
};

export { composeStore };
